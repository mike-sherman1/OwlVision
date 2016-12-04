export class Profile {
    public classes: Class[];
    public type:string;

    constructor(profileObj?: any) {
        this.classes = profileObj && profileObj.classes || [];
        this.type = profileObj && profileObj.type || null;
    }
}

export class Class {
    public course:Course;
    public title:string;

    constructor(classObj?:any){
        this.course = classObj && classObj.course || null;
    }
}

export class Course {
    public subject:string;
    public number:number;

    constructor(courseObj?: any) {
        this.subject = courseObj && courseObj.subject || null;
        this.number = courseObj && courseObj.number || null;
    }
}