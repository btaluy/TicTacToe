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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNlcnZpY2VzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1vbi1zZXJ2aWNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsaUNBQTZGO0FBQzdGLHNHQUFvRztBQUdwRztJQWNFLDhCQUEyQyxZQUFrQztRQUMzRSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQztRQUN0RixDQUFDO0lBQ0gsQ0FBQzs2QkFsQlUsb0JBQW9CO0lBQ2pCLDRCQUFPLEdBQXJCO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLHNCQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QseUJBQWlCO2dCQUNqQixvQkFBWTtnQkFDWiwyQkFBbUI7Z0JBQ25CLG9CQUFZO2dCQUNaLDRDQUFvQjthQUNyQjtTQUNGLENBQUM7SUFDSixDQUFDO0lBWlUsb0JBQW9CO1FBRGhDLGVBQVEsQ0FBQyxFQUFFLENBQUM7UUFlUyxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTt5Q0FBZSxvQkFBb0I7T0FkbEUsb0JBQW9CLENBbUJoQztJQUFELDJCQUFDOztDQUFBLEFBbkJELElBbUJDO0FBbkJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXVkaW9TZXJ2aWNlLCBOYXZpZ2F0aW9uU2VydmljZSwgUG9wdXBTZXJ2aWNlLCBTaW5nbGVQbGF5ZXJTZXJ2aWNlIH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uTGlmZWN5Y2xlIH0gZnJvbSAnfi9hc3NldHMvbW9kdWxlcy9hcHBsaWNhdGlvbi1saWZlY3ljbGUvYXBwbGljYXRpb24tbGlmZWN5Y2xlJztcclxuXHJcbkBOZ01vZHVsZSh7fSlcclxuZXhwb3J0IGNsYXNzIENvbW1vblNlcnZpY2VzTW9kdWxlIHtcclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQ29tbW9uU2VydmljZXNNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE5hdmlnYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIFBvcHVwU2VydmljZSxcclxuICAgICAgICBTaW5nbGVQbGF5ZXJTZXJ2aWNlLFxyXG4gICAgICAgIEF1ZGlvU2VydmljZSxcclxuICAgICAgICBBcHBsaWNhdGlvbkxpZmVjeWNsZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29tbW9uU2VydmljZXNNb2R1bGUpIHtcclxuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21tb25TZXJ2aWNlc01vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19