"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var services_1 = require("~/assets/services");
var AppComponent = /** @class */ (function () {
    function AppComponent(userService, cd) {
        this.userService = userService;
        this.cd = cd;
    }
    AppComponent.prototype.ngOnInit = function () {
        var parent = this;
        firebase.init({
            // optional but useful to immediately re-logon the user when he re-visits your app
            onAuthStateChanged: function (data) {
                if (data && data.loggedIn) {
                    parent.userService.setUser(data.user)
                        .then(function () { return parent.cd.detectChanges(); });
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
        __metadata("design:paramtypes", [services_1.UserService,
            core_1.ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsdURBQTBEO0FBRzFELDhDQUE4RDtBQU05RDtJQUNFLHNCQUNTLFdBQXdCLEVBQ3ZCLEVBQXFCO1FBRHRCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZCLE9BQUUsR0FBRixFQUFFLENBQW1CO0lBQUksQ0FBQztJQUVwQywrQkFBUSxHQUFSO1FBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWxCLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDWixrRkFBa0Y7WUFDbEYsa0JBQWtCLEVBQUUsVUFBUyxJQUFJO2dCQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ2xDLElBQUksQ0FBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztvQkFDcEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztZQUNILENBQUM7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLFVBQUEsUUFBUSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFqQyxDQUFpQyxFQUM3QyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLEtBQU8sQ0FBQyxFQUE1QyxDQUE0QyxDQUN0RCxDQUFDO0lBQ0osQ0FBQztJQXZCVSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBR3NCLHNCQUFXO1lBQ25CLHdCQUFpQjtPQUhwQixZQUFZLENBd0J4QjtJQUFELG1CQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vYXNzZXRzL2RvbWFpblwiO1xyXG5pbXBvcnQgeyBBdWRpb1NlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IFxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgbGV0IHBhcmVudCA9IHRoaXM7XHJcblxyXG4gICAgZmlyZWJhc2UuaW5pdCh7XHJcbiAgICAgIC8vIG9wdGlvbmFsIGJ1dCB1c2VmdWwgdG8gaW1tZWRpYXRlbHkgcmUtbG9nb24gdGhlIHVzZXIgd2hlbiBoZSByZS12aXNpdHMgeW91ciBhcHBcclxuICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sb2dnZWRJbikge1xyXG4gICAgICAgICAgcGFyZW50LnVzZXJTZXJ2aWNlLnNldFVzZXIoZGF0YS51c2VyKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBwYXJlbnQuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGFyZW50LnVzZXJTZXJ2aWNlLnVzZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBwYXJlbnQuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSkudGhlbihcclxuICAgICAgaW5zdGFuY2UgPT4gY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIiksXHJcbiAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=