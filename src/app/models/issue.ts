import {Comment} from "./comment";
import {Time} from "./time";
import {Location} from "./location";
export class Issue {
    public title: string;
    public author: string;
    public name: string;
    public email: string;
    public priority: number;
    public status: string;
    public description: string;
    public location: Location;
    public picture: string;
    public picture_id: string;
    public isAnonymous: boolean;
    public time?: any;
    public $key?: string;
    public comments: Comment[];

    constructor(issueObj?: any) {
        this.title = issueObj && issueObj.title || '';
        this.author = issueObj && issueObj.author || '';
        this.name = issueObj && issueObj.name || '';
        this.email = issueObj && issueObj.email || '';
        this.priority = issueObj && issueObj.priority || '';
        this.status = issueObj && issueObj.status || null;
        this.description = issueObj && issueObj.description || '';
        this.location = issueObj && new Location(issueObj.location) || new Location();
        this.picture = issueObj && issueObj.picture || '';
        this.picture_id = issueObj && issueObj.picture_id || '';
        this.isAnonymous = issueObj && issueObj.isAnonymous || false;
        this.time = issueObj && new Date(issueObj.time) || null;
        // this.$key = issueObj && issueObj.$key || null;
        this.comments = issueObj && issueObj.comments || [];
    }
}