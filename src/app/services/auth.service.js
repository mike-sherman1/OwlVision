"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
var AuthService = (function () {
    function AuthService(auth$, _router) {
        var _this = this;
        this.auth$ = auth$;
        this._router = _router;
        this.authState = null;
        auth$.subscribe(function (state) {
            _this.authState = state;
            console.log('auth', _this.authState);
            if (!_this.authenticated)
                _router.navigate(['/auth/login']);
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "id", {
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signIn = function (provider) {
        return this.auth$.login({ provider: provider })
            .catch(function (error) { return console.log('ERROR @ AuthService#signIn() :', error); });
    };
    AuthService.prototype.signInAnonymously = function () {
        return this.auth$.login({
            provider: angularfire2_1.AuthProviders.Anonymous,
            method: angularfire2_1.AuthMethods.Anonymous
        })
            .catch(function (error) { return console.log('ERROR @ AuthService#signInAnonymously() :', error); });
    };
    AuthService.prototype.signInWithGithub = function () {
        return this.signIn(angularfire2_1.AuthProviders.Github);
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this.signIn(angularfire2_1.AuthProviders.Google);
    };
    AuthService.prototype.signInWithTwitter = function () {
        return this.signIn(angularfire2_1.AuthProviders.Twitter);
    };
    AuthService.prototype.signOut = function () {
        this.auth$.logout();
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
