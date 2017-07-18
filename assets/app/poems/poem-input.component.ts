import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoemService } from './poem.service';
import { Poem } from './poem.model';

@Component({
  selector: 'app-poem-input',
  templateUrl: './poem-input.component.html'
})
export class PoemInputComponent implements OnInit {
  poem: Poem;

  constructor(private poemService: PoemService) {}

  onSubmit(form: NgForm) {
    if (this.poem) {
      // edit
      this.poem.content = form.value.content;
      this.poemService.updatePoem(this.poem)
        .subscribe(
          result => console.log(result)
        );
      this.poem = null;
    } else {
      // create
      const poem = new Poem('Poet (hard-coded)', 'Title (hard-coded)', form.value.content);
      this.poemService.addPoem(poem)
        .subscribe(
          data => console.log(data),
          error => console.error(error)
        );
    }
    form.resetForm();
  }

  onClear(form: NgForm) {
    this.poem = null;
    form.resetForm();
  }

  ngOnInit() {
      this.poemService.poemIsEdit.subscribe(
        (poem: Poem) => this.poem = poem
      );
  }

}
