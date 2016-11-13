import { Component }        from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'browse.component.html',
    styles:[require('./browse.scss')]
})
export class BrowseIssuesComponent {

    issues: FirebaseListObservable<any>;

    constructor(private _router: Router, af: AngularFire) {
        this.issues = af.database.list('/issues');
    }

}
