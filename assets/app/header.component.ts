import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  template: `
    <header class="row">
      <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-pills">
          <li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
          <li routerLinkActive="active"><a [routerLink]="['/poems']">Poems</a></li>
          <li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
        </ul>
      </nav>
      <nav class="col-md-2">{{ getUsername }}</nav>
    </header>
  `
})
export class HeaderComponent{

  // getUsername = 'test';



}
