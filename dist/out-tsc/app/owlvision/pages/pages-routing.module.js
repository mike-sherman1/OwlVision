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
import { p404Component } from './404.component';
import { p500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Example Pages'
        },
        children: [
            {
                path: '404',
                component: p404Component,
                data: {
                    title: 'Page 404'
                }
            },
            {
                path: '500',
                component: p500Component,
                data: {
                    title: 'Page 500'
                }
            },
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'register',
                component: RegisterComponent,
                data: {
                    title: 'Register Page'
                }
            }
        ]
    }
];
var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    return PagesRoutingModule;
}());
PagesRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }),
    __metadata("design:paramtypes", [])
], PagesRoutingModule);
export { PagesRoutingModule };
//# sourceMappingURL=/Users/ddziamalek/Desktop/OwlVisionFront/src/app/owlvision/pages/pages-routing.module.js.map