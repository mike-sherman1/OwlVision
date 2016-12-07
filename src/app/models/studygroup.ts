import {Time} from "./time";
import {Class} from "./class";
export class StudyGroup {
    public title: string;
    public author: string;
    public name: string;
    public email: string;
    public location: Location;
    public time: Time;
    public the_class: Class;
    public description: string;

    constructor(sgObj?: any) {
        this.title = sgObj && sgObj.title || '';
        this.author = sgObj && sgObj.author || '';
        this.name = sgObj && sgObj.name || '';
        this.email = sgObj && sgObj.email || '';
        this.location = sgObj && sgObj.location || null;
        this.time = sgObj && new Time(sgObj.time) || null;
        this.the_class = sgObj && new Class(sgObj.the_class) || null;
        this.description = sgObj && sgObj.description || '';
    }
}