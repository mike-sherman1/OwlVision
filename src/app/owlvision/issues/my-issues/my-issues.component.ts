import {Component}        from '@angular/core';
import {IssueService} from "../../../services/issue.service";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
    templateUrl: 'my-issues.component.html',
    styles: [require('./my-issues.scss')]
})
export class MyIssuesComponent {

    issues: FirebaseListObservable<any>;
    id: string;

    constructor(private _router: Router, af: AngularFire, private _issueService: IssueService, private _authService: AuthService) {
        this.issues = af.database.list('/issues');
        this.id = this._authService.id;
    }

}
