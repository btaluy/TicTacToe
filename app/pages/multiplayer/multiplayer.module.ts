import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CommonComponentsModule } from "~/assets/components/common-components.module";
import { MultiPlayerComponent } from "./multiplayer.component";
import { SessionComponent } from "./session/session.component";

const routes: Routes = [
  { path: "", component: MultiPlayerComponent },
  { path: "mpSession", component: SessionComponent}
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes),
        CommonComponentsModule
    ],
    declarations: [
      MultiPlayerComponent,
      SessionComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        NativeScriptRouterModule
    ]
})
export class MultiPlayerModule { }
