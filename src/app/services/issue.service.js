"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs');
var issue_1 = require("../models/issue");
var IssueService = (function () {
    function IssueService(af) {
        this.af = af;
        this.issues = af.database.list('/issues/');
        // this.issuepics = firebase.storage().ref('/issuepics/');
    }
    IssueService.prototype.createIssue = function (issue) {
        // Set basic user profile defaults
        issue = new issue_1.Issue(issue);
        // Save user profile
        return this.issues.push(issue);
    };
    IssueService = __decorate([
        core_1.Injectable()
    ], IssueService);
    return IssueService;
}());
exports.IssueService = IssueService;
