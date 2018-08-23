"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var platform_1 = require("platform");
var application = require("application");
var frameModule = require("ui/frame");
var domain_1 = require("~/assets/domain");
var leaderboard_service_1 = require("~/assets/services/leaderboard.service");
var user_service_1 = require("~/assets/services/user.service");
var services_1 = require("~/assets/services");
var AppComponent = /** @class */ (function () {
    function AppComponent(leaderBoard, userService, mpService, navigationService, popupService, cd, zone) {
        this.leaderBoard = leaderBoard;
        this.userService = userService;
        this.mpService = mpService;
        this.navigationService = navigationService;
        this.popupService = popupService;
        this.cd = cd;
        this.zone = zone;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initBackNavigation();
        var parent = this;
        firebase.init({
            // optional but useful to immediately re-logon the user when he re-visits your app
            onAuthStateChanged: function (data) {
                if (data && data.loggedIn) {
                    parent.zone.run(function () {
                        parent.userService.setUser(data.user)
                            .then(function () {
                            parent.leaderBoard.setNewSPScore();
                            parent.leaderBoard.setNewMPScore();
                            parent.cd.detectChanges();
                        });
                    });
                }
                else {
                    parent.userService.user = undefined;
                    parent.cd.detectChanges();
                }
            }
        }).then(function (instance) { return console.log("firebase.init done"); }, function (error) { return console.log("firebase.init error: " + error); });
    };
    AppComponent.prototype.initBackNavigation = function () {
        var _this = this;
        if (platform_1.isAndroid) {
            var activity = application.android.startActivity ||
                application.android.foregroundActivity ||
                frameModule.topmost().android.currentActivity ||
                frameModule.topmost().android.activity;
            activity.onBackPressed = function () {
                if (_this.navigationService.isGameSessionOpen()) {
                    _this.popupService.confirm('Cancel game', 'Are you sure you want to cancel the game?')
                        .then(function (result) {
                        if (result) {
                            _this.mpService.session.isGameOver = true;
                            _this.mpService.updateSession()
                                .then(function () {
                                _this.navigationService.navigateToAndClearHistory(domain_1.MenuItemName.multiplayer, undefined, 'slideRight');
                            });
                        }
                    });
                }
                else {
                    frameModule.topmost().goBack();
                }
            };
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [leaderboard_service_1.LeaderBoardService,
            user_service_1.UserService,
            services_1.MultiPlayerService,
            services_1.NavigationService,
            services_1.PopupService,
            core_1.ChangeDetectorRef,
            core_1.NgZone])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUU7QUFDckUsdURBQXlEO0FBQ3pELHFDQUFxQztBQUNyQyx5Q0FBMkM7QUFDM0Msc0NBQXdDO0FBRXhDLDBDQUErRDtBQUMvRCw2RUFBMkU7QUFDM0UsK0RBQTZEO0FBQzdELDhDQUF3RjtBQU14RjtJQUNFLHNCQUNTLFdBQStCLEVBQy9CLFdBQXdCLEVBQ3ZCLFNBQTZCLEVBQzdCLGlCQUFvQyxFQUNwQyxZQUEwQixFQUMxQixFQUFxQixFQUNyQixJQUFZO1FBTmIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQzdCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUNoQixDQUFDO0lBRVAsK0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUVsQixRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1osa0ZBQWtGO1lBQ2xGLGtCQUFrQixFQUFFLFVBQVMsSUFBSTtnQkFDL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDZCxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOzZCQUNsQyxJQUFJLENBQUM7NEJBQ0osTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs0QkFDbkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs0QkFDbkMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzt3QkFDNUIsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7b0JBQ3BDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzVCLENBQUM7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFBLFFBQVEsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBakMsQ0FBaUMsRUFDN0MsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFPLENBQUMsRUFBNUMsQ0FBNEMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7SUFFTyx5Q0FBa0IsR0FBMUI7UUFBQSxpQkF3QkM7UUF2QkMsRUFBRSxDQUFDLENBQUMsb0JBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFNLFFBQVEsR0FBUSxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWE7Z0JBQ2pDLFdBQVcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCO2dCQUN0QyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQWU7Z0JBQzdDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzdELFFBQVEsQ0FBQyxhQUFhLEdBQUc7Z0JBQ3ZCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDL0MsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUNyQywyQ0FBMkMsQ0FBQzt5QkFDM0MsSUFBSSxDQUFDLFVBQUMsTUFBZTt3QkFDcEIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDWCxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOzRCQUN6QyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTtpQ0FDM0IsSUFBSSxDQUFDO2dDQUNKLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxxQkFBWSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7NEJBQ3RHLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2pDLENBQUM7WUFDSCxDQUFDLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQS9EVSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBR3NCLHdDQUFrQjtZQUNsQiwwQkFBVztZQUNaLDZCQUFrQjtZQUNWLDRCQUFpQjtZQUN0Qix1QkFBWTtZQUN0Qix3QkFBaUI7WUFDZixhQUFNO09BUlgsWUFBWSxDQWdFeEI7SUFBRCxtQkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3RvclJlZiwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3BsYXRmb3JtJztcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgKiBhcyBmcmFtZU1vZHVsZSBmcm9tICd1aS9mcmFtZSc7XHJcblxyXG5pbXBvcnQgeyBVc2VyLCBNZW51SXRlbSwgTWVudUl0ZW1OYW1lIH0gZnJvbSBcIn4vYXNzZXRzL2RvbWFpblwiO1xyXG5pbXBvcnQgeyBMZWFkZXJCb2FyZFNlcnZpY2UgfSBmcm9tIFwifi9hc3NldHMvc2VydmljZXMvbGVhZGVyYm9hcmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCJ+L2Fzc2V0cy9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UsIE11bHRpUGxheWVyU2VydmljZSwgUG9wdXBTZXJ2aWNlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IFxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBsZWFkZXJCb2FyZDogTGVhZGVyQm9hcmRTZXJ2aWNlLFxyXG4gICAgcHVibGljIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgbXBTZXJ2aWNlOiBNdWx0aVBsYXllclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgcG9wdXBTZXJ2aWNlOiBQb3B1cFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgem9uZTogTmdab25lXHJcbiAgICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdEJhY2tOYXZpZ2F0aW9uKCk7XHJcbiAgICBcclxuICAgIGxldCBwYXJlbnQgPSB0aGlzO1xyXG5cclxuICAgIGZpcmViYXNlLmluaXQoe1xyXG4gICAgICAvLyBvcHRpb25hbCBidXQgdXNlZnVsIHRvIGltbWVkaWF0ZWx5IHJlLWxvZ29uIHRoZSB1c2VyIHdoZW4gaGUgcmUtdmlzaXRzIHlvdXIgYXBwXHJcbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubG9nZ2VkSW4pIHtcclxuICAgICAgICAgIHBhcmVudC56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIHBhcmVudC51c2VyU2VydmljZS5zZXRVc2VyKGRhdGEudXNlcilcclxuICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQubGVhZGVyQm9hcmQuc2V0TmV3U1BTY29yZSgpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmxlYWRlckJvYXJkLnNldE5ld01QU2NvcmUoKTtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGFyZW50LnVzZXJTZXJ2aWNlLnVzZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBwYXJlbnQuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSkudGhlbihcclxuICAgICAgaW5zdGFuY2UgPT4gY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIiksXHJcbiAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0QmFja05hdmlnYXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAoaXNBbmRyb2lkKSB7XHJcbiAgICAgIGNvbnN0IGFjdGl2aXR5OiBhbnkgPSBhcHBsaWNhdGlvbi5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkuYW5kcm9pZC5jdXJyZW50QWN0aXZpdHkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5hbmRyb2lkLmFjdGl2aXR5O1xyXG4gICAgICBhY3Rpdml0eS5vbkJhY2tQcmVzc2VkID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmlzR2FtZVNlc3Npb25PcGVuKCkpIHtcclxuICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmNvbmZpcm0oJ0NhbmNlbCBnYW1lJyxcclxuICAgICAgICAgICAgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWwgdGhlIGdhbWU/JylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubXBTZXJ2aWNlLnNlc3Npb24uaXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1wU2VydmljZS51cGRhdGVTZXNzaW9uKClcclxuICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGVUb0FuZENsZWFySGlzdG9yeShNZW51SXRlbU5hbWUubXVsdGlwbGF5ZXIsIHVuZGVmaW5lZCwgJ3NsaWRlUmlnaHQnKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLmdvQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19