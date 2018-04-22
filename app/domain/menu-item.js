"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MenuItem = /** @class */ (function () {
    function MenuItem(name, displayNameKey, icon, authorisation, hasBadge) {
        this.hasBadge = false;
        this.visible = false;
        this.name = name;
        this.displayNameKey = displayNameKey;
        this.icon = icon;
        this.authorisation = authorisation;
        if (hasBadge) {
            this.hasBadge = hasBadge;
            this.badgeCount = 0;
        }
    }
    return MenuItem;
}());
exports.MenuItem = MenuItem;
var MenuItemName;
(function (MenuItemName) {
    MenuItemName[MenuItemName["home"] = 0] = "home";
})(MenuItemName = exports.MenuItemName || (exports.MenuItemName = {}));
var MenuAuthorisation;
(function (MenuAuthorisation) {
    MenuAuthorisation[MenuAuthorisation["showAlways"] = 0] = "showAlways";
    MenuAuthorisation[MenuAuthorisation["showWhenloggedIn"] = 1] = "showWhenloggedIn";
    MenuAuthorisation[MenuAuthorisation["showWhenNotLoggedIn"] = 2] = "showWhenNotLoggedIn";
})(MenuAuthorisation = exports.MenuAuthorisation || (exports.MenuAuthorisation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVudS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFXRSxrQkFBbUIsSUFBWSxFQUNaLGNBQXNCLEVBQ3RCLElBQVksRUFDWixhQUFnQyxFQUNoQyxRQUFrQjtRQVQ5QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFPOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUgsZUFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksNEJBQVE7QUE2QnJCLElBQVksWUFFWDtBQUZELFdBQVksWUFBWTtJQUN0QiwrQ0FBUSxDQUFBO0FBQ1YsQ0FBQyxFQUZXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBRXZCO0FBRUQsSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLHFFQUFjLENBQUE7SUFDZCxpRkFBZ0IsQ0FBQTtJQUNoQix1RkFBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSlcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFJNUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWVudUl0ZW0ge1xyXG5cclxuICBwdWJsaWMgbmFtZTogTWVudUl0ZW1OYW1lO1xyXG4gIHB1YmxpYyBkaXNwbGF5TmFtZUtleTogc3RyaW5nO1xyXG4gIHB1YmxpYyBpY29uOiBzdHJpbmc7XHJcbiAgcHVibGljIGF1dGhvcmlzYXRpb246IE1lbnVBdXRob3Jpc2F0aW9uO1xyXG4gIHB1YmxpYyBoYXNCYWRnZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBiYWRnZUNvdW50OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lS2V5OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgIGljb246IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXNhdGlvbjogTWVudUF1dGhvcmlzYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgIGhhc0JhZGdlPzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGlzcGxheU5hbWVLZXkgPSBkaXNwbGF5TmFtZUtleTtcclxuICAgIHRoaXMuaWNvbiA9IGljb247XHJcbiAgICB0aGlzLmF1dGhvcmlzYXRpb24gPSBhdXRob3Jpc2F0aW9uO1xyXG5cclxuICAgIGlmIChoYXNCYWRnZSkge1xyXG4gICAgICB0aGlzLmhhc0JhZGdlID0gaGFzQmFkZ2U7XHJcbiAgICAgIHRoaXMuYmFkZ2VDb3VudCA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWVudUl0ZW1OYW1lIHtcclxuICBob21lID0gMFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNZW51QXV0aG9yaXNhdGlvbiB7XHJcbiAgc2hvd0Fsd2F5cyA9IDAsXHJcbiAgc2hvd1doZW5sb2dnZWRJbixcclxuICBzaG93V2hlbk5vdExvZ2dlZEluXHJcbn0iXX0=