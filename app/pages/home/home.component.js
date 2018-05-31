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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRTtBQUNyRSxnQ0FBK0I7QUFDL0IsdURBQTBEO0FBRTFELDhDQUErRjtBQUMvRiwwQ0FBK0M7QUFPL0M7SUFDSSx1QkFDUyxZQUEwQixFQUMxQixXQUF3QixFQUN2QixLQUFXLEVBQ1gsa0JBQXFDLEVBQ3JDLGFBQTJCLEVBQzNCLEVBQXFCO1FBTHRCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLE9BQUUsR0FBRixFQUFFLENBQW1CO0lBQzNCLENBQUM7SUFFTCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMscUJBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0IsNkRBQTZEO1FBQzdELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTyw2QkFBSyxHQUFiO1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hELFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDYixJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNO1NBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUNELFVBQUEsWUFBWTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUEzQ1EsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FHeUIsdUJBQVk7WUFDYixzQkFBVztZQUNoQixXQUFJO1lBQ1MsNEJBQWlCO1lBQ3RCLHVCQUFZO1lBQ3ZCLHdCQUFpQjtPQVB0QixhQUFhLENBNEN6QjtJQUFELG9CQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSwgUG9wdXBTZXJ2aWNlLCBBdWRpb1NlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IE1lbnVJdGVtTmFtZSB9IGZyb20gXCJ+L2Fzc2V0cy9kb21haW5cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwdWJsaWMgYXVkaW9TZXJ2aWNlOiBBdWRpb1NlcnZpY2UsXHJcbiAgICAgIHB1YmxpYyB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICAgIHByaXZhdGUgX3BhZ2U6IFBhZ2UsXHJcbiAgICAgIHByaXZhdGUgX25hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcclxuICAgICAgcHJpdmF0ZSBfcG9wdXBTZXJ2aWNlOiBQb3B1cFNlcnZpY2UsXHJcbiAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvU1AoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuYXVkaW9TZXJ2aWNlLmNsaWNrU291bmQoKTtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGVUbyhNZW51SXRlbU5hbWUuc2luZ2xlcGxheWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29Ub01QKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmF1ZGlvU2VydmljZS5jbGlja1NvdW5kKCk7XHJcbiAgICAgIC8vdGhpcy5fcG9wdXBTZXJ2aWNlLnRvYXN0KCdNdXRsaXBsYXllciB3aWxsIGJlIGFkZGVkIHNvb24nKTtcclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvTEIoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuX3BvcHVwU2VydmljZS50b2FzdCgnTGVhZGVyYm9hcmRzIGNvbWluZyBzb29uLi4uJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMudXNlclNlcnZpY2UudXNlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9naW4oKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuX3BvcHVwU2VydmljZS5sb2FkaW5nKCdBdXRoZW50aWNhdGluZy4uLicpO1xyXG4gICAgICBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkdPT0dMRVxyXG4gICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9wb3B1cFNlcnZpY2UudG9hc3QoJ0xvZ2dlZCBpbi4uLicpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICB0aGlzLl9wb3B1cFNlcnZpY2UudG9hc3QoJ05vIGludGVybmV0IGNvbm5lY3Rpb24uLi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19