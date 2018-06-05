"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var singleplayer_component_1 = require("./singleplayer.component");
var state_pipe_1 = require("~/assets/pipes/state.pipe");
var common_components_module_1 = require("~/assets/components/common-components.module");
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
                }),
                common_components_module_1.CommonComponentsModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbmdsZXBsYXllci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLHNEQUF1RTtBQUN2RSx1RUFBOEQ7QUFFOUQsbUVBQWlFO0FBQ2pFLHdEQUFzRDtBQUN0RCx5RkFBc0Y7QUFFdEYsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4Q0FBcUIsRUFBRTtDQUNqRCxDQUFDO0FBc0JGO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixrQkFBa0I7UUFwQjlCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3pDLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDeEIsSUFBSSxFQUFFLDBCQUEwQjtpQkFDakMsQ0FBQztnQkFDRixpREFBc0I7YUFDekI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osOENBQXFCO2dCQUNyQixzQkFBUzthQUNWO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7YUFDM0I7U0FDSixDQUFDO09BQ1csa0JBQWtCLENBQUk7SUFBRCx5QkFBQztDQUFBLEFBQW5DLElBQW1DO0FBQXRCLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb25cIjtcblxuaW1wb3J0IHsgU2luZ2xlUGxheWVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc2luZ2xlcGxheWVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU3RhdGVQaXBlIH0gZnJvbSBcIn4vYXNzZXRzL3BpcGVzL3N0YXRlLnBpcGVcIjtcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudHNNb2R1bGUgfSBmcm9tIFwifi9hc3NldHMvY29tcG9uZW50cy9jb21tb24tY29tcG9uZW50cy5tb2R1bGVcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFNpbmdsZVBsYXllckNvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcbiAgICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgJ2ZhJzogJy4vZm9udHMvZm9udC1hd2Vzb21lLmNzcycsXG4gICAgICAgIH0pLFxuICAgICAgICBDb21tb25Db21wb25lbnRzTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgIFNpbmdsZVBsYXllckNvbXBvbmVudCxcbiAgICAgIFN0YXRlUGlwZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU2luZ2xlUGxheWVyTW9kdWxlIHsgfVxuIl19