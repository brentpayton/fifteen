import { Component, Input } from '@angular/core';

import { Poem } from './poem.model';
import { PoemService } from './poem.service';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styles: [`
    .author {
      display: inline-block;
      font-style: italic;
      width: 80%;
    }
    .config {
      display: inline-block;
      text-align: right;
      font-size: 12px;
      width: 19%;
    }
    .info {
      display: inline-block;
      font-style: italic;      
    }
    `]
})

export class PoemComponent {
  @Input() poem: Poem;

  constructor(private poemService: PoemService) {}

  onEdit() {
    this.poemService.editPoem(this.poem);
  }

  onDelete() {
    this.poemService.deletePoem(this.poem)
      .subscribe(
        result => console.log(result)
      );
  }

  belongsToUser() {
    return localStorage.getItem('userId') == this.poem.userId;
  }
}
