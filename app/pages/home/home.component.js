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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRTtBQUNyRSxnQ0FBK0I7QUFHL0IsOENBQStGO0FBQy9GLDBDQUErQztBQU8vQztJQUNJLHVCQUNTLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3ZCLEtBQVcsRUFDWCxrQkFBcUMsRUFDckMsYUFBMkIsRUFDM0IsRUFBcUI7UUFMdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFDM0IsQ0FBQztJQUVMLGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxxQkFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBM0JRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBR3lCLHVCQUFZO1lBQ2Isc0JBQVc7WUFDaEIsV0FBSTtZQUNTLDRCQUFpQjtZQUN0Qix1QkFBWTtZQUN2Qix3QkFBaUI7T0FQdEIsYUFBYSxDQTRCekI7SUFBRCxvQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UsIFBvcHVwU2VydmljZSwgQXVkaW9TZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gXCJ+L2Fzc2V0cy9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBNZW51SXRlbU5hbWUgfSBmcm9tIFwifi9hc3NldHMvZG9tYWluXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHVibGljIGF1ZGlvU2VydmljZTogQXVkaW9TZXJ2aWNlLFxyXG4gICAgICBwdWJsaWMgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgICBwcml2YXRlIF9wYWdlOiBQYWdlLFxyXG4gICAgICBwcml2YXRlIF9uYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXHJcbiAgICAgIHByaXZhdGUgX3BvcHVwU2VydmljZTogUG9wdXBTZXJ2aWNlLFxyXG4gICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29Ub1NQKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmF1ZGlvU2VydmljZS5jbGlja1NvdW5kKCk7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlVG8oTWVudUl0ZW1OYW1lLnNpbmdsZXBsYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvVG9NUCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5hdWRpb1NlcnZpY2UuY2xpY2tTb3VuZCgpO1xyXG4gICAgICB0aGlzLl9wb3B1cFNlcnZpY2UudG9hc3QoJ011dGxpcGxheWVyIHdpbGwgYmUgYWRkZWQgc29vbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvTEIoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuX3BvcHVwU2VydmljZS50b2FzdCgnTGVhZGVyYm9hcmRzIGNvbWluZyBzb29uLi4uJyk7XHJcbiAgICB9XHJcbn1cclxuIl19