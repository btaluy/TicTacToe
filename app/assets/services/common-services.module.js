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
                index_1.MultiPlayerService,
                index_1.AudioService,
                index_1.UserService,
                leaderboard_service_1.LeaderBoardService,
                index_1.FriendsService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNlcnZpY2VzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1vbi1zZXJ2aWNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsaUNBQThJO0FBQzlJLHNHQUFvRztBQUNwRyw2RUFBMkU7QUFHM0U7SUFrQkUsOEJBQTJDLFlBQWtDO1FBQzNFLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO1FBQ3RGLENBQUM7SUFDSCxDQUFDOzZCQXRCVSxvQkFBb0I7SUFDakIsNEJBQU8sR0FBckI7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsc0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCx5QkFBaUI7Z0JBQ2pCLG9CQUFZO2dCQUNaLDJCQUFtQjtnQkFDbkIsMEJBQWtCO2dCQUNsQixvQkFBWTtnQkFDWixtQkFBVztnQkFDWCx3Q0FBa0I7Z0JBQ2xCLHNCQUFjO2dCQUNkLDRDQUFvQjthQUNyQjtTQUNGLENBQUM7SUFDSixDQUFDO0lBaEJVLG9CQUFvQjtRQURoQyxlQUFRLENBQUMsRUFBRSxDQUFDO1FBbUJTLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3lDQUFlLG9CQUFvQjtPQWxCbEUsb0JBQW9CLENBdUJoQztJQUFELDJCQUFDOztDQUFBLEFBdkJELElBdUJDO0FBdkJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXVkaW9TZXJ2aWNlLCBOYXZpZ2F0aW9uU2VydmljZSwgUG9wdXBTZXJ2aWNlLCBTaW5nbGVQbGF5ZXJTZXJ2aWNlLCBVc2VyU2VydmljZSwgTXVsdGlQbGF5ZXJTZXJ2aWNlLCBGcmllbmRzU2VydmljZSB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkxpZmVjeWNsZSB9IGZyb20gJ34vYXNzZXRzL21vZHVsZXMvYXBwbGljYXRpb24tbGlmZWN5Y2xlL2FwcGxpY2F0aW9uLWxpZmVjeWNsZSc7XHJcbmltcG9ydCB7IExlYWRlckJvYXJkU2VydmljZSB9IGZyb20gJ34vYXNzZXRzL3NlcnZpY2VzL2xlYWRlcmJvYXJkLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHt9KVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uU2VydmljZXNNb2R1bGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBDb21tb25TZXJ2aWNlc01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgTmF2aWdhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgUG9wdXBTZXJ2aWNlLFxyXG4gICAgICAgIFNpbmdsZVBsYXllclNlcnZpY2UsXHJcbiAgICAgICAgTXVsdGlQbGF5ZXJTZXJ2aWNlLFxyXG4gICAgICAgIEF1ZGlvU2VydmljZSxcclxuICAgICAgICBVc2VyU2VydmljZSxcclxuICAgICAgICBMZWFkZXJCb2FyZFNlcnZpY2UsXHJcbiAgICAgICAgRnJpZW5kc1NlcnZpY2UsXHJcbiAgICAgICAgQXBwbGljYXRpb25MaWZlY3ljbGVcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvbW1vblNlcnZpY2VzTW9kdWxlKSB7XHJcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tbW9uU2VydmljZXNNb2R1bGUgYWxyZWFkeSBsb2FkZWQ7IEltcG9ydCBpbiByb290IG1vZHVsZSBvbmx5LicpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==