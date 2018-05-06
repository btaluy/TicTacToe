"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
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
        // Init your component properties here.
        this._page.actionBarHidden = true;
    };
    HomeComponent.prototype.goToSP = function () {
        this._navigationService.navigateTo(domain_1.MenuItemName.singleplayer);
    };
    HomeComponent.prototype.goToMP = function () {
        this._popupService.toast('Mutliplayer will be added soon');
    };
    HomeComponent.prototype.toggleMusic = function () {
        this.audioService.toggleBackground();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsOENBQWtGO0FBQ2xGLDBDQUErQztBQU8vQztJQUNJLHVCQUNTLFlBQTBCLEVBQ3pCLEtBQVcsRUFDWCxrQkFBcUMsRUFDckMsYUFBMkI7UUFINUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFDakMsQ0FBQztJQUVMLGdDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxxQkFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sbUNBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDdkMsQ0FBQztJQXZCUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUd5Qix1QkFBWTtZQUNsQixXQUFJO1lBQ1MsNEJBQWlCO1lBQ3RCLHVCQUFZO09BTDVCLGFBQWEsQ0F3QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlLCBQb3B1cFNlcnZpY2UsIEF1ZGlvU2VydmljZSB9IGZyb20gXCJ+L2Fzc2V0cy9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBNZW51SXRlbU5hbWUgfSBmcm9tIFwifi9hc3NldHMvZG9tYWluXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHVibGljIGF1ZGlvU2VydmljZTogQXVkaW9TZXJ2aWNlLFxyXG4gICAgICBwcml2YXRlIF9wYWdlOiBQYWdlLFxyXG4gICAgICBwcml2YXRlIF9uYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXHJcbiAgICAgIHByaXZhdGUgX3BvcHVwU2VydmljZTogUG9wdXBTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29Ub1NQKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZVRvKE1lbnVJdGVtTmFtZS5zaW5nbGVwbGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvTVAoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuX3BvcHVwU2VydmljZS50b2FzdCgnTXV0bGlwbGF5ZXIgd2lsbCBiZSBhZGRlZCBzb29uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZU11c2ljKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmF1ZGlvU2VydmljZS50b2dnbGVCYWNrZ3JvdW5kKCk7XHJcbiAgICB9XHJcbn1cclxuIl19