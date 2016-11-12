import {Component}        from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
    templateUrl: 'browse.component.html',
    styles: [require('./browse.scss')]
})
export class BrowseEventsComponent {

    items: FirebaseListObservable<any[]>;

    constructor(af: AngularFire) {
        this.items = af.database.list('/items');
    }

}
