"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_lifecycle_1 = require("~/assets/modules/application-lifecycle/application-lifecycle");
var AppComponent = /** @class */ (function () {
    function AppComponent(lifeCycle) {
        this.lifeCycle = lifeCycle;
        this.lifeCycle.initialise();
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFHMUMsc0dBQW9HO0FBTXBHO0lBQ0Usc0JBQTJCLFNBQStCO1FBQS9CLGNBQVMsR0FBVCxTQUFTLENBQXNCO1FBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUhVLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzt5Q0FFc0MsNENBQW9CO09BRC9DLFlBQVksQ0FJeEI7SUFBRCxtQkFBQztDQUFBLEFBSkQsSUFJQztBQUpZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEF1ZGlvU2VydmljZSB9IGZyb20gXCJ+L2Fzc2V0cy9zZXJ2aWNlcy9hdWRpby5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uTGlmZWN5Y2xlIH0gZnJvbSBcIn4vYXNzZXRzL21vZHVsZXMvYXBwbGljYXRpb24tbGlmZWN5Y2xlL2FwcGxpY2F0aW9uLWxpZmVjeWNsZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBsaWZlQ3ljbGU6IEFwcGxpY2F0aW9uTGlmZWN5Y2xlKSB7XHJcbiAgICB0aGlzLmxpZmVDeWNsZS5pbml0aWFsaXNlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==