import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/message.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';
import { LogoutComponent } from './auth/logout.component';
import { SignupComponent } from './auth/signup.component';
import { SigninComponent } from './auth/signin.component';
import { AuthService } from './auth/auth.service';
import { PoemComponent }  from './poems/poem.component';
import { PoemListComponent }  from './poems/poem-list.component';
import { PoemInputComponent }  from './poems/poem-input.component';
import { PoemsComponent } from './poems/poems.component';
import { ErrorComponent } from './errors/error.component';
import { ErrorService } from './errors/error.service';

@NgModule({
    declarations: [
      AppComponent,
      MessageComponent,
      MessageListComponent,
      MessageInputComponent,
      MessagesComponent,
      PoemComponent,
      PoemListComponent,
      PoemInputComponent,
      PoemsComponent,
      AuthenticationComponent,
      HeaderComponent,
      LogoutComponent,
      SigninComponent,
      SignupComponent,
      ErrorComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      routing,
      ReactiveFormsModule,
      HttpModule,
      HttpClientModule
    ],
    providers: [
      AuthService,
      ErrorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
