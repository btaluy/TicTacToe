import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";

import { LeaderboardComponent } from "./leaderboard.component";
import { CommonComponentsModule } from "~/assets/components/common-components.module";

const routes: Routes = [
    { path: "", component: LeaderboardComponent }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes),
        TNSFontIconModule.forRoot({
          'fa': './fonts/font-awesome.css',
        }),
        CommonComponentsModule
    ],
    declarations: [
      LeaderboardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        NativeScriptRouterModule
    ]
})
export class LeaderboardModule { }
