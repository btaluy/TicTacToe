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
    MenuItemName[MenuItemName["singleplayer"] = 1] = "singleplayer";
    MenuItemName[MenuItemName["login"] = 2] = "login";
    MenuItemName[MenuItemName["leaderboard"] = 3] = "leaderboard";
})(MenuItemName = exports.MenuItemName || (exports.MenuItemName = {}));
var MenuAuthorisation;
(function (MenuAuthorisation) {
    MenuAuthorisation[MenuAuthorisation["showAlways"] = 0] = "showAlways";
    MenuAuthorisation[MenuAuthorisation["showWhenloggedIn"] = 1] = "showWhenloggedIn";
    MenuAuthorisation[MenuAuthorisation["showWhenNotLoggedIn"] = 2] = "showWhenNotLoggedIn";
})(MenuAuthorisation = exports.MenuAuthorisation || (exports.MenuAuthorisation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVudS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFXRSxrQkFBbUIsSUFBWSxFQUNaLGNBQXNCLEVBQ3RCLElBQVksRUFDWixhQUFnQyxFQUNoQyxRQUFrQjtRQVQ5QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFPOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUgsZUFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksNEJBQVE7QUE2QnJCLElBQVksWUFLWDtBQUxELFdBQVksWUFBWTtJQUN0QiwrQ0FBUSxDQUFBO0lBQ1IsK0RBQVksQ0FBQTtJQUNaLGlEQUFLLENBQUE7SUFDTCw2REFBVyxDQUFBO0FBQ2IsQ0FBQyxFQUxXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBS3ZCO0FBRUQsSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLHFFQUFjLENBQUE7SUFDZCxpRkFBZ0IsQ0FBQTtJQUNoQix1RkFBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSlcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFJNUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWVudUl0ZW0ge1xuXG4gIHB1YmxpYyBuYW1lOiBNZW51SXRlbU5hbWU7XG4gIHB1YmxpYyBkaXNwbGF5TmFtZUtleTogc3RyaW5nO1xuICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICBwdWJsaWMgYXV0aG9yaXNhdGlvbjogTWVudUF1dGhvcmlzYXRpb247XG4gIHB1YmxpYyBoYXNCYWRnZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgYmFkZ2VDb3VudDogbnVtYmVyO1xuXG4gIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lS2V5OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICBpY29uOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICBhdXRob3Jpc2F0aW9uOiBNZW51QXV0aG9yaXNhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgIGhhc0JhZGdlPzogYm9vbGVhbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kaXNwbGF5TmFtZUtleSA9IGRpc3BsYXlOYW1lS2V5O1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgdGhpcy5hdXRob3Jpc2F0aW9uID0gYXV0aG9yaXNhdGlvbjtcblxuICAgIGlmIChoYXNCYWRnZSkge1xuICAgICAgdGhpcy5oYXNCYWRnZSA9IGhhc0JhZGdlO1xuICAgICAgdGhpcy5iYWRnZUNvdW50ID0gMDtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZW51bSBNZW51SXRlbU5hbWUge1xuICBob21lID0gMCxcbiAgc2luZ2xlcGxheWVyLFxuICBsb2dpbixcbiAgbGVhZGVyYm9hcmRcbn1cblxuZXhwb3J0IGVudW0gTWVudUF1dGhvcmlzYXRpb24ge1xuICBzaG93QWx3YXlzID0gMCxcbiAgc2hvd1doZW5sb2dnZWRJbixcbiAgc2hvd1doZW5Ob3RMb2dnZWRJblxufSJdfQ==