"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var leaderboard_service_1 = require("~/assets/services/leaderboard.service");
var user_service_1 = require("~/assets/services/user.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(leaderBoard, userService, cd, zone) {
        this.leaderBoard = leaderBoard;
        this.userService = userService;
        this.cd = cd;
        this.zone = zone;
    }
    AppComponent.prototype.ngOnInit = function () {
        var parent = this;
        firebase.init({
            // optional but useful to immediately re-logon the user when he re-visits your app
            onAuthStateChanged: function (data) {
                if (data && data.loggedIn) {
                    parent.zone.run(function () {
                        parent.userService.setUser(data.user)
                            .then(function () {
                            parent.leaderBoard.setNewSPScore();
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
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [leaderboard_service_1.LeaderBoardService,
            user_service_1.UserService,
            core_1.ChangeDetectorRef,
            core_1.NgZone])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUU7QUFDckUsdURBQXlEO0FBR3pELDZFQUEyRTtBQUMzRSwrREFBNkQ7QUFNN0Q7SUFDRSxzQkFDUyxXQUErQixFQUMvQixXQUF3QixFQUN2QixFQUFxQixFQUNyQixJQUFZO1FBSGIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQVE7SUFDaEIsQ0FBQztJQUVQLCtCQUFRLEdBQVI7UUFDRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbEIsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNaLGtGQUFrRjtZQUNsRixrQkFBa0IsRUFBRSxVQUFTLElBQUk7Z0JBQy9CLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQ2QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs2QkFDbEMsSUFBSSxDQUFDOzRCQUNKLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7NEJBQ25DLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7d0JBQzVCLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO29CQUNwQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUM1QixDQUFDO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBQSxRQUFRLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLEVBQWpDLENBQWlDLEVBQzdDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsS0FBTyxDQUFDLEVBQTVDLENBQTRDLENBQ3RELENBQUM7SUFDSixDQUFDO0lBL0JVLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzt5Q0FHc0Isd0NBQWtCO1lBQ2xCLDBCQUFXO1lBQ25CLHdCQUFpQjtZQUNmLGFBQU07T0FMWCxZQUFZLENBZ0N4QjtJQUFELG1CQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZSc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi9hc3NldHMvZG9tYWluXCI7XG5pbXBvcnQgeyBMZWFkZXJCb2FyZFNlcnZpY2UgfSBmcm9tIFwifi9hc3NldHMvc2VydmljZXMvbGVhZGVyYm9hcmQuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9hc3NldHMvc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IFxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGxlYWRlckJvYXJkOiBMZWFkZXJCb2FyZFNlcnZpY2UsXG4gICAgcHVibGljIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZVxuICAgICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgbGV0IHBhcmVudCA9IHRoaXM7XG5cbiAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgIC8vIG9wdGlvbmFsIGJ1dCB1c2VmdWwgdG8gaW1tZWRpYXRlbHkgcmUtbG9nb24gdGhlIHVzZXIgd2hlbiBoZSByZS12aXNpdHMgeW91ciBhcHBcbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxvZ2dlZEluKSB7XG4gICAgICAgICAgcGFyZW50LnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHBhcmVudC51c2VyU2VydmljZS5zZXRVc2VyKGRhdGEudXNlcilcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhcmVudC5sZWFkZXJCb2FyZC5zZXROZXdTUFNjb3JlKCk7XG4gICAgICAgICAgICAgICAgcGFyZW50LmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LnVzZXJTZXJ2aWNlLnVzZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcGFyZW50LmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLnRoZW4oXG4gICAgICBpbnN0YW5jZSA9PiBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKSxcbiAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApXG4gICAgKTtcbiAgfVxufVxuIl19