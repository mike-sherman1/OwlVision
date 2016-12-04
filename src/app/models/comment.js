"use strict";
var Comment = (function () {
    function Comment(issueObj) {
        this.text = issueObj && issueObj.text || '';
        this.author = issueObj && issueObj.author || '';
    }
    return Comment;
}());
exports.Comment = Comment;
