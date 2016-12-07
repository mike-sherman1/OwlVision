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