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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUFnRjtBQUNoRixzREFBdUU7QUFDdkUsMkVBQWlFO0FBRWpFLElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsT0FBTztRQUNuQixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixZQUFZLEVBQUUscUNBQXFDO1FBQ25ELFdBQVcsRUFBRSxDQUFDLGdDQUFVLENBQUM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsWUFBWSxFQUFFLHdDQUF3QztLQUN2RDtJQUNEO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsWUFBWSxFQUFFLDZEQUE2RDtRQUMzRSxXQUFXLEVBQUUsQ0FBQyxnQ0FBVSxDQUFDO0tBQzFCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsYUFBYTtRQUNuQixZQUFZLEVBQUUsMERBQTBEO1FBQ3hFLFdBQVcsRUFBRSxDQUFDLGdDQUFVLENBQUM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxhQUFhO1FBQ25CLFlBQVksRUFBRSwwREFBMEQ7UUFDeEUsV0FBVyxFQUFFLENBQUMsZ0NBQVUsQ0FBQztLQUMxQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFNBQVM7UUFDZixZQUFZLEVBQUUsOENBQThDO1FBQzVELFdBQVcsRUFBRSxDQUFDLGdDQUFVLENBQUM7S0FDNUI7Q0FDRixDQUFDO0FBU0Y7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQVA1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ1AsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsMEJBQWlCLEVBQUMsQ0FBQzthQUNuRjtZQUNELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFByZWxvYWRpbmdTdHJhdGVneSwgUHJlbG9hZEFsbE1vZHVsZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9naW5HdWFyZCB9IGZyb20gXCJ+L2Fzc2V0cy9ndWFyZHMvbG9naW4tZ3VhcmQuc2VydmljZVwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6IFwiXCIsXHJcbiAgICAgIHJlZGlyZWN0VG86IFwiL2hvbWVcIixcclxuICAgICAgcGF0aE1hdGNoOiBcImZ1bGxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGF0aDogXCJob21lXCIsXHJcbiAgICAgIGxvYWRDaGlsZHJlbjogXCIuL3BhZ2VzL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiLFxyXG4gICAgICBjYW5BY3RpdmF0ZTogW0xvZ2luR3VhcmRdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXHJcbiAgICAgIGxvYWRDaGlsZHJlbjogXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLm1vZHVsZSNMb2dpbk1vZHVsZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGF0aDogXCJzaW5nbGVwbGF5ZXJcIixcclxuICAgICAgbG9hZENoaWxkcmVuOiBcIi4vcGFnZXMvc2luZ2xlcGxheWVyL3NpbmdsZXBsYXllci5tb2R1bGUjU2luZ2xlUGxheWVyTW9kdWxlXCIsXHJcbiAgICAgIGNhbkFjdGl2YXRlOiBbTG9naW5HdWFyZF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6IFwibXVsdGlwbGF5ZXJcIixcclxuICAgICAgbG9hZENoaWxkcmVuOiBcIi4vcGFnZXMvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIubW9kdWxlI011bHRpUGxheWVyTW9kdWxlXCIsXHJcbiAgICAgIGNhbkFjdGl2YXRlOiBbTG9naW5HdWFyZF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6IFwibGVhZGVyYm9hcmRcIixcclxuICAgICAgbG9hZENoaWxkcmVuOiBcIi4vcGFnZXMvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQubW9kdWxlI0xlYWRlcmJvYXJkTW9kdWxlXCIsXHJcbiAgICAgIGNhbkFjdGl2YXRlOiBbTG9naW5HdWFyZF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6IFwiZnJpZW5kc1wiLFxyXG4gICAgICBsb2FkQ2hpbGRyZW46IFwiLi9wYWdlcy9mcmllbmRzL2ZyaWVuZHMubW9kdWxlI0ZyaWVuZHNNb2R1bGVcIixcclxuICAgICAgY2FuQWN0aXZhdGU6IFtMb2dpbkd1YXJkXVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7IHByZWxvYWRpbmdTdHJhdGVneTogUHJlbG9hZEFsbE1vZHVsZXN9KVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=