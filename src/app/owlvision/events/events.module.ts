import {NgModule}                 from '@angular/core';
import {BrowseEventsComponent} from "./browse/browse.component";
import {MyEventsComponent} from "./my-events/my-events.component";
import {PostIssueComponent} from "./post/post.component";
import {EventsRoutingModule} from "./events.routing";

@NgModule({
    imports: [
        EventsRoutingModule
    ],
    declarations: [
        BrowseEventsComponent,
        MyEventsComponent,
        PostIssueComponent
    ]
})
export class EventsModule {
}
