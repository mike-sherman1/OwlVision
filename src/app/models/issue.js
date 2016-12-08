"use strict";
var Issue = (function () {
    function Issue(issueObj) {
        this.title = issueObj && issueObj.title || '';
        this.location = issueObj && issueObj.location || '';
        this.author = issueObj && issueObj.author || '';
        this.name = issueObj && issueObj.name || '';
        this.description = issueObj && issueObj.description || '';
        //this.email = issueObj && issueObj.email || '';
        this.priority = issueObj && issueObj.priority || '';
        this.status = issueObj && issueObj.status || null;
        this.picture = issueObj && issueObj.picture || '';
        this.picture = issueObj && issueObj.picture || '';
        this.isAnonymous = issueObj && issueObj.isAnonymous || false;
        this.comments = issueObj && issueObj.comments || [];
    }
    return Issue;
}());
exports.Issue = Issue;
