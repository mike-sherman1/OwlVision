import {Component}        from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Router} from "@angular/router";
import {SGService} from "../../../services/studygroup.service";
import {AuthService} from "../../../services/auth.service";

@Component({
    templateUrl: 'my-study-groups.component.html',
    styles: [require('./my-study-groups.scss')]
})
export class MyStudyGroupsComponent {

    studyGroups: FirebaseListObservable<any>;
    id: string;

    constructor(private _router: Router, af: AngularFire, private _studyGroupService: SGService, private _authService: AuthService) {
        this.studyGroups = af.database.list('/studygroups');
        this.id = this._authService.id;
    }

}
