"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var home_component_1 = require("./home.component");
var common_components_module_1 = require("~/assets/components/common-components.module");
var routes = [
    { path: "", component: home_component_1.HomeComponent }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
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
                home_component_1.HomeComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            exports: [
                router_1.NativeScriptRouterModule
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsc0RBQXVFO0FBQ3ZFLHVFQUE4RDtBQUU5RCxtREFBaUQ7QUFDakQseUZBQXNGO0FBRXRGLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtDQUN6QyxDQUFDO0FBcUJGO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFuQnRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3pDLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDeEIsSUFBSSxFQUFFLDBCQUEwQjtpQkFDakMsQ0FBQztnQkFDRixpREFBc0I7YUFDekI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjthQUMzQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29tbW9uQ29tcG9uZW50c01vZHVsZSB9IGZyb20gXCJ+L2Fzc2V0cy9jb21wb25lbnRzL2NvbW1vbi1jb21wb25lbnRzLm1vZHVsZVwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcbiAgICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgJ2ZhJzogJy4vZm9udHMvZm9udC1hd2Vzb21lLmNzcycsXG4gICAgICAgIH0pLFxuICAgICAgICBDb21tb25Db21wb25lbnRzTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiJdfQ==