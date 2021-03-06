import {NgModule}                 from '@angular/core';
import {BrowseEventsComponent} from "./browse/browse.component";
import {MyEventsComponent} from "./my-events/my-events.component";
import {PostIssueComponent} from "./post/post.component";
import {EventsRoutingModule} from "./events.routing";
import {EventCardComponent} from "./shared/event-card/event-card.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/components/calendar/calendar";
import {EventFormComponent} from "./shared/event-form/event-form.component";
import {CommonModule} from "@angular/common";
import {BrowseDetailComponent} from "./detail/detail.component";

@NgModule({
    imports: [
        CommonModule,
        EventsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CalendarModule
    ],
    exports: [EventCardComponent],
    declarations: [
        BrowseEventsComponent,
        MyEventsComponent,
        PostIssueComponent,
        EventCardComponent,
        EventFormComponent,
        BrowseDetailComponent
    ]
})
export class EventsModule {
}
