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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUU7QUFDckUsdURBQXlEO0FBQ3pELHFDQUFxQztBQUNyQyx5Q0FBMkM7QUFDM0Msc0NBQXdDO0FBRXhDLDBDQUErRDtBQUMvRCw2RUFBMkU7QUFDM0UsK0RBQTZEO0FBQzdELDhDQUF3RjtBQU14RjtJQUNFLHNCQUNTLFdBQStCLEVBQy9CLFdBQXdCLEVBQ3ZCLFNBQTZCLEVBQzdCLGlCQUFvQyxFQUNwQyxZQUEwQixFQUMxQixFQUFxQixFQUNyQixJQUFZO1FBTmIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQzdCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUNoQixDQUFDO0lBRVAsK0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUVsQixRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1osa0ZBQWtGO1lBQ2xGLGtCQUFrQixFQUFFLFVBQVMsSUFBSTtnQkFDL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDZCxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOzZCQUNsQyxJQUFJLENBQUM7NEJBQ0osTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs0QkFDbkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs0QkFDbkMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzt3QkFDNUIsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7b0JBQ3BDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzVCLENBQUM7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFBLFFBQVEsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBakMsQ0FBaUMsRUFDN0MsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFPLENBQUMsRUFBNUMsQ0FBNEMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7SUFFTyx5Q0FBa0IsR0FBMUI7UUFBQSxpQkF3QkM7UUF2QkMsRUFBRSxDQUFDLENBQUMsb0JBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFNLFFBQVEsR0FBUSxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWE7Z0JBQ2pDLFdBQVcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCO2dCQUN0QyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQWU7Z0JBQzdDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzdELFFBQVEsQ0FBQyxhQUFhLEdBQUc7Z0JBQ3ZCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDL0MsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUNyQywyQ0FBMkMsQ0FBQzt5QkFDM0MsSUFBSSxDQUFDLFVBQUMsTUFBZTt3QkFDcEIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDWCxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOzRCQUN6QyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTtpQ0FDM0IsSUFBSSxDQUFDO2dDQUNKLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxxQkFBWSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7NEJBQ3RHLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2pDLENBQUM7WUFDSCxDQUFDLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQS9EVSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBR3NCLHdDQUFrQjtZQUNsQiwwQkFBVztZQUNaLDZCQUFrQjtZQUNWLDRCQUFpQjtZQUN0Qix1QkFBWTtZQUN0Qix3QkFBaUI7WUFDZixhQUFNO09BUlgsWUFBWSxDQWdFeEI7SUFBRCxtQkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3RvclJlZiwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnYXBwbGljYXRpb24nO1xuaW1wb3J0ICogYXMgZnJhbWVNb2R1bGUgZnJvbSAndWkvZnJhbWUnO1xuXG5pbXBvcnQgeyBVc2VyLCBNZW51SXRlbSwgTWVudUl0ZW1OYW1lIH0gZnJvbSBcIn4vYXNzZXRzL2RvbWFpblwiO1xuaW1wb3J0IHsgTGVhZGVyQm9hcmRTZXJ2aWNlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzL2xlYWRlcmJvYXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UsIE11bHRpUGxheWVyU2VydmljZSwgUG9wdXBTZXJ2aWNlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IFxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGxlYWRlckJvYXJkOiBMZWFkZXJCb2FyZFNlcnZpY2UsXG4gICAgcHVibGljIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIG1wU2VydmljZTogTXVsdGlQbGF5ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcG9wdXBTZXJ2aWNlOiBQb3B1cFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmVcbiAgICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdEJhY2tOYXZpZ2F0aW9uKCk7XG4gICAgXG4gICAgbGV0IHBhcmVudCA9IHRoaXM7XG5cbiAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgIC8vIG9wdGlvbmFsIGJ1dCB1c2VmdWwgdG8gaW1tZWRpYXRlbHkgcmUtbG9nb24gdGhlIHVzZXIgd2hlbiBoZSByZS12aXNpdHMgeW91ciBhcHBcbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxvZ2dlZEluKSB7XG4gICAgICAgICAgcGFyZW50LnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHBhcmVudC51c2VyU2VydmljZS5zZXRVc2VyKGRhdGEudXNlcilcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhcmVudC5sZWFkZXJCb2FyZC5zZXROZXdTUFNjb3JlKCk7XG4gICAgICAgICAgICAgICAgcGFyZW50LmxlYWRlckJvYXJkLnNldE5ld01QU2NvcmUoKTtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnQudXNlclNlcnZpY2UudXNlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBwYXJlbnQuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkudGhlbihcbiAgICAgIGluc3RhbmNlID0+IGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpLFxuICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0QmFja05hdmlnYXRpb24oKTogdm9pZCB7XG4gICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgY29uc3QgYWN0aXZpdHk6IGFueSA9IGFwcGxpY2F0aW9uLmFuZHJvaWQuc3RhcnRBY3Rpdml0eSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLmFuZHJvaWQuY3VycmVudEFjdGl2aXR5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLmFuZHJvaWQuYWN0aXZpdHk7XG4gICAgICBhY3Rpdml0eS5vbkJhY2tQcmVzc2VkID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAodGhpcy5uYXZpZ2F0aW9uU2VydmljZS5pc0dhbWVTZXNzaW9uT3BlbigpKSB7XG4gICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuY29uZmlybSgnQ2FuY2VsIGdhbWUnLFxuICAgICAgICAgICAgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWwgdGhlIGdhbWU/JylcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMubXBTZXJ2aWNlLnNlc3Npb24uaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5tcFNlcnZpY2UudXBkYXRlU2Vzc2lvbigpXG4gICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGVUb0FuZENsZWFySGlzdG9yeShNZW51SXRlbU5hbWUubXVsdGlwbGF5ZXIsIHVuZGVmaW5lZCwgJ3NsaWRlUmlnaHQnKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkuZ29CYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iXX0=