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
import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
// Tabs Component
import { TabsModule } from 'ng2-bootstrap/components/tabs';
import { TabsComponent } from './tabs.component';
// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    NgModule({
        imports: [
            ComponentsRoutingModule,
            TabsModule
        ],
        declarations: [
            ButtonsComponent,
            CardsComponent,
            FormsComponent,
            SocialButtonsComponent,
            SwitchesComponent,
            TablesComponent,
            TabsComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=/Users/ddziamalek/Desktop/OwlVisionFront/src/app/core-ui/components/components.module.js.map