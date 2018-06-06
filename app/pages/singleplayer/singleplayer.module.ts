import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SinglePlayerComponent } from "./singleplayer.component";
import { StatePipe } from "~/assets/pipes/state.pipe";
import { CommonComponentsModule } from "~/assets/components/common-components.module";

const routes: Routes = [
    { path: "", component: SinglePlayerComponent }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes),
        CommonComponentsModule
    ],
    declarations: [
      SinglePlayerComponent,
      StatePipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        NativeScriptRouterModule
    ]
})
export class SinglePlayerModule { }
