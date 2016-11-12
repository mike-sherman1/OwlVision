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
import { BrowseIssuesComponent } from "./browse/browse.component";
import { MyIssuesComponent } from "./my-issues/my-issues.component";
import { PostIssueComponent } from "./post/post.component";
var routes = [
    {
        path: '',
        data: {
            title: 'Issues'
        },
        children: [
            {
                path: 'post',
                component: PostIssueComponent,
                data: {
                    title: 'Post a new Issue'
                }
            },
            {
                path: 'browse',
                component: BrowseIssuesComponent,
                data: {
                    title: 'Browse Issues'
                }
            },
            {
                path: 'my-issues',
                component: MyIssuesComponent,
                data: {
                    title: 'My Issues'
                }
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'browse'
    },
];
var IssuesRoutingModule = (function () {
    function IssuesRoutingModule() {
    }
    return IssuesRoutingModule;
}());
IssuesRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }),
    __metadata("design:paramtypes", [])
], IssuesRoutingModule);
export { IssuesRoutingModule };
//# sourceMappingURL=/Users/ddziamalek/Desktop/OwlVisionFront/src/app/owlvision/issues/issues.routing.js.map