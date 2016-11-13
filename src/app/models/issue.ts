import {Comment} from "./comment";
export class Issue {
    public title: string;
    public author: string;
    public name: string;
    public email: string;
    public priority: number;
    public status: string;
    public description: string;
    public location: string;
    public picture: string;
    public isAnonymous: boolean;
    public comments: Comment[];

    constructor(issueObj?: any) {
        this.title = issueObj && issueObj.title || '';
        this.author = issueObj && issueObj.author || '';
        this.name = issueObj && issueObj.name || '';
        this.email = issueObj && issueObj.email || '';
        this.priority = issueObj && issueObj.priority || '';
        this.status = issueObj && issueObj.status || null;
        this.description = issueObj && issueObj.description || '';
        this.location = issueObj && issueObj.location || '';
        this.picture = issueObj && issueObj.picture || '';
        this.picture = issueObj && issueObj.picture || '';
        this.isAnonymous = issueObj && issueObj.isAnonymous || false;
        this.comments = issueObj && issueObj.comments || [];
    }
}