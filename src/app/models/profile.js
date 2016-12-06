"use strict";
var Profile = (function () {
    function Profile(profileObj) {
        this.userId = profileObj && profileObj.userId || '';
        this.classes = profileObj && profileObj.classes || [];
        this.type = profileObj && profileObj.type || null;
    }
    return Profile;
}());
exports.Profile = Profile;
var Class = (function () {
    function Class(classObj) {
        this.subject = classObj && classObj.subject || null;
        this.number = classObj && classObj.number || null;
        this.title = classObj && classObj.title || null;
    }
    return Class;
}());
exports.Class = Class;
