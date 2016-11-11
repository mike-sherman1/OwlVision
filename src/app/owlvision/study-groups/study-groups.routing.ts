import {NgModule}                 from '@angular/core';
import {
    Routes,
    RouterModule
}             from '@angular/router';
import {BrowseStudyGroupsComponent} from "./browse/browse.component";
import {MyStudyGroupsComponent} from "./my-study-groups/my-study-groups.component";
import {PostStudyGroupComponent} from "./post/post.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Study Groups'
        },
        children: [
            {
                path: 'post',
                component: PostStudyGroupComponent,
                data: {
                    title: 'Post a new Study Group'
                }
            },
            {
                path: 'browse',
                component: BrowseStudyGroupsComponent,
                data: {
                    title: 'Browse Study Groups'
                }
            },
            {
                path: 'my-study-groups',
                component: MyStudyGroupsComponent,
                data: {
                    title: 'My Study Groups'
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
export class StudyGroupsRoutingModule {
}
