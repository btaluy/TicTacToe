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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUFnRjtBQUNoRixzREFBdUU7QUFDdkUsMkVBQWlFO0FBRWpFLElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsT0FBTztRQUNuQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixZQUFZLEVBQUUscUNBQXFDO1FBQ25ELFdBQVcsRUFBRSxDQUFDLGdDQUFVLENBQUM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsWUFBWSxFQUFFLHdDQUF3QztLQUN2RDtJQUNEO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsWUFBWSxFQUFFLDZEQUE2RDtRQUMzRSxXQUFXLEVBQUUsQ0FBQyxnQ0FBVSxDQUFDO0tBQzFCO0NBQ0osQ0FBQztBQVNGO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFQNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNQLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLGtCQUFrQixFQUFFLDBCQUFpQixFQUFDLENBQUM7YUFDbkY7WUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcywgUHJlbG9hZGluZ1N0cmF0ZWd5LCBQcmVsb2FkQWxsTW9kdWxlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExvZ2luR3VhcmQgfSBmcm9tIFwifi9hc3NldHMvZ3VhcmRzL2xvZ2luLWd1YXJkLnNlcnZpY2VcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgcGF0aDogXCJcIixcbiAgICAgIHJlZGlyZWN0VG86IFwiL2hvbWVcIixcbiAgICAgIHBhdGhNYXRjaDogXCJmdWxsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgICAgbG9hZENoaWxkcmVuOiBcIi4vcGFnZXMvaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIsXG4gICAgICBjYW5BY3RpdmF0ZTogW0xvZ2luR3VhcmRdXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBsb2FkQ2hpbGRyZW46IFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwic2luZ2xlcGxheWVyXCIsXG4gICAgICBsb2FkQ2hpbGRyZW46IFwiLi9wYWdlcy9zaW5nbGVwbGF5ZXIvc2luZ2xlcGxheWVyLm1vZHVsZSNTaW5nbGVQbGF5ZXJNb2R1bGVcIixcbiAgICAgIGNhbkFjdGl2YXRlOiBbTG9naW5HdWFyZF1cbiAgICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywgeyBwcmVsb2FkaW5nU3RyYXRlZ3k6IFByZWxvYWRBbGxNb2R1bGVzfSlcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=