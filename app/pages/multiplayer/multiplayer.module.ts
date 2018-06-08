import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MultiPlayerComponent } from "./multiplayer.component";
import { CommonComponentsModule } from "~/assets/components/common-components.module";

const routes: Routes = [
    { path: "", component: MultiPlayerComponent }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes),
        CommonComponentsModule
    ],
    declarations: [
      MultiPlayerComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        NativeScriptRouterModule
    ]
})
export class MultiPlayerModule { }
