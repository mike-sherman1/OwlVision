import {Component}        from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {EventService} from "../../../services/event.service";

@Component({
    templateUrl: 'my-events.component.html',
    styles: [require('./my-events.scss')]
})
export class MyEventsComponent {

    events: FirebaseListObservable<any>;
    id: string;

    constructor(private _router: Router, af: AngularFire, private _eventService: EventService, private _authService: AuthService) {
        this.events = af.database.list('/events');
        this.id = this._authService.id;
    }

}
