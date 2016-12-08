import {Component}        from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'login.component.html',
    styles: [require('./login.scss')]
})
export class LoginComponent {

    url: string;

    constructor(private _authService: AuthService, private _router: Router, private _route: ActivatedRoute) {
        this._route.url.subscribe(r => {
            this.url = r[0].path;
            if (this._authService.authenticated && this.url === 'login') _router.navigate(['/']);
        });
    }

    signInWithGoogle() {
        this._authService.signInWithGoogle().then(res => {
            this._router.navigate(['/']);
        }, error => {
            console.log(error);
        });
    }

    goToRegistration() {
        this._router.navigate(['/auth/register']);
    }

}
