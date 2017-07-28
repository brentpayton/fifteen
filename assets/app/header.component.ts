import { Component } from '@angular/core'

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-header',
  template: `
    <header class="row">
      <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-pills">
          <!-- <li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li> -->
          <li routerLinkActive="active"><a [routerLink]="['/poems']">Home</a></li>
          <li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
          <li class="pull-right"><a [routerLink]="">Welcome, {{ loggedInUser() }}!</a></li>
        </ul>
      </nav>
    </header>
  `
})
export class HeaderComponent{
  loggedInUser() {
    const userName = localStorage.getItem('firstName') // firstName stored by onSubmit() in signin component.
    return userName;
  }

}
