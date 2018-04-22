"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var services_1 = require("~/services");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsdUNBQTZEO0FBUTdEO0lBQ0ksdUJBQ1UsS0FBVyxFQUNYLGtCQUFxQyxFQUNyQyxhQUEyQjtRQUYzQixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUNqQyxDQUFDO0lBRUwsZ0NBQVEsR0FBUjtRQUNJLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBbEJRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBR21CLFdBQUk7WUFDUyw0QkFBaUI7WUFDdEIsdUJBQVk7T0FKNUIsYUFBYSxDQW1CekI7SUFBRCxvQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UsIFBvcHVwU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IE1lbnVJdGVtTmFtZSB9IGZyb20gXCJ+L2RvbWFpblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgIHByaXZhdGUgX3BhZ2U6IFBhZ2UsXHJcbiAgICAgIHByaXZhdGUgX25hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcclxuICAgICAgcHJpdmF0ZSBfcG9wdXBTZXJ2aWNlOiBQb3B1cFNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvU1AoKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuX3BvcHVwU2VydmljZS50b2FzdCgnTmF2aWdhdGluZyB0byBTaW5nbGVwbGF5ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29Ub01QKCk6IHZvaWQge1xyXG4gICAgICB0aGlzLl9wb3B1cFNlcnZpY2UudG9hc3QoJ05hdmlnYXRpbmcgdG8gTXVsdGlwbGF5ZXInKTtcclxuICAgIH1cclxufVxyXG4iXX0=