import {NgModule}                 from '@angular/core';
import {BrowseIssuesComponent} from "./browse/browse.component";
import {MyIssuesComponent} from "./my-issues/my-issues.component";
import {PostIssueComponent} from "./post/post.component";
import {IssuesRoutingModule} from "./issues.routing";

@NgModule({
    imports: [
        IssuesRoutingModule
    ],
    declarations: [
        BrowseIssuesComponent,
        MyIssuesComponent,
        PostIssueComponent
    ]
})
export class IssuesModule {
}
