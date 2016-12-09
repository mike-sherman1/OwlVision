import {Component, Input, OnInit, Inject, Output, EventEmitter}  from '@angular/core';
import {FormGroup, FormBuilder, Validators}                 from '@angular/forms';
import {Issue} from "../../../../models/issue";
import {IssueService} from "../../../../services/issue.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../services/auth.service";
import {AngularFire} from "angularfire2";
import {BuildingListService} from "../../../../services/building.service";

@Component({
    selector: 'issue-form',
    template: require('./issue-form.component.html'),
    styles: [require('./issue-form.component.scss')],
})

export class IssueFormComponent implements OnInit {

    @Input() issue: Issue;
    @Output() save = new EventEmitter;
    @Output() picChange = new EventEmitter;

    form: FormGroup;
    display: boolean = false;
    update: boolean = false;
    form_title: string = 'New Issue';
    isPicChange: boolean = false;

    displayName: string;
    email: string;
    uid: string;

    image: string;
    the_pic: string = '';

    locList: any[] = [];
    nameList: any[] = [];

    updateKey: string;

    constructor(private fb: FormBuilder, private _bldgService: BuildingListService, private _issueService: IssueService, private _router: Router, private _authService: AuthService, private _af: AngularFire) {

        _af.auth.subscribe(auth => {
            console.log(auth.auth);
            if (auth.auth) {
                this.displayName = auth.auth.displayName;
                this.email = auth.auth.email;
                this.uid = auth.auth.uid;
            }
        })

    }

    ngOnInit() {
        this.form = this.newForm();
        if (this.issue !== undefined) {
            this.updateKey = this.issue.$key;
            this.issue = new Issue(this.issue);
            this.update = true;
            this.form.setValue(this.issue);
            this.getLocList(this.issue.location.type, true);
        }
        if (this.issue && this.issue.picture !== '') {
            this._issueService.getImageURL(this.issue.picture).then(url => {
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
        let url = this._issueService.uploadPhoto(files, pic_id);
        this.image = url;
        this.isPicChange = true;
    }

    isFullForm() {
        return this.form.value.time === '' || (this.form.value.location.type !== 'other' && this.form.value.location.name === '') || this.form.value.title === ''
    }

    newForm(event_id = '') {
        return this.fb.group({
            title: '',
            name: '',
            email: '',
            author: '',
            priority: 'Low',
            status: 'Opened',
            description: '',
            location: this.fb.group({
                type: '',
                code: '',
                name: '',
                room: '',
                extra: ''
            }),
            comments: [],
            time: new Date(),
            picture: '',
            picture_id: '',
            isAnonymous: false
        });
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

    onSubmit() {
        if (!this.issue) {
            this.form.patchValue({
                name: this.displayName,
                email: this.email,
                author: this.uid,
                picture: this.image
            });
        }
        if (this.issue && this.isPicChange) {
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
        if (this.issue) {
            console.log(this.form.value);
            this._issueService.updateIssue(this.form.value, this.updateKey).then(res => {
                if (this.isPicChange) {
                    this.isPicChange = false;
                    this.picChange.emit();
                }
                else this.save.emit();
            })
        } else {
            console.log('before save', this.form.value);
            this._issueService.createIssue(this.form.value).then(res => {
                this._router.navigate(['/issues']);
            });
        }

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