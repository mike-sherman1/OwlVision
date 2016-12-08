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
    form: FormGroup;
    display: boolean = false;
    update: boolean = false;
    form_title: string = 'New Issue';

    displayName: string;
    email: string;
    uid: string;

    image: string;

    locList: any[] = [];
    nameList: any[] = [];

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
            this.issue = new Issue(this.issue);
            this.update = true;
            this.form.setValue(this.issue);
        }
    }

    photoInputChange(event) {
        let files = event.srcElement.files[0];
        let uploader = document.getElementById("uploader");
        let url = this._issueService.uploadPhoto(files, this.uid);
        this.image = url;
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
            isAnonymous: false
        });
    }

    getLocList(type: string) {
        switch (type) {
            case 'bcode':
                this.locList = this._bldgService.getDistinctBldgCodes();
                this.clearLoc();
                break;
            case 'bname':
                this.locList = this._bldgService.getDistinctBldgNames();
                this.clearLoc();
                break;
            case 'other':
                this.clearLoc();
                break;
        }
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
        // console.log(this.form.value);
        if (this.issue) {
            this._issueService.updateIssue(this.form.value).then(res => {
                this.save.emit();
            })
        } else {
            this._issueService.createIssue(this.form.value).then(res => {
                this._router.navigate(['/issues']);
            });
        }

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