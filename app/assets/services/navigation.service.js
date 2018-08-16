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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBQ25DLHNDQUEyQztBQUMzQyxxQ0FBcUM7QUFDckMsc0RBQStEO0FBQy9ELHlDQUErRDtBQUkvRCw4Q0FBOEM7QUFFOUM7SUFPRSwyQkFBMkIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEQsaUJBQVksR0FBVyxpQkFBaUIsQ0FBQztRQUN6QyxzQkFBaUIsR0FBbUIsRUFBRSxDQUFDO1FBQ3ZDLG9CQUFlLEdBQXFCLHVCQUFlLENBQUM7SUFJTSxDQUFDO0lBRTNELHFEQUF5QixHQUFoQztRQUNFLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRCxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUM1RixZQUFZLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUM5RSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRSxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTSxpREFBcUIsR0FBNUI7UUFBQSxpQkFRQztRQVBDLElBQU0sYUFBYSxHQUFHO1lBQ3BCLG9CQUFZLENBQUMsSUFBSTtTQUNsQixDQUFDO1FBQ0YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFzQjtZQUMvQyxJQUFNLGNBQWMsR0FBbUIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sQ0FBQyxjQUFjLElBQUksS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFDMUYsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTSw2Q0FBaUIsR0FBeEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RyxDQUFDO0lBRU0seUNBQWEsR0FBcEIsVUFBcUIsS0FBYTtRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0sMENBQWMsR0FBckIsVUFBc0IsV0FBeUI7UUFDN0MsSUFBTSxlQUFlLEdBQW1CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RSxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0IsSUFBTSxlQUFlLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFO2dCQUNyRCxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsUUFBUSxFQUFFLEtBQUs7YUFDaEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFTSx3Q0FBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDBDQUFjLEdBQXJCLFVBQXNCLFdBQXlCO1FBQS9DLGlCQXVCQztRQXRCQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFELEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO1lBQzVFLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQyxjQUFjLEVBQUUsS0FBSztZQUM5RSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFNLE1BQUksR0FBUSxjQUFjLENBQUMsWUFBWSxDQUFDO2dCQUM5QyxVQUFVLENBQUM7b0JBQ1QsRUFBRSxDQUFDLENBQUMsTUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLE1BQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQztvQkFDRCxNQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMxQixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN2RSxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQTtJQUM3QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksc0NBQVUsR0FBakIsVUFBa0IsV0FBeUIsRUFBRSxRQUFjLEVBQUUsVUFBZ0M7UUFBaEMsMkJBQUEsRUFBQSx3QkFBZ0M7UUFDM0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU0scURBQXlCLEdBQWhDLFVBQWlDLFdBQXlCLEVBQUUsUUFBYyxFQUN6QyxVQUFnQztRQUFoQywyQkFBQSxFQUFBLHdCQUFnQztRQUMvRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyx3Q0FBWSxHQUFwQixVQUFxQixZQUEwQjtRQUM3QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNLLHdDQUFZLEdBQXBCLFVBQXFCLFdBQXlCLEVBQUUsYUFBa0IsRUFBRSxZQUFxQixFQUNwRSxVQUFrQjtRQUVyQyxJQUFNLGVBQWUsR0FBbUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLGVBQWUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUMsWUFBWSxjQUFBLEVBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksUUFBUSxHQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7Z0JBQzlDLFlBQVksY0FBQTtnQkFDWixVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLFVBQVU7aUJBQ2pCO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFTyw2Q0FBaUIsR0FBekIsVUFBMEIsWUFBMEI7UUFDbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUMsY0FBOEIsSUFBSyxPQUFBLGNBQWMsQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFwQyxDQUFvQyxDQUFDLENBQUM7SUFDN0csQ0FBQztJQTdJVSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTt5Q0FRa0MseUJBQWdCO09BUGxELGlCQUFpQixDQThJN0I7SUFBRCx3QkFBQztDQUFBLEFBOUlELElBOElDO0FBOUlZLDhDQUFpQjtBQWdKakIsUUFBQSxlQUFlLEdBQzFCO0lBQ0U7UUFDRSxJQUFJLEVBQUUsb0JBQVksQ0FBQyxJQUFJO1FBQ3ZCLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRDtRQUNFLElBQUksRUFBRSxvQkFBWSxDQUFDLFlBQVk7UUFDL0IsSUFBSSxFQUFFLGNBQWM7S0FDckI7SUFDRDtRQUNFLElBQUksRUFBRSxvQkFBWSxDQUFDLFdBQVc7UUFDOUIsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLElBQUksRUFBRSxvQkFBWSxDQUFDLFNBQVM7UUFDNUIsSUFBSSxFQUFFLHVCQUF1QjtLQUM5QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLG9CQUFZLENBQUMsS0FBSztRQUN4QixJQUFJLEVBQUUsT0FBTztLQUNkO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsb0JBQVksQ0FBQyxXQUFXO1FBQzlCLElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsb0JBQVksQ0FBQyxPQUFPO1FBQzFCLElBQUksRUFBRSxTQUFTO0tBQ2hCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICdhcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAncGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWVudUl0ZW1OYW1lLCBOYXZpZ2F0aW9uSXRlbSB9IGZyb20gJy4uL2RvbWFpbi9pbmRleCc7XHJcblxyXG50eXBlIE5hdmlnYXRlVG9DYWxsYmFjayA9ICgpID0+IHZvaWQ7XHJcblxyXG4vLyB1bmZvcnR1bmF0ZWx5IHdlIGNhbm5vdCBpbmplY3QgYW4gSW50ZXJmYWNlXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25TZXJ2aWNlIHtcclxuICBwdWJsaWMgZmFsbGJhY2tTaXRlOiBzdHJpbmcgPSAnbm90LWltcGxlbWVudGVkJztcclxuICBwdWJsaWMgbmF2aWdhdGlvbkhpc3Rvcnk6IE1lbnVJdGVtTmFtZVtdID0gW107XHJcbiAgcHVibGljIG5hdmlnYXRpb25JdGVtczogTmF2aWdhdGlvbkl0ZW1bXSA9IG5hdmlnYXRpb25JdGVtcztcclxuICBwdWJsaWMgbmF2aWdhdGVUb0FmdGVyTG9nb3V0Q2FsbGJhY2s6IE5hdmlnYXRlVG9DYWxsYmFjaztcclxuICBwdWJsaWMgbmF2aWdhdGVUb0FmdGVyUmVnaXN0cmF0aW9uQ2FsbGJhY2s6IE5hdmlnYXRlVG9DYWxsYmFjaztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gIHB1YmxpYyBoaWRlQW5kcm9pZEtleWJvYXJkSWZPcGVuKCk6IHZvaWQge1xyXG4gICAgaWYgKGlzQW5kcm9pZCkge1xyXG4gICAgICBjb25zdCBhY3Rpdml0eSA9IGFwcC5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eTtcclxuICAgICAgY29uc3QgY29udGV4dCA9IGFwcC5hbmRyb2lkLmNvbnRleHQ7XHJcbiAgICAgIGlmIChjb250ZXh0ICYmIGFjdGl2aXR5ICYmIGFjdGl2aXR5LmdldEN1cnJlbnRGb2N1cygpKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRNYW5hZ2VyID0gY29udGV4dC5nZXRTeXN0ZW1TZXJ2aWNlKGFuZHJvaWQuY29udGVudC5Db250ZXh0LklOUFVUX01FVEhPRF9TRVJWSUNFKTtcclxuICAgICAgICBpbnB1dE1hbmFnZXIuaGlkZVNvZnRJbnB1dEZyb21XaW5kb3coYWN0aXZpdHkuZ2V0Q3VycmVudEZvY3VzKCkuZ2V0V2luZG93VG9rZW4oKSxcclxuICAgICAgICAgIGFuZHJvaWQudmlldy5pbnB1dG1ldGhvZC5JbnB1dE1ldGhvZE1hbmFnZXIuSElERV9OT1RfQUxXQVlTKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQ3VycmVudE1lbnVSb290SXRlbSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG1lbnVSb290SXRlbXMgPSBbXHJcbiAgICAgIE1lbnVJdGVtTmFtZS5ob21lXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG1lbnVSb290SXRlbXMuZmluZCgocm9vdEl0ZW06IE1lbnVJdGVtTmFtZSkgPT4ge1xyXG4gICAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbTogTmF2aWdhdGlvbkl0ZW0gPSB0aGlzLmdldE5hdmlnYXRpb25JdGVtKHJvb3RJdGVtKTtcclxuICAgICAgcmV0dXJuIG5hdmlnYXRpb25JdGVtICYmIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIudXJsID09PSAnLycgKyBuYXZpZ2F0aW9uSXRlbS5wYXRoO1xyXG4gICAgfSkgIT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0dhbWVTZXNzaW9uT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnVybCA9PT0gJy8nICsgdGhpcy5nZXROYXZpZ2F0aW9uSXRlbShNZW51SXRlbU5hbWUubXBTZXNzaW9uKS5wYXRoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzVGhlcmVBUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIudXJsICE9PSAoJy8nICsgcm91dGUpICYmXHJcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIudXJsLmluZGV4T2Yocm91dGUpID4gLTE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbWVudU5hdmlnYXRpb24oZGVzdGluYXRpb246IE1lbnVJdGVtTmFtZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgZGVzdGluYXRpb25JdGVtOiBOYXZpZ2F0aW9uSXRlbSA9IHRoaXMuZ2V0TmF2aWdhdGlvbkl0ZW0oZGVzdGluYXRpb24pO1xyXG4gICAgaWYgKGRlc3RpbmF0aW9uSXRlbSkge1xyXG4gICAgICB0aGlzLmNsZWFySGlzdG9yeShkZXN0aW5hdGlvbik7XHJcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uUGF0aCA9IFtkZXN0aW5hdGlvbkl0ZW0ucGF0aF07XHJcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoZGVzdGluYXRpb25QYXRoLCB7XHJcbiAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxyXG4gICAgICAgIGFuaW1hdGVkOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuYXZpZ2F0ZUJhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmhpZGVBbmRyb2lkS2V5Ym9hcmRJZk9wZW4oKTtcclxuICAgIHRoaXMubmF2aWdhdGlvbkhpc3RvcnkucG9wKCk7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBOYXZpZ2F0ZSBiYWNrIHRvIHRoZSBnaXZlbiBtZW51aXRlbSBpZiBpdCBpcyBhdmFpbGFibGUgaW4gdGhlIG5hdmlnYXRpb24gaGlzdG9yeVxyXG4gICAqIFRoZSB0aW1lb3V0IGluIHRoaXMgbWV0aG9kIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIG9uVW5sb2FkZWQgYW5kIG9uTmF2aWdhdGVkRnJvbSBldmVudHMgc2hvdWxkbid0XHJcbiAgICogYmUgdHJpZ2dlcmVkIHNpbXVsdGFuZW91c2x5XHJcbiAgICovXHJcbiAgcHVibGljIG5hdmlnYXRlQmFja1RvKGRlc3RpbmF0aW9uOiBNZW51SXRlbU5hbWUpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5uYXZpZ2F0aW9uSGlzdG9yeS5pbmRleE9mKGRlc3RpbmF0aW9uKTtcclxuICAgIGlmIChkZXB0aCA8IDApIHtcclxuICAgICAgY29uc29sZS53YXJuKCdUaGUgZ2l2ZW4gbWVudUl0ZW0gaXMgbm90IHByZXNlbnQgb2YgdGhlIG5hdmlnYXRpb24gaGlzdG9yeScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmhpZGVBbmRyb2lkS2V5Ym9hcmRJZk9wZW4oKTtcclxuICAgIHRoaXMubmF2aWdhdGlvbkhpc3Rvcnkuc3BsaWNlKGRlcHRoICsgMSk7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuZnJhbWVTZXJ2aWNlLmdldEZyYW1lKCkuYmFja1N0YWNrLm1hcCgoYmFja3N0YWNrRW50cnksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gZGVwdGggJiYgYmFja3N0YWNrRW50cnkucmVzb2x2ZWRQYWdlKSB7XHJcbiAgICAgICAgICBjb25zdCBwYWdlOiBhbnkgPSBiYWNrc3RhY2tFbnRyeS5yZXNvbHZlZFBhZ2U7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhZ2UuaXNMb2FkZWQpIHtcclxuICAgICAgICAgICAgICBwYWdlLm9uVW5sb2FkZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYWdlLm9uTmF2aWdhdGVkRnJvbSh0cnVlKTtcclxuICAgICAgICAgIH0sIGluZGV4IC0gZGVwdGggKiAxMDApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGRlcHRoKSB7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuZnJhbWVTZXJ2aWNlLmdldEZyYW1lKCkuZ29CYWNrKGJhY2tzdGFja0VudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5mcmFtZVNlcnZpY2UuZ2V0RnJhbWVcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtNZW51SXRlbU5hbWV9IGRlc3RpbmF0aW9uXHJcbiAgICogQHBhcmFtIGNvbW1hbmRzXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYW5zaXRpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBwdWJsaWMgbmF2aWdhdGVUbyhkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lLCBjb21tYW5kcz86IGFueSwgdHJhbnNpdGlvbjogc3RyaW5nID0gJ3NsaWRlTGVmdCcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHRoaXMubmF2aWdhdGlvbkhpc3RvcnkucHVzaChkZXN0aW5hdGlvbik7XHJcbiAgICByZXR1cm4gdGhpcy5kb05hdmlnYXRlVG8oZGVzdGluYXRpb24sIGNvbW1hbmRzLCBmYWxzZSwgdHJhbnNpdGlvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmF2aWdhdGVUb0FuZENsZWFySGlzdG9yeShkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lLCBjb21tYW5kcz86IGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBzdHJpbmcgPSAnc2xpZGVMZWZ0Jyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgdGhpcy5jbGVhckhpc3RvcnkoZGVzdGluYXRpb24pO1xyXG4gICAgcmV0dXJuIHRoaXMuZG9OYXZpZ2F0ZVRvKGRlc3RpbmF0aW9uLCBjb21tYW5kcywgdHJ1ZSwgdHJhbnNpdGlvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFySGlzdG9yeShtZW51SXRlbU5hbWU6IE1lbnVJdGVtTmFtZSk6IHZvaWQge1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uSGlzdG9yeSA9IFttZW51SXRlbU5hbWVdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge01lbnVJdGVtTmFtZX0gZGVzdGluYXRpb25cclxuICAgKiBAcGFyYW0gY29tbWFuZHNcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNsZWFySGlzdG9yeVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFuc2l0aW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBkb05hdmlnYXRlVG8oZGVzdGluYXRpb246IE1lbnVJdGVtTmFtZSwgZXh0cmFDb21tYW5kczogYW55LCBjbGVhckhpc3Rvcnk6IGJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcblxyXG4gICAgY29uc3QgZGVzdGluYXRpb25JdGVtOiBOYXZpZ2F0aW9uSXRlbSA9IHRoaXMuZ2V0TmF2aWdhdGlvbkl0ZW0oZGVzdGluYXRpb24pO1xyXG4gICAgdGhpcy5oaWRlQW5kcm9pZEtleWJvYXJkSWZPcGVuKCk7XHJcbiAgICBpZiAoZGVzdGluYXRpb25JdGVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbdGhpcy5mYWxsYmFja1NpdGVdLCB7Y2xlYXJIaXN0b3J5fSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgY29tbWFuZHM6IGFueVtdID0gW2Rlc3RpbmF0aW9uSXRlbS5wYXRoXTtcclxuICAgICAgaWYgKGV4dHJhQ29tbWFuZHMpIHtcclxuICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLmNvbmNhdChleHRyYUNvbW1hbmRzKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKGNvbW1hbmRzLCB7XHJcbiAgICAgICAgY2xlYXJIaXN0b3J5LFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IHRyYW5zaXRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXROYXZpZ2F0aW9uSXRlbShtZW51SXRlbU5hbWU6IE1lbnVJdGVtTmFtZSk6IE5hdmlnYXRpb25JdGVtIHtcclxuICAgIHJldHVybiB0aGlzLm5hdmlnYXRpb25JdGVtcy5maW5kKChuYXZpZ2F0aW9uSXRlbTogTmF2aWdhdGlvbkl0ZW0pID0+IG5hdmlnYXRpb25JdGVtLm5hbWUgPT09IG1lbnVJdGVtTmFtZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvbkl0ZW1zOiBOYXZpZ2F0aW9uSXRlbVtdID1cclxuICBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IE1lbnVJdGVtTmFtZS5ob21lLFxyXG4gICAgICBwYXRoOiAnaG9tZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IE1lbnVJdGVtTmFtZS5zaW5nbGVwbGF5ZXIsXHJcbiAgICAgIHBhdGg6IFwic2luZ2xlcGxheWVyXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IE1lbnVJdGVtTmFtZS5tdWx0aXBsYXllcixcclxuICAgICAgcGF0aDogXCJtdWx0aXBsYXllclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBNZW51SXRlbU5hbWUubXBTZXNzaW9uLFxyXG4gICAgICBwYXRoOiAnbXVsdGlwbGF5ZXIvbXBTZXNzaW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogTWVudUl0ZW1OYW1lLmxvZ2luLFxyXG4gICAgICBwYXRoOiBcImxvZ2luXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IE1lbnVJdGVtTmFtZS5sZWFkZXJib2FyZCxcclxuICAgICAgcGF0aDogXCJsZWFkZXJib2FyZFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBNZW51SXRlbU5hbWUuZnJpZW5kcyxcclxuICAgICAgcGF0aDogXCJmcmllbmRzXCJcclxuICAgIH1cclxuICBdO1xyXG4iXX0=