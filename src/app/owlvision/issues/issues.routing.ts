import {NgModule}                 from '@angular/core';
import {
    Routes,
    RouterModule
}             from '@angular/router';
import {BrowseIssuesComponent} from "./browse/browse.component";
import {MyIssuesComponent} from "./my-issues/my-issues.component";
import {PostIssueComponent} from "./post/post.component";
import {BrowseDetailComponent} from "./detail/detail.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Issues'
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
                component: BrowseIssuesComponent,
                data: {
                    title: 'Browse Issues'
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
                path: 'my-issues',
                component: MyIssuesComponent,
                data: {
                    title: 'My Issues'
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
export class IssuesRoutingModule {
}
