import {Component}        from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Router} from "@angular/router";
import {SGService} from "../../../services/studygroup.service";

@Component({
    templateUrl: 'browse.component.html',
    styles: [require('./browse.scss')]
})
export class BrowseStudyGroupsComponent {

    studyGroups: FirebaseListObservable<any>;
    status: string = "All";

    constructor(private _router: Router, af: AngularFire, private _studyGroupService: SGService) {
        this.studyGroups = af.database.list('/studygroups');
    }

}
