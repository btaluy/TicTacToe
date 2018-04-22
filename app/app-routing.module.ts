import { NgModule } from "@angular/core";
import { Routes, PreloadingStrategy, PreloadAllModules } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./pages/home/home.module#HomeModule" }
];

@NgModule({
    imports: [
      NativeScriptRouterModule,
      NativeScriptRouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
