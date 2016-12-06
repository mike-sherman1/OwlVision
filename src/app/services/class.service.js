"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ClassService = (function () {
    function ClassService(_http) {
        this._http = _http;
        this.url = "https://owlvision.herokuapp.com/classes";
    }
    ClassService.prototype.getAll = function () {
        console.log('in service');
        return this._http.get("" + this.url)
            .map(function (res) { return res.json(); });
    };
    return ClassService;
}());
ClassService = __decorate([
    core_1.Injectable()
], ClassService);
exports.ClassService = ClassService;
