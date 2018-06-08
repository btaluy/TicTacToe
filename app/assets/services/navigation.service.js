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
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBQ25DLHNDQUEyQztBQUMzQyxxQ0FBcUM7QUFDckMsc0RBQStEO0FBQy9ELHlDQUErRDtBQUkvRCw4Q0FBOEM7QUFFOUM7SUFPRSwyQkFBMkIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEQsaUJBQVksR0FBVyxpQkFBaUIsQ0FBQztRQUN6QyxzQkFBaUIsR0FBbUIsRUFBRSxDQUFDO1FBQ3ZDLG9CQUFlLEdBQXFCLHVCQUFlLENBQUM7SUFJTSxDQUFDO0lBRTNELHFEQUF5QixHQUFoQztRQUNFLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRCxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUM1RixZQUFZLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUM5RSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRSxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTSxpREFBcUIsR0FBNUI7UUFBQSxpQkFRQztRQVBDLElBQU0sYUFBYSxHQUFHO1lBQ3BCLG9CQUFZ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QUFZLENBQUMsV0FBVztRQUM5QixJQUFJLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLG9CQUFZLENBQUMsU0FBUztRQUM1QixJQUFJLEVBQUUsdUJBQXVCO0tBQzlCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsb0JBQVksQ0FBQyxLQUFLO1FBQ3hCLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLElBQUksRUFBRSxvQkFBWSxDQUFDLFdBQVc7UUFDOUIsSUFBSSxFQUFFLGFBQWE7S0FDcEI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJ2FwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tICdwbGF0Zm9ybSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNZW51SXRlbU5hbWUsIE5hdmlnYXRpb25JdGVtIH0gZnJvbSAnLi4vZG9tYWluL2luZGV4JztcclxuXHJcbnR5cGUgTmF2aWdhdGVUb0NhbGxiYWNrID0gKCkgPT4gdm9pZDtcclxuXHJcbi8vIHVuZm9ydHVuYXRlbHkgd2UgY2Fubm90IGluamVjdCBhbiBJbnRlcmZhY2VcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblNlcnZpY2Uge1xyXG4gIHB1YmxpYyBmYWxsYmFja1NpdGU6IHN0cmluZyA9ICdub3QtaW1wbGVtZW50ZWQnO1xyXG4gIHB1YmxpYyBuYXZpZ2F0aW9uSGlzdG9yeTogTWVudUl0ZW1OYW1lW10gPSBbXTtcclxuICBwdWJsaWMgbmF2aWdhdGlvbkl0ZW1zOiBOYXZpZ2F0aW9uSXRlbVtdID0gbmF2aWdhdGlvbkl0ZW1zO1xyXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvQWZ0ZXJMb2dvdXRDYWxsYmFjazogTmF2aWdhdGVUb0NhbGxiYWNrO1xyXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvQWZ0ZXJSZWdpc3RyYXRpb25DYWxsYmFjazogTmF2aWdhdGVUb0NhbGxiYWNrO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgcHVibGljIGhpZGVBbmRyb2lkS2V5Ym9hcmRJZk9wZW4oKTogdm9pZCB7XHJcbiAgICBpZiAoaXNBbmRyb2lkKSB7XHJcbiAgICAgIGNvbnN0IGFjdGl2aXR5ID0gYXBwLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5O1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gYXBwLmFuZHJvaWQuY29udGV4dDtcclxuICAgICAgaWYgKGNvbnRleHQgJiYgYWN0aXZpdHkgJiYgYWN0aXZpdHkuZ2V0Q3VycmVudEZvY3VzKCkpIHtcclxuICAgICAgICBjb25zdCBpbnB1dE1hbmFnZXIgPSBjb250ZXh0LmdldFN5c3RlbVNlcnZpY2UoYW5kcm9pZC5jb250ZW50LkNvbnRleHQuSU5QVVRfTUVUSE9EX1NFUlZJQ0UpO1xyXG4gICAgICAgIGlucHV0TWFuYWdlci5oaWRlU29mdElucHV0RnJvbVdpbmRvdyhhY3Rpdml0eS5nZXRDdXJyZW50Rm9jdXMoKS5nZXRXaW5kb3dUb2tlbigpLFxyXG4gICAgICAgICAgYW5kcm9pZC52aWV3LmlucHV0bWV0aG9kLklucHV0TWV0aG9kTWFuYWdlci5ISURFX05PVF9BTFdBWVMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNDdXJyZW50TWVudVJvb3RJdGVtKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgbWVudVJvb3RJdGVtcyA9IFtcclxuICAgICAgTWVudUl0ZW1OYW1lLmhvbWVcclxuICAgIF07XHJcbiAgICByZXR1cm4gbWVudVJvb3RJdGVtcy5maW5kKChyb290SXRlbTogTWVudUl0ZW1OYW1lKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5hdmlnYXRpb25JdGVtOiBOYXZpZ2F0aW9uSXRlbSA9IHRoaXMuZ2V0TmF2aWdhdGlvbkl0ZW0ocm9vdEl0ZW0pO1xyXG4gICAgICByZXR1cm4gbmF2aWdhdGlvbkl0ZW0gJiYgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci51cmwgPT09ICcvJyArIG5hdmlnYXRpb25JdGVtLnBhdGg7XHJcbiAgICB9KSAhPT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzVGhlcmVBUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIudXJsICE9PSAoJy8nICsgcm91dGUpICYmXHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIudXJsLmluZGV4T2Yocm91dGUpID4gLTE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbWVudU5hdmlnYXRpb24oZGVzdGluYXRpb246IE1lbnVJdGVtTmFtZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgZGVzdGluYXRpb25JdGVtOiBOYXZpZ2F0aW9uSXRlbSA9IHRoaXMuZ2V0TmF2aWdhdGlvbkl0ZW0oZGVzdGluYXRpb24pO1xyXG4gICAgaWYgKGRlc3RpbmF0aW9uSXRlbSkge1xyXG4gICAgICB0aGlzLmNsZWFySGlzdG9yeShkZXN0aW5hdGlvbik7XHJcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uUGF0aCA9IFtkZXN0aW5hdGlvbkl0ZW0ucGF0aF07XHJcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoZGVzdGluYXRpb25QYXRoLCB7XHJcbiAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxyXG4gICAgICAgIGFuaW1hdGVkOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuYXZpZ2F0ZUJhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmhpZGVBbmRyb2lkS2V5Ym9hcmRJZk9wZW4oKTtcclxuICAgIHRoaXMubmF2aWdhdGlvbkhpc3RvcnkucG9wKCk7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBOYXZpZ2F0ZSBiYWNrIHRvIHRoZSBnaXZlbiBtZW51aXRlbSBpZiBpdCBpcyBhdmFpbGFibGUgaW4gdGhlIG5hdmlnYXRpb24gaGlzdG9yeVxyXG4gICAqIFRoZSB0aW1lb3V0IGluIHRoaXMgbWV0aG9kIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIG9uVW5sb2FkZWQgYW5kIG9uTmF2aWdhdGVkRnJvbSBldmVudHMgc2hvdWxkbid0XHJcbiAgICogYmUgdHJpZ2dlcmVkIHNpbXVsdGFuZW91c2x5XHJcbiAgICovXHJcbiAgcHVibGljIG5hdmlnYXRlQmFja1RvKGRlc3RpbmF0aW9uOiBNZW51SXRlbU5hbWUpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5uYXZpZ2F0aW9uSGlzdG9yeS5pbmRleE9mKGRlc3RpbmF0aW9uKTtcclxuICAgIGlmIChkZXB0aCA8IDApIHtcclxuICAgICAgY29uc29sZS53YXJuKCdUaGUgZ2l2ZW4gbWVudUl0ZW0gaXMgbm90IHByZXNlbnQgb2YgdGhlIG5hdmlnYXRpb24gaGlzdG9yeScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmhpZGVBbmRyb2lkS2V5Ym9hcmRJZk9wZW4oKTtcclxuICAgIHRoaXMubmF2aWdhdGlvbkhpc3Rvcnkuc3BsaWNlKGRlcHRoICsgMSk7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuZnJhbWVTZXJ2aWNlLmdldEZyYW1lKCkuYmFja1N0YWNrLm1hcCgoYmFja3N0YWNrRW50cnksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gZGVwdGggJiYgYmFja3N0YWNrRW50cnkucmVzb2x2ZWRQYWdlKSB7XHJcbiAgICAgICAgICBjb25zdCBwYWdlOiBhbnkgPSBiYWNrc3RhY2tFbnRyeS5yZXNvbHZlZFBhZ2U7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhZ2UuaXNMb2FkZWQpIHtcclxuICAgICAgICAgICAgICBwYWdlLm9uVW5sb2FkZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYWdlLm9uTmF2aWdhdGVkRnJvbSh0cnVlKTtcclxuICAgICAgICAgIH0sIGluZGV4IC0gZGVwdGggKiAxMDApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGRlcHRoKSB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuZnJhbWVTZXJ2aWNlLmdldEZyYW1lKCkuZ29CYWNrKGJhY2tzdGFja0VudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5mcmFtZVNlcnZpY2UuZ2V0RnJhbWVcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtNZW51SXRlbU5hbWV9IGRlc3RpbmF0aW9uXHJcbiAgICogQHBhcmFtIGNvbW1hbmRzXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYW5zaXRpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBwdWJsaWMgbmF2aWdhdGVUbyhkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lLCBjb21tYW5kcz86IGFueSwgdHJhbnNpdGlvbjogc3RyaW5nID0gJ3NsaWRlTGVmdCcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHRoaXMubmF2aWdhdGlvbkhpc3RvcnkucHVzaChkZXN0aW5hdGlvbik7XHJcbiAgICByZXR1cm4gdGhpcy5kb05hdmlnYXRlVG8oZGVzdGluYXRpb24sIGNvbW1hbmRzLCBmYWxzZSwgdHJhbnNpdGlvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmF2aWdhdGVUb0FuZENsZWFySGlzdG9yeShkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lLCBjb21tYW5kcz86IGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBzdHJpbmcgPSAnc2xpZGVMZWZ0Jyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgdGhpcy5jbGVhckhpc3RvcnkoZGVzdGluYXRpb24pO1xyXG4gICAgcmV0dXJuIHRoaXMuZG9OYXZpZ2F0ZVRvKGRlc3RpbmF0aW9uLCBjb21tYW5kcywgdHJ1ZSwgdHJhbnNpdGlvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFySGlzdG9yeShtZW51SXRlbU5hbWU6IE1lbnVJdGVtTmFtZSk6IHZvaWQge1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uSGlzdG9yeSA9IFttZW51SXRlbU5hbWVdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge01lbnVJdGVtTmFtZX0gZGVzdGluYXRpb25cclxuICAgKiBAcGFyYW0gY29tbWFuZHNcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNsZWFySGlzdG9yeVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFuc2l0aW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBkb05hdmlnYXRlVG8oZGVzdGluYXRpb246IE1lbnVJdGVtTmFtZSwgZXh0cmFDb21tYW5kczogYW55LCBjbGVhckhpc3Rvcnk6IGJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcblxyXG4gICAgY29uc3QgZGVzdGluYXRpb25JdGVtOiBOYXZpZ2F0aW9uSXRlbSA9IHRoaXMuZ2V0TmF2aWdhdGlvbkl0ZW0oZGVzdGluYXRpb24pO1xyXG4gICAgdGhpcy5oaWRlQW5kcm9pZEtleWJvYXJkSWZPcGVuKCk7XHJcbiAgICBpZiAoZGVzdGluYXRpb25JdGVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbdGhpcy5mYWxsYmFja1NpdGVdLCB7Y2xlYXJIaXN0b3J5fSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgY29tbWFuZHM6IGFueVtdID0gW2Rlc3RpbmF0aW9uSXRlbS5wYXRoXTtcclxuICAgICAgaWYgKGV4dHJhQ29tbWFuZHMpIHtcclxuICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLmNvbmNhdChleHRyYUNvbW1hbmRzKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKGNvbW1hbmRzLCB7XHJcbiAgICAgICAgY2xlYXJIaXN0b3J5LFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IHRyYW5zaXRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXROYXZpZ2F0aW9uSXRlbShtZW51SXRlbU5hbWU6IE1lbnVJdGVtTmFtZSk6IE5hdmlnYXRpb25JdGVtIHtcclxuICAgIHJldHVybiB0aGlzLm5hdmlnYXRpb25JdGVtcy5maW5kKChuYXZpZ2F0aW9uSXRlbTogTmF2aWdhdGlvbkl0ZW0pID0+IG5hdmlnYXRpb25JdGVtLm5hbWUgPT09IG1lbnVJdGVtTmFtZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvbkl0ZW1zOiBOYXZpZ2F0aW9uSXRlbVtdID1cclxuICBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IE1lbnVJdGVtTmFtZS5ob21lLFxyXG4gICAgICBwYXRoOiAnaG9tZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IE1lbnVJdGVtTmFtZS5zaW5nbGVwbGF5ZXIsXHJcbiAgICAgIHBhdGg6IFwic2luZ2xlcGxheWVyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IE1lbnVJdGVtTmFtZS5tdWx0aXBsYXllcixcclxuICAgICAgcGF0aDogXCJtdWx0aXBsYXllclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBNZW51SXRlbU5hbWUubXBTZXNzaW9uLFxyXG4gICAgICBwYXRoOiAnbXVsdGlwbGF5ZXIvbXBTZXNzaW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogTWVudUl0ZW1OYW1lLmxvZ2luLFxyXG4gICAgICBwYXRoOiBcImxvZ2luXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IE1lbnVJdGVtTmFtZS5sZWFkZXJib2FyZCxcclxuICAgICAgcGF0aDogXCJsZWFkZXJib2FyZFwiXHJcbiAgICB9XHJcbiAgXTtcclxuIl19