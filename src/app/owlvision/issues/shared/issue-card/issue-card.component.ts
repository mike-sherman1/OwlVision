import {Component, Input, OnInit, Inject}  from '@angular/core';
import {FormGroup, FormBuilder, Validators}                 from '@angular/forms';
import {Issue} from "../../../../models/issue";
import {IssueService} from "../../../../services/issue.service";
import {Router} from "@angular/router";

@Component({
    selector: 'issue-card',
    template: require('./issue-card.component.html'),
    styles: [require('./issue-card.component.scss')],
})
export class IssueCardComponent implements OnInit {

    @Input() issue: Issue;
    @Input() detail: boolean = false;
    picture: string = '';
    statusColor: any = {
        "Opened": "tag-danger",
        "In Progress": "tag-warning",
        "Resolved": "tag-success",
    };
    priorityColor: any = {
        "High": "tag-danger",
        "Medium": "tag-warning",
        "Low": "tag-success",
    };
    accentColor: any = {
        "High": "card-accent-danger",
        "Medium": "card-accent-warning",
        "Low": "card-accent-success",
    };

    constructor(private _issueService: IssueService, private _router: Router) {

    }

    ngOnInit() {
        console.log(this.issue.picture !== '');
        if (this.issue.picture !== '') {
            this._issueService.getImageURL(this.issue.picture).then(url => {
                this.picture = url;
            });
        }
        // console.log(this.issue);

    }

    goToDetail() {
        // console.log('/issues/browse/' + this.issue.$key);
        if (!this.detail) this._router.navigate(['/issues/browse/' + this.issue.$key])
    }
}
