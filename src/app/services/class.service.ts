import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Http, Headers} from "@angular/http";

@Injectable()
export class ClassService {

    private url: string = "https://owlvision.herokuapp.com/classes";
    classList: any;
    subjects: any;
    numbers: any;
    dict: any;
    primed: boolean = false;

    constructor(private _http: Http) {
    }

    getAll(): Observable<any> {
        console.log('in service');
        return this._http.get(`${this.url}`)
            .map(res => {
                this.classList = res.json();
                console.log(this.classList);
                return this.getSubsNumDict();
            })
    }

    getSubsNumDict() {
        this.subjects = [];
        this.numbers = {};
        this.dict = {};
        this.subjects = this.classList.map(o => {
            if (this.dict[o.course_id.subject] == null) {
                this.dict[o.course_id.subject] = {};
            }
            if (this.dict[o.course_id.subject][o.course_id.number] == null) this.dict[o.course_id.subject][o.course_id.number] = [];
            if (this.numbers[o.course_id.subject] == null) this.numbers[o.course_id.subject] = [];
            if (this.numbers[o.course_id.subject].indexOf(o.course_id.number) < 0) this.numbers[o.course_id.subject].push(o.course_id.number);
            o.classes.forEach(c => {
                if (this.dict[o.course_id.subject][o.course_id.number].indexOf(c.title) < 0) {
                    this.dict[o.course_id.subject][o.course_id.number].push(c.title);
                }
            });
            return o.course_id.subject;
        });
        this.subjects = Object.keys(this.dict).sort();
        this.primed = true;
        return {classes: this.classList, subjects: this.subjects, numbers: this.numbers, dict: this.dict};
    }
}