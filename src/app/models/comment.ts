export class Comment {
    public author: string;
    public text: string;
    public name: string;
    public isAdmin: boolean;

    constructor(commentObj?: any) {
        this.text = commentObj && commentObj.text || '';
        this.author = commentObj && commentObj.author || '';
        this.name = commentObj && commentObj.name || '';
        this.isAdmin = commentObj && commentObj.isAdmin || false;
    }
}