import {Class} from "./class";
export class Profile {
    userId:string;
    public classes: Class[];
    public type:string;

    constructor(profileObj?: any) {
        this.userId = profileObj && profileObj.userId || '';
        this.classes = profileObj && profileObj.classes || [];
        this.type = profileObj && profileObj.type || null;
    }
}