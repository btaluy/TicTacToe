"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbmdsZXBsYXllci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLHNEQUF1RTtBQUV2RSxtRUFBaUU7QUFDakUsd0RBQXNEO0FBQ3RELHlGQUFzRjtBQUV0RixJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFFO0NBQ2pELENBQUM7QUFtQkY7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQWpCOUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDekMsaURBQXNCO2FBQ3pCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDhDQUFxQjtnQkFDckIsc0JBQVM7YUFDVjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2FBQzNCO1NBQ0osQ0FBQztPQUNXLGtCQUFrQixDQUFJO0lBQUQseUJBQUM7Q0FBQSxBQUFuQyxJQUFtQztBQUF0QixnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFNpbmdsZVBsYXllckNvbXBvbmVudCB9IGZyb20gXCIuL3NpbmdsZXBsYXllci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFN0YXRlUGlwZSB9IGZyb20gXCJ+L2Fzc2V0cy9waXBlcy9zdGF0ZS5waXBlXCI7XG5pbXBvcnQgeyBDb21tb25Db21wb25lbnRzTW9kdWxlIH0gZnJvbSBcIn4vYXNzZXRzL2NvbXBvbmVudHMvY29tbW9uLWNvbXBvbmVudHMubW9kdWxlXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBTaW5nbGVQbGF5ZXJDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXG4gICAgICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgU2luZ2xlUGxheWVyQ29tcG9uZW50LFxuICAgICAgU3RhdGVQaXBlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaW5nbGVQbGF5ZXJNb2R1bGUgeyB9XG4iXX0=