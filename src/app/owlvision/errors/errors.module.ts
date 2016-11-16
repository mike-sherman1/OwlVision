import {NgModule}                 from '@angular/core';

import {p404Component}            from './404.component';
import {p500Component}            from './500.component';

import {ErrorsRoutingModule}       from './errors-routing.module';

@NgModule({
    imports: [ErrorsRoutingModule],
    declarations: [
        p404Component,
        p500Component
    ]
})
export class ErrorsModule {
}
