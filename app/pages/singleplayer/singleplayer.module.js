"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var singleplayer_component_1 = require("./singleplayer.component");
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
                router_1.NativeScriptRouterModule.forChild(routes)
            ],
            declarations: [
                singleplayer_component_1.SinglePlayerComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbmdsZXBsYXllci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLHNEQUF1RTtBQUV2RSxtRUFBaUU7QUFFakUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4Q0FBcUIsRUFBRTtDQUNqRCxDQUFDO0FBaUJGO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixrQkFBa0I7UUFmOUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUM1QztZQUNELFlBQVksRUFBRTtnQkFDWiw4Q0FBcUI7YUFDdEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjthQUMzQjtTQUNKLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7QUFBdEIsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgU2luZ2xlUGxheWVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc2luZ2xlcGxheWVyLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogU2luZ2xlUGxheWVyQ29tcG9uZW50IH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgIFNpbmdsZVBsYXllckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2luZ2xlUGxheWVyTW9kdWxlIHsgfVxyXG4iXX0=