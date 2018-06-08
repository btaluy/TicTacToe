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
        loadChildren: "./pages/multiplayer/multiplayer.module#MultiPlayerModule",
        canActivate: [login_guard_service_1.LoginGuard]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUFnRjtBQUNoRixzREFBdUU7QUFDdkUsMkVBQWlFO0FBRWpFLElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsT0FBTztRQUNuQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixZQUFZLEVBQUUscUNBQXFDO1FBQ25ELFdBQVcsRUFBRSxDQUFDLGdDQUFVLENBQUM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsWUFBWSxFQUFFLHdDQUF3QztLQUN2RDtJQUNEO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsWUFBWSxFQUFFLDZEQUE2RDtRQUMzRSxXQUFXLEVBQUUsQ0FBQyxnQ0FBVSxDQUFDO0tBQzFCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsYUFBYTtRQUNuQixZQUFZLEVBQUUsMERBQTBEO1FBQ3hFLFdBQVcsRUFBRSxDQUFDLGdDQUFVLENBQUM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxhQUFhO1FBQ25CLFlBQVksRUFBRSwwREFBMEQ7UUFDeEUsV0FBVyxFQUFFLENBQUMsZ0NBQVUsQ0FBQztLQUMxQjtDQUNKLENBQUM7QUFTRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBUDVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSwwQkFBaUIsRUFBQyxDQUFDO2FBQ25GO1lBQ0QsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcywgUHJlbG9hZGluZ1N0cmF0ZWd5LCBQcmVsb2FkQWxsTW9kdWxlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMb2dpbkd1YXJkIH0gZnJvbSBcIn4vYXNzZXRzL2d1YXJkcy9sb2dpbi1ndWFyZC5zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgcGF0aDogXCJcIixcclxuICAgICAgcmVkaXJlY3RUbzogXCIvaG9tZVwiLFxyXG4gICAgICBwYXRoTWF0Y2g6IFwiZnVsbFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiBcImhvbWVcIixcclxuICAgICAgbG9hZENoaWxkcmVuOiBcIi4vcGFnZXMvaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIsXHJcbiAgICAgIGNhbkFjdGl2YXRlOiBbTG9naW5HdWFyZF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6IFwibG9naW5cIixcclxuICAgICAgbG9hZENoaWxkcmVuOiBcIi4vcGFnZXMvbG9naW4vbG9naW4ubW9kdWxlI0xvZ2luTW9kdWxlXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiBcInNpbmdsZXBsYXllclwiLFxyXG4gICAgICBsb2FkQ2hpbGRyZW46IFwiLi9wYWdlcy9zaW5nbGVwbGF5ZXIvc2luZ2xlcGxheWVyLm1vZHVsZSNTaW5nbGVQbGF5ZXJNb2R1bGVcIixcclxuICAgICAgY2FuQWN0aXZhdGU6IFtMb2dpbkd1YXJkXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGF0aDogXCJtdWx0aXBsYXllclwiLFxyXG4gICAgICBsb2FkQ2hpbGRyZW46IFwiLi9wYWdlcy9tdWx0aXBsYXllci9tdWx0aXBsYXllci5tb2R1bGUjTXVsdGlQbGF5ZXJNb2R1bGVcIixcclxuICAgICAgY2FuQWN0aXZhdGU6IFtMb2dpbkd1YXJkXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGF0aDogXCJsZWFkZXJib2FyZFwiLFxyXG4gICAgICBsb2FkQ2hpbGRyZW46IFwiLi9wYWdlcy9sZWFkZXJib2FyZC9sZWFkZXJib2FyZC5tb2R1bGUjTGVhZGVyYm9hcmRNb2R1bGVcIixcclxuICAgICAgY2FuQWN0aXZhdGU6IFtMb2dpbkd1YXJkXVxyXG4gICAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMsIHsgcHJlbG9hZGluZ1N0cmF0ZWd5OiBQcmVsb2FkQWxsTW9kdWxlc30pXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==