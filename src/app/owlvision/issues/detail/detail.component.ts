import {Component, OnInit}        from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IssueService} from "../../../services/issue.service";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";
import {LocationStrategy} from "@angular/common";

@Component({
    templateUrl: 'detail.component.html',
    styles: [require('./detail.scss')]
})
export class BrowseDetailComponent implements OnInit {

    issue: FirebaseObjectObservable<any>;

    constructor(private _route: ActivatedRoute, private af: AngularFire, private _issueService: IssueService, private _location: LocationStrategy) {
    }

    ngOnInit() {
        let id = this._route.snapshot.params['id'];
        this.af.database.object('/issues/' + id).subscribe(issue => {
            console.log(issue.$exists());
            if (!issue.$exists()) this._location.back();
            else this.issue = issue;
        });

    }
}
