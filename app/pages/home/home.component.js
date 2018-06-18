"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var services_1 = require("~/assets/services");
var domain_1 = require("~/assets/domain");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(audioService, userService, _page, _navigationService, _popupService, cd) {
        this.audioService = audioService;
        this.userService = userService;
        this._page = _page;
        this._navigationService = _navigationService;
        this._popupService = _popupService;
        this.cd = cd;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        this.cd.detectChanges();
    };
    HomeComponent.prototype.goToSP = function () {
        this.audioService.clickSound();
        this._navigationService.navigateTo(domain_1.MenuItemName.singleplayer);
    };
    HomeComponent.prototype.goToMP = function () {
        this.audioService.clickSound();
        this._navigationService.navigateTo(domain_1.MenuItemName.multiplayer);
    };
    HomeComponent.prototype.goToLB = function () {
        this.audioService.clickSound();
        this._navigationService.navigateTo(domain_1.MenuItemName.leaderboard);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [services_1.AudioService,
            services_1.UserService,
            page_1.Page,
            services_1.NavigationService,
            services_1.PopupService,
            core_1.ChangeDetectorRef])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
