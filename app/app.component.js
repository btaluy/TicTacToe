"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var application_lifecycle_1 = require("~/assets/modules/application-lifecycle/application-lifecycle");
var domain_1 = require("~/assets/domain");
var services_1 = require("~/assets/services");
var AppComponent = /** @class */ (function () {
    function AppComponent(userService, lifeCycle, cd) {
        this.userService = userService;
        this.lifeCycle = lifeCycle;
        this.cd = cd;
        this.lifeCycle.initialise();
    }
    AppComponent.prototype.ngOnInit = function () {
        var parent = this;
        firebase.init({
            onAuthStateChanged: function (data) {
                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                if (data.loggedIn) {
                    parent.userService.user = domain_1.User.fromObject(data.user);
                }
                else {
                    parent.userService.user = undefined;
                }
                parent.cd.detectChanges();
            }
        }).then(function (instance) { return console.log("firebase.init done"); }, function (error) { return console.log("firebase.init error: " + error); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [services_1.UserService,
            application_lifecycle_1.ApplicationLifecycle,
            core_1.ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsdURBQTBEO0FBRTFELHNHQUFvRztBQUNwRywwQ0FBdUM7QUFDdkMsOENBQThEO0FBTTlEO0lBQ0Usc0JBQ1MsV0FBd0IsRUFDdkIsU0FBK0IsRUFDL0IsRUFBcUI7UUFGdEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBc0I7UUFDL0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1osa0JBQWtCLEVBQUUsVUFBUyxJQUFJO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUNsRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDbEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsYUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO2dCQUN0QyxDQUFDO2dCQUVELE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDNUIsQ0FBQztTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBQSxRQUFRLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLEVBQWpDLENBQWlDLEVBQzdDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsS0FBTyxDQUFDLEVBQTVDLENBQTRDLENBQ3RELENBQUM7SUFDSixDQUFDO0lBekJVLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzt5Q0FHc0Isc0JBQVc7WUFDWiw0Q0FBb0I7WUFDM0Isd0JBQWlCO09BSnBCLFlBQVksQ0EwQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbmltcG9ydCB7IEFwcGxpY2F0aW9uTGlmZWN5Y2xlIH0gZnJvbSBcIn4vYXNzZXRzL21vZHVsZXMvYXBwbGljYXRpb24tbGlmZWN5Y2xlL2FwcGxpY2F0aW9uLWxpZmVjeWNsZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L2Fzc2V0cy9kb21haW5cIjtcbmltcG9ydCB7IEF1ZGlvU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9hc3NldHMvc2VydmljZXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGlmZUN5Y2xlOiBBcHBsaWNhdGlvbkxpZmVjeWNsZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMubGlmZUN5Y2xlLmluaXRpYWxpc2UoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzO1xuICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbihkYXRhKSB7IC8vIG9wdGlvbmFsIGJ1dCB1c2VmdWwgdG8gaW1tZWRpYXRlbHkgcmUtbG9nb24gdGhlIHVzZXIgd2hlbiBoZSByZS12aXNpdHMgeW91ciBhcHBcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5sb2dnZWRJbiA/IFwiTG9nZ2VkIGluIHRvIGZpcmViYXNlXCIgOiBcIkxvZ2dlZCBvdXQgZnJvbSBmaXJlYmFzZVwiKTtcbiAgICAgICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcbiAgICAgICAgICBwYXJlbnQudXNlclNlcnZpY2UudXNlciA9IFVzZXIuZnJvbU9iamVjdChkYXRhLnVzZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudC51c2VyU2VydmljZS51c2VyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50LmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKFxuICAgICAgaW5zdGFuY2UgPT4gY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIiksXG4gICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==