import {Component, OnInit}    from '@angular/core';
import {Router}               from '@angular/router';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
    templateUrl: 'dashboard.component.html',
    styles:[require('./dashboard.component.scss')]
})
export class DashboardComponent implements OnInit {

    issues: number;
    events: number;
    sg: number;

    constructor(private _af: AngularFire, private _router: Router) {
    }

    public brandPrimary: string = '#20a8d8';
    public brandSuccess: string = '#4dbd74';
    public brandInfo: string = '#63c2de';
    public brandWarning: string = '#f8cb00';
    public brandDanger: string = '#f86c6b';

    // dropdown buttons
    public status: { isopen: boolean } = {isopen: false};

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    goTo(path) {
        this._router.navigate(['/' + path]);
    }


    ngOnInit(): void {
        this._af.database.list('/issues').map(list => list.length).subscribe(length => {
            // console.log(length);
            this.issues = length;
        });
        this._af.database.list('/events').map(list => list.length).subscribe(length => {
            // console.log(length);
            this.events = length;
        });
        this._af.database.list('/studygroups').map(list => list.length).subscribe(length => {
            // console.log(length);
            this.sg = length;
        });
    }
}
