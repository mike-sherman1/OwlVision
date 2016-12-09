import {Component}        from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Router} from "@angular/router";
import {IssueService} from "../../../services/issue.service";

@Component({
    templateUrl: 'browse.component.html',
    styles: [require('./browse.scss')]
})
export class BrowseIssuesComponent {

    issues: any;
    status: string = "All";

    constructor(private _router: Router, af: AngularFire, private _issueService: IssueService) {
        this.issues = af.database.list('/issues').map((arr) => {
            return arr.reverse();
        });
    }

}
