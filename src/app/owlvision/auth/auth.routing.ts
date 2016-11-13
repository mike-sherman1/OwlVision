import {NgModule}                 from '@angular/core';
import {
    Routes,
    RouterModule
}             from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Events'
        },
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'Login'
                }
            },
            {
                path: 'logout',
                component: LogoutComponent,
                data: {
                    title: 'Logout'
                }
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
