"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var services_1 = require("~/services");
var domain_1 = require("~/domain");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_page, _navigationService, _popupService) {
        this._page = _page;
        this._navigationService = _navigationService;
        this._popupService = _popupService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this._page.actionBarHidden = true;
    };
    HomeComponent.prototype.goToSP = function () {
        this._popupService.toast('Navigating to Singleplayer');
        this._navigationService.navigateTo(domain_1.MenuItemName.singleplayer);
    };
    HomeComponent.prototype.goToMP = function () {
        this._popupService.toast('Navigating to Multiplayer');
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page,
            services_1.NavigationService,
            services_1.PopupService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsdUNBQTZEO0FBQzdELG1DQUF3QztBQU94QztJQUNJLHVCQUNVLEtBQVcsRUFDWCxrQkFBcUMsRUFDckMsYUFBMkI7UUFGM0IsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFDakMsQ0FBQztJQUVMLGdDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLHFCQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFuQlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FHbUIsV0FBSTtZQUNTLDRCQUFpQjtZQUN0Qix1QkFBWTtPQUo1QixhQUFhLENBb0J6QjtJQUFELG9CQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSwgUG9wdXBTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgTWVudUl0ZW1OYW1lIH0gZnJvbSBcIn4vZG9tYWluXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHJpdmF0ZSBfcGFnZTogUGFnZSxcclxuICAgICAgcHJpdmF0ZSBfbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLFxyXG4gICAgICBwcml2YXRlIF9wb3B1cFNlcnZpY2U6IFBvcHVwU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvVG9TUCgpOiB2b2lkIHtcclxuICAgICAgdGhpcy5fcG9wdXBTZXJ2aWNlLnRvYXN0KCdOYXZpZ2F0aW5nIHRvIFNpbmdsZXBsYXllcicpO1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZVRvKE1lbnVJdGVtTmFtZS5zaW5nbGVwbGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvTVAoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuX3BvcHVwU2VydmljZS50b2FzdCgnTmF2aWdhdGluZyB0byBNdWx0aXBsYXllcicpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==