import {NgModule}                 from '@angular/core';
import {BrowseStudyGroupsComponent} from "./browse/browse.component";
import {MyStudyGroupsComponent} from "./my-study-groups/my-study-groups.component";
import {PostStudyGroupComponent} from "./post/post.component";
import {StudyGroupsRoutingModule} from "./study-groups.routing";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {SGFormComponent} from "./shared/sg-form/sg-form.component";
import {SGCardComponent} from "./shared/sg-card/sg-card.component";
import {FileUploadModule} from "primeng/components/fileupload/fileupload";
import {BuildingListService} from "../../services/building.service";
import {SGService} from "../../services/studygroup.service";
import {CalendarModule} from "primeng/components/calendar/calendar";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        StudyGroupsRoutingModule,
        FileUploadModule,
        CalendarModule
    ],
    providers:[
        BuildingListService,
        SGService
    ],
    declarations: [
        BrowseStudyGroupsComponent,
        MyStudyGroupsComponent,
        PostStudyGroupComponent,
        SGCardComponent,
        SGFormComponent
    ]
})
export class StudyGroupsModule {
}
