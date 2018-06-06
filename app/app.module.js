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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0MsbUZBQWdGO0FBQ2hGLDJFQUFpRTtBQWlCakU7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQWZyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLFlBQVksRUFBRTtnQkFDWiw0QkFBWTthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLDZDQUFvQixDQUFDLE9BQU8sRUFBRTtnQkFDOUIsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7YUFDakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsZ0NBQVU7YUFDWDtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbW1vblNlcnZpY2VzTW9kdWxlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzL2NvbW1vbi1zZXJ2aWNlcy5tb2R1bGVcIjtcbmltcG9ydCB7IExvZ2luR3VhcmQgfSBmcm9tIFwifi9hc3NldHMvZ3VhcmRzL2xvZ2luLWd1YXJkLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICBDb21tb25TZXJ2aWNlc01vZHVsZS5mb3JSb290KCksXG4gICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgIExvZ2luR3VhcmRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=