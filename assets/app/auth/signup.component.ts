import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
    selector:  'app-signup',
    templateUrl: './signup.component.html',
    providers: [AuthService]
})

export class SignupComponent {
  myForm: FormGroup;
  user: User;
  currentUser: User;

  constructor(private authService: AuthService){}

  onSubmit() {
    const user = new User(
      this.myForm.value.email,
      this.myForm.value.password,
      this.myForm.value.firstName,
      this.myForm.value.lastName);
    this.authService.signup(user)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.myForm.reset();
  }

  ngOnInit() {
      this.myForm = new FormGroup({
          firstName: new FormControl(null, Validators.required),
          lastName: new FormControl(null, Validators.required),
          email: new FormControl(null, Validators.required),
          password: new FormControl(null, Validators.required)
      });
    }

  // loggedInUser() {
  //
  //   this.authService.loggedInUser().subscribe(res => {
  //     // console.log(res);
  //     this.currentUser = res;
  //     // console.log(this.currentUser);
  //     return this.currentUser;
  //   })
  //
  //   // const user = this.authService.loggedInUser();
  //   // console.log('(Component) User:  ' + JSON.stringify(user));
  //   // return user;
  // }

  // loggedInUser() {
  //   const userName = localStorage.getItem('firstName') // firstName stored by onSubmit() in signin component.
  //   // console.log ('Auth service:  ' + userName);
  //   return userName;
  // }

}
