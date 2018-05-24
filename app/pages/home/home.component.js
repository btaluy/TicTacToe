"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var firebase = require("nativescript-plugin-firebase");
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
        //this._popupService.toast('Mutliplayer will be added soon');
        this.login();
    };
    HomeComponent.prototype.goToLB = function () {
        this._popupService.toast('Leaderboards coming soon...');
        console.log(JSON.stringify(this.userService.user));
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
            _this._popupService.toast('No internet connection...');
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRTtBQUNyRSxnQ0FBK0I7QUFDL0IsdURBQTBEO0FBRTFELDhDQUErRjtBQUMvRiwwQ0FBK0M7QUFPL0M7SUFDSSx1QkFDUyxZQUEwQixFQUMxQixXQUF3QixFQUN2QixLQUFXLEVBQ1gsa0JBQXFDLEVBQ3JDLGFBQTJCLEVBQzNCLEVBQXFCO1FBTHRCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLE9BQUUsR0FBRixFQUFFLENBQW1CO0lBQzNCLENBQUM7SUFFTCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMscUJBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0IsNkRBQTZEO1FBQzdELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTyw2QkFBSyxHQUFiO1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hELFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDYixJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNO1NBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUNELFVBQUEsWUFBWTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUEzQ1EsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FHeUIsdUJBQVk7WUFDYixzQkFBVztZQUNoQixXQUFJO1lBQ1MsNEJBQWlCO1lBQ3RCLHVCQUFZO1lBQ3ZCLHdCQUFpQjtPQVB0QixhQUFhLENBNEN6QjtJQUFELG9CQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UsIFBvcHVwU2VydmljZSwgQXVkaW9TZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gXCJ+L2Fzc2V0cy9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgTWVudUl0ZW1OYW1lIH0gZnJvbSBcIn4vYXNzZXRzL2RvbWFpblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBhdWRpb1NlcnZpY2U6IEF1ZGlvU2VydmljZSxcbiAgICAgIHB1YmxpYyB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICBwcml2YXRlIF9wYWdlOiBQYWdlLFxuICAgICAgcHJpdmF0ZSBfbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBfcG9wdXBTZXJ2aWNlOiBQb3B1cFNlcnZpY2UsXG4gICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnb1RvU1AoKTogdm9pZCB7XG4gICAgICB0aGlzLmF1ZGlvU2VydmljZS5jbGlja1NvdW5kKCk7XG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZVRvKE1lbnVJdGVtTmFtZS5zaW5nbGVwbGF5ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnb1RvTVAoKTogdm9pZCB7XG4gICAgICB0aGlzLmF1ZGlvU2VydmljZS5jbGlja1NvdW5kKCk7XG4gICAgICAvL3RoaXMuX3BvcHVwU2VydmljZS50b2FzdCgnTXV0bGlwbGF5ZXIgd2lsbCBiZSBhZGRlZCBzb29uJyk7XG4gICAgICB0aGlzLmxvZ2luKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdvVG9MQigpOiB2b2lkIHtcbiAgICAgIHRoaXMuX3BvcHVwU2VydmljZS50b2FzdCgnTGVhZGVyYm9hcmRzIGNvbWluZyBzb29uLi4uJyk7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXJTZXJ2aWNlLnVzZXIpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZ2luKCk6IHZvaWQge1xuICAgICAgdGhpcy5fcG9wdXBTZXJ2aWNlLmxvYWRpbmcoJ0F1dGhlbnRpY2F0aW5nLi4uJyk7XG4gICAgICBmaXJlYmFzZS5sb2dpbih7XG4gICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5HT09HTEVcbiAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGlzLl9wb3B1cFNlcnZpY2UudG9hc3QoJ0xvZ2dlZCBpbi4uLicpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2UgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgdGhpcy5fcG9wdXBTZXJ2aWNlLnRvYXN0KCdObyBpbnRlcm5ldCBjb25uZWN0aW9uLi4uJyk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxufVxuIl19