"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./index");
var application_lifecycle_1 = require("~/assets/modules/application-lifecycle/application-lifecycle");
var leaderboard_service_1 = require("~/assets/services/leaderboard.service");
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
                index_1.UserService,
                leaderboard_service_1.LeaderBoardService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNlcnZpY2VzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1vbi1zZXJ2aWNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsaUNBQTBHO0FBQzFHLHNHQUFvRztBQUNwRyw2RUFBMkU7QUFHM0U7SUFnQkUsOEJBQTJDLFlBQWtDO1FBQzNFLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO1FBQ3RGLENBQUM7SUFDSCxDQUFDOzZCQXBCVSxvQkFBb0I7SUFDakIsNEJBQU8sR0FBckI7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsc0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCx5QkFBaUI7Z0JBQ2pCLG9CQUFZO2dCQUNaLDJCQUFtQjtnQkFDbkIsb0JBQVk7Z0JBQ1osbUJBQVc7Z0JBQ1gsd0NBQWtCO2dCQUNsQiw0Q0FBb0I7YUFDckI7U0FDRixDQUFDO0lBQ0osQ0FBQztJQWRVLG9CQUFvQjtRQURoQyxlQUFRLENBQUMsRUFBRSxDQUFDO1FBaUJTLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3lDQUFlLG9CQUFvQjtPQWhCbEUsb0JBQW9CLENBcUJoQztJQUFELDJCQUFDOztDQUFBLEFBckJELElBcUJDO0FBckJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXVkaW9TZXJ2aWNlLCBOYXZpZ2F0aW9uU2VydmljZSwgUG9wdXBTZXJ2aWNlLCBTaW5nbGVQbGF5ZXJTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkxpZmVjeWNsZSB9IGZyb20gJ34vYXNzZXRzL21vZHVsZXMvYXBwbGljYXRpb24tbGlmZWN5Y2xlL2FwcGxpY2F0aW9uLWxpZmVjeWNsZSc7XHJcbmltcG9ydCB7IExlYWRlckJvYXJkU2VydmljZSB9IGZyb20gJ34vYXNzZXRzL3NlcnZpY2VzL2xlYWRlcmJvYXJkLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHt9KVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uU2VydmljZXNNb2R1bGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBDb21tb25TZXJ2aWNlc01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgTmF2aWdhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgUG9wdXBTZXJ2aWNlLFxyXG4gICAgICAgIFNpbmdsZVBsYXllclNlcnZpY2UsXHJcbiAgICAgICAgQXVkaW9TZXJ2aWNlLFxyXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxyXG4gICAgICAgIExlYWRlckJvYXJkU2VydmljZSxcclxuICAgICAgICBBcHBsaWNhdGlvbkxpZmVjeWNsZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29tbW9uU2VydmljZXNNb2R1bGUpIHtcclxuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21tb25TZXJ2aWNlc01vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19