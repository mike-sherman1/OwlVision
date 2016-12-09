import {Component, OnInit}        from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Router} from "@angular/router";
import {SGService} from "../../../services/studygroup.service";
import {StudyGroup} from "../../../models/studygroup";
import {UserService} from "../../../services/user.service";

@Component({
    templateUrl: 'browse.component.html',
    styles: [require('./browse.scss')]
})
export class BrowseStudyGroupsComponent implements OnInit {

    studyGroups: any;
    isAll: boolean = true;
    prof;
    myClasses;

    constructor(private _router: Router, private _af: AngularFire, private _studyGroupService: SGService, private _userService: UserService) {

    }

    ngOnInit() {
        // this.prof = this._userService.getProf();
        this._userService.getProfile().subscribe(p => {
            this.prof = p;
            this.myClasses = this.prof.classes;
        })
        console.log(this.prof);
        this.studyGroups = this._af.database.list('/studygroups').map((arr) => {
            return arr.reverse();
        });
    }

    isMyClass(aclass) {
        let keep = false;
        if (this.myClasses) {
            let a, b;
            this.myClasses.forEach(c => {
                if (c.title == aclass.title) {
                    keep = true;
                }
            })
        }
        // this.isAll = true;
        return keep;
    }

}
