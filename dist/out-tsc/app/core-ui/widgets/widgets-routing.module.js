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
import { WidgetsComponent } from './widgets.component';
var routes = [
    {
        path: '',
        component: WidgetsComponent,
        data: {
            title: 'Widgets'
        }
    }
];
var WidgetsRoutingModule = (function () {
    function WidgetsRoutingModule() {
    }
    return WidgetsRoutingModule;
}());
WidgetsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }),
    __metadata("design:paramtypes", [])
], WidgetsRoutingModule);
export { WidgetsRoutingModule };
//# sourceMappingURL=/Users/ddziamalek/Desktop/OwlVisionFront/src/app/core-ui/widgets/widgets-routing.module.js.map