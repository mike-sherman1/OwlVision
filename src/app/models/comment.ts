export class Comment {
    public author: string;
    public text: string;

    constructor(issueObj?: any) {
        this.text = issueObj && issueObj.text || '';
        this.author = issueObj && issueObj.author || '';
    }
}