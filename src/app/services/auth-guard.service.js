"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AuthGuard = (function () {
    function AuthGuard(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this._auth
            .take(1)
            .map(function (authState) { return !!authState; })
            .do(function (authenticated) {
            if (!authenticated)
                _this._router.navigate(['/auth/login']);
            else {
            }
        });
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard = __decorate([
        core_1.Injectable()
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
