import {Component, Input, OnInit, Inject, Output, EventEmitter}  from '@angular/core';
import {FormGroup, FormBuilder, Validators}                 from '@angular/forms';
import {Issue} from "../../../../models/issue";
import {IssueService} from "../../../../services/issue.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../services/auth.service";
import {AngularFire} from "angularfire2";
import {SGService} from "../../../../services/studygroup.service";
import {BuildingListService} from "../../../../services/building.service";
import {ClassService} from "../../../../services/class.service";
import {StudyGroup} from "../../../../models/studygroup";
// import {BuildingListService, SGService} from "../../../../services";
@Component({
    selector: 'sg-form',
    template: require('./sg-form.component.html'),
    styles: [require('./sg-form.component.scss')],
})
export class SGFormComponent implements OnInit {

    @Input() studyGroup: StudyGroup;
    @Output() save = new EventEmitter;
    @Output() picChange = new EventEmitter;
    form: FormGroup;
    display: boolean = false;
    update: boolean = false;
    form_title: string = 'New Study Group';
    isPicChange: boolean = false;

    displayName: string;
    email: string;
    uid: string;

    classes: any[] = [];
    subjects: any[] = [];
    subjects_numbers: any = {};
    classes_dict: any = {};

    image: string;
    the_pic: string = '';

    locList: any[] = [];
    nameList: any[] = [];

    updateKey: string;

    constructor(private fb: FormBuilder, private _studyGroupService: SGService, private _router: Router, private _classService: ClassService, private _authService: AuthService, private _af: AngularFire, private _bldgService: BuildingListService) {

        _af.auth.subscribe(auth => {
            console.log(auth.auth);
            if (auth.auth) {
                this.displayName = auth.auth.displayName;
                this.email = auth.auth.email;
                this.uid = auth.auth.uid;
            }
        });
    }

    ngOnInit() {
        this.form = this.newForm();
        if (this.studyGroup !== undefined) {
            this.updateKey = this.studyGroup.$key;
            this.studyGroup = new StudyGroup(this.studyGroup);
            this.update = true;
            this.form.setValue(this.studyGroup);
            this.getLocList(this.studyGroup.location.type, true);
        }
        if (this._classService.primed) {
            let objs = this._classService.getSubsNumDict();
            this.classes = objs.classes;
            this.subjects = objs.subjects;
            this.classes_dict = objs.dict;
            this.subjects_numbers = objs.numbers;
        } else {
            this._classService.getAll().subscribe(objs => {
                this.classes = objs.classes;
                this.subjects = objs.subjects;
                this.classes_dict = objs.dict;
                this.subjects_numbers = objs.numbers;
            });
        }
        if (this.studyGroup && this.studyGroup.picture !== '') {
            this._studyGroupService.getImageURL(this.studyGroup.picture).then(url => {
                console.log(url);
                this.the_pic = url;
            });
        }
    }

    photoInputChange(event) {
        let files = event.srcElement.files[0];
        let uploader = document.getElementById("uploader");
        let pic_id;
        if (this.form.value.picture_id !== '') {
            pic_id = this.form.value.picture_id
        } else {
            pic_id = this.randomString(16, 'aA');
            this.form.patchValue({picture_id: pic_id});
        }

        let url = this._studyGroupService.uploadPhoto(files, pic_id);
        this.image = url;
        this.isPicChange = true;
    }

    isFullForm() {
        return this.form.value.time.start === '' || this.form.value.time.end === '' || this.form.value.the_class.subject === '' || this.form.value.the_class.number === '' || this.form.value.the_class.title === '' || this.form.value.location.name === '' || this.form.value.title === ''
    }

    newForm(event_id = '') {
        return this.fb.group({
            title: '',
            name: '',
            email: '',
            author: '',
            description: '',
            location: this.fb.group({
                type: '',
                code: '',
                name: '',
                room: '',
                extra: ''
            }),
            time: this.fb.group({
                start: '',
                end: ''
            }),
            comments: [],
            picture: '',
            picture_id: '',
            rsvp: [],
            the_class: this.fb.group({
                subject: '',
                number: '',
                title: ''
            })
        });
    }

    onSubmit() {
        if (!this.studyGroup) {
            this.form.patchValue({
                name: this.displayName,
                email: this.email,
                author: this.uid,
                picture: this.image
            });
        }
        if (this.studyGroup && this.isPicChange) {
            this.form.patchValue({
                picture: this.image
            });
        }
        if (this.form.value.location.type === 'bname') {
            let code = this._bldgService.getBldgCodeFromName(this.form.value.location.name);
            // console.log(code);
            this.form.patchValue({location: {code: code}});
        }
        // console.log(this.form.value);
        if (this.studyGroup) {
            console.log(this.form.value);
            this._studyGroupService.updateSG(this.form.value, this.updateKey).then(res => {
                if (this.isPicChange) {
                    this.isPicChange = false;
                    this.picChange.emit();
                }
                else this.save.emit();
            })
        } else {
            console.log('before save', this.form.value);
            this._studyGroupService.createSG(this.form.value).then(res => {
                this._router.navigate(['/study-groups']);
            });
        }
    }

    getLocList(type: string, noClear: boolean = false) {
        switch (type) {
            case 'bcode':
                this.locList = this._bldgService.getDistinctBldgCodes();
                break;
            case 'bname':
                this.locList = this._bldgService.getDistinctBldgNames();
                break;
        }
        if (!noClear) this.clearLoc();
    }

    getNameList($event) {
        this.nameList = this._bldgService.getBldgNamesByCode($event);
        if (this.nameList.length === 1) this.form.patchValue({location: {name: this.nameList[0]}});
    }

    clearLoc() {
        this.form.patchValue({location: {code: '', name: '', room: '', extra: ''}});
    }

    randomString(length, chars) {
        var mask = '';
        if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
        if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (chars.indexOf('#') > -1) mask += '0123456789';
        if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
        var result = '';
        for (var i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
        return result;
    }

    // saveAndReturn() {
    //     this._clientService.create(this.form.value).subscribe(client=> {
    //         this._location.back();
    //     });
    // }
    //
    // saveAndGoToProduction() {
    //     this._clientService.create(this.form.value).subscribe(client=> {
    //         // console.log(client);
    //         this._productionService.putClientOnDeck(client);
    //         this._router.navigate(['/production/add', 'now']);
    //     });
    // }
    //
    // saveAndAddAnother() {
    //     this._clientService.create(this.form.value).subscribe(client=> {
    //         // console.log(client);
    //         this.form = this.newForm(this.form.value.event);
    //         this.display = false;
    //         this.again = true;
    //         this.step = true;
    //     });
    // }
    //
    // update() {
    //     this._clientService.update(this.form.value).subscribe(res=> {
    //         if (res.ok) {
    //             this._location.back();
    //         }
    //     });
    // }
    //
    // showDialog() {
    //     this.display = true;
    // }
}