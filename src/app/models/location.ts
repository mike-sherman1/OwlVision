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