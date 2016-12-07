export class Time {
    public date: Date;
    public start: Date;
    public end: Date;

    constructor(timeObj?: any) {
        this.date = timeObj && timeObj.date.toUTCString() || null;
        this.start = timeObj && timeObj.start.toUTCString() || null;
        this.end = timeObj && timeObj.end.toUTCString() || null;
    }
}