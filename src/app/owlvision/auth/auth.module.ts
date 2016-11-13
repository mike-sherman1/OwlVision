import {NgModule}                 from '@angular/core';
import {AuthRoutingModule} from "./auth.routing";
import {LogoutComponent} from "./logout/logout.component";
import {LoginComponent} from "./login/login.component";

@NgModule({
    imports: [
        AuthRoutingModule
    ],
    declarations: [
        LoginComponent,
        LogoutComponent
    ]
})
export class AuthModule {
}
