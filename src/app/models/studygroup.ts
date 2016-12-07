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
        this.location = sgObj && new Location(sgObj.location) || null;
        this.time = sgObj && new Time(sgObj.time) || null;
        this.the_class = sgObj && new Class(sgObj.the_class) || null;
        this.description = sgObj && sgObj.description || '';
    }
}

export class Location {
    public type: string;
    public code: string;
    public name: string;
    public room: string;
    public extra: string;

    constructor(locationObj?: any) {
        this.type = locationObj && locationObj.type || '';
        this.code = locationObj && locationObj.code || '';
        this.name = locationObj && locationObj.name || '';
        this.room = locationObj && locationObj.room || '';
        this.extra = locationObj && locationObj.extra || '';
    }
}

export class Time {
    public date: any;
    public start: any;
    public end: any;

    constructor(timeObj?: any) {
        this.date = timeObj && timeObj.date.toUTCString() || null;
        this.start = timeObj && timeObj.start.toUTCString() || null;
        this.end = timeObj && timeObj.end.toUTCString() || null;
    }
}

export class Class {
    public subject: string;
    public number: string;
    public title: string;

    constructor(classObj?: any) {
        this.subject = classObj && classObj.subject || '';
        this.number = classObj && classObj.number || '';
        this.title = classObj && classObj.title || '';
    }
}