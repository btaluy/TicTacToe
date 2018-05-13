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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsdURBQTBEO0FBRzFELHNHQUFvRztBQU1wRztJQUNFLHNCQUEyQixTQUErQjtRQUEvQixjQUFTLEdBQVQsU0FBUyxDQUFzQjtRQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNaLGtCQUFrQixFQUFFLFVBQVMsSUFBSTtnQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDbEYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3BGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBQSxRQUFRLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLEVBQWpDLENBQWlDLEVBQzdDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsS0FBTyxDQUFDLEVBQTVDLENBQTRDLENBQ3RELENBQUM7SUFDSixDQUFDO0lBbEJVLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzt5Q0FFc0MsNENBQW9CO09BRC9DLFlBQVksQ0FtQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuaW1wb3J0IHsgQXVkaW9TZXJ2aWNlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzL2F1ZGlvLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQXBwbGljYXRpb25MaWZlY3ljbGUgfSBmcm9tIFwifi9hc3NldHMvbW9kdWxlcy9hcHBsaWNhdGlvbi1saWZlY3ljbGUvYXBwbGljYXRpb24tbGlmZWN5Y2xlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IFxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGxpZmVDeWNsZTogQXBwbGljYXRpb25MaWZlY3ljbGUpIHtcclxuICAgIHRoaXMubGlmZUN5Y2xlLmluaXRpYWxpc2UoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgZmlyZWJhc2UuaW5pdCh7XHJcbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oZGF0YSkgeyAvLyBvcHRpb25hbCBidXQgdXNlZnVsIHRvIGltbWVkaWF0ZWx5IHJlLWxvZ29uIHRoZSB1c2VyIHdoZW4gaGUgcmUtdmlzaXRzIHlvdXIgYXBwXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5sb2dnZWRJbiA/IFwiTG9nZ2VkIGluIHRvIGZpcmViYXNlXCIgOiBcIkxvZ2dlZCBvdXQgZnJvbSBmaXJlYmFzZVwiKTtcclxuICAgICAgICBpZiAoZGF0YS5sb2dnZWRJbikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyJ3MgZW1haWwgYWRkcmVzczogXCIgKyAoZGF0YS51c2VyLmVtYWlsID8gZGF0YS51c2VyLmVtYWlsIDogXCJOL0FcIikpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSkudGhlbihcclxuICAgICAgaW5zdGFuY2UgPT4gY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIiksXHJcbiAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=