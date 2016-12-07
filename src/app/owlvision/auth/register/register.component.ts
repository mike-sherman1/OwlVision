import {Component}        from '@angular/core';
import {Profile} from "../../../models/profile";
import {FormGroup, FormBuilder, FormArray, FormControl} from "@angular/forms";
import {ClassService} from "../../../services/class.service";

import 'rxjs/add/operator/distinct';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'register.component.html',
    styles: [require('./register.component.scss')]
})
export class RegisterComponent {

    prof: Profile;
    public form: FormGroup;
    classes: any[] = [];
    subjects: any[] = [];
    subjects_numbers: any = {};
    classes_dict: any = {};
    classArr = new FormArray([]);

    constructor(private fb: FormBuilder, private _classService: ClassService, private _userService: UserService, private _router: Router) {
    }

    ngOnInit() {
        this.form = this.newForm();
        if (this.prof !== undefined) {
            this.prof = new Profile(this.prof);
            this.form.setValue(this.prof);
        }
        this.addClass();
        if(this._classService.primed){
            let objs = this._classService.getSubsNumDict();
            this.classes = objs.classes;
            this.subjects = objs.subjects;
            this.classes_dict = objs.dict;
            this.subjects_numbers = objs.numbers;
        }else{
            this._classService.getAll().subscribe(objs => {
                console.log('her');
                this.classes = objs.classes;
                this.subjects = objs.subjects;
                this.classes_dict = objs.dict;
                this.subjects_numbers = objs.numbers;
            });
        }
    }

    onSubmit() {
        let profile: Profile = JSON.parse(JSON.stringify(this.form.value));
        if (profile.type === 'admin') delete profile.classes;
        else {
            let toRemove = [];
            for (let x = 0; x < profile.classes.length; x++) {
                let c = profile.classes[x];
                if (c.number === '' || c.subject === '' || c.title === '') {
                    toRemove.push(x);
                }
            }
            toRemove.forEach(function (x) {
                profile.classes.splice(x, 1);
            });

        }
        this._userService.createUser(profile)
            .then((error) => {
                if (error) {
                    alert("Data could not be saved." + error);
                } else {
                    this._router.navigate(['/dashboard']);
                }
            });
    }

    newForm(event_id = '') {
        return this.fb.group({
            type: '',
            classes: this.classArr
        });
    }

    addClass() {
        this.classArr.push(
            new FormGroup({
                subject: new FormControl(''),
                number: new FormControl(''),
                title: new FormControl('')
            })
        );
    }

    removeClass(i: number) {
        this.classArr.removeAt(i);
    }

}
