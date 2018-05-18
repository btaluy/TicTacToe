"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var firebase = require("nativescript-plugin-firebase");
var services_1 = require("~/assets/services");
var domain_1 = require("~/assets/domain");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(audioService, _page, _navigationService, _popupService) {
        this.audioService = audioService;
        this._page = _page;
        this._navigationService = _navigationService;
        this._popupService = _popupService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
    };
    HomeComponent.prototype.goToSP = function () {
        this.audioService.clickSound();
        this._navigationService.navigateTo(domain_1.MenuItemName.singleplayer);
    };
    HomeComponent.prototype.goToMP = function () {
        this.audioService.clickSound();
        //this._popupService.toast('Mutliplayer will be added soon');
        this.login();
    };
    HomeComponent.prototype.goToLB = function () {
        this._popupService.toast('Leaderboards coming soon...');
    };
    HomeComponent.prototype.toggleMusic = function () {
        this.audioService.toggleBackground();
    };
    HomeComponent.prototype.login = function () {
        var _this = this;
        this._popupService.loading('Authenticating...');
        firebase.login({
            type: firebase.LoginType.GOOGLE
        }).then(function (result) {
            _this._popupService.toast('Logged in...');
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [services_1.AudioService,
            page_1.Page,
            services_1.NavigationService,
            services_1.PopupService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
