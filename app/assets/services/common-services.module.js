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
                index_1.UserService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNlcnZpY2VzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1vbi1zZXJ2aWNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsaUNBQTBHO0FBQzFHLHNHQUFvRztBQUdwRztJQWVFLDhCQUEyQyxZQUFrQztRQUMzRSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQztRQUN0RixDQUFDO0lBQ0gsQ0FBQzs2QkFuQlUsb0JBQW9CO0lBQ2pCLDRCQUFPLEdBQXJCO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLHNCQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QseUJBQWlCO2dCQUNqQixvQkFBWTtnQkFDWiwyQkFBbUI7Z0JBQ25CLG9CQUFZO2dCQUNaLG1CQUFXO2dCQUNYLDRDQUFvQjthQUNyQjtTQUNGLENBQUM7SUFDSixDQUFDO0lBYlUsb0JBQW9CO1FBRGhDLGVBQVEsQ0FBQyxFQUFFLENBQUM7UUFnQlMsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7eUNBQWUsb0JBQW9CO09BZmxFLG9CQUFvQixDQW9CaEM7SUFBRCwyQkFBQzs7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdWRpb1NlcnZpY2UsIE5hdmlnYXRpb25TZXJ2aWNlLCBQb3B1cFNlcnZpY2UsIFNpbmdsZVBsYXllclNlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbkxpZmVjeWNsZSB9IGZyb20gJ34vYXNzZXRzL21vZHVsZXMvYXBwbGljYXRpb24tbGlmZWN5Y2xlL2FwcGxpY2F0aW9uLWxpZmVjeWNsZSc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBDb21tb25TZXJ2aWNlc01vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbW1vblNlcnZpY2VzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgICBQb3B1cFNlcnZpY2UsXG4gICAgICAgIFNpbmdsZVBsYXllclNlcnZpY2UsXG4gICAgICAgIEF1ZGlvU2VydmljZSxcbiAgICAgICAgVXNlclNlcnZpY2UsXG4gICAgICAgIEFwcGxpY2F0aW9uTGlmZWN5Y2xlXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvbW1vblNlcnZpY2VzTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21tb25TZXJ2aWNlc01vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XG4gICAgfVxuICB9XG59Il19