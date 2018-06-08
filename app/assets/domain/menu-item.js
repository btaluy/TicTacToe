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
    MenuItemName[MenuItemName["multiplayer"] = 2] = "multiplayer";
    MenuItemName[MenuItemName["login"] = 3] = "login";
    MenuItemName[MenuItemName["leaderboard"] = 4] = "leaderboard";
    MenuItemName[MenuItemName["friends"] = 5] = "friends";
})(MenuItemName = exports.MenuItemName || (exports.MenuItemName = {}));
var MenuAuthorisation;
(function (MenuAuthorisation) {
    MenuAuthorisation[MenuAuthorisation["showAlways"] = 0] = "showAlways";
    MenuAuthorisation[MenuAuthorisation["showWhenloggedIn"] = 1] = "showWhenloggedIn";
    MenuAuthorisation[MenuAuthorisation["showWhenNotLoggedIn"] = 2] = "showWhenNotLoggedIn";
})(MenuAuthorisation = exports.MenuAuthorisation || (exports.MenuAuthorisation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVudS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFXRSxrQkFBbUIsSUFBWSxFQUNaLGNBQXNCLEVBQ3RCLElBQVksRUFDWixhQUFnQyxFQUNoQyxRQUFrQjtRQVQ5QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFPOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUgsZUFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksNEJBQVE7QUE2QnJCLElBQVksWUFPWDtBQVBELFdBQVksWUFBWTtJQUN0QiwrQ0FBUSxDQUFBO0lBQ1IsK0RBQVksQ0FBQTtJQUNaLDZEQUFXLENBQUE7SUFDWCxpREFBSyxDQUFBO0lBQ0wsNkRBQVcsQ0FBQTtJQUNYLHFEQUFPLENBQUE7QUFDVCxDQUFDLEVBUFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFPdkI7QUFFRCxJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0IscUVBQWMsQ0FBQTtJQUNkLGlGQUFnQixDQUFBO0lBQ2hCLHVGQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFKVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQUk1QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNZW51SXRlbSB7XHJcblxyXG4gIHB1YmxpYyBuYW1lOiBNZW51SXRlbU5hbWU7XHJcbiAgcHVibGljIGRpc3BsYXlOYW1lS2V5OiBzdHJpbmc7XHJcbiAgcHVibGljIGljb246IHN0cmluZztcclxuICBwdWJsaWMgYXV0aG9yaXNhdGlvbjogTWVudUF1dGhvcmlzYXRpb247XHJcbiAgcHVibGljIGhhc0JhZGdlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGJhZGdlQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKG5hbWU6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVLZXk6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgaWNvbjogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICBhdXRob3Jpc2F0aW9uOiBNZW51QXV0aG9yaXNhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgaGFzQmFkZ2U/OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kaXNwbGF5TmFtZUtleSA9IGRpc3BsYXlOYW1lS2V5O1xyXG4gICAgdGhpcy5pY29uID0gaWNvbjtcclxuICAgIHRoaXMuYXV0aG9yaXNhdGlvbiA9IGF1dGhvcmlzYXRpb247XHJcblxyXG4gICAgaWYgKGhhc0JhZGdlKSB7XHJcbiAgICAgIHRoaXMuaGFzQmFkZ2UgPSBoYXNCYWRnZTtcclxuICAgICAgdGhpcy5iYWRnZUNvdW50ID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNZW51SXRlbU5hbWUge1xyXG4gIGhvbWUgPSAwLFxyXG4gIHNpbmdsZXBsYXllcixcclxuICBtdWx0aXBsYXllcixcclxuICBsb2dpbixcclxuICBsZWFkZXJib2FyZCxcclxuICBmcmllbmRzXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1lbnVBdXRob3Jpc2F0aW9uIHtcclxuICBzaG93QWx3YXlzID0gMCxcclxuICBzaG93V2hlbmxvZ2dlZEluLFxyXG4gIHNob3dXaGVuTm90TG9nZ2VkSW5cclxufSJdfQ==