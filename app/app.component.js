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
                    parent.userService.setUser(data.user);
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
            core_1.ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsdURBQTBEO0FBRzFELDhDQUE4RDtBQU05RDtJQUNFLHNCQUNTLFdBQXdCLEVBQ3ZCLEVBQXFCO1FBRHRCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZCLE9BQUUsR0FBRixFQUFFLENBQW1CO0lBQUksQ0FBQztJQUVwQywrQkFBUSxHQUFSO1FBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWxCLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDWixrRkFBa0Y7WUFDbEYsa0JBQWtCLEVBQUUsVUFBUyxJQUFJO2dCQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM1QixDQUFDO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFBLFFBQVEsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBakMsQ0FBaUMsRUFDN0MsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFPLENBQUMsRUFBNUMsQ0FBNEMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7SUF2QlUsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQUdzQixzQkFBVztZQUNuQix3QkFBaUI7T0FIcEIsWUFBWSxDQXdCeEI7SUFBRCxtQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L2Fzc2V0cy9kb21haW5cIjtcclxuaW1wb3J0IHsgQXVkaW9TZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gXCJ+L2Fzc2V0cy9zZXJ2aWNlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBcclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGxldCBwYXJlbnQgPSB0aGlzO1xyXG5cclxuICAgIGZpcmViYXNlLmluaXQoe1xyXG4gICAgICAvLyBvcHRpb25hbCBidXQgdXNlZnVsIHRvIGltbWVkaWF0ZWx5IHJlLWxvZ29uIHRoZSB1c2VyIHdoZW4gaGUgcmUtdmlzaXRzIHlvdXIgYXBwXHJcbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubG9nZ2VkSW4pIHtcclxuICAgICAgICAgIHBhcmVudC51c2VyU2VydmljZS5zZXRVc2VyKGRhdGEudXNlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBhcmVudC51c2VyU2VydmljZS51c2VyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyZW50LmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgfSkudGhlbihcclxuICAgICAgaW5zdGFuY2UgPT4gY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIiksXHJcbiAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=