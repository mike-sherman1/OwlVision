import {NgModule}                 from '@angular/core';
import {BrowseIssuesComponent} from "./browse/browse.component";
import {MyIssuesComponent} from "./my-issues/my-issues.component";
import {PostIssueComponent} from "./post/post.component";
import {IssuesRoutingModule} from "./issues.routing";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {IssueFormComponent, IssueCardComponent} from "./shared";
import {CommonModule, LocationStrategy} from "@angular/common";
import {RouterModule} from "@angular/router";
import {BrowseDetailComponent} from "./detail/detail.component";
import {CalendarModule} from "primeng/components/calendar/calendar";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        IssuesRoutingModule,
        CalendarModule
    ],
    declarations: [
        BrowseIssuesComponent,
        MyIssuesComponent,
        PostIssueComponent,
        IssueFormComponent,
        IssueCardComponent,
        BrowseDetailComponent
    ],
    // providers: [LocationStrategy]
})
export class IssuesModule {
}
