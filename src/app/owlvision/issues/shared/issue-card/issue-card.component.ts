import {Component, Input, OnInit, Inject}  from '@angular/core';
import {FormGroup, FormBuilder, Validators}                 from '@angular/forms';
import {Issue} from "../../../../models/issue";
import {IssueService} from "../../../../services/issue.service";
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {LocationStrategy} from "@angular/common";

@Component({
    selector: 'issue-card',
    template: require('./issue-card.component.html'),
    styles: [require('./issue-card.component.scss')],
})
export class IssueCardComponent implements OnInit {

    @Input() issue: Issue;
    @Input() detail: boolean = false;
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

    newComment: string;
    isAdmin: boolean;
    isOwner: boolean;
    status: string;
    picture: string = '';
    edit: boolean;

    constructor(private _issueService: IssueService, private _router: Router, private _userService: UserService, private _location: LocationStrategy) {
    }

    ngOnInit() {
        console.log(this.issue.picture !== '');
        console.log(this.issue);
        if (this.issue.picture !== '') {
            this._issueService.getImageURL(this.issue.picture).then(url => {
                // console.log(url);
                this.picture = url;
            });
        }
        this.status = this.issue.status;
        this._userService.getProfile().subscribe(prof => {
            this.isAdmin = prof.type === 'admin';
            this.isOwner = prof.$key === this.issue.author;
        });
        // console.log(this.issue);

    }

    saveAndUpdatePic() {
        this.edit = !this.edit;
        console.log('save and pic');
        if (this.issue.picture !== '') {
            this._issueService.getImageURL(this.issue.picture).then(url => {
                // console.log(url);
                this.picture = url;
            });
        }
    }

    deleteIssue() {
        this._issueService.deleteIssue(this.issue.$key).then(res => {
            this._location.back();
        });
    }

    updateStatus($event) {
        this._issueService.updateStatus(this.issue.$key, $event);
    }

    addComment() {
        // console.log(this.issue);
        if (!this.issue.comments) this.issue.comments = [];
        this._issueService.addComment(this.issue.$key, this.newComment, this.issue.comments);
    }

    goToDetail() {
        // console.log('/issues/browse/' + this.issue.$key);
        if (!this.detail) this._router.navigate(['/issues/browse/' + this.issue.$key])
    }
}