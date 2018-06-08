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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBQ25DLHNDQUEyQztBQUMzQyxxQ0FBcUM7QUFDckMsc0RBQStEO0FBQy9ELHlDQUErRDtBQUkvRCw4Q0FBOEM7QUFFOUM7SUFPRSwyQkFBMkIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEQsaUJBQVksR0FBVyxpQkFBaUIsQ0FBQztRQUN6QyxzQkFBaUIsR0FBbUIsRUFBRSxDQUFDO1FBQ3ZDLG9CQUFlLEdBQXFCLHVCQUFlLENBQUM7SUFJTSxDQUFDO0lBRTNELHFEQUF5QixHQUFoQztRQUNFLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRCxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUM1RixZQUFZLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUM5RSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRSxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTSxpREFBcUIsR0FBNUI7UUFBQSxpQkFRQztRQVBDLElBQU0sYUFBYSxHQUFHO1lBQ3BCLG9CQUFZ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QUFZLENBQUMsV0FBVztRQUM5QixJQUFJLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLG9CQUFZLENBQUMsU0FBUztRQUM1QixJQUFJLEVBQUUsdUJBQXVCO0tBQzlCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsb0JBQVksQ0FBQyxLQUFLO1FBQ3hCLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLElBQUksRUFBRSxvQkFBWSxDQUFDLFdBQVc7UUFDOUIsSUFBSSxFQUFFLGFBQWE7S0FDcEI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJ2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWVudUl0ZW1OYW1lLCBOYXZpZ2F0aW9uSXRlbSB9IGZyb20gJy4uL2RvbWFpbi9pbmRleCc7XG5cbnR5cGUgTmF2aWdhdGVUb0NhbGxiYWNrID0gKCkgPT4gdm9pZDtcblxuLy8gdW5mb3J0dW5hdGVseSB3ZSBjYW5ub3QgaW5qZWN0IGFuIEludGVyZmFjZVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgcHVibGljIGZhbGxiYWNrU2l0ZTogc3RyaW5nID0gJ25vdC1pbXBsZW1lbnRlZCc7XG4gIHB1YmxpYyBuYXZpZ2F0aW9uSGlzdG9yeTogTWVudUl0ZW1OYW1lW10gPSBbXTtcbiAgcHVibGljIG5hdmlnYXRpb25JdGVtczogTmF2aWdhdGlvbkl0ZW1bXSA9IG5hdmlnYXRpb25JdGVtcztcbiAgcHVibGljIG5hdmlnYXRlVG9BZnRlckxvZ291dENhbGxiYWNrOiBOYXZpZ2F0ZVRvQ2FsbGJhY2s7XG4gIHB1YmxpYyBuYXZpZ2F0ZVRvQWZ0ZXJSZWdpc3RyYXRpb25DYWxsYmFjazogTmF2aWdhdGVUb0NhbGxiYWNrO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIHB1YmxpYyBoaWRlQW5kcm9pZEtleWJvYXJkSWZPcGVuKCk6IHZvaWQge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIGNvbnN0IGFjdGl2aXR5ID0gYXBwLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5O1xuICAgICAgY29uc3QgY29udGV4dCA9IGFwcC5hbmRyb2lkLmNvbnRleHQ7XG4gICAgICBpZiAoY29udGV4dCAmJiBhY3Rpdml0eSAmJiBhY3Rpdml0eS5nZXRDdXJyZW50Rm9jdXMoKSkge1xuICAgICAgICBjb25zdCBpbnB1dE1hbmFnZXIgPSBjb250ZXh0LmdldFN5c3RlbVNlcnZpY2UoYW5kcm9pZC5jb250ZW50LkNvbnRleHQuSU5QVVRfTUVUSE9EX1NFUlZJQ0UpO1xuICAgICAgICBpbnB1dE1hbmFnZXIuaGlkZVNvZnRJbnB1dEZyb21XaW5kb3coYWN0aXZpdHkuZ2V0Q3VycmVudEZvY3VzKCkuZ2V0V2luZG93VG9rZW4oKSxcbiAgICAgICAgICBhbmRyb2lkLnZpZXcuaW5wdXRtZXRob2QuSW5wdXRNZXRob2RNYW5hZ2VyLkhJREVfTk9UX0FMV0FZUyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzQ3VycmVudE1lbnVSb290SXRlbSgpOiBib29sZWFuIHtcbiAgICBjb25zdCBtZW51Um9vdEl0ZW1zID0gW1xuICAgICAgTWVudUl0ZW1OYW1lLmhvbWVcbiAgICBdO1xuICAgIHJldHVybiBtZW51Um9vdEl0ZW1zLmZpbmQoKHJvb3RJdGVtOiBNZW51SXRlbU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IG5hdmlnYXRpb25JdGVtOiBOYXZpZ2F0aW9uSXRlbSA9IHRoaXMuZ2V0TmF2aWdhdGlvbkl0ZW0ocm9vdEl0ZW0pO1xuICAgICAgcmV0dXJuIG5hdmlnYXRpb25JdGVtICYmIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIudXJsID09PSAnLycgKyBuYXZpZ2F0aW9uSXRlbS5wYXRoO1xuICAgIH0pICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgaXNUaGVyZUFSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIudXJsICE9PSAoJy8nICsgcm91dGUpICYmXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnVybC5pbmRleE9mKHJvdXRlKSA+IC0xO1xuICB9XG5cbiAgcHVibGljIG1lbnVOYXZpZ2F0aW9uKGRlc3RpbmF0aW9uOiBNZW51SXRlbU5hbWUpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbkl0ZW06IE5hdmlnYXRpb25JdGVtID0gdGhpcy5nZXROYXZpZ2F0aW9uSXRlbShkZXN0aW5hdGlvbik7XG4gICAgaWYgKGRlc3RpbmF0aW9uSXRlbSkge1xuICAgICAgdGhpcy5jbGVhckhpc3RvcnkoZGVzdGluYXRpb24pO1xuICAgICAgY29uc3QgZGVzdGluYXRpb25QYXRoID0gW2Rlc3RpbmF0aW9uSXRlbS5wYXRoXTtcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoZGVzdGluYXRpb25QYXRoLCB7XG4gICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmF2aWdhdGVCYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuaGlkZUFuZHJvaWRLZXlib2FyZElmT3BlbigpO1xuICAgIHRoaXMubmF2aWdhdGlvbkhpc3RvcnkucG9wKCk7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlIGJhY2sgdG8gdGhlIGdpdmVuIG1lbnVpdGVtIGlmIGl0IGlzIGF2YWlsYWJsZSBpbiB0aGUgbmF2aWdhdGlvbiBoaXN0b3J5XG4gICAqIFRoZSB0aW1lb3V0IGluIHRoaXMgbWV0aG9kIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIG9uVW5sb2FkZWQgYW5kIG9uTmF2aWdhdGVkRnJvbSBldmVudHMgc2hvdWxkbid0XG4gICAqIGJlIHRyaWdnZXJlZCBzaW11bHRhbmVvdXNseVxuICAgKi9cbiAgcHVibGljIG5hdmlnYXRlQmFja1RvKGRlc3RpbmF0aW9uOiBNZW51SXRlbU5hbWUpOiB2b2lkIHtcbiAgICBjb25zdCBkZXB0aCA9IHRoaXMubmF2aWdhdGlvbkhpc3RvcnkuaW5kZXhPZihkZXN0aW5hdGlvbik7XG4gICAgaWYgKGRlcHRoIDwgMCkge1xuICAgICAgY29uc29sZS53YXJuKCdUaGUgZ2l2ZW4gbWVudUl0ZW0gaXMgbm90IHByZXNlbnQgb2YgdGhlIG5hdmlnYXRpb24gaGlzdG9yeScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmhpZGVBbmRyb2lkS2V5Ym9hcmRJZk9wZW4oKTtcbiAgICB0aGlzLm5hdmlnYXRpb25IaXN0b3J5LnNwbGljZShkZXB0aCArIDEpO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5mcmFtZVNlcnZpY2UuZ2V0RnJhbWUoKS5iYWNrU3RhY2subWFwKChiYWNrc3RhY2tFbnRyeSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID4gZGVwdGggJiYgYmFja3N0YWNrRW50cnkucmVzb2x2ZWRQYWdlKSB7XG4gICAgICAgICAgY29uc3QgcGFnZTogYW55ID0gYmFja3N0YWNrRW50cnkucmVzb2x2ZWRQYWdlO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhZ2UuaXNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgcGFnZS5vblVubG9hZGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWdlLm9uTmF2aWdhdGVkRnJvbSh0cnVlKTtcbiAgICAgICAgICB9LCBpbmRleCAtIGRlcHRoICogMTAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gZGVwdGgpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuZnJhbWVTZXJ2aWNlLmdldEZyYW1lKCkuZ29CYWNrKGJhY2tzdGFja0VudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuZnJhbWVTZXJ2aWNlLmdldEZyYW1lXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtNZW51SXRlbU5hbWV9IGRlc3RpbmF0aW9uXG4gICAqIEBwYXJhbSBjb21tYW5kc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvKGRlc3RpbmF0aW9uOiBNZW51SXRlbU5hbWUsIGNvbW1hbmRzPzogYW55LCB0cmFuc2l0aW9uOiBzdHJpbmcgPSAnc2xpZGVMZWZ0Jyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRoaXMubmF2aWdhdGlvbkhpc3RvcnkucHVzaChkZXN0aW5hdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuZG9OYXZpZ2F0ZVRvKGRlc3RpbmF0aW9uLCBjb21tYW5kcywgZmFsc2UsIHRyYW5zaXRpb24pO1xuICB9XG5cbiAgcHVibGljIG5hdmlnYXRlVG9BbmRDbGVhckhpc3RvcnkoZGVzdGluYXRpb246IE1lbnVJdGVtTmFtZSwgY29tbWFuZHM/OiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHN0cmluZyA9ICdzbGlkZUxlZnQnKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdGhpcy5jbGVhckhpc3RvcnkoZGVzdGluYXRpb24pO1xuICAgIHJldHVybiB0aGlzLmRvTmF2aWdhdGVUbyhkZXN0aW5hdGlvbiwgY29tbWFuZHMsIHRydWUsIHRyYW5zaXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckhpc3RvcnkobWVudUl0ZW1OYW1lOiBNZW51SXRlbU5hbWUpOiB2b2lkIHtcbiAgICB0aGlzLm5hdmlnYXRpb25IaXN0b3J5ID0gW21lbnVJdGVtTmFtZV07XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtNZW51SXRlbU5hbWV9IGRlc3RpbmF0aW9uXG4gICAqIEBwYXJhbSBjb21tYW5kc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNsZWFySGlzdG9yeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIHByaXZhdGUgZG9OYXZpZ2F0ZVRvKGRlc3RpbmF0aW9uOiBNZW51SXRlbU5hbWUsIGV4dHJhQ29tbWFuZHM6IGFueSwgY2xlYXJIaXN0b3J5OiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcblxuICAgIGNvbnN0IGRlc3RpbmF0aW9uSXRlbTogTmF2aWdhdGlvbkl0ZW0gPSB0aGlzLmdldE5hdmlnYXRpb25JdGVtKGRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLmhpZGVBbmRyb2lkS2V5Ym9hcmRJZk9wZW4oKTtcbiAgICBpZiAoZGVzdGluYXRpb25JdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3RoaXMuZmFsbGJhY2tTaXRlXSwge2NsZWFySGlzdG9yeX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY29tbWFuZHM6IGFueVtdID0gW2Rlc3RpbmF0aW9uSXRlbS5wYXRoXTtcbiAgICAgIGlmIChleHRyYUNvbW1hbmRzKSB7XG4gICAgICAgIGNvbW1hbmRzID0gY29tbWFuZHMuY29uY2F0KGV4dHJhQ29tbWFuZHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShjb21tYW5kcywge1xuICAgICAgICBjbGVhckhpc3RvcnksXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBuYW1lOiB0cmFuc2l0aW9uXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmF2aWdhdGlvbkl0ZW0obWVudUl0ZW1OYW1lOiBNZW51SXRlbU5hbWUpOiBOYXZpZ2F0aW9uSXRlbSB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbkl0ZW1zLmZpbmQoKG5hdmlnYXRpb25JdGVtOiBOYXZpZ2F0aW9uSXRlbSkgPT4gbmF2aWdhdGlvbkl0ZW0ubmFtZSA9PT0gbWVudUl0ZW1OYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvbkl0ZW1zOiBOYXZpZ2F0aW9uSXRlbVtdID1cbiAgW1xuICAgIHtcbiAgICAgIG5hbWU6IE1lbnVJdGVtTmFtZS5ob21lLFxuICAgICAgcGF0aDogJ2hvbWUnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBNZW51SXRlbU5hbWUuc2luZ2xlcGxheWVyLFxuICAgICAgcGF0aDogXCJzaW5nbGVwbGF5ZXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTWVudUl0ZW1OYW1lLm11bHRpcGxheWVyLFxuICAgICAgcGF0aDogXCJtdWx0aXBsYXllclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBNZW51SXRlbU5hbWUubXBTZXNzaW9uLFxuICAgICAgcGF0aDogJ211bHRpcGxheWVyL21wU2Vzc2lvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE1lbnVJdGVtTmFtZS5sb2dpbixcbiAgICAgIHBhdGg6IFwibG9naW5cIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTWVudUl0ZW1OYW1lLmxlYWRlcmJvYXJkLFxuICAgICAgcGF0aDogXCJsZWFkZXJib2FyZFwiXG4gICAgfVxuICBdO1xuIl19