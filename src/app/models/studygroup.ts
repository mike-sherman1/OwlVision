import {Time} from "./time";
import {Class} from "./class";
import {Location} from "./location";

export class StudyGroup {
    public title: string;
    public author: string;
    public name: string;
    public email: string;
    public location: Location;
    public time: Time;
    public the_class: Class;
    public description: string;
    public picture: string;
    public picture_id: string;
    public $key?: string;
    public comments: Comment[];
    public rsvp:string[];

    constructor(sgObj?: any) {
        this.title = sgObj && sgObj.title || '';
        this.author = sgObj && sgObj.author || '';
        this.name = sgObj && sgObj.name || '';
        this.email = sgObj && sgObj.email || '';
        this.location = sgObj && new Location(sgObj.location) || null;
        this.time = sgObj && new Time(sgObj.time) || null;
        this.the_class = sgObj && new Class(sgObj.the_class) || null;
        this.description = sgObj && sgObj.description || '';
        this.picture = sgObj && sgObj.picture || '';
        this.picture_id = sgObj && sgObj.picture_id || '';
        this.comments = sgObj && sgObj.comments || [];
        this.rsvp = sgObj && sgObj.rsvp || [];
    }
}