import {NgModule}                 from '@angular/core';
import {ChartsModule}             from 'ng2-charts/ng2-charts';

import {DashboardComponent}       from './dashboard.component';
import {DashboardRoutingModule}   from './dashboard-routing.module';
import {EventsModule} from "../events/events.module";
import {StudyGroupsModule} from "../study-groups/study-groups.module";
import {IssuesModule} from "../issues/issues.module";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        DashboardRoutingModule,
        ChartsModule,
        EventsModule,
        StudyGroupsModule,
        IssuesModule,
        CommonModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {
}
