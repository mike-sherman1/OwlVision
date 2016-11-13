import {Injectable} from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private _auth: AuthService, private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this._auth.authenticated) {
            return true;
        } else {
            this._router.navigate(['/auth/login']);
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }
}