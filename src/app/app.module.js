"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var nav_dropdown_directive_1 = require("./shared/nav-dropdown.directive");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var sidebar_directive_1 = require("./shared/sidebar.directive");
var aside_directive_1 = require("./shared/aside.directive");
var breadcrumb_component_1 = require("./shared/breadcrumb.component");
// Routing Module
var app_routing_1 = require("./app.routing");
//Layouts
var full_layout_component_1 = require("./layouts/full-layout.component");
var simple_layout_component_1 = require("./layouts/simple-layout.component");
var angularfire2_1 = require("angularfire2");
var services_1 = require("./services");
var http_1 = require("@angular/http");
exports.firebaseConfig = {
    apiKey: "AIzaSyAw_g0ylAQChmZrtXLz6cZ1-VUH-3t66tU",
    authDomain: "owlvision-be46e.firebaseapp.com",
    databaseURL: "https://owlvision-be46e.firebaseio.com",
    storageBucket: "owlvision-be46e.appspot.com"
};
exports.myFirebaseAuthConfig = {
    provider: angularfire2_1.AuthProviders.Google,
    method: angularfire2_1.AuthMethods.Popup
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            app_routing_1.AppRoutingModule,
            ng2_bootstrap_1.Ng2BootstrapModule,
            ng2_charts_1.ChartsModule,
            http_1.HttpModule,
            angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig, exports.myFirebaseAuthConfig)
        ],
        declarations: [
            app_component_1.AppComponent,
            full_layout_component_1.FullLayoutComponent,
            simple_layout_component_1.SimpleLayoutComponent,
            nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES,
            breadcrumb_component_1.BreadcrumbsComponent,
            sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES,
            aside_directive_1.AsideToggleDirective
        ],
        providers: [
            {
                provide: common_1.LocationStrategy,
                useClass: common_1.HashLocationStrategy
            },
            services_1.AuthService,
            services_1.AuthGuard,
            services_1.IssueService,
            services_1.UserService,
            services_1.ClassService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
