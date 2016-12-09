import {Component, OnInit}            from '@angular/core';
import {AuthService} from "../services/auth.service";
import {AngularFire} from "angularfire2";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

    issues: number;
    events: number;
    sg: number;
    myissues: number;
    myevents: number;
    mysg: number;
    showAlert: boolean = false;

    constructor(public authService: AuthService, private _af: AngularFire, private _out: ActivatedRoute) {

    }

    public disabled: boolean = false;
    public status: {isopen: boolean} = {isopen: false};


    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
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
        this._af.database.list('/issues').map(list => {
            return list.filter(o => {
                return o.author === this.authService.id;
            }).length
        }).subscribe(length => {
            // console.log(length);
            this.myissues = length;
            console.log('mine', this.myissues);
        });
        this._af.database.list('/events').map(list => {
            return list.filter(o => {
                return o.author === this.authService.id;
            }).length
        }).subscribe(length => {
            // console.log(length);
            this.myevents = length;
        });
        this._af.database.list('/studygroups').map(list => {
            return list.filter(o => {
                return o.author === this.authService.id;
            }).length
        }).subscribe(length => {
            // console.log(length);
            this.mysg = length;
        });
      //  this._route.url.subscribe(r => {
      //      this.url = r[0].path;
      //      if (this._authService.authenticated && this.url === 'login') _router.navigate(['/']);
      //  });
    }
}
