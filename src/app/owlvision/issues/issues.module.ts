import {NgModule}                 from '@angular/core';
import {BrowseIssuesComponent} from "./browse/browse.component";
import {MyIssuesComponent} from "./my-issues/my-issues.component";
import {PostIssueComponent} from "./post/post.component";
import {IssuesRoutingModule} from "./issues.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {IssueFormComponent,IssueCardComponent} from "./shared";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {BrowseDetailComponent} from "./detail/detail.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        IssuesRoutingModule
    ],
    declarations: [
        BrowseIssuesComponent,
        MyIssuesComponent,
        PostIssueComponent,
        IssueFormComponent,
        IssueCardComponent,
        BrowseDetailComponent
    ]
})
export class IssuesModule {
}
