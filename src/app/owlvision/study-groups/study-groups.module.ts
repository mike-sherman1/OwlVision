import {NgModule}                 from '@angular/core';
import {BrowseStudyGroupsComponent} from "./browse/browse.component";
import {MyStudyGroupsComponent} from "./my-study-groups/my-study-groups.component";
import {PostStudyGroupComponent} from "./post/post.component";
import {StudyGroupsRoutingModule} from "./study-groups.routing";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {SGFormComponent} from "./shared/sg-form/sg-form.component";
import {SGCardComponent} from "./shared/sg-card/sg-card.component";
import {FileUploadModule} from "primeng/components/fileupload/fileupload";
import {CalendarModule} from "primeng/components/calendar/calendar";
import {SGBrowseDetailComponent} from "./detail/detail.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        StudyGroupsRoutingModule,
        FileUploadModule,
        CalendarModule
    ],
    declarations: [
        BrowseStudyGroupsComponent,
        MyStudyGroupsComponent,
        PostStudyGroupComponent,
        SGCardComponent,
        SGFormComponent,
        SGBrowseDetailComponent
    ]
})
export class StudyGroupsModule {
}
