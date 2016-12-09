import {Component, OnInit}        from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";
import {SGService} from "../../../services/studygroup.service";
import {LocationStrategy} from "@angular/common";

@Component({
    templateUrl: 'detail.component.html',
    styles: [require('./detail.scss')]
})
export class SGBrowseDetailComponent implements OnInit {

    studyGroup: FirebaseObjectObservable<any>;

    constructor(private _route: ActivatedRoute, private af: AngularFire, private _studyGroupService: SGService, private _location: LocationStrategy) {

    }

    ngOnInit() {
        let id = this._route.snapshot.params['id'];
        this.af.database.object('/studygroups/' + id).subscribe(studyGroup => {
            console.log(studyGroup.$exists());
            if (!studyGroup.$exists()) this._location.back();
            else this.studyGroup = studyGroup;
        });
    }
}
