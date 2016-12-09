import {Component}        from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Router} from "@angular/router";
import {EventService} from "../../../services/event.service";

@Component({
    templateUrl: 'browse.component.html',
    styles: [require('./browse.scss')]
})
export class BrowseEventsComponent {

    events: any;
    status: string = "All";

    constructor(private _router: Router, af: AngularFire, private _eventService: EventService) {
        this.events = af.database.list('/events').map((arr) => {
            return arr.reverse();
        });
    }

}
