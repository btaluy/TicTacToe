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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUFnRjtBQUNoRixzREFBdUU7QUFDdkUsMkVBQWlFO0FBRWpFLElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsT0FBTztRQUNuQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixZQUFZLEVBQUUscUNBQXFDO1FBQ25ELFdBQVcsRUFBRSxDQUFDLGdDQUFVLENBQUM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsWUFBWSxFQUFFLHdDQUF3QztLQUN2RDtJQUNEO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsWUFBWSxFQUFFLDZEQUE2RDtRQUMzRSxXQUFXLEVBQUUsQ0FBQyxnQ0FBVSxDQUFDO0tBQzFCO0NBQ0osQ0FBQztBQVNGO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFQNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNQLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLGtCQUFrQixFQUFFLDBCQUFpQixFQUFDLENBQUM7YUFDbkY7WUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzLCBQcmVsb2FkaW5nU3RyYXRlZ3ksIFByZWxvYWRBbGxNb2R1bGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvZ2luR3VhcmQgfSBmcm9tIFwifi9hc3NldHMvZ3VhcmRzL2xvZ2luLWd1YXJkLnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICBwYXRoOiBcIlwiLFxyXG4gICAgICByZWRpcmVjdFRvOiBcIi9ob21lXCIsXHJcbiAgICAgIHBhdGhNYXRjaDogXCJmdWxsXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6IFwiaG9tZVwiLFxyXG4gICAgICBsb2FkQ2hpbGRyZW46IFwiLi9wYWdlcy9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIixcclxuICAgICAgY2FuQWN0aXZhdGU6IFtMb2dpbkd1YXJkXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGF0aDogXCJsb2dpblwiLFxyXG4gICAgICBsb2FkQ2hpbGRyZW46IFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6IFwic2luZ2xlcGxheWVyXCIsXHJcbiAgICAgIGxvYWRDaGlsZHJlbjogXCIuL3BhZ2VzL3NpbmdsZXBsYXllci9zaW5nbGVwbGF5ZXIubW9kdWxlI1NpbmdsZVBsYXllck1vZHVsZVwiLFxyXG4gICAgICBjYW5BY3RpdmF0ZTogW0xvZ2luR3VhcmRdXHJcbiAgICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywgeyBwcmVsb2FkaW5nU3RyYXRlZ3k6IFByZWxvYWRBbGxNb2R1bGVzfSlcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIl19