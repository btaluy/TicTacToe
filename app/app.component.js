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
