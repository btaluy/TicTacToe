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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsdURBQTBEO0FBRzFELDhDQUFnRDtBQU1oRDtJQUNFLHNCQUNTLFdBQXdCLEVBQ3ZCLEVBQXFCO1FBRHRCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZCLE9BQUUsR0FBRixFQUFFLENBQW1CO0lBQUksQ0FBQztJQUVwQywrQkFBUSxHQUFSO1FBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWxCLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDWixrRkFBa0Y7WUFDbEYsa0JBQWtCLEVBQUUsVUFBUyxJQUFJO2dCQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ2xDLElBQUksQ0FBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztvQkFDcEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztZQUNILENBQUM7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLFVBQUEsUUFBUSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFqQyxDQUFpQyxFQUM3QyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLEtBQU8sQ0FBQyxFQUE1QyxDQUE0QyxDQUN0RCxDQUFDO0lBQ0osQ0FBQztJQXZCVSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBR3NCLHNCQUFXO1lBQ25CLHdCQUFpQjtPQUhwQixZQUFZLENBd0J4QjtJQUFELG1CQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vYXNzZXRzL2RvbWFpblwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9hc3NldHMvc2VydmljZXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpcztcblxuICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgLy8gb3B0aW9uYWwgYnV0IHVzZWZ1bCB0byBpbW1lZGlhdGVseSByZS1sb2dvbiB0aGUgdXNlciB3aGVuIGhlIHJlLXZpc2l0cyB5b3VyIGFwcFxuICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubG9nZ2VkSW4pIHtcbiAgICAgICAgICBwYXJlbnQudXNlclNlcnZpY2Uuc2V0VXNlcihkYXRhLnVzZXIpXG4gICAgICAgICAgICAudGhlbigoKSA9PiBwYXJlbnQuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnQudXNlclNlcnZpY2UudXNlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBwYXJlbnQuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkudGhlbihcbiAgICAgIGluc3RhbmNlID0+IGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpLFxuICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YClcbiAgICApO1xuICB9XG59XG4iXX0=