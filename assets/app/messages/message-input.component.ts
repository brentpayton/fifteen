import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit {
  message: Message;
  myForm: FormGroup;

  constructor(private messageService: MessageService) {}

  onSubmit() {
    if (this.message ) {
      // Editing
      this.message.content = this.myForm.value.content;
      this.messageService.updateMessage(this.message)
        .subscribe(
          result => console.log(result)
        );
      this.message = null;
    } else {
      // Creating
      const message = new Message(
        this.myForm.value.content,
        'Brent');
      this.messageService.addMessage(message)
        .subscribe(
          data => console.log(data),
          error => console.error(error)
        );
    }
    this.myForm.reset();
  }

  onClear() {
    this.message = null;
    this.myForm.reset();
  }

  ngOnInit() {
    this.messageService.messageIsEdit.subscribe(
      (message: Message) => this.message = message
    );

    this.myForm = new FormGroup({
      content: new FormControl(null, Validators.required)
    });
  }

}
