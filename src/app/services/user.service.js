"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs");
var UserService = (function () {
    function UserService(af, _authService) {
        this.af = af;
        this._authService = _authService;
        this.profileList = this.af.database.list('/profiles/');
    }
    UserService.prototype.getProfile = function () {
        if (this._authService.authenticated) {
            this.profile = this.af.database.object('/profiles/' + this._authService.id);
            return this.profile;
        }
        else
            return null;
    };
    UserService.prototype.createUser = function (profile) {
        var userId = this._authService.id;
        var a = this.af.database.object('/profiles/' + userId + '/');
        return firebase.database().ref('profiles/' + userId).set(profile);
        // return this.profileList.object.set(profile);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
