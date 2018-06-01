"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var leaderboard_service_1 = require("~/assets/services/leaderboard.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(leaderBoard, cd) {
        this.leaderBoard = leaderBoard;
        this.cd = cd;
    }
    AppComponent.prototype.ngOnInit = function () {
        var parent = this;
        firebase.init({
            // optional but useful to immediately re-logon the user when he re-visits your app
            onAuthStateChanged: function (data) {
                if (data && data.loggedIn) {
                    parent.leaderBoard.setUser(data.user)
                        .then(function () {
                        parent.leaderBoard.setNewSPScore();
                        parent.cd.detectChanges();
                    });
                }
                else {
                    parent.leaderBoard.user = undefined;
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
            core_1.ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsdURBQTBEO0FBRzFELDZFQUEyRTtBQU0zRTtJQUNFLHNCQUNTLFdBQStCLEVBQzlCLEVBQXFCO1FBRHRCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUM5QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtJQUN6QixDQUFDO0lBRVAsK0JBQVEsR0FBUjtRQUNFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUVsQixRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1osa0ZBQWtGO1lBQ2xGLGtCQUFrQixFQUFFLFVBQVMsSUFBSTtnQkFDL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUMxQixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3lCQUNsQyxJQUFJLENBQUM7d0JBQ0osTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQzt3QkFDbkMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDNUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7b0JBQ3BDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzVCLENBQUM7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFBLFFBQVEsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBakMsQ0FBaUMsRUFDN0MsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFPLENBQUMsRUFBNUMsQ0FBNEMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7SUEzQlUsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQUdzQix3Q0FBa0I7WUFDMUIsd0JBQWlCO09BSHBCLFlBQVksQ0E0QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi9hc3NldHMvZG9tYWluXCI7XG5pbXBvcnQgeyBMZWFkZXJCb2FyZFNlcnZpY2UgfSBmcm9tIFwifi9hc3NldHMvc2VydmljZXMvbGVhZGVyYm9hcmQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBsZWFkZXJCb2FyZDogTGVhZGVyQm9hcmRTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgbGV0IHBhcmVudCA9IHRoaXM7XG5cbiAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgIC8vIG9wdGlvbmFsIGJ1dCB1c2VmdWwgdG8gaW1tZWRpYXRlbHkgcmUtbG9nb24gdGhlIHVzZXIgd2hlbiBoZSByZS12aXNpdHMgeW91ciBhcHBcbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxvZ2dlZEluKSB7XG4gICAgICAgICAgcGFyZW50LmxlYWRlckJvYXJkLnNldFVzZXIoZGF0YS51c2VyKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBwYXJlbnQubGVhZGVyQm9hcmQuc2V0TmV3U1BTY29yZSgpO1xuICAgICAgICAgICAgICBwYXJlbnQuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LmxlYWRlckJvYXJkLnVzZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcGFyZW50LmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLnRoZW4oXG4gICAgICBpbnN0YW5jZSA9PiBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKSxcbiAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApXG4gICAgKTtcbiAgfVxufVxuIl19