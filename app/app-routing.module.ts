import { NgModule } from "@angular/core";
import { Routes, PreloadingStrategy, PreloadAllModules } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginGuard } from "~/assets/guards/login-guard.service";

const routes: Routes = [
    {
      path: "",
      redirectTo: "/home",
      pathMatch: "full"
    },
    {
      path: "home",
      loadChildren: "./pages/home/home.module#HomeModule",
      canActivate: [LoginGuard]
    },
    {
      path: "login",
      loadChildren: "./pages/login/login.module#LoginModule",
    },
    {
      path: "singleplayer",
      loadChildren: "./pages/singleplayer/singleplayer.module#SinglePlayerModule",
      canActivate: [LoginGuard]
    }
];

@NgModule({
    imports: [
      NativeScriptRouterModule,
      NativeScriptRouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
    ],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
