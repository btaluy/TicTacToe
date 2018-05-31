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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsdURBQTBEO0FBRzFELDhDQUFnRDtBQU1oRDtJQUNFLHNCQUNTLFdBQXdCLEVBQ3ZCLEVBQXFCO1FBRHRCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZCLE9BQUUsR0FBRixFQUFFLENBQW1CO0lBQUksQ0FBQztJQUVwQywrQkFBUSxHQUFSO1FBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWxCLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDWixrRkFBa0Y7WUFDbEYsa0JBQWtCLEVBQUUsVUFBUyxJQUFJO2dCQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ2xDLElBQUksQ0FBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztvQkFDcEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztZQUNILENBQUM7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLFVBQUEsUUFBUSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFqQyxDQUFpQyxFQUM3QyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLEtBQU8sQ0FBQyxFQUE1QyxDQUE0QyxDQUN0RCxDQUFDO0lBQ0osQ0FBQztJQXZCVSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBR3NCLHNCQUFXO1lBQ25CLHdCQUFpQjtPQUhwQixZQUFZLENBd0J4QjtJQUFELG1CQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vYXNzZXRzL2RvbWFpblwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCJ+L2Fzc2V0cy9zZXJ2aWNlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBcclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGxldCBwYXJlbnQgPSB0aGlzO1xyXG5cclxuICAgIGZpcmViYXNlLmluaXQoe1xyXG4gICAgICAvLyBvcHRpb25hbCBidXQgdXNlZnVsIHRvIGltbWVkaWF0ZWx5IHJlLWxvZ29uIHRoZSB1c2VyIHdoZW4gaGUgcmUtdmlzaXRzIHlvdXIgYXBwXHJcbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubG9nZ2VkSW4pIHtcclxuICAgICAgICAgIHBhcmVudC51c2VyU2VydmljZS5zZXRVc2VyKGRhdGEudXNlcilcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gcGFyZW50LmNkLmRldGVjdENoYW5nZXMoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBhcmVudC51c2VyU2VydmljZS51c2VyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgcGFyZW50LmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4oXHJcbiAgICAgIGluc3RhbmNlID0+IGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpLFxyXG4gICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19