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
    MenuItemName[MenuItemName["mpSession"] = 3] = "mpSession";
    MenuItemName[MenuItemName["login"] = 4] = "login";
    MenuItemName[MenuItemName["leaderboard"] = 5] = "leaderboard";
})(MenuItemName = exports.MenuItemName || (exports.MenuItemName = {}));
var MenuAuthorisation;
(function (MenuAuthorisation) {
    MenuAuthorisation[MenuAuthorisation["showAlways"] = 0] = "showAlways";
    MenuAuthorisation[MenuAuthorisation["showWhenloggedIn"] = 1] = "showWhenloggedIn";
    MenuAuthorisation[MenuAuthorisation["showWhenNotLoggedIn"] = 2] = "showWhenNotLoggedIn";
})(MenuAuthorisation = exports.MenuAuthorisation || (exports.MenuAuthorisation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVudS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFXRSxrQkFBbUIsSUFBWSxFQUNaLGNBQXNCLEVBQ3RCLElBQVksRUFDWixhQUFnQyxFQUNoQyxRQUFrQjtRQVQ5QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFPOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUgsZUFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksNEJBQVE7QUE2QnJCLElBQVksWUFPWDtBQVBELFdBQVksWUFBWTtJQUN0QiwrQ0FBUSxDQUFBO0lBQ1IsK0RBQVksQ0FBQTtJQUNaLDZEQUFXLENBQUE7SUFDWCx5REFBUyxDQUFBO0lBQ1QsaURBQUssQ0FBQTtJQUNMLDZEQUFXLENBQUE7QUFDYixDQUFDLEVBUFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFPdkI7QUFFRCxJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0IscUVBQWMsQ0FBQTtJQUNkLGlGQUFnQixDQUFBO0lBQ2hCLHVGQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFKVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQUk1QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNZW51SXRlbSB7XG5cbiAgcHVibGljIG5hbWU6IE1lbnVJdGVtTmFtZTtcbiAgcHVibGljIGRpc3BsYXlOYW1lS2V5OiBzdHJpbmc7XG4gIHB1YmxpYyBpY29uOiBzdHJpbmc7XG4gIHB1YmxpYyBhdXRob3Jpc2F0aW9uOiBNZW51QXV0aG9yaXNhdGlvbjtcbiAgcHVibGljIGhhc0JhZGdlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBiYWRnZUNvdW50OiBudW1iZXI7XG5cbiAgcHVibGljIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVLZXk6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgIGljb246IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgIGF1dGhvcmlzYXRpb246IE1lbnVBdXRob3Jpc2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgaGFzQmFkZ2U/OiBib29sZWFuKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRpc3BsYXlOYW1lS2V5ID0gZGlzcGxheU5hbWVLZXk7XG4gICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB0aGlzLmF1dGhvcmlzYXRpb24gPSBhdXRob3Jpc2F0aW9uO1xuXG4gICAgaWYgKGhhc0JhZGdlKSB7XG4gICAgICB0aGlzLmhhc0JhZGdlID0gaGFzQmFkZ2U7XG4gICAgICB0aGlzLmJhZGdlQ291bnQgPSAwO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBlbnVtIE1lbnVJdGVtTmFtZSB7XG4gIGhvbWUgPSAwLFxuICBzaW5nbGVwbGF5ZXIsXG4gIG11bHRpcGxheWVyLFxuICBtcFNlc3Npb24sXG4gIGxvZ2luLFxuICBsZWFkZXJib2FyZFxufVxuXG5leHBvcnQgZW51bSBNZW51QXV0aG9yaXNhdGlvbiB7XG4gIHNob3dBbHdheXMgPSAwLFxuICBzaG93V2hlbmxvZ2dlZEluLFxuICBzaG93V2hlbk5vdExvZ2dlZEluXG59Il19