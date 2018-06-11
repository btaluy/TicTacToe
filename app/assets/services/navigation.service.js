"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("application");
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var router_1 = require("nativescript-angular/router");
var index_1 = require("../domain/index");
// unfortunately we cannot inject an Interface
var NavigationService = /** @class */ (function () {
    function NavigationService(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.fallbackSite = 'not-implemented';
        this.navigationHistory = [];
        this.navigationItems = exports.navigationItems;
    }
    NavigationService.prototype.hideAndroidKeyboardIfOpen = function () {
        if (platform_1.isAndroid) {
            var activity = app.android.foregroundActivity;
            var context = app.android.context;
            if (context && activity && activity.getCurrentFocus()) {
                var inputManager = context.getSystemService(android.content.Context.INPUT_METHOD_SERVICE);
                inputManager.hideSoftInputFromWindow(activity.getCurrentFocus().getWindowToken(), android.view.inputmethod.InputMethodManager.HIDE_NOT_ALWAYS);
            }
        }
    };
    NavigationService.prototype.isCurrentMenuRootItem = function () {
        var _this = this;
        var menuRootItems = [
            index_1.MenuItemName.home
        ];
        return menuRootItems.find(function (rootItem) {
            var navigationItem = _this.getNavigationItem(rootItem);
            return navigationItem && _this.routerExtensions.router.url === '/' + navigationItem.path;
        }) !== undefined;
    };
    NavigationService.prototype.isGameSessionOpen = function () {
        return this.routerExtensions.router.url === '/' + this.getNavigationItem(index_1.MenuItemName.mpSession).path;
    };
    NavigationService.prototype.isThereARoute = function (route) {
        return this.routerExtensions.router.url !== ('/' + route) &&
            this.routerExtensions.router.url.indexOf(route) > -1;
    };
    NavigationService.prototype.menuNavigation = function (destination) {
        var destinationItem = this.getNavigationItem(destination);
        if (destinationItem) {
            this.clearHistory(destination);
            var destinationPath = [destinationItem.path];
            return this.routerExtensions.navigate(destinationPath, {
                clearHistory: true,
                animated: false
            });
        }
    };
    NavigationService.prototype.navigateBack = function () {
        this.hideAndroidKeyboardIfOpen();
        this.navigationHistory.pop();
        this.routerExtensions.backToPreviousPage();
    };
    /**
     * Navigate back to the given menuitem if it is available in the navigation history
     * The timeout in this method is necessary because onUnloaded and onNavigatedFrom events shouldn't
     * be triggered simultaneously
     */
    NavigationService.prototype.navigateBackTo = function (destination) {
        var _this = this;
        var depth = this.navigationHistory.indexOf(destination);
        if (depth < 0) {
            console.warn('The given menuItem is not present of the navigation history');
            return;
        }
        this.hideAndroidKeyboardIfOpen();
        this.navigationHistory.splice(depth + 1);
        this.routerExtensions.frameService.getFrame().backStack.map(function (backstackEntry, index) {
            if (index > depth && backstackEntry.resolvedPage) {
                var page_1 = backstackEntry.resolvedPage;
                setTimeout(function () {
                    if (page_1.isLoaded) {
                        page_1.onUnloaded();
                    }
                    page_1.onNavigatedFrom(true);
                }, index - depth * 100);
            }
            else if (index === depth) {
                _this.routerExtensions.frameService.getFrame().goBack(backstackEntry);
            }
        });
        this.routerExtensions.frameService.getFrame;
    };
    /**
     *
     * @param {MenuItemName} destination
     * @param commands
     * @param {string} transition
     * @returns {Promise<boolean>}
     */
    NavigationService.prototype.navigateTo = function (destination, commands, transition) {
        if (transition === void 0) { transition = 'slideLeft'; }
        this.navigationHistory.push(destination);
        return this.doNavigateTo(destination, commands, false, transition);
    };
    NavigationService.prototype.navigateToAndClearHistory = function (destination, commands, transition) {
        if (transition === void 0) { transition = 'slideLeft'; }
        this.clearHistory(destination);
        return this.doNavigateTo(destination, commands, true, transition);
    };
    NavigationService.prototype.clearHistory = function (menuItemName) {
        this.navigationHistory = [menuItemName];
    };
    /**
     *
     * @param {MenuItemName} destination
     * @param commands
     * @param {boolean} clearHistory
     * @param {string} transition
     * @returns {Promise<boolean>}
     */
    NavigationService.prototype.doNavigateTo = function (destination, extraCommands, clearHistory, transition) {
        var destinationItem = this.getNavigationItem(destination);
        this.hideAndroidKeyboardIfOpen();
        if (destinationItem === undefined) {
            return this.routerExtensions.navigate([this.fallbackSite], { clearHistory: clearHistory });
        }
        else {
            var commands = [destinationItem.path];
            if (extraCommands) {
                commands = commands.concat(extraCommands);
            }
            return this.routerExtensions.navigate(commands, {
                clearHistory: clearHistory,
                transition: {
                    name: transition
                }
            });
        }
    };
    NavigationService.prototype.getNavigationItem = function (menuItemName) {
        return this.navigationItems.find(function (navigationItem) { return navigationItem.name === menuItemName; });
    };
    NavigationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], NavigationService);
    return NavigationService;
}());
exports.NavigationService = NavigationService;
exports.navigationItems = [
    {
        name: index_1.MenuItemName.home,
        path: 'home'
    },
    {
        name: index_1.MenuItemName.singleplayer,
        path: "singleplayer"
    },
    {
        name: index_1.MenuItemName.multiplayer,
        path: "multiplayer"
    },
    {
        name: index_1.MenuItemName.mpSession,
        path: 'multiplayer/mpSession'
    },
    {
        name: index_1.MenuItemName.login,
        path: "login"
    },
    {
        name: index_1.MenuItemName.leaderboard,
        path: "leaderboard"
    },
    {
        name: index_1.MenuItemName.friends,
        path: "friends"
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBQ25DLHNDQUEyQztBQUMzQyxxQ0FBcUM7QUFDckMsc0RBQStEO0FBQy9ELHlDQUErRDtBQUkvRCw4Q0FBOEM7QUFFOUM7SUFPRSwyQkFBMkIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEQsaUJBQVksR0FBVyxpQkFBaUIsQ0FBQztRQUN6QyxzQkFBaUIsR0FBbUIsRUFBRSxDQUFDO1FBQ3ZDLG9CQUFlLEdBQXFCLHVCQUFlLENBQUM7SUFJTSxDQUFDO0lBRTNELHFEQUF5QixHQUFoQztRQUNFLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRCxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUM1RixZQUFZLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUM5RSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRSxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTSxpREFBcUIsR0FBNUI7UUFBQSxpQkFRQztRQVBDLElBQU0sYUFBYSxHQUFHO1lBQ3BCLG9CQUFZ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LEdBQzFCO0lBQ0U7UUFDRSxJQUFJLEVBQUUsb0JBQVksQ0FBQyxJQUFJO1FBQ3ZCLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRDtRQUNFLElBQUksRUFBRSxvQkFBWSxDQUFDLFlBQVk7UUFDL0IsSUFBSSxFQUFFLGNBQWM7S0FDckI7SUFDRDtRQUNFLElBQUksRUFBRSxvQkFBWSxDQUFDLFdBQVc7UUFDOUIsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLElBQUksRUFBRSxvQkFBWSxDQUFDLFNBQVM7UUFDNUIsSUFBSSxFQUFFLHVCQUF1QjtLQUM5QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLG9CQUFZLENBQUMsS0FBSztRQUN4QixJQUFJLEVBQUUsT0FBTztLQUNkO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsb0JBQVksQ0FBQyxXQUFXO1FBQzlCLElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsb0JBQVksQ0FBQyxPQUFPO1FBQzFCLElBQUksRUFBRSxTQUFTO0tBQ2hCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICdhcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tICdwbGF0Zm9ybSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1lbnVJdGVtTmFtZSwgTmF2aWdhdGlvbkl0ZW0gfSBmcm9tICcuLi9kb21haW4vaW5kZXgnO1xuXG50eXBlIE5hdmlnYXRlVG9DYWxsYmFjayA9ICgpID0+IHZvaWQ7XG5cbi8vIHVuZm9ydHVuYXRlbHkgd2UgY2Fubm90IGluamVjdCBhbiBJbnRlcmZhY2VcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XG4gIHB1YmxpYyBmYWxsYmFja1NpdGU6IHN0cmluZyA9ICdub3QtaW1wbGVtZW50ZWQnO1xuICBwdWJsaWMgbmF2aWdhdGlvbkhpc3Rvcnk6IE1lbnVJdGVtTmFtZVtdID0gW107XG4gIHB1YmxpYyBuYXZpZ2F0aW9uSXRlbXM6IE5hdmlnYXRpb25JdGVtW10gPSBuYXZpZ2F0aW9uSXRlbXM7XG4gIHB1YmxpYyBuYXZpZ2F0ZVRvQWZ0ZXJMb2dvdXRDYWxsYmFjazogTmF2aWdhdGVUb0NhbGxiYWNrO1xuICBwdWJsaWMgbmF2aWdhdGVUb0FmdGVyUmVnaXN0cmF0aW9uQ2FsbGJhY2s6IE5hdmlnYXRlVG9DYWxsYmFjaztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICBwdWJsaWMgaGlkZUFuZHJvaWRLZXlib2FyZElmT3BlbigpOiB2b2lkIHtcbiAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICBjb25zdCBhY3Rpdml0eSA9IGFwcC5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eTtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBhcHAuYW5kcm9pZC5jb250ZXh0O1xuICAgICAgaWYgKGNvbnRleHQgJiYgYWN0aXZpdHkgJiYgYWN0aXZpdHkuZ2V0Q3VycmVudEZvY3VzKCkpIHtcbiAgICAgICAgY29uc3QgaW5wdXRNYW5hZ2VyID0gY29udGV4dC5nZXRTeXN0ZW1TZXJ2aWNlKGFuZHJvaWQuY29udGVudC5Db250ZXh0LklOUFVUX01FVEhPRF9TRVJWSUNFKTtcbiAgICAgICAgaW5wdXRNYW5hZ2VyLmhpZGVTb2Z0SW5wdXRGcm9tV2luZG93KGFjdGl2aXR5LmdldEN1cnJlbnRGb2N1cygpLmdldFdpbmRvd1Rva2VuKCksXG4gICAgICAgICAgYW5kcm9pZC52aWV3LmlucHV0bWV0aG9kLklucHV0TWV0aG9kTWFuYWdlci5ISURFX05PVF9BTFdBWVMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0N1cnJlbnRNZW51Um9vdEl0ZW0oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbWVudVJvb3RJdGVtcyA9IFtcbiAgICAgIE1lbnVJdGVtTmFtZS5ob21lXG4gICAgXTtcbiAgICByZXR1cm4gbWVudVJvb3RJdGVtcy5maW5kKChyb290SXRlbTogTWVudUl0ZW1OYW1lKSA9PiB7XG4gICAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbTogTmF2aWdhdGlvbkl0ZW0gPSB0aGlzLmdldE5hdmlnYXRpb25JdGVtKHJvb3RJdGVtKTtcbiAgICAgIHJldHVybiBuYXZpZ2F0aW9uSXRlbSAmJiB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnVybCA9PT0gJy8nICsgbmF2aWdhdGlvbkl0ZW0ucGF0aDtcbiAgICB9KSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGlzR2FtZVNlc3Npb25PcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnVybCA9PT0gJy8nICsgdGhpcy5nZXROYXZpZ2F0aW9uSXRlbShNZW51SXRlbU5hbWUubXBTZXNzaW9uKS5wYXRoO1xuICB9XG5cbiAgcHVibGljIGlzVGhlcmVBUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnVybCAhPT0gKCcvJyArIHJvdXRlKSAmJlxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci51cmwuaW5kZXhPZihyb3V0ZSkgPiAtMTtcbiAgfVxuXG4gIHB1YmxpYyBtZW51TmF2aWdhdGlvbihkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgZGVzdGluYXRpb25JdGVtOiBOYXZpZ2F0aW9uSXRlbSA9IHRoaXMuZ2V0TmF2aWdhdGlvbkl0ZW0oZGVzdGluYXRpb24pO1xuICAgIGlmIChkZXN0aW5hdGlvbkl0ZW0pIHtcbiAgICAgIHRoaXMuY2xlYXJIaXN0b3J5KGRlc3RpbmF0aW9uKTtcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uUGF0aCA9IFtkZXN0aW5hdGlvbkl0ZW0ucGF0aF07XG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKGRlc3RpbmF0aW9uUGF0aCwge1xuICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgIGFuaW1hdGVkOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5hdmlnYXRlQmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGVBbmRyb2lkS2V5Ym9hcmRJZk9wZW4oKTtcbiAgICB0aGlzLm5hdmlnYXRpb25IaXN0b3J5LnBvcCgpO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZSBiYWNrIHRvIHRoZSBnaXZlbiBtZW51aXRlbSBpZiBpdCBpcyBhdmFpbGFibGUgaW4gdGhlIG5hdmlnYXRpb24gaGlzdG9yeVxuICAgKiBUaGUgdGltZW91dCBpbiB0aGlzIG1ldGhvZCBpcyBuZWNlc3NhcnkgYmVjYXVzZSBvblVubG9hZGVkIGFuZCBvbk5hdmlnYXRlZEZyb20gZXZlbnRzIHNob3VsZG4ndFxuICAgKiBiZSB0cmlnZ2VyZWQgc2ltdWx0YW5lb3VzbHlcbiAgICovXG4gIHB1YmxpYyBuYXZpZ2F0ZUJhY2tUbyhkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lKTogdm9pZCB7XG4gICAgY29uc3QgZGVwdGggPSB0aGlzLm5hdmlnYXRpb25IaXN0b3J5LmluZGV4T2YoZGVzdGluYXRpb24pO1xuICAgIGlmIChkZXB0aCA8IDApIHtcbiAgICAgIGNvbnNvbGUud2FybignVGhlIGdpdmVuIG1lbnVJdGVtIGlzIG5vdCBwcmVzZW50IG9mIHRoZSBuYXZpZ2F0aW9uIGhpc3RvcnknKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5oaWRlQW5kcm9pZEtleWJvYXJkSWZPcGVuKCk7XG4gICAgdGhpcy5uYXZpZ2F0aW9uSGlzdG9yeS5zcGxpY2UoZGVwdGggKyAxKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuZnJhbWVTZXJ2aWNlLmdldEZyYW1lKCkuYmFja1N0YWNrLm1hcCgoYmFja3N0YWNrRW50cnksIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA+IGRlcHRoICYmIGJhY2tzdGFja0VudHJ5LnJlc29sdmVkUGFnZSkge1xuICAgICAgICAgIGNvbnN0IHBhZ2U6IGFueSA9IGJhY2tzdGFja0VudHJ5LnJlc29sdmVkUGFnZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwYWdlLmlzTG9hZGVkKSB7XG4gICAgICAgICAgICAgIHBhZ2Uub25VbmxvYWRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFnZS5vbk5hdmlnYXRlZEZyb20odHJ1ZSk7XG4gICAgICAgICAgfSwgaW5kZXggLSBkZXB0aCAqIDEwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGRlcHRoKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmZyYW1lU2VydmljZS5nZXRGcmFtZSgpLmdvQmFjayhiYWNrc3RhY2tFbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmZyYW1lU2VydmljZS5nZXRGcmFtZVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7TWVudUl0ZW1OYW1lfSBkZXN0aW5hdGlvblxuICAgKiBAcGFyYW0gY29tbWFuZHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBwdWJsaWMgbmF2aWdhdGVUbyhkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lLCBjb21tYW5kcz86IGFueSwgdHJhbnNpdGlvbjogc3RyaW5nID0gJ3NsaWRlTGVmdCcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICB0aGlzLm5hdmlnYXRpb25IaXN0b3J5LnB1c2goZGVzdGluYXRpb24pO1xuICAgIHJldHVybiB0aGlzLmRvTmF2aWdhdGVUbyhkZXN0aW5hdGlvbiwgY29tbWFuZHMsIGZhbHNlLCB0cmFuc2l0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvQW5kQ2xlYXJIaXN0b3J5KGRlc3RpbmF0aW9uOiBNZW51SXRlbU5hbWUsIGNvbW1hbmRzPzogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBzdHJpbmcgPSAnc2xpZGVMZWZ0Jyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRoaXMuY2xlYXJIaXN0b3J5KGRlc3RpbmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5kb05hdmlnYXRlVG8oZGVzdGluYXRpb24sIGNvbW1hbmRzLCB0cnVlLCB0cmFuc2l0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJIaXN0b3J5KG1lbnVJdGVtTmFtZTogTWVudUl0ZW1OYW1lKTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uSGlzdG9yeSA9IFttZW51SXRlbU5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7TWVudUl0ZW1OYW1lfSBkZXN0aW5hdGlvblxuICAgKiBAcGFyYW0gY29tbWFuZHNcbiAgICogQHBhcmFtIHtib29sZWFufSBjbGVhckhpc3RvcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBwcml2YXRlIGRvTmF2aWdhdGVUbyhkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lLCBleHRyYUNvbW1hbmRzOiBhbnksIGNsZWFySGlzdG9yeTogYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICBjb25zdCBkZXN0aW5hdGlvbkl0ZW06IE5hdmlnYXRpb25JdGVtID0gdGhpcy5nZXROYXZpZ2F0aW9uSXRlbShkZXN0aW5hdGlvbik7XG4gICAgdGhpcy5oaWRlQW5kcm9pZEtleWJvYXJkSWZPcGVuKCk7XG4gICAgaWYgKGRlc3RpbmF0aW9uSXRlbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFt0aGlzLmZhbGxiYWNrU2l0ZV0sIHtjbGVhckhpc3Rvcnl9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvbW1hbmRzOiBhbnlbXSA9IFtkZXN0aW5hdGlvbkl0ZW0ucGF0aF07XG4gICAgICBpZiAoZXh0cmFDb21tYW5kcykge1xuICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLmNvbmNhdChleHRyYUNvbW1hbmRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoY29tbWFuZHMsIHtcbiAgICAgICAgY2xlYXJIaXN0b3J5LFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgbmFtZTogdHJhbnNpdGlvblxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE5hdmlnYXRpb25JdGVtKG1lbnVJdGVtTmFtZTogTWVudUl0ZW1OYW1lKTogTmF2aWdhdGlvbkl0ZW0ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRpb25JdGVtcy5maW5kKChuYXZpZ2F0aW9uSXRlbTogTmF2aWdhdGlvbkl0ZW0pID0+IG5hdmlnYXRpb25JdGVtLm5hbWUgPT09IG1lbnVJdGVtTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb25JdGVtczogTmF2aWdhdGlvbkl0ZW1bXSA9XG4gIFtcbiAgICB7XG4gICAgICBuYW1lOiBNZW51SXRlbU5hbWUuaG9tZSxcbiAgICAgIHBhdGg6ICdob21lJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTWVudUl0ZW1OYW1lLnNpbmdsZXBsYXllcixcbiAgICAgIHBhdGg6IFwic2luZ2xlcGxheWVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE1lbnVJdGVtTmFtZS5tdWx0aXBsYXllcixcbiAgICAgIHBhdGg6IFwibXVsdGlwbGF5ZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTWVudUl0ZW1OYW1lLm1wU2Vzc2lvbixcbiAgICAgIHBhdGg6ICdtdWx0aXBsYXllci9tcFNlc3Npb24nXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBNZW51SXRlbU5hbWUubG9naW4sXG4gICAgICBwYXRoOiBcImxvZ2luXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE1lbnVJdGVtTmFtZS5sZWFkZXJib2FyZCxcbiAgICAgIHBhdGg6IFwibGVhZGVyYm9hcmRcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTWVudUl0ZW1OYW1lLmZyaWVuZHMsXG4gICAgICBwYXRoOiBcImZyaWVuZHNcIlxuICAgIH1cbiAgXTtcbiJdfQ==