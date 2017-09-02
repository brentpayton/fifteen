import { Injectable, OnInit} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { User } from './user.model';
import { ErrorService } from '../errors/error.service';

@Injectable()
export class AuthService implements OnInit{
  currentUserName: string;

  constructor(private http: Http, private errorService: ErrorService) {}

  user: User;

  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/user', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
          this.errorService.handleError(error.json());
          return Observable.throw(error.json());
      });
  }

  signin(user: User) {
    // console.log('Auth service signin:  ' + JSON.stringify(user));
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
          this.errorService.handleError(error.json());
          return Observable.throw(error.json());
      });
  }

  logout(){
    localStorage.clear();
  };

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  loggedInUser() {
    const userId = localStorage.getItem('userId');
    console.log('(Service) User ID:  '  + userId);
    const response = this.http.get('http://localhost:3000/user/current/' + userId);
    console.log('(Service) Response:  ' + JSON.stringify(response));
    return this.http
      .get('http://localhost:3000/user/current/' + userId)
      .map((response: Response) => {
        const user = response.json();
    })
  };

  ngOnInit(): void {
    console.log('(auth.service ngOnInit) Username:  ' + this.currentUserName);
    this.http.get('http://localhost:3000/user/current/' + localStorage.getItem('userId'))
      .subscribe(data => {
        this.currentUserName = data['currentUserName'];
      })
  };

  // loggedInUser() {
  //   // this.currentUserName = 'test';
  //   console.log ('(auth.service loggedInUser):  ' + this.currentUserName);
  //   return this.currentUserName;
  // }

}
