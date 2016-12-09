import {NgModule}                 from '@angular/core';
import {
    Routes,
    RouterModule
}             from '@angular/router';
import {BrowseEventsComponent} from "./browse/browse.component";
import {MyEventsComponent} from "./my-events/my-events.component";
import {PostIssueComponent} from "./post/post.component";
import {BrowseDetailComponent} from "../events/detail/detail.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Events'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'browse'
            },
            {
                path: 'post',
                component: PostIssueComponent,
                data: {
                    title: 'Post a new Issue'
                }
            },
            {
                path: 'browse',
                component: BrowseEventsComponent,
                data: {
                    title: 'Browse Events'
                }
            },
            {
                path: 'browse/:id',
                component: BrowseDetailComponent,
                data: {
                    title: 'Detail'
                }
            },
            {
                path: 'my-events',
                component: MyEventsComponent,
                data: {
                    title: 'My Events'
                }
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'browse'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule {
}
