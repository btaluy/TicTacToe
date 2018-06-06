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
})(MenuItemName = exports.MenuItemName || (exports.MenuItemName = {}));
var MenuAuthorisation;
(function (MenuAuthorisation) {
    MenuAuthorisation[MenuAuthorisation["showAlways"] = 0] = "showAlways";
    MenuAuthorisation[MenuAuthorisation["showWhenloggedIn"] = 1] = "showWhenloggedIn";
    MenuAuthorisation[MenuAuthorisation["showWhenNotLoggedIn"] = 2] = "showWhenNotLoggedIn";
})(MenuAuthorisation = exports.MenuAuthorisation || (exports.MenuAuthorisation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVudS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFXRSxrQkFBbUIsSUFBWSxFQUNaLGNBQXNCLEVBQ3RCLElBQVksRUFDWixhQUFnQyxFQUNoQyxRQUFrQjtRQVQ5QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFPOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUgsZUFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksNEJBQVE7QUE2QnJCLElBQVksWUFNWDtBQU5ELFdBQVksWUFBWTtJQUN0QiwrQ0FBUSxDQUFBO0lBQ1IsK0RBQVksQ0FBQTtJQUNaLDZEQUFXLENBQUE7SUFDWCxpREFBSyxDQUFBO0lBQ0wsNkRBQVcsQ0FBQTtBQUNiLENBQUMsRUFOVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQU12QjtBQUVELElBQVksaUJBSVg7QUFKRCxXQUFZLGlCQUFpQjtJQUMzQixxRUFBYyxDQUFBO0lBQ2QsaUZBQWdCLENBQUE7SUFDaEIsdUZBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUpXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBSTVCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1lbnVJdGVtIHtcblxuICBwdWJsaWMgbmFtZTogTWVudUl0ZW1OYW1lO1xuICBwdWJsaWMgZGlzcGxheU5hbWVLZXk6IHN0cmluZztcbiAgcHVibGljIGljb246IHN0cmluZztcbiAgcHVibGljIGF1dGhvcmlzYXRpb246IE1lbnVBdXRob3Jpc2F0aW9uO1xuICBwdWJsaWMgaGFzQmFkZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGJhZGdlQ291bnQ6IG51bWJlcjtcblxuICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZUtleTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgaWNvbjogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXNhdGlvbjogTWVudUF1dGhvcmlzYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICBoYXNCYWRnZT86IGJvb2xlYW4pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGlzcGxheU5hbWVLZXkgPSBkaXNwbGF5TmFtZUtleTtcbiAgICB0aGlzLmljb24gPSBpY29uO1xuICAgIHRoaXMuYXV0aG9yaXNhdGlvbiA9IGF1dGhvcmlzYXRpb247XG5cbiAgICBpZiAoaGFzQmFkZ2UpIHtcbiAgICAgIHRoaXMuaGFzQmFkZ2UgPSBoYXNCYWRnZTtcbiAgICAgIHRoaXMuYmFkZ2VDb3VudCA9IDA7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGVudW0gTWVudUl0ZW1OYW1lIHtcbiAgaG9tZSA9IDAsXG4gIHNpbmdsZXBsYXllcixcbiAgbXVsdGlwbGF5ZXIsXG4gIGxvZ2luLFxuICBsZWFkZXJib2FyZFxufVxuXG5leHBvcnQgZW51bSBNZW51QXV0aG9yaXNhdGlvbiB7XG4gIHNob3dBbHdheXMgPSAwLFxuICBzaG93V2hlbmxvZ2dlZEluLFxuICBzaG93V2hlbk5vdExvZ2dlZEluXG59Il19