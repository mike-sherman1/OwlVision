import {Component, Input, OnInit, Inject}  from '@angular/core';
import {FormGroup, FormBuilder, Validators}                 from '@angular/forms';
import {Issue} from "../../../../models/issue";
import {IssueService} from "../../../../services/issue.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../services/auth.service";
import {AngularFire} from "angularfire2";
import {SGService} from "../../../../services/studygroup.service";
import {BuildingListService} from "../../../../services/building.service";
// import {BuildingListService, SGService} from "../../../../services";
@Component({
    selector: 'sg-form',
    template: require('./event-form.component.html'),
    styles: [require('./event-form.component.scss')],
})
export class EventFormComponent implements OnInit {

    @Input() studyGroup: Issue;
    form: FormGroup;
    display: boolean = false;
    update: boolean = false;
    form_title: string = 'New Study Group';

    displayName: string;
    email: string;
    uid: string;

    locList: any[] = [];
    nameList: any[] = [];

    constructor(private fb: FormBuilder, private _studyGroupService: SGService, private _router: Router, private _authService: AuthService, private _af: AngularFire, private _bldgService: BuildingListService) {

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
        if (this.studyGroup !== undefined) {
            this.studyGroup = new Issue(this.studyGroup);
            this.update = true;
            this.form.setValue(this.studyGroup);
        }
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
            time:this.fb.group({
                date:'',
                start:'',
                end:''
            })
        });
    }

    onSubmit() {
        this.form.patchValue({name: this.displayName, email: this.email, author: this.uid});
        this._studyGroupService.createIssue(this.form.value).then(res => {
            this._router.navigate(['/study-groups']);
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

    getNameList($event){
        this.nameList = this._bldgService.getBldgNamesByCode($event);
        if(this.nameList.length === 1) this.form.patchValue({location:{name:this.nameList[0]}});
    }

    clearLoc(){
        this.form.patchValue({location:{code:'',name:'',room:'',extra:''}});
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