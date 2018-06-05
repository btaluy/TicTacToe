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
        this._popupService.toast('Mutliplayer will be added soon');
    };
    HomeComponent.prototype.goToLB = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRTtBQUNyRSxnQ0FBK0I7QUFHL0IsOENBQStGO0FBQy9GLDBDQUErQztBQU8vQztJQUNJLHVCQUNTLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3ZCLEtBQVcsRUFDWCxrQkFBcUMsRUFDckMsYUFBMkIsRUFDM0IsRUFBcUI7UUFMdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFDM0IsQ0FBQztJQUVMLGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxxQkFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxxQkFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUEzQlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FHeUIsdUJBQVk7WUFDYixzQkFBVztZQUNoQixXQUFJO1lBQ1MsNEJBQWlCO1lBQ3RCLHVCQUFZO1lBQ3ZCLHdCQUFpQjtPQVB0QixhQUFhLENBNEJ6QjtJQUFELG9CQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSwgUG9wdXBTZXJ2aWNlLCBBdWRpb1NlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IE1lbnVJdGVtTmFtZSB9IGZyb20gXCJ+L2Fzc2V0cy9kb21haW5cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwdWJsaWMgYXVkaW9TZXJ2aWNlOiBBdWRpb1NlcnZpY2UsXHJcbiAgICAgIHB1YmxpYyB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICAgIHByaXZhdGUgX3BhZ2U6IFBhZ2UsXHJcbiAgICAgIHByaXZhdGUgX25hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcclxuICAgICAgcHJpdmF0ZSBfcG9wdXBTZXJ2aWNlOiBQb3B1cFNlcnZpY2UsXHJcbiAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvU1AoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuYXVkaW9TZXJ2aWNlLmNsaWNrU291bmQoKTtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGVUbyhNZW51SXRlbU5hbWUuc2luZ2xlcGxheWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29Ub01QKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmF1ZGlvU2VydmljZS5jbGlja1NvdW5kKCk7XHJcbiAgICAgIHRoaXMuX3BvcHVwU2VydmljZS50b2FzdCgnTXV0bGlwbGF5ZXIgd2lsbCBiZSBhZGRlZCBzb29uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvVG9MQigpOiB2b2lkIHtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGVUbyhNZW51SXRlbU5hbWUubGVhZGVyYm9hcmQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==