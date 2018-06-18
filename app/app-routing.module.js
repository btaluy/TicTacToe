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
    },
    {
        path: "friends",
        loadChildren: "./pages/friends/friends.module#FriendsModule",
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUFnRjtBQUNoRixzREFBdUU7QUFDdkUsMkVBQWlFO0FBRWpFLElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsT0FBTztRQUNuQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixZQUFZLEVBQUUscUNBQXFDO1FBQ25ELFdBQVcsRUFBRSxDQUFDLGdDQUFVLENBQUM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsWUFBWSxFQUFFLHdDQUF3QztLQUN2RDtJQUNEO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsWUFBWSxFQUFFLDZEQUE2RDtRQUMzRSxXQUFXLEVBQUUsQ0FBQyxnQ0FBVSxDQUFDO0tBQzFCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsYUFBYTtRQUNuQixZQUFZLEVBQUUsMERBQTBEO0tBQ3pFO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsYUFBYTtRQUNuQixZQUFZLEVBQUUsMERBQTBEO1FBQ3hFLFdBQVcsRUFBRSxDQUFDLGdDQUFVLENBQUM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxTQUFTO1FBQ2YsWUFBWSxFQUFFLDhDQUE4QztRQUM1RCxXQUFXLEVBQUUsQ0FBQyxnQ0FBVSxDQUFDO0tBQzFCO0NBQ0osQ0FBQztBQVNGO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFQNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNQLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLGtCQUFrQixFQUFFLDBCQUFpQixFQUFDLENBQUM7YUFDbkY7WUFDRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcywgUHJlbG9hZGluZ1N0cmF0ZWd5LCBQcmVsb2FkQWxsTW9kdWxlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExvZ2luR3VhcmQgfSBmcm9tIFwifi9hc3NldHMvZ3VhcmRzL2xvZ2luLWd1YXJkLnNlcnZpY2VcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgcGF0aDogXCJcIixcbiAgICAgIHJlZGlyZWN0VG86IFwiL2hvbWVcIixcbiAgICAgIHBhdGhNYXRjaDogXCJmdWxsXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwiaG9tZVwiLFxuICAgICAgbG9hZENoaWxkcmVuOiBcIi4vcGFnZXMvaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIsXG4gICAgICBjYW5BY3RpdmF0ZTogW0xvZ2luR3VhcmRdXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBsb2FkQ2hpbGRyZW46IFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwic2luZ2xlcGxheWVyXCIsXG4gICAgICBsb2FkQ2hpbGRyZW46IFwiLi9wYWdlcy9zaW5nbGVwbGF5ZXIvc2luZ2xlcGxheWVyLm1vZHVsZSNTaW5nbGVQbGF5ZXJNb2R1bGVcIixcbiAgICAgIGNhbkFjdGl2YXRlOiBbTG9naW5HdWFyZF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwibXVsdGlwbGF5ZXJcIixcbiAgICAgIGxvYWRDaGlsZHJlbjogXCIuL3BhZ2VzL211bHRpcGxheWVyL211bHRpcGxheWVyLm1vZHVsZSNNdWx0aVBsYXllck1vZHVsZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiBcImxlYWRlcmJvYXJkXCIsXG4gICAgICBsb2FkQ2hpbGRyZW46IFwiLi9wYWdlcy9sZWFkZXJib2FyZC9sZWFkZXJib2FyZC5tb2R1bGUjTGVhZGVyYm9hcmRNb2R1bGVcIixcbiAgICAgIGNhbkFjdGl2YXRlOiBbTG9naW5HdWFyZF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwiZnJpZW5kc1wiLFxuICAgICAgbG9hZENoaWxkcmVuOiBcIi4vcGFnZXMvZnJpZW5kcy9mcmllbmRzLm1vZHVsZSNGcmllbmRzTW9kdWxlXCIsXG4gICAgICBjYW5BY3RpdmF0ZTogW0xvZ2luR3VhcmRdXG4gICAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMsIHsgcHJlbG9hZGluZ1N0cmF0ZWd5OiBQcmVsb2FkQWxsTW9kdWxlc30pXG4gICAgXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19
=======
>>>>>>> 6f646dd8ba60fbb337c8484e8fbb9156bbc5757c
