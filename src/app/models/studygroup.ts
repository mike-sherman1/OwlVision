export class StudyGroup {
    public title: string;
    public author: string;
    public name: string;
    public email: string;
    public location: Location;
    public time: Time;
    public description: string;

    constructor(sgObj?: any) {
        this.title = sgObj && sgObj.title || '';
        this.author = sgObj && sgObj.author || '';
        this.name = sgObj && sgObj.name || '';
        this.email = sgObj && sgObj.email || '';
        this.location = sgObj && sgObj.location || null;
        this.time = sgObj && sgObj.time || null;
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
    public date: Date;
    public start: Date;
    public end: Date;

    constructor(timeObj?: any) {
        this.date = timeObj && timeObj.date || null;
        this.start = timeObj && timeObj.start || null;
        this.end = timeObj && timeObj.end || null;
    }
}