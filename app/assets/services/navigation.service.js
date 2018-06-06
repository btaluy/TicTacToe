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
        name: index_1.MenuItemName.login,
        path: "login"
    },
    {
        name: index_1.MenuItemName.leaderboard,
        path: "leaderboard"
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBQ25DLHNDQUEyQztBQUMzQyxxQ0FBcUM7QUFDckMsc0RBQStEO0FBQy9ELHlDQUErRDtBQUkvRCw4Q0FBOEM7QUFFOUM7SUFPRSwyQkFBMkIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEQsaUJBQVksR0FBVyxpQkFBaUIsQ0FBQztRQUN6QyxzQkFBaUIsR0FBbUIsRUFBRSxDQUFDO1FBQ3ZDLG9CQUFlLEdBQXFCLHVCQUFlLENBQUM7SUFJTSxDQUFDO0lBRTNELHFEQUF5QixHQUFoQztRQUNFLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRCxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUM1RixZQUFZLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUM5RSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRSxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTSxpREFBcUIsR0FBNUI7UUFBQSxpQkFRQztRQVBDLElBQU0sYUFBYSxHQUFHO1lBQ3BCLG9CQUFZ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QUFZLENBQUMsV0FBVztRQUM5QixJQUFJLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLG9CQUFZLENBQUMsS0FBSztRQUN4QixJQUFJLEVBQUUsT0FBTztLQUNkO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsb0JBQVksQ0FBQyxXQUFXO1FBQzlCLElBQUksRUFBRSxhQUFhO0tBQ3BCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICdhcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tICdwbGF0Zm9ybSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1lbnVJdGVtTmFtZSwgTmF2aWdhdGlvbkl0ZW0gfSBmcm9tICcuLi9kb21haW4vaW5kZXgnO1xuXG50eXBlIE5hdmlnYXRlVG9DYWxsYmFjayA9ICgpID0+IHZvaWQ7XG5cbi8vIHVuZm9ydHVuYXRlbHkgd2UgY2Fubm90IGluamVjdCBhbiBJbnRlcmZhY2VcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XG4gIHB1YmxpYyBmYWxsYmFja1NpdGU6IHN0cmluZyA9ICdub3QtaW1wbGVtZW50ZWQnO1xuICBwdWJsaWMgbmF2aWdhdGlvbkhpc3Rvcnk6IE1lbnVJdGVtTmFtZVtdID0gW107XG4gIHB1YmxpYyBuYXZpZ2F0aW9uSXRlbXM6IE5hdmlnYXRpb25JdGVtW10gPSBuYXZpZ2F0aW9uSXRlbXM7XG4gIHB1YmxpYyBuYXZpZ2F0ZVRvQWZ0ZXJMb2dvdXRDYWxsYmFjazogTmF2aWdhdGVUb0NhbGxiYWNrO1xuICBwdWJsaWMgbmF2aWdhdGVUb0FmdGVyUmVnaXN0cmF0aW9uQ2FsbGJhY2s6IE5hdmlnYXRlVG9DYWxsYmFjaztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICBwdWJsaWMgaGlkZUFuZHJvaWRLZXlib2FyZElmT3BlbigpOiB2b2lkIHtcbiAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICBjb25zdCBhY3Rpdml0eSA9IGFwcC5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eTtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBhcHAuYW5kcm9pZC5jb250ZXh0O1xuICAgICAgaWYgKGNvbnRleHQgJiYgYWN0aXZpdHkgJiYgYWN0aXZpdHkuZ2V0Q3VycmVudEZvY3VzKCkpIHtcbiAgICAgICAgY29uc3QgaW5wdXRNYW5hZ2VyID0gY29udGV4dC5nZXRTeXN0ZW1TZXJ2aWNlKGFuZHJvaWQuY29udGVudC5Db250ZXh0LklOUFVUX01FVEhPRF9TRVJWSUNFKTtcbiAgICAgICAgaW5wdXRNYW5hZ2VyLmhpZGVTb2Z0SW5wdXRGcm9tV2luZG93KGFjdGl2aXR5LmdldEN1cnJlbnRGb2N1cygpLmdldFdpbmRvd1Rva2VuKCksXG4gICAgICAgICAgYW5kcm9pZC52aWV3LmlucHV0bWV0aG9kLklucHV0TWV0aG9kTWFuYWdlci5ISURFX05PVF9BTFdBWVMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0N1cnJlbnRNZW51Um9vdEl0ZW0oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbWVudVJvb3RJdGVtcyA9IFtcbiAgICAgIE1lbnVJdGVtTmFtZS5ob21lXG4gICAgXTtcbiAgICByZXR1cm4gbWVudVJvb3RJdGVtcy5maW5kKChyb290SXRlbTogTWVudUl0ZW1OYW1lKSA9PiB7XG4gICAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbTogTmF2aWdhdGlvbkl0ZW0gPSB0aGlzLmdldE5hdmlnYXRpb25JdGVtKHJvb3RJdGVtKTtcbiAgICAgIHJldHVybiBuYXZpZ2F0aW9uSXRlbSAmJiB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnVybCA9PT0gJy8nICsgbmF2aWdhdGlvbkl0ZW0ucGF0aDtcbiAgICB9KSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGlzVGhlcmVBUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnVybCAhPT0gKCcvJyArIHJvdXRlKSAmJlxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci51cmwuaW5kZXhPZihyb3V0ZSkgPiAtMTtcbiAgfVxuXG4gIHB1YmxpYyBtZW51TmF2aWdhdGlvbihkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgZGVzdGluYXRpb25JdGVtOiBOYXZpZ2F0aW9uSXRlbSA9IHRoaXMuZ2V0TmF2aWdhdGlvbkl0ZW0oZGVzdGluYXRpb24pO1xuICAgIGlmIChkZXN0aW5hdGlvbkl0ZW0pIHtcbiAgICAgIHRoaXMuY2xlYXJIaXN0b3J5KGRlc3RpbmF0aW9uKTtcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uUGF0aCA9IFtkZXN0aW5hdGlvbkl0ZW0ucGF0aF07XG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKGRlc3RpbmF0aW9uUGF0aCwge1xuICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgIGFuaW1hdGVkOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5hdmlnYXRlQmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGVBbmRyb2lkS2V5Ym9hcmRJZk9wZW4oKTtcbiAgICB0aGlzLm5hdmlnYXRpb25IaXN0b3J5LnBvcCgpO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZSBiYWNrIHRvIHRoZSBnaXZlbiBtZW51aXRlbSBpZiBpdCBpcyBhdmFpbGFibGUgaW4gdGhlIG5hdmlnYXRpb24gaGlzdG9yeVxuICAgKiBUaGUgdGltZW91dCBpbiB0aGlzIG1ldGhvZCBpcyBuZWNlc3NhcnkgYmVjYXVzZSBvblVubG9hZGVkIGFuZCBvbk5hdmlnYXRlZEZyb20gZXZlbnRzIHNob3VsZG4ndFxuICAgKiBiZSB0cmlnZ2VyZWQgc2ltdWx0YW5lb3VzbHlcbiAgICovXG4gIHB1YmxpYyBuYXZpZ2F0ZUJhY2tUbyhkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lKTogdm9pZCB7XG4gICAgY29uc3QgZGVwdGggPSB0aGlzLm5hdmlnYXRpb25IaXN0b3J5LmluZGV4T2YoZGVzdGluYXRpb24pO1xuICAgIGlmIChkZXB0aCA8IDApIHtcbiAgICAgIGNvbnNvbGUud2FybignVGhlIGdpdmVuIG1lbnVJdGVtIGlzIG5vdCBwcmVzZW50IG9mIHRoZSBuYXZpZ2F0aW9uIGhpc3RvcnknKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5oaWRlQW5kcm9pZEtleWJvYXJkSWZPcGVuKCk7XG4gICAgdGhpcy5uYXZpZ2F0aW9uSGlzdG9yeS5zcGxpY2UoZGVwdGggKyAxKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuZnJhbWVTZXJ2aWNlLmdldEZyYW1lKCkuYmFja1N0YWNrLm1hcCgoYmFja3N0YWNrRW50cnksIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA+IGRlcHRoICYmIGJhY2tzdGFja0VudHJ5LnJlc29sdmVkUGFnZSkge1xuICAgICAgICAgIGNvbnN0IHBhZ2U6IGFueSA9IGJhY2tzdGFja0VudHJ5LnJlc29sdmVkUGFnZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwYWdlLmlzTG9hZGVkKSB7XG4gICAgICAgICAgICAgIHBhZ2Uub25VbmxvYWRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFnZS5vbk5hdmlnYXRlZEZyb20odHJ1ZSk7XG4gICAgICAgICAgfSwgaW5kZXggLSBkZXB0aCAqIDEwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGRlcHRoKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmZyYW1lU2VydmljZS5nZXRGcmFtZSgpLmdvQmFjayhiYWNrc3RhY2tFbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmZyYW1lU2VydmljZS5nZXRGcmFtZVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7TWVudUl0ZW1OYW1lfSBkZXN0aW5hdGlvblxuICAgKiBAcGFyYW0gY29tbWFuZHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBwdWJsaWMgbmF2aWdhdGVUbyhkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lLCBjb21tYW5kcz86IGFueSwgdHJhbnNpdGlvbjogc3RyaW5nID0gJ3NsaWRlTGVmdCcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICB0aGlzLm5hdmlnYXRpb25IaXN0b3J5LnB1c2goZGVzdGluYXRpb24pO1xuICAgIHJldHVybiB0aGlzLmRvTmF2aWdhdGVUbyhkZXN0aW5hdGlvbiwgY29tbWFuZHMsIGZhbHNlLCB0cmFuc2l0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvQW5kQ2xlYXJIaXN0b3J5KGRlc3RpbmF0aW9uOiBNZW51SXRlbU5hbWUsIGNvbW1hbmRzPzogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBzdHJpbmcgPSAnc2xpZGVMZWZ0Jyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRoaXMuY2xlYXJIaXN0b3J5KGRlc3RpbmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5kb05hdmlnYXRlVG8oZGVzdGluYXRpb24sIGNvbW1hbmRzLCB0cnVlLCB0cmFuc2l0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJIaXN0b3J5KG1lbnVJdGVtTmFtZTogTWVudUl0ZW1OYW1lKTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uSGlzdG9yeSA9IFttZW51SXRlbU5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7TWVudUl0ZW1OYW1lfSBkZXN0aW5hdGlvblxuICAgKiBAcGFyYW0gY29tbWFuZHNcbiAgICogQHBhcmFtIHtib29sZWFufSBjbGVhckhpc3RvcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBwcml2YXRlIGRvTmF2aWdhdGVUbyhkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lLCBleHRyYUNvbW1hbmRzOiBhbnksIGNsZWFySGlzdG9yeTogYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICBjb25zdCBkZXN0aW5hdGlvbkl0ZW06IE5hdmlnYXRpb25JdGVtID0gdGhpcy5nZXROYXZpZ2F0aW9uSXRlbShkZXN0aW5hdGlvbik7XG4gICAgdGhpcy5oaWRlQW5kcm9pZEtleWJvYXJkSWZPcGVuKCk7XG4gICAgaWYgKGRlc3RpbmF0aW9uSXRlbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFt0aGlzLmZhbGxiYWNrU2l0ZV0sIHtjbGVhckhpc3Rvcnl9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvbW1hbmRzOiBhbnlbXSA9IFtkZXN0aW5hdGlvbkl0ZW0ucGF0aF07XG4gICAgICBpZiAoZXh0cmFDb21tYW5kcykge1xuICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLmNvbmNhdChleHRyYUNvbW1hbmRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoY29tbWFuZHMsIHtcbiAgICAgICAgY2xlYXJIaXN0b3J5LFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgbmFtZTogdHJhbnNpdGlvblxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE5hdmlnYXRpb25JdGVtKG1lbnVJdGVtTmFtZTogTWVudUl0ZW1OYW1lKTogTmF2aWdhdGlvbkl0ZW0ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRpb25JdGVtcy5maW5kKChuYXZpZ2F0aW9uSXRlbTogTmF2aWdhdGlvbkl0ZW0pID0+IG5hdmlnYXRpb25JdGVtLm5hbWUgPT09IG1lbnVJdGVtTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb25JdGVtczogTmF2aWdhdGlvbkl0ZW1bXSA9XG4gIFtcbiAgICB7XG4gICAgICBuYW1lOiBNZW51SXRlbU5hbWUuaG9tZSxcbiAgICAgIHBhdGg6ICdob21lJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTWVudUl0ZW1OYW1lLnNpbmdsZXBsYXllcixcbiAgICAgIHBhdGg6IFwic2luZ2xlcGxheWVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE1lbnVJdGVtTmFtZS5tdWx0aXBsYXllcixcbiAgICAgIHBhdGg6IFwibXVsdGlwbGF5ZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTWVudUl0ZW1OYW1lLmxvZ2luLFxuICAgICAgcGF0aDogXCJsb2dpblwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBNZW51SXRlbU5hbWUubGVhZGVyYm9hcmQsXG4gICAgICBwYXRoOiBcImxlYWRlcmJvYXJkXCJcbiAgICB9XG4gIF07XG4iXX0=