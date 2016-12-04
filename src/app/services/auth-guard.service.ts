import {Injectable} from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {FirebaseAuthState, FirebaseAuth, AngularFire} from "angularfire2";
import {UserService} from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private _auth: FirebaseAuth, private _router: Router, private _userService: UserService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this._auth
            .take(1)
            .map((authState: FirebaseAuthState) => !!authState)
            .do(authenticated => {
                if (!authenticated) this._router.navigate(['/auth/login']);
                else {
                    this._userService.profile.subscribe(prof => {
                        if(!prof.$val){
                            this._router.navigate(['/auth/register']);
                        }
                    })
                }
            });
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }
}