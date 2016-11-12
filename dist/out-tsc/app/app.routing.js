var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
export var routes = [
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
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=/Users/ddziamalek/Desktop/OwlVisionFront/src/app/app.routing.js.map