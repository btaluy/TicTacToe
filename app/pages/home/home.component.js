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
        this._popupService.toast('Leaderboards coming soon...');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRTtBQUNyRSxnQ0FBK0I7QUFHL0IsOENBQStGO0FBQy9GLDBDQUErQztBQU8vQztJQUNJLHVCQUNTLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3ZCLEtBQVcsRUFDWCxrQkFBcUMsRUFDckMsYUFBMkIsRUFDM0IsRUFBcUI7UUFMdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFDM0IsQ0FBQztJQUVMLGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxxQkFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLHFCQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQTVCUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUd5Qix1QkFBWTtZQUNiLHNCQUFXO1lBQ2hCLFdBQUk7WUFDUyw0QkFBaUI7WUFDdEIsdUJBQVk7WUFDdkIsd0JBQWlCO09BUHRCLGFBQWEsQ0E2QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSwgUG9wdXBTZXJ2aWNlLCBBdWRpb1NlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzXCI7XG5pbXBvcnQgeyBNZW51SXRlbU5hbWUgfSBmcm9tIFwifi9hc3NldHMvZG9tYWluXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGF1ZGlvU2VydmljZTogQXVkaW9TZXJ2aWNlLFxuICAgICAgcHVibGljIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgIHByaXZhdGUgX3BhZ2U6IFBhZ2UsXG4gICAgICBwcml2YXRlIF9uYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICBwcml2YXRlIF9wb3B1cFNlcnZpY2U6IFBvcHVwU2VydmljZSxcbiAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdvVG9TUCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuYXVkaW9TZXJ2aWNlLmNsaWNrU291bmQoKTtcbiAgICAgIHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlVG8oTWVudUl0ZW1OYW1lLnNpbmdsZXBsYXllcik7XG4gICAgfVxuXG4gICAgcHVibGljIGdvVG9NUCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuYXVkaW9TZXJ2aWNlLmNsaWNrU291bmQoKTtcbiAgICAgIHRoaXMuX3BvcHVwU2VydmljZS50b2FzdCgnTXV0bGlwbGF5ZXIgd2lsbCBiZSBhZGRlZCBzb29uJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdvVG9MQigpOiB2b2lkIHtcbiAgICAgIHRoaXMuX3BvcHVwU2VydmljZS50b2FzdCgnTGVhZGVyYm9hcmRzIGNvbWluZyBzb29uLi4uJyk7XG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZVRvKE1lbnVJdGVtTmFtZS5sZWFkZXJib2FyZCk7XG4gICAgfVxufVxuIl19