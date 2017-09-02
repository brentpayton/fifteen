import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-authentication',
  template: `
            <header class="row spacing">
              <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                  <li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
                  <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signin']">Signin</a></li>
                  <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['logout']">Logout</a></li>
                  <li class="pull-right"><a [routerLink]="">Welcome, {{ this.loggedInUser2 }}!</a></li>
                </ul>
              </nav>
            </header>
            <div class="row spacing">
              <router-outlet></router-outlet>
            </div>
  `
})
// export class AuthenticationComponent implements OnInit {
export class AuthenticationComponent {
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  loggedInUser: string;
  loggedInUser2: 'test';

  constructor(private authService: AuthService, http: HttpClientModule) {}
  // constructor(private authService: AuthService, private http: Http) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    console.log('(ngOnInit) User ID:  '  + userId);
    console.log('(ngOnInit) Response:  ' + this.http.get('http://localhost:3000/user/current/' + userId));
    var response = this.http.get('http://localhost:3000/user/current/' + userId);
    console.log('(ngOnInit) Response Stringified:  ' + JSON.stringify(response));
    this.http.get('http://localhost:3000/user/current/' + userId)
      .subscribe(data => {
        this.loggedInUser = data['results'];
      });
  }


}
