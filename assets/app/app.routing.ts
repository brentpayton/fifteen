import { Routes, RouterModule } from '@angular/router';

import { MessagesComponent } from './messages/messages.component';
import { PoemsComponent } from './poems/poems.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { AUTH_ROUTES } from './auth/auth.routes';

const APP_ROUTES: Routes = [
    // { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: '', redirectTo: '/poems', pathMatch: 'full' },
    // { path: 'messages', component: MessagesComponent },
    { path: 'poems', component: PoemsComponent},
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
