"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var common_services_module_1 = require("~/assets/services/common-services.module");
var login_guard_service_1 = require("~/assets/guards/login-guard.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                common_services_module_1.CommonServicesModule.forRoot(),
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [
                login_guard_service_1.LoginGuard
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0MsbUZBQWdGO0FBQ2hGLDJFQUFpRTtBQWlCakU7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQWZyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLFlBQVksRUFBRTtnQkFDWiw0QkFBWTthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLDZDQUFvQixDQUFDLE9BQU8sRUFBRTtnQkFDOUIsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7YUFDakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsZ0NBQVU7YUFDWDtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb21tb25TZXJ2aWNlc01vZHVsZSB9IGZyb20gXCJ+L2Fzc2V0cy9zZXJ2aWNlcy9jb21tb24tc2VydmljZXMubW9kdWxlXCI7XHJcbmltcG9ydCB7IExvZ2luR3VhcmQgfSBmcm9tIFwifi9hc3NldHMvZ3VhcmRzL2xvZ2luLWd1YXJkLnNlcnZpY2VcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgQ29tbW9uU2VydmljZXNNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgIEFwcFJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgTG9naW5HdWFyZFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=