import { Component } from '@angular/core';

import { MessageService } from './messages/message.service';
import { PoemService } from './poems/poem.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService, PoemService]
})
export class AppComponent {
}
