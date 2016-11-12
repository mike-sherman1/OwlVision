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
import { BrowseStudyGroupsComponent } from "./browse/browse.component";
import { MyStudyGroupsComponent } from "./my-study-groups/my-study-groups.component";
import { PostStudyGroupComponent } from "./post/post.component";
var routes = [
    {
        path: '',
        data: {
            title: 'Study Groups'
        },
        children: [
            {
                path: 'post',
                component: PostStudyGroupComponent,
                data: {
                    title: 'Post a new Study Group'
                }
            },
            {
                path: 'browse',
                component: BrowseStudyGroupsComponent,
                data: {
                    title: 'Browse Study Groups'
                }
            },
            {
                path: 'my-study-groups',
                component: MyStudyGroupsComponent,
                data: {
                    title: 'My Study Groups'
                }
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'browse'
    },
];
var StudyGroupsRoutingModule = (function () {
    function StudyGroupsRoutingModule() {
    }
    return StudyGroupsRoutingModule;
}());
StudyGroupsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }),
    __metadata("design:paramtypes", [])
], StudyGroupsRoutingModule);
export { StudyGroupsRoutingModule };
//# sourceMappingURL=/Users/ddziamalek/Desktop/OwlVisionFront/src/app/owlvision/study-groups/study-groups.routing.js.map