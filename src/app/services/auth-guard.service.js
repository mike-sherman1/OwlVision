"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AuthGuard = (function () {
    function AuthGuard(_auth, _router, _userService) {
        this._auth = _auth;
        this._router = _router;
        this._userService = _userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var auth_state;
        return this._auth
            .take(1)
            .map(function (authState) {
            auth_state = authState;
            return !!authState;
        })
            .do(function (authenticated) {
            var email, ind, valid_domain;
            if (auth_state.auth.email === null)
                valid_domain = false;
            if (authenticated && valid_domain === undefined) {
                email = auth_state.auth.email;
                ind = email.indexOf('@');
                valid_domain = email.slice((ind + 1), email.length) === 'fau.edu';
            }
            if (!authenticated || !valid_domain) {
                if (!valid_domain) {
                    _this._auth.logout();
                }
                _this._router.navigate(['/auth/login']);
            }
            else {
                return _this._userService.getProfile().subscribe(function (prof) {
                    if (prof !== null && !prof.$exists()) {
                        _this._router.navigate(['/auth/register']);
                    }
                    return true;
                });
            }
        });
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable()
], AuthGuard);
exports.AuthGuard = AuthGuard;
