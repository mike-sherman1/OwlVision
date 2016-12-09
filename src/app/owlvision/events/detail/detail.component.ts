import {Component, OnInit}        from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IssueService} from "../../../services/issue.service";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";
import {LocationStrategy} from "@angular/common";
import {EventService} from "../../../services/event.service";

@Component({
    templateUrl: 'detail.component.html',
    styles: [require('./detail.scss')]
})
export class BrowseDetailComponent implements OnInit {

    event: FirebaseObjectObservable<any>;

    constructor(private _route: ActivatedRoute, private af: AngularFire, private _eventService: EventService, private _location: LocationStrategy) {
    }

    ngOnInit() {
        let id = this._route.snapshot.params['id'];
        this.af.database.object('/events/' + id).subscribe(event => {
            console.log(event.$exists());
            if (!event.$exists()) this._location.back();
            else this.event = event;
        });

    }
}
