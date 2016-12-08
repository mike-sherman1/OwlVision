export class Time {
    public start: any;
    public end: any;

    constructor(timeObj?: any) {
        this.start = timeObj && new Date(timeObj.start) || null;
        this.end = timeObj && new Date(timeObj.end) || null;
    }
}