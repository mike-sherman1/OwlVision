import {Component, Input, OnInit, Inject}  from '@angular/core';
import {FormGroup, FormBuilder, Validators}                 from '@angular/forms';
import {StudyGroup} from "../../../../models/studygroup";
import {SGService} from "../../../../services/studygroup.service";
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {LocationStrategy} from "@angular/common";

@Component({
    selector: 'sg-card',
    template: require('./sg-card.component.html'),
    styles: [require('./sg-card.component.scss')],
})

export class SGCardComponent implements OnInit {

    @Input() studyGroup: StudyGroup;
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
    isRSVP: boolean;
    picture: string = '';
    edit: boolean;

    constructor(private _studyGroupService: SGService, private _router: Router, private _userService: UserService, private _location: LocationStrategy, private _authService: AuthService) {

    }

    ngOnInit() {
        console.log(this.studyGroup.picture !== '');
        console.log(this.studyGroup);
        if (this.studyGroup.picture && this.studyGroup.picture !== '') {
            this._studyGroupService.getImageURL(this.studyGroup.picture).then(url => {
                // console.log(url);
                this.picture = url;
            });
        }
        this._userService.getProfile().subscribe(prof => {
            this.isAdmin = prof.type === 'admin';
            this.isOwner = prof.$key === this.studyGroup.author;
        });
        this.isRSVP = this.studyGroup.rsvp && this.studyGroup.rsvp.indexOf(this._authService.id) >= 0;

        // console.log(this.issue);

    }

    doRSVP() {
        // console.log()
        let uid = this._authService.id;
        if (!this.studyGroup.rsvp) {
            this.studyGroup.rsvp = [];
        }
        let ind = this.studyGroup.rsvp.indexOf(uid);
        if (ind === -1) this.studyGroup.rsvp.push(uid);
        else {
            console.log('before', this.studyGroup.rsvp);
            console.log(ind);
            this.studyGroup.rsvp.splice(ind, 1);
            console.log('after', this.studyGroup.rsvp);
        }
        this._studyGroupService.rsvp(this.studyGroup.$key, this.studyGroup.rsvp).then(res => {
            this.isRSVP = this.studyGroup.rsvp && this.studyGroup.rsvp.indexOf(this._authService.id) >= 0;
            console.log(this.isRSVP);
            console.log(this.studyGroup);
        });
    }

    saveAndUpdatePic() {
        this.edit = !this.edit;
        console.log('save and pic');
        if (this.studyGroup.picture !== '') {
            this._studyGroupService.getImageURL(this.studyGroup.picture).then(url => {
                // console.log(url);
                this.picture = url;
            });
        }
    }

    deleteStudyGroup() {
        this._studyGroupService.deleteSG(this.studyGroup.$key).then(res => {
            this._location.back();
        });
    }

    addComment() {
        // console.log(this.studyGroup);
        if (!this.studyGroup.comments) this.studyGroup.comments = [];
        this._studyGroupService.addComment(this.studyGroup.$key, this.newComment, this.studyGroup.comments);
    }

    goToDetail() {
        // console.log('/studyGroups/browse/' + this.studyGroup.$key);
        if (!this.detail) this._router.navigate(['/study-groups/browse/' + this.studyGroup.$key])
    }
}