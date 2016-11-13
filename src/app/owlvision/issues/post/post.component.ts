import {Component}        from '@angular/core';
import {Router} from "@angular/router";

@Component({
    templateUrl: 'post.component.html',
    styles: [require('./post.scss')]
})
export class PostIssueComponent {

    constructor(private _router: Router) {
    }

}
