import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http, Headers} from "@angular/http";

@Injectable()
export class ClassService {

    private url: string = "http://owlvision.herokuapp.com/classes";

    constructor(private _http:Http) {
    }

    getAll():Observable<any> {
        console.log('in service');
        return this._http.get(`${this.url}`)
            .map(res => res.json())
    }
}