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
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
// Routing Module
import { AppRoutingModule } from './app.routing';
//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { AngularFireModule } from "angularfire2";
export var firebaseConfig = {
    apiKey: "AIzaSyAw_g0ylAQChmZrtXLz6cZ1-VUH-3t66tU",
    authDomain: "owlvision-be46e.firebaseapp.com",
    databaseURL: "https://owlvision-be46e.firebaseio.com",
    storageBucket: "owlvision-be46e.appspot.com"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            AppRoutingModule,
            Ng2BootstrapModule,
            ChartsModule,
            AngularFireModule.initializeApp(firebaseConfig)
        ],
        declarations: [
            AppComponent,
            FullLayoutComponent,
            SimpleLayoutComponent,
            NAV_DROPDOWN_DIRECTIVES,
            BreadcrumbsComponent,
            SIDEBAR_TOGGLE_DIRECTIVES,
            AsideToggleDirective
        ],
        providers: [{
                provide: LocationStrategy,
                useClass: HashLocationStrategy
            }],
        bootstrap: [AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
//# sourceMappingURL=/Users/ddziamalek/Desktop/OwlVisionFront/src/app/app.module.js.map