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
