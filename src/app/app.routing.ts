import {NgModule}                 from '@angular/core';
import {
    Routes,
    RouterModule
}             from '@angular/router';

//Layouts
import {FullLayoutComponent}      from './layouts/full-layout.component';
import {SimpleLayoutComponent}    from './layouts/simple-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: 'app/owlvision/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'issues',
                loadChildren: 'app/owlvision/issues/issues.module#IssuesModule'
            },
            {
                path: 'events',
                loadChildren: 'app/owlvision/events/events.module#EventsModule'
            },
            {
                path: 'study-groups',
                loadChildren: 'app/owlvision/study-groups/study-groups.module#StudyGroupsModule'
            },
            {
                path: 'components',
                loadChildren: 'app/core-ui/components/components.module#ComponentsModule'
            },
            {
                path: 'icons',
                loadChildren: 'app/core-ui/icons/icons.module#IconsModule'
            },
            {
                path: 'widgets',
                loadChildren: 'app/core-ui/widgets/widgets.module#WidgetsModule'
            },
            {
                path: 'charts',
                loadChildren: 'app/core-ui/chartjs/chartjs.module#ChartJSModule'
            }
        ]
    },
    {
        path: 'pages',
        component: SimpleLayoutComponent,
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: '',
                loadChildren: 'app/pages/pages.module#PagesModule',
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
