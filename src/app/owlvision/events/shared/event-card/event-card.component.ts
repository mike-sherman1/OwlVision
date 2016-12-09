import {Component, Input, OnInit, Inject}  from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Event} from "../../../../models/event";
import {EventService} from "../../../../services/event.service";
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {LocationStrategy} from "@angular/common";

@Component({
    selector: 'event-card',
    template: require('./event-card.component.html'),
    styles: [require('./event-card.component.scss')],
})

export class EventCardComponent implements OnInit {

    @Input() event: Event;
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
    picture: string = '';
    edit: boolean;

    constructor(private _eventService: EventService, private _router: Router, private _userService: UserService, private _location: LocationStrategy) {

    }


    ngOnInit() {
        console.log(this.event.picture !== '');
        console.log(this.event);
        if (this.event.picture && this.event.picture !== '') {
            this._eventService.getImageURL(this.event.picture).then(url => {
                // console.log(url);
                this.picture = url;
            });
        }
        this._userService.getProfile().subscribe(prof => {
            this.isAdmin = prof.type === 'admin';
            this.isOwner = prof.$key === this.event.author;
        });
        // console.log(this.issue);

    }

    saveAndUpdatePic() {
        this.edit = !this.edit;
        console.log('save and pic');
        if (this.event.picture !== '') {
            this._eventService.getImageURL(this.event.picture).then(url => {
                // console.log(url);
                this.picture = url;
            });
        }
    }

    deleteStudyGroup() {
        this._eventService.deleteEvent(this.event.$key).then(res => {
            this._location.back();
        });
    }

    addComment() {
        // console.log(this.event);
        if (!this.event.comments) this.event.comments = [];
        this._eventService.addComment(this.event.$key, this.newComment, this.event.comments);
    }

    goToDetail() {
        // console.log('/studyGroups/browse/' + this.event.$key);
        if (!this.detail) this._router.navigate(['/events/browse/' + this.event.$key])
    }

    rsvp() {

    }


}
