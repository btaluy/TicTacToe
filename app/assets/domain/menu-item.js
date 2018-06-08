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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVudS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFXRSxrQkFBbUIsSUFBWSxFQUNaLGNBQXNCLEVBQ3RCLElBQVksRUFDWixhQUFnQyxFQUNoQyxRQUFrQjtRQVQ5QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFPOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUgsZUFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksNEJBQVE7QUE2QnJCLElBQVksWUFNWDtBQU5ELFdBQVksWUFBWTtJQUN0QiwrQ0FBUSxDQUFBO0lBQ1IsK0RBQVksQ0FBQTtJQUNaLDZEQUFXLENBQUE7SUFDWCxpREFBSyxDQUFBO0lBQ0wsNkRBQVcsQ0FBQTtBQUNiLENBQUMsRUFOVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQU12QjtBQUVELElBQVksaUJBSVg7QUFKRCxXQUFZLGlCQUFpQjtJQUMzQixxRUFBYyxDQUFBO0lBQ2QsaUZBQWdCLENBQUE7SUFDaEIsdUZBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUpXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBSTVCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1lbnVJdGVtIHtcclxuXHJcbiAgcHVibGljIG5hbWU6IE1lbnVJdGVtTmFtZTtcclxuICBwdWJsaWMgZGlzcGxheU5hbWVLZXk6IHN0cmluZztcclxuICBwdWJsaWMgaWNvbjogc3RyaW5nO1xyXG4gIHB1YmxpYyBhdXRob3Jpc2F0aW9uOiBNZW51QXV0aG9yaXNhdGlvbjtcclxuICBwdWJsaWMgaGFzQmFkZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgYmFkZ2VDb3VudDogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IobmFtZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZUtleTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICBpY29uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgIGF1dGhvcmlzYXRpb246IE1lbnVBdXRob3Jpc2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICBoYXNCYWRnZT86IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRpc3BsYXlOYW1lS2V5ID0gZGlzcGxheU5hbWVLZXk7XHJcbiAgICB0aGlzLmljb24gPSBpY29uO1xyXG4gICAgdGhpcy5hdXRob3Jpc2F0aW9uID0gYXV0aG9yaXNhdGlvbjtcclxuXHJcbiAgICBpZiAoaGFzQmFkZ2UpIHtcclxuICAgICAgdGhpcy5oYXNCYWRnZSA9IGhhc0JhZGdlO1xyXG4gICAgICB0aGlzLmJhZGdlQ291bnQgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1lbnVJdGVtTmFtZSB7XHJcbiAgaG9tZSA9IDAsXHJcbiAgc2luZ2xlcGxheWVyLFxyXG4gIG11bHRpcGxheWVyLFxyXG4gIGxvZ2luLFxyXG4gIGxlYWRlcmJvYXJkXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1lbnVBdXRob3Jpc2F0aW9uIHtcclxuICBzaG93QWx3YXlzID0gMCxcclxuICBzaG93V2hlbmxvZ2dlZEluLFxyXG4gIHNob3dXaGVuTm90TG9nZ2VkSW5cclxufSJdfQ==