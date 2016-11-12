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
import { p404Component } from './404.component';
import { p500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { PagesRoutingModule } from './pages-routing.module';
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    NgModule({
        imports: [PagesRoutingModule],
        declarations: [
            p404Component,
            p500Component,
            LoginComponent,
            RegisterComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], PagesModule);
export { PagesModule };
//# sourceMappingURL=/Users/ddziamalek/Desktop/OwlVisionFront/src/app/owlvision/pages/pages.module.js.map