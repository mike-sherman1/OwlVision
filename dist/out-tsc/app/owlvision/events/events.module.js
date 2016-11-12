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
import { BrowseEventsComponent } from "./browse/browse.component";
import { MyEventsComponent } from "./my-events/my-events.component";
import { PostIssueComponent } from "./post/post.component";
import { EventsRoutingModule } from "./events.routing";
var EventsModule = (function () {
    function EventsModule() {
    }
    return EventsModule;
}());
EventsModule = __decorate([
    NgModule({
        imports: [
            EventsRoutingModule
        ],
        declarations: [
            BrowseEventsComponent,
            MyEventsComponent,
            PostIssueComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], EventsModule);
export { EventsModule };
//# sourceMappingURL=/Users/ddziamalek/Desktop/OwlVisionFront/src/app/owlvision/events/events.module.js.map