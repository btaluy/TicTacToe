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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNlcnZpY2VzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1vbi1zZXJ2aWNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsaUNBQThIO0FBQzlILHNHQUFvRztBQUNwRyw2RUFBMkU7QUFHM0U7SUFpQkUsOEJBQTJDLFlBQWtDO1FBQzNFLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO1FBQ3RGLENBQUM7SUFDSCxDQUFDOzZCQXJCVSxvQkFBb0I7SUFDakIsNEJBQU8sR0FBckI7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsc0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCx5QkFBaUI7Z0JBQ2pCLG9CQUFZO2dCQUNaLDJCQUFtQjtnQkFDbkIsMEJBQWtCO2dCQUNsQixvQkFBWTtnQkFDWixtQkFBVztnQkFDWCx3Q0FBa0I7Z0JBQ2xCLDRDQUFvQjthQUNyQjtTQUNGLENBQUM7SUFDSixDQUFDO0lBZlUsb0JBQW9CO1FBRGhDLGVBQVEsQ0FBQyxFQUFFLENBQUM7UUFrQlMsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7eUNBQWUsb0JBQW9CO09BakJsRSxvQkFBb0IsQ0FzQmhDO0lBQUQsMkJBQUM7O0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdWRpb1NlcnZpY2UsIE5hdmlnYXRpb25TZXJ2aWNlLCBQb3B1cFNlcnZpY2UsIFNpbmdsZVBsYXllclNlcnZpY2UsIFVzZXJTZXJ2aWNlLCBNdWx0aVBsYXllclNlcnZpY2UgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25MaWZlY3ljbGUgfSBmcm9tICd+L2Fzc2V0cy9tb2R1bGVzL2FwcGxpY2F0aW9uLWxpZmVjeWNsZS9hcHBsaWNhdGlvbi1saWZlY3ljbGUnO1xyXG5pbXBvcnQgeyBMZWFkZXJCb2FyZFNlcnZpY2UgfSBmcm9tICd+L2Fzc2V0cy9zZXJ2aWNlcy9sZWFkZXJib2FyZC5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7fSlcclxuZXhwb3J0IGNsYXNzIENvbW1vblNlcnZpY2VzTW9kdWxlIHtcclxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQ29tbW9uU2VydmljZXNNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE5hdmlnYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIFBvcHVwU2VydmljZSxcclxuICAgICAgICBTaW5nbGVQbGF5ZXJTZXJ2aWNlLFxyXG4gICAgICAgIE11bHRpUGxheWVyU2VydmljZSxcclxuICAgICAgICBBdWRpb1NlcnZpY2UsXHJcbiAgICAgICAgVXNlclNlcnZpY2UsXHJcbiAgICAgICAgTGVhZGVyQm9hcmRTZXJ2aWNlLFxyXG4gICAgICAgIEFwcGxpY2F0aW9uTGlmZWN5Y2xlXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb21tb25TZXJ2aWNlc01vZHVsZSkge1xyXG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbW1vblNlcnZpY2VzTW9kdWxlIGFscmVhZHkgbG9hZGVkOyBJbXBvcnQgaW4gcm9vdCBtb2R1bGUgb25seS4nKTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0=