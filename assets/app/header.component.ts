import { Component } from '@angular/core'

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-header',
  template: `
    <header class="row">
      <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-pills">
          <li routerLinkActive="active"><a [routerLink]="['/poems']">Home</a></li>
          <li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
          <!-- <li class="pull-right"><a [routerLink]="">Welcome, {{ loggedInUser }}!</a></li> -->
        </ul>
      </nav>
    </header>
  `,
  providers: [AuthService]
})
export class HeaderComponent{
  constructor(private authService: AuthService) {}

  loggedInUser() {
    this.authService.loggedInUser().subscribe(val => console.log(val));
    console.log(this.authService.loggedInUser());
    return this.authService.loggedInUser();
  }

}
