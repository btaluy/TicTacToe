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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUFnRjtBQUNoRixzREFBdUU7QUFDdkUsMkVBQWlFO0FBRWpFLElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsT0FBTztRQUNuQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixZQUFZLEVBQUUscUNBQXFDO1FBQ25ELFdBQVcsRUFBRSxDQUFDLGdDQUFVLENBQUM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsWUFBWSxFQUFFLHdDQUF3QztLQUN2RDtJQUNEO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsWUFBWSxFQUFFLDZEQUE2RDtRQUMzRSxXQUFXLEVBQUUsQ0FBQyxnQ0FBVSxDQUFDO0tBQzFCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsYUFBYTtRQUNuQixZQUFZLEVBQUUsMERBQTBEO0tBQ3pFO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsYUFBYTtRQUNuQixZQUFZLEVBQUUsMERBQTBEO1FBQ3hFLFdBQVcsRUFBRSxDQUFDLGdDQUFVLENBQUM7S0FDMUI7Q0FDSixDQUFDO0FBU0Y7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQVA1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ1AsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsMEJBQWlCLEVBQUMsQ0FBQzthQUNuRjtZQUNELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBQcmVsb2FkaW5nU3RyYXRlZ3ksIFByZWxvYWRBbGxNb2R1bGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTG9naW5HdWFyZCB9IGZyb20gXCJ+L2Fzc2V0cy9ndWFyZHMvbG9naW4tZ3VhcmQuc2VydmljZVwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgcmVkaXJlY3RUbzogXCIvaG9tZVwiLFxuICAgICAgcGF0aE1hdGNoOiBcImZ1bGxcIlxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogXCJob21lXCIsXG4gICAgICBsb2FkQ2hpbGRyZW46IFwiLi9wYWdlcy9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIixcbiAgICAgIGNhbkFjdGl2YXRlOiBbTG9naW5HdWFyZF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGxvYWRDaGlsZHJlbjogXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLm1vZHVsZSNMb2dpbk1vZHVsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogXCJzaW5nbGVwbGF5ZXJcIixcbiAgICAgIGxvYWRDaGlsZHJlbjogXCIuL3BhZ2VzL3NpbmdsZXBsYXllci9zaW5nbGVwbGF5ZXIubW9kdWxlI1NpbmdsZVBsYXllck1vZHVsZVwiLFxuICAgICAgY2FuQWN0aXZhdGU6IFtMb2dpbkd1YXJkXVxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogXCJtdWx0aXBsYXllclwiLFxuICAgICAgbG9hZENoaWxkcmVuOiBcIi4vcGFnZXMvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIubW9kdWxlI011bHRpUGxheWVyTW9kdWxlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwibGVhZGVyYm9hcmRcIixcbiAgICAgIGxvYWRDaGlsZHJlbjogXCIuL3BhZ2VzL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLm1vZHVsZSNMZWFkZXJib2FyZE1vZHVsZVwiLFxuICAgICAgY2FuQWN0aXZhdGU6IFtMb2dpbkd1YXJkXVxuICAgIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7IHByZWxvYWRpbmdTdHJhdGVneTogUHJlbG9hZEFsbE1vZHVsZXN9KVxuICAgIF0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==