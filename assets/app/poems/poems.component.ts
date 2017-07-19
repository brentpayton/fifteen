import { Component } from '@angular/core';

@Component({
  selector: 'app-poems',
  template: `
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <app-poem-input></app-poem-input>
      <hr />
      <app-poem-list></app-poem-list>
    </div>
  </div>
  `
})
export class PoemsComponent{}
