import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PoemService } from './poem.service';
import { Poem } from './poem.model';

@Component({
  selector: 'app-poem-input',
  templateUrl: './poem-input.component.html'
})
export class PoemInputComponent implements OnInit {
  poem: Poem;
  myForm: FormGroup;

  constructor(private poemService: PoemService) {}

  onSubmit() {
    if (this.poem) {
      // Editing
      this.poem.title = this.myForm.value.title;
      this.poem.content = this.myForm.value.content;
      this.poemService.updatePoem(this.poem)
        .subscribe(
          result => console.log(result)
        );
      this.poem = null;
    } else {
      // Creating
      const poem = new Poem(
        'Poet (placeholder)',
        this.myForm.value.title,
        this.myForm.value.content);
      this.poemService.addPoem(poem)
        .subscribe(
          data => console.log(data),
          error => console.error(error)
        );
    }
    this.myForm.reset();
  }

  onClear() {
    this.poem = null;
    this.myForm.reset();
  }

  ngOnInit() {
    this.poemService.poemIsEdit.subscribe(
      (poem: Poem) => this.poem = poem
    );

    this.myForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required)
    });
  }

}
