import {Location} from "./location";
import {Time} from "./time";

export class Event {
    public title: string;
    public author: string;
    public name: string;
    public email: string;
    public location: Location;
    public time: Time;
    public description: string;
    public picture: string;
    public picture_id: string;
    public $key?: string;
    public comments: Comment[];

    constructor(eventObj?: any) {
        this.title = eventObj && eventObj.title || '';
        this.author = eventObj && eventObj.author || '';
        this.name = eventObj && eventObj.name || '';
        this.email = eventObj && eventObj.email || '';
        this.location = eventObj && eventObj.location || null;
        this.time = eventObj && eventObj.time || null;
        this.description = eventObj && eventObj.description || '';
        this.picture = eventObj && eventObj.picture || '';
        this.picture_id = eventObj && eventObj.picture_id || '';
        this.comments = eventObj && eventObj.comments || [];
    }
}