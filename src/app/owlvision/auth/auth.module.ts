import {NgModule}                 from '@angular/core';
import {AuthRoutingModule} from "./auth.routing";
import {LogoutComponent} from "./logout/logout.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        LogoutComponent,
        RegisterComponent
    ]
})
export class AuthModule {
}
