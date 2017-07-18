import { Component, OnInit} from '@angular/core';

import { Poem } from './poem.model';
import { PoemService } from './poem.service';

@Component({
  selector: 'app-poem-list',
  template: `
    <div className="col-md-8 col-md-offset-2">
      <app-poem
        [poem]="poem"
        *ngFor="let poem of poems"></app-poem>
    </div>
  `
})

export class PoemListComponent implements OnInit {
  poems: Poem[];

  constructor(private poemService: PoemService) {}

  ngOnInit() {
    this.poemService.getPoems()
      .subscribe(
        (poems: Poem[]) => {
          this.poems = poems;
        }
      );
  }
}
