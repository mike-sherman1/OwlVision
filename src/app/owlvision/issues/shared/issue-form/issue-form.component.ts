import {Component, Input, OnInit, Inject}  from '@angular/core';
import {FormGroup, FormBuilder, Validators}                 from '@angular/forms';
import {Issue} from "../../../../models/issue";
import {IssueService} from "../../../../services/issue/issue.service";
import {Router} from "@angular/router";
@Component({
    selector: 'issue-form',
    template: require('./issue-form.component.html'),
    styles: [require('./issue-form.component.scss')],
})
export class IssueFormComponent implements OnInit {

    @Input() issue: Issue;
    form: FormGroup;
    display: boolean = false;
    update: boolean = false;
    form_title: string = 'New Issue';

    constructor(private fb: FormBuilder, private _issueService: IssueService, private _router: Router) {

    }

    ngOnInit() {
        this.form = this.newForm();
        if (this.issue !== undefined) {
            this.issue = new Issue(this.issue);
            this.update = true;
            this.form.setValue(this.issue);
        }
    }

    newForm(event_id = '') {
        return this.fb.group({
            title: '',
            author: '',
            priority: 'Low',
            status: 'Opened',
            description: '',
            location: '',
            picture: '',
            isAnonymous: false
        });
    }

    onSubmit() {
        this._issueService.createIssue(this.form.value).then(res=> {
            this._router.navigate(['/issues']);
        });
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