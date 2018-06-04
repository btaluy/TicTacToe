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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUU7QUFDckUsdURBQTBEO0FBRzFELDZFQUEyRTtBQUMzRSwrREFBNkQ7QUFNN0Q7SUFDRSxzQkFDUyxXQUErQixFQUMvQixXQUF3QixFQUN2QixFQUFxQixFQUNyQixJQUFZO1FBSGIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQVE7SUFDaEIsQ0FBQztJQUVQLCtCQUFRLEdBQVI7UUFDRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbEIsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNaLGtGQUFrRjtZQUNsRixrQkFBa0IsRUFBRSxVQUFTLElBQUk7Z0JBQy9CLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQ2QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs2QkFDbEMsSUFBSSxDQUFDOzRCQUNKLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7NEJBQ25DLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7d0JBQzVCLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO29CQUNwQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUM1QixDQUFDO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBQSxRQUFRLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLEVBQWpDLENBQWlDLEVBQzdDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsS0FBTyxDQUFDLEVBQTVDLENBQTRDLENBQ3RELENBQUM7SUFDSixDQUFDO0lBL0JVLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzt5Q0FHc0Isd0NBQWtCO1lBQ2xCLDBCQUFXO1lBQ25CLHdCQUFpQjtZQUNmLGFBQU07T0FMWCxZQUFZLENBZ0N4QjtJQUFELG1CQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi9hc3NldHMvZG9tYWluXCI7XHJcbmltcG9ydCB7IExlYWRlckJvYXJkU2VydmljZSB9IGZyb20gXCJ+L2Fzc2V0cy9zZXJ2aWNlcy9sZWFkZXJib2FyZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBcclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbGVhZGVyQm9hcmQ6IExlYWRlckJvYXJkU2VydmljZSxcclxuICAgIHB1YmxpYyB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgem9uZTogTmdab25lXHJcbiAgICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGxldCBwYXJlbnQgPSB0aGlzO1xyXG5cclxuICAgIGZpcmViYXNlLmluaXQoe1xyXG4gICAgICAvLyBvcHRpb25hbCBidXQgdXNlZnVsIHRvIGltbWVkaWF0ZWx5IHJlLWxvZ29uIHRoZSB1c2VyIHdoZW4gaGUgcmUtdmlzaXRzIHlvdXIgYXBwXHJcbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubG9nZ2VkSW4pIHtcclxuICAgICAgICAgIHBhcmVudC56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIHBhcmVudC51c2VyU2VydmljZS5zZXRVc2VyKGRhdGEudXNlcilcclxuICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQubGVhZGVyQm9hcmQuc2V0TmV3U1BTY29yZSgpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwYXJlbnQudXNlclNlcnZpY2UudXNlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIHBhcmVudC5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKFxyXG4gICAgICBpbnN0YW5jZSA9PiBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKSxcclxuICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==