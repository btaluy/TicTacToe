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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsdURBQTBEO0FBRTFELDhDQUFrRjtBQUNsRiwwQ0FBK0M7QUFPL0M7SUFDSSx1QkFDUyxZQUEwQixFQUN6QixLQUFXLEVBQ1gsa0JBQXFDLEVBQ3JDLGFBQTJCO1FBSDVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQ2pDLENBQUM7SUFFTCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLHFCQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9CLDZEQUE2RDtRQUM3RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLG1DQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFTyw2QkFBSyxHQUFiO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hELFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDYixJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNO1NBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUNELFVBQUEsWUFBWTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBMUNRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBR3lCLHVCQUFZO1lBQ2xCLFdBQUk7WUFDUyw0QkFBaUI7WUFDdEIsdUJBQVk7T0FMNUIsYUFBYSxDQTJDekI7SUFBRCxvQkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UsIFBvcHVwU2VydmljZSwgQXVkaW9TZXJ2aWNlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzXCI7XG5pbXBvcnQgeyBNZW51SXRlbU5hbWUgfSBmcm9tIFwifi9hc3NldHMvZG9tYWluXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGF1ZGlvU2VydmljZTogQXVkaW9TZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBfcGFnZTogUGFnZSxcbiAgICAgIHByaXZhdGUgX25hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICAgIHByaXZhdGUgX3BvcHVwU2VydmljZTogUG9wdXBTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnb1RvU1AoKTogdm9pZCB7XG4gICAgICB0aGlzLmF1ZGlvU2VydmljZS5jbGlja1NvdW5kKCk7XG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZVRvKE1lbnVJdGVtTmFtZS5zaW5nbGVwbGF5ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnb1RvTVAoKTogdm9pZCB7XG4gICAgICB0aGlzLmF1ZGlvU2VydmljZS5jbGlja1NvdW5kKCk7XG4gICAgICAvL3RoaXMuX3BvcHVwU2VydmljZS50b2FzdCgnTXV0bGlwbGF5ZXIgd2lsbCBiZSBhZGRlZCBzb29uJyk7XG4gICAgICB0aGlzLmxvZ2luKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdvVG9MQigpOiB2b2lkIHtcbiAgICAgIHRoaXMuX3BvcHVwU2VydmljZS50b2FzdCgnTGVhZGVyYm9hcmRzIGNvbWluZyBzb29uLi4uJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZU11c2ljKCk6IHZvaWQge1xuICAgICAgdGhpcy5hdWRpb1NlcnZpY2UudG9nZ2xlQmFja2dyb3VuZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9naW4oKTogdm9pZCB7XG4gICAgICB0aGlzLl9wb3B1cFNlcnZpY2UubG9hZGluZygnQXV0aGVudGljYXRpbmcuLi4nKTtcbiAgICAgIGZpcmViYXNlLmxvZ2luKHtcbiAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkdPT0dMRVxuICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIHRoaXMuX3BvcHVwU2VydmljZS50b2FzdCgnTG9nZ2VkIGluLi4uJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG59XG4iXX0=