"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var application_lifecycle_1 = require("~/assets/modules/application-lifecycle/application-lifecycle");
var AppComponent = /** @class */ (function () {
    function AppComponent(lifeCycle) {
        this.lifeCycle = lifeCycle;
        this.lifeCycle.initialise();
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase.init({
            onAuthStateChanged: function (data) {
                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                if (data.loggedIn) {
                    console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
                    console.log(JSON.stringify(data));
                }
            }
        }).then(function (instance) { return console.log("firebase.init done"); }, function (error) { return console.log("firebase.init error: " + error); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [application_lifecycle_1.ApplicationLifecycle])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
