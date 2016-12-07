export class Event {
    public title: string;
    public author: string;
    public name: string;
    public email: string;
    public location: Location;
    public time: Time;
    public description: string;

    constructor(eventObj?: any) {
        this.title = eventObj && eventObj.title || '';
        this.author = eventObj && eventObj.author || '';
        this.name = eventObj && eventObj.name || '';
        this.email = eventObj && eventObj.email || '';
        this.location = eventObj && eventObj.location || null;
        this.time = eventObj && eventObj.time || null;
        this.description = eventObj && eventObj.description || '';
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