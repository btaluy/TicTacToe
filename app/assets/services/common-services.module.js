"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./index");
var application_lifecycle_1 = require("~/assets/modules/application-lifecycle/application-lifecycle");
var CommonServicesModule = /** @class */ (function () {
    function CommonServicesModule(parentModule) {
        if (parentModule) {
            throw new Error('CommonServicesModule already loaded; Import in root module only.');
        }
    }
    CommonServicesModule_1 = CommonServicesModule;
    CommonServicesModule.forRoot = function () {
        return {
            ngModule: CommonServicesModule_1,
            providers: [
                index_1.NavigationService,
                index_1.PopupService,
                index_1.SinglePlayerService,
                index_1.AudioService,
                application_lifecycle_1.ApplicationLifecycle
            ]
        };
    };
    CommonServicesModule = CommonServicesModule_1 = __decorate([
        core_1.NgModule({}),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [CommonServicesModule])
    ], CommonServicesModule);
    return CommonServicesModule;
    var CommonServicesModule_1;
}());
exports.CommonServicesModule = CommonServicesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNlcnZpY2VzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1vbi1zZXJ2aWNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsaUNBQTZGO0FBQzdGLHNHQUFvRztBQUdwRztJQWNFLDhCQUEyQyxZQUFrQztRQUMzRSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQztRQUN0RixDQUFDO0lBQ0gsQ0FBQzs2QkFsQlUsb0JBQW9CO0lBQ2pCLDRCQUFPLEdBQXJCO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLHNCQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QseUJBQWlCO2dCQUNqQixvQkFBWTtnQkFDWiwyQkFBbUI7Z0JBQ25CLG9CQUFZO2dCQUNaLDRDQUFvQjthQUNyQjtTQUNGLENBQUM7SUFDSixDQUFDO0lBWlUsb0JBQW9CO1FBRGhDLGVBQVEsQ0FBQyxFQUFFLENBQUM7UUFlUyxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTt5Q0FBZSxvQkFBb0I7T0FkbEUsb0JBQW9CLENBbUJoQztJQUFELDJCQUFDOztDQUFBLEFBbkJELElBbUJDO0FBbkJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1ZGlvU2VydmljZSwgTmF2aWdhdGlvblNlcnZpY2UsIFBvcHVwU2VydmljZSwgU2luZ2xlUGxheWVyU2VydmljZSB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25MaWZlY3ljbGUgfSBmcm9tICd+L2Fzc2V0cy9tb2R1bGVzL2FwcGxpY2F0aW9uLWxpZmVjeWNsZS9hcHBsaWNhdGlvbi1saWZlY3ljbGUnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgQ29tbW9uU2VydmljZXNNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb21tb25TZXJ2aWNlc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICAgICAgUG9wdXBTZXJ2aWNlLFxuICAgICAgICBTaW5nbGVQbGF5ZXJTZXJ2aWNlLFxuICAgICAgICBBdWRpb1NlcnZpY2UsXG4gICAgICAgIEFwcGxpY2F0aW9uTGlmZWN5Y2xlXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvbW1vblNlcnZpY2VzTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21tb25TZXJ2aWNlc01vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XG4gICAgfVxuICB9XG59Il19