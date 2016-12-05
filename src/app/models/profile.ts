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

export class Class {
    public subject:string;
    public number:string;
    public title:string;

    constructor(classObj?:any){
        this.subject = classObj && classObj.subject || null;
        this.number = classObj && classObj.number || null;
        this.title = classObj && classObj.title || null;
    }
}