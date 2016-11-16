import {NgModule}                 from '@angular/core';
import {AuthRoutingModule} from "./auth.routing";
import {LogoutComponent} from "./logout/logout.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

@NgModule({
    imports: [
        AuthRoutingModule
    ],
    declarations: [
        LoginComponent,
        LogoutComponent,
        RegisterComponent
    ]
})
export class AuthModule {
}
