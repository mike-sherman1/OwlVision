import {Component, Input, OnInit, Inject}  from '@angular/core';
import {FormGroup, FormBuilder, Validators}                 from '@angular/forms';
import {Issue} from "../../../../models/issue";
import {IssueService} from "../../../../services/issue.service";
@Component({
    selector: 'sg-card',
    template: require('./event-card.component.html'),
    styles: [require('./event-card.component.scss')],
})
export class EventCardComponent implements OnInit {

    @Input() issue: Issue;
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

    constructor() {

    }

    ngOnInit() {
    }
}