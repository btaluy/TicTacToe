"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var common_services_module_1 = require("~/services/common-services.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [app_component_1.AppComponent],
            imports: [
                common_services_module_1.CommonServicesModule.forRoot(),
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0MsNEVBQXlFO0FBWXpFO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFWckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixZQUFZLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQzVCLE9BQU8sRUFBRTtnQkFDTCw2Q0FBb0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQzlCLHdDQUFrQjtnQkFDbEIscUNBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbW1vblNlcnZpY2VzTW9kdWxlIH0gZnJvbSBcIn4vc2VydmljZXMvY29tbW9uLXNlcnZpY2VzLm1vZHVsZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vblNlcnZpY2VzTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=