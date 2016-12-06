import {Injectable} from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {FirebaseAuthState, FirebaseAuth, AngularFire} from "angularfire2";
import {UserService} from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private _auth: FirebaseAuth, private _router: Router, private _userService: UserService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let auth_state: FirebaseAuthState;
        return this._auth
            .take(1)
            .map((authState: FirebaseAuthState) => {
                auth_state = authState;
                return !!authState
            })
            .do(authenticated => {
                let email, ind, valid_domain;
                if(auth_state.auth.email === null) valid_domain = false;
                if (authenticated && valid_domain === undefined) {
                    email = auth_state.auth.email;
                    ind = email.indexOf('@');
                    valid_domain = email.slice((ind + 1), email.length) === 'fau.edu';
                }
                if (!authenticated || !valid_domain) {
                    if (!valid_domain) {
                        this._auth.logout();
                    }
                    this._router.navigate(['/auth/login']);
                }
                else {
                    return this._userService.getProfile().subscribe(prof => {
                        if (prof !== null && !prof.$exists()) {
                            this._router.navigate(['/auth/register']);
                        }
                        return true;
                    })
                }
            });
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }
}