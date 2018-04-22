"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./index");
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
                index_1.PopupService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNlcnZpY2VzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1vbi1zZXJ2aWNlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsaUNBQTBEO0FBRzFEO0lBV0UsOEJBQTJDLFlBQWtDO1FBQzNFLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO1FBQ3RGLENBQUM7SUFDSCxDQUFDOzZCQWZVLG9CQUFvQjtJQUNqQiw0QkFBTyxHQUFyQjtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxzQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULHlCQUFpQjtnQkFDakIsb0JBQVk7YUFDYjtTQUNGLENBQUM7SUFDSixDQUFDO0lBVFUsb0JBQW9CO1FBRGhDLGVBQVEsQ0FBQyxFQUFFLENBQUM7UUFZUyxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTt5Q0FBZSxvQkFBb0I7T0FYbEUsb0JBQW9CLENBZ0JoQztJQUFELDJCQUFDOztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UsIFBvcHVwU2VydmljZSB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuQE5nTW9kdWxlKHt9KVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uU2VydmljZXNNb2R1bGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBDb21tb25TZXJ2aWNlc01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgTmF2aWdhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgUG9wdXBTZXJ2aWNlXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb21tb25TZXJ2aWNlc01vZHVsZSkge1xyXG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbW1vblNlcnZpY2VzTW9kdWxlIGFscmVhZHkgbG9hZGVkOyBJbXBvcnQgaW4gcm9vdCBtb2R1bGUgb25seS4nKTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0=