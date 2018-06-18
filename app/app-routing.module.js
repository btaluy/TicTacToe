"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var login_guard_service_1 = require("~/assets/guards/login-guard.service");
var routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        loadChildren: "./pages/home/home.module#HomeModule",
        canActivate: [login_guard_service_1.LoginGuard]
    },
    {
        path: "login",
        loadChildren: "./pages/login/login.module#LoginModule",
    },
    {
        path: "singleplayer",
        loadChildren: "./pages/singleplayer/singleplayer.module#SinglePlayerModule",
        canActivate: [login_guard_service_1.LoginGuard]
    },
    {
        path: "multiplayer",
        loadChildren: "./pages/multiplayer/multiplayer.module#MultiPlayerModule"
    },
    {
        path: "leaderboard",
        loadChildren: "./pages/leaderboard/leaderboard.module#LeaderboardModule",
        canActivate: [login_guard_service_1.LoginGuard]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_2.NativeScriptRouterModule,
                router_2.NativeScriptRouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_2.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
