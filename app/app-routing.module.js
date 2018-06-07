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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUFnRjtBQUNoRixzREFBdUU7QUFDdkUsMkVBQWlFO0FBRWpFLElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsT0FBTztRQUNuQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixZQUFZLEVBQUUscUNBQXFDO1FBQ25ELFdBQVcsRUFBRSxDQUFDLGdDQUFVLENBQUM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsWUFBWSxFQUFFLHdDQUF3QztLQUN2RDtJQUNEO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsWUFBWSxFQUFFLDZEQUE2RDtRQUMzRSxXQUFXLEVBQUUsQ0FBQyxnQ0FBVSxDQUFDO0tBQzFCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsYUFBYTtRQUNuQixZQUFZLEVBQUUsMERBQTBEO1FBQ3hFLFdBQVcsRUFBRSxDQUFDLGdDQUFVLENBQUM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxhQUFhO1FBQ25CLFlBQVksRUFBRSwwREFBMEQ7UUFDeEUsV0FBVyxFQUFFLENBQUMsZ0NBQVUsQ0FBQztLQUMxQjtDQUNKLENBQUM7QUFTRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBUDVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSwwQkFBaUIsRUFBQyxDQUFDO2FBQ25GO1lBQ0QsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMsIFByZWxvYWRpbmdTdHJhdGVneSwgUHJlbG9hZEFsbE1vZHVsZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBMb2dpbkd1YXJkIH0gZnJvbSBcIn4vYXNzZXRzL2d1YXJkcy9sb2dpbi1ndWFyZC5zZXJ2aWNlXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICByZWRpcmVjdFRvOiBcIi9ob21lXCIsXG4gICAgICBwYXRoTWF0Y2g6IFwiZnVsbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiBcImhvbWVcIixcbiAgICAgIGxvYWRDaGlsZHJlbjogXCIuL3BhZ2VzL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiLFxuICAgICAgY2FuQWN0aXZhdGU6IFtMb2dpbkd1YXJkXVxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgbG9hZENoaWxkcmVuOiBcIi4vcGFnZXMvbG9naW4vbG9naW4ubW9kdWxlI0xvZ2luTW9kdWxlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiBcInNpbmdsZXBsYXllclwiLFxuICAgICAgbG9hZENoaWxkcmVuOiBcIi4vcGFnZXMvc2luZ2xlcGxheWVyL3NpbmdsZXBsYXllci5tb2R1bGUjU2luZ2xlUGxheWVyTW9kdWxlXCIsXG4gICAgICBjYW5BY3RpdmF0ZTogW0xvZ2luR3VhcmRdXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiBcIm11bHRpcGxheWVyXCIsXG4gICAgICBsb2FkQ2hpbGRyZW46IFwiLi9wYWdlcy9tdWx0aXBsYXllci9tdWx0aXBsYXllci5tb2R1bGUjTXVsdGlQbGF5ZXJNb2R1bGVcIixcbiAgICAgIGNhbkFjdGl2YXRlOiBbTG9naW5HdWFyZF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwibGVhZGVyYm9hcmRcIixcbiAgICAgIGxvYWRDaGlsZHJlbjogXCIuL3BhZ2VzL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLm1vZHVsZSNMZWFkZXJib2FyZE1vZHVsZVwiLFxuICAgICAgY2FuQWN0aXZhdGU6IFtMb2dpbkd1YXJkXVxuICAgIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7IHByZWxvYWRpbmdTdHJhdGVneTogUHJlbG9hZEFsbE1vZHVsZXN9KVxuICAgIF0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==