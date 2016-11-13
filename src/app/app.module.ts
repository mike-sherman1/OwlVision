import {NgModule}                     from '@angular/core';
import {BrowserModule}                from '@angular/platform-browser';
import {
    LocationStrategy,
    HashLocationStrategy, CommonModule
}         from '@angular/common';

import {AppComponent}                 from './app.component';
import {Ng2BootstrapModule}           from 'ng2-bootstrap/ng2-bootstrap';
import {NAV_DROPDOWN_DIRECTIVES}      from './shared/nav-dropdown.directive';

import {ChartsModule}                 from 'ng2-charts/ng2-charts';
import {SIDEBAR_TOGGLE_DIRECTIVES}    from './shared/sidebar.directive';
import {AsideToggleDirective}         from './shared/aside.directive';
import {BreadcrumbsComponent}         from './shared/breadcrumb.component';

// Routing Module
import {AppRoutingModule}             from './app.routing';

//Layouts
import {FullLayoutComponent}          from './layouts/full-layout.component';
import {SimpleLayoutComponent}        from './layouts/simple-layout.component';
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import {AuthService, AuthGuard, IssueService} from "./services";

export const firebaseConfig = {
    apiKey: "AIzaSyAw_g0ylAQChmZrtXLz6cZ1-VUH-3t66tU",
    authDomain: "owlvision-be46e.firebaseapp.com",
    databaseURL: "https://owlvision-be46e.firebaseio.com",
    storageBucket: "owlvision-be46e.appspot.com"
};

export const myFirebaseAuthConfig =
{
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
};

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        Ng2BootstrapModule,
        ChartsModule,
        AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
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
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        AuthService,
        AuthGuard,
        IssueService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
