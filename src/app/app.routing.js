"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//Layouts
var full_layout_component_1 = require("./layouts/full-layout.component");
var simple_layout_component_1 = require("./layouts/simple-layout.component");
var auth_guard_service_1 = require("./services/auth-guard.service");
exports.routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: full_layout_component_1.FullLayoutComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
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
        path: 'auth',
        component: simple_layout_component_1.SimpleLayoutComponent,
        data: {
            title: 'Authorization'
        },
        loadChildren: 'app/owlvision/auth/auth.module#AuthModule'
    },
    {
        path: 'errors',
        component: simple_layout_component_1.SimpleLayoutComponent,
        data: {
            title: 'Errors'
        },
        children: [
            {
                path: '',
                loadChildren: 'app/owlvision/errors/errors.module#ErrorsModule',
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
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
