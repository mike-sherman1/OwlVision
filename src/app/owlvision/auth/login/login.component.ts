import {Component}        from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'login.component.html',
    styles: [require('./login.scss')]
})
export class LoginComponent {

    constructor(private _authService: AuthService, private _router: Router) {
    }

    signInWithGoogle() {
        this._authService.signInWithGoogle().then(res=> {
            console.log(res);
            this._router.navigate(['/']);
        }, error=> {
            console.log(error);
        });
    }

    goToRegistration() {
        this._router.navigate(['/auth/register']);
    }

}
