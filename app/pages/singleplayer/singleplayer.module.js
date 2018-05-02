"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var singleplayer_component_1 = require("./singleplayer.component");
var state_pipe_1 = require("~/assets/pipes/state.pipe");
var routes = [
    { path: "", component: singleplayer_component_1.SinglePlayerComponent }
];
var SinglePlayerModule = /** @class */ (function () {
    function SinglePlayerModule() {
    }
    SinglePlayerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule.forChild(routes),
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './fonts/font-awesome.css',
                })
            ],
            declarations: [
                singleplayer_component_1.SinglePlayerComponent,
                state_pipe_1.StatePipe
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            exports: [
                router_1.NativeScriptRouterModule
            ]
        })
    ], SinglePlayerModule);
    return SinglePlayerModule;
}());
exports.SinglePlayerModule = SinglePlayerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbmdsZXBsYXllci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLHNEQUF1RTtBQUN2RSx1RUFBOEQ7QUFFOUQsbUVBQWlFO0FBQ2pFLHdEQUFzRDtBQUV0RCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFFO0NBQ2pELENBQUM7QUFxQkY7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQW5COUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDekMsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN4QixJQUFJLEVBQUUsMEJBQTBCO2lCQUNqQyxDQUFDO2FBQ0w7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osOENBQXFCO2dCQUNyQixzQkFBUzthQUNWO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7YUFDM0I7U0FDSixDQUFDO09BQ1csa0JBQWtCLENBQUk7SUFBRCx5QkFBQztDQUFBLEFBQW5DLElBQW1DO0FBQXRCLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW5neC1mb250aWNvblwiO1xyXG5cclxuaW1wb3J0IHsgU2luZ2xlUGxheWVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc2luZ2xlcGxheWVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTdGF0ZVBpcGUgfSBmcm9tIFwifi9hc3NldHMvcGlwZXMvc3RhdGUucGlwZVwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogU2luZ2xlUGxheWVyQ29tcG9uZW50IH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxyXG4gICAgICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICAgICAgJ2ZhJzogJy4vZm9udHMvZm9udC1hd2Vzb21lLmNzcycsXHJcbiAgICAgICAgfSlcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgU2luZ2xlUGxheWVyQ29tcG9uZW50LFxyXG4gICAgICBTdGF0ZVBpcGVcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpbmdsZVBsYXllck1vZHVsZSB7IH1cclxuIl19