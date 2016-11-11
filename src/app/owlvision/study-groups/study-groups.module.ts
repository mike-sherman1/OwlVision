import {NgModule}                 from '@angular/core';
import {BrowseStudyGroupsComponent} from "./browse/browse.component";
import {MyStudyGroupsComponent} from "./my-study-groups/my-study-groups.component";
import {PostStudyGroupComponent} from "./post/post.component";
import {StudyGroupsRoutingModule} from "./study-groups.routing";

@NgModule({
    imports: [
        StudyGroupsRoutingModule
    ],
    declarations: [
        BrowseStudyGroupsComponent,
        MyStudyGroupsComponent,
        PostStudyGroupComponent
    ]
})
export class StudyGroupsModule {
}
