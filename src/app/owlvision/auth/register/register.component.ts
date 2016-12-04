import {Component}        from '@angular/core';
import {Profile} from "../../../models/profile";
import {FormGroup, FormBuilder, FormArray, FormControl} from "@angular/forms";

@Component({
    templateUrl: 'register.component.html'
})
export class RegisterComponent {

    prof: Profile;
    public form: FormGroup;
    classArr = new FormArray([]);

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.newForm();
        if (this.prof !== undefined) {
            this.prof = new Profile(this.prof);
            this.form.setValue(this.prof);
        }
        this.addClass();
        console.log(this.form.value);
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

}
