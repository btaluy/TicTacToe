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
    },
    {
        name: index_1.MenuItemName.friends,
        path: "friends"
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBQ25DLHNDQUEyQztBQUMzQyxxQ0FBcUM7QUFDckMsc0RBQStEO0FBQy9ELHlDQUErRDtBQUkvRCw4Q0FBOEM7QUFFOUM7SUFPRSwyQkFBMkIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEQsaUJBQVksR0FBVyxpQkFBaUIsQ0FBQztRQUN6QyxzQkFBaUIsR0FBbUIsRUFBRSxDQUFDO1FBQ3ZDLG9CQUFlLEdBQXFCLHVCQUFlLENBQUM7SUFJTSxDQUFDO0lBRTNELHFEQUF5QixHQUFoQztRQUNFLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRCxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUM1RixZQUFZLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUM5RSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRSxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTSxpREFBcUIsR0FBNUI7UUFBQSxpQkFRQztRQVBDLElBQU0sYUFBYSxHQUFHO1lBQ3BCLG9CQUFZ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QUFZLENBQUMsV0FBVztRQUM5QixJQUFJLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLG9CQUFZLENBQUMsS0FBSztRQUN4QixJQUFJLEVBQUUsT0FBTztLQUNkO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsb0JBQVksQ0FBQyxXQUFXO1FBQzlCLElBQUksRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsb0JBQVksQ0FBQyxPQUFPO1FBQzFCLElBQUksRUFBRSxTQUFTO0tBQ2hCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICdhcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAncGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWVudUl0ZW1OYW1lLCBOYXZpZ2F0aW9uSXRlbSB9IGZyb20gJy4uL2RvbWFpbi9pbmRleCc7XHJcblxyXG50eXBlIE5hdmlnYXRlVG9DYWxsYmFjayA9ICgpID0+IHZvaWQ7XHJcblxyXG4vLyB1bmZvcnR1bmF0ZWx5IHdlIGNhbm5vdCBpbmplY3QgYW4gSW50ZXJmYWNlXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25TZXJ2aWNlIHtcclxuICBwdWJsaWMgZmFsbGJhY2tTaXRlOiBzdHJpbmcgPSAnbm90LWltcGxlbWVudGVkJztcclxuICBwdWJsaWMgbmF2aWdhdGlvbkhpc3Rvcnk6IE1lbnVJdGVtTmFtZVtdID0gW107XHJcbiAgcHVibGljIG5hdmlnYXRpb25JdGVtczogTmF2aWdhdGlvbkl0ZW1bXSA9IG5hdmlnYXRpb25JdGVtcztcclxuICBwdWJsaWMgbmF2aWdhdGVUb0FmdGVyTG9nb3V0Q2FsbGJhY2s6IE5hdmlnYXRlVG9DYWxsYmFjaztcclxuICBwdWJsaWMgbmF2aWdhdGVUb0FmdGVyUmVnaXN0cmF0aW9uQ2FsbGJhY2s6IE5hdmlnYXRlVG9DYWxsYmFjaztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gIHB1YmxpYyBoaWRlQW5kcm9pZEtleWJvYXJkSWZPcGVuKCk6IHZvaWQge1xyXG4gICAgaWYgKGlzQW5kcm9pZCkge1xyXG4gICAgICBjb25zdCBhY3Rpdml0eSA9IGFwcC5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eTtcclxuICAgICAgY29uc3QgY29udGV4dCA9IGFwcC5hbmRyb2lkLmNvbnRleHQ7XHJcbiAgICAgIGlmIChjb250ZXh0ICYmIGFjdGl2aXR5ICYmIGFjdGl2aXR5LmdldEN1cnJlbnRGb2N1cygpKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRNYW5hZ2VyID0gY29udGV4dC5nZXRTeXN0ZW1TZXJ2aWNlKGFuZHJvaWQuY29udGVudC5Db250ZXh0LklOUFVUX01FVEhPRF9TRVJWSUNFKTtcclxuICAgICAgICBpbnB1dE1hbmFnZXIuaGlkZVNvZnRJbnB1dEZyb21XaW5kb3coYWN0aXZpdHkuZ2V0Q3VycmVudEZvY3VzKCkuZ2V0V2luZG93VG9rZW4oKSxcclxuICAgICAgICAgIGFuZHJvaWQudmlldy5pbnB1dG1ldGhvZC5JbnB1dE1ldGhvZE1hbmFnZXIuSElERV9OT1RfQUxXQVlTKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQ3VycmVudE1lbnVSb290SXRlbSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG1lbnVSb290SXRlbXMgPSBbXHJcbiAgICAgIE1lbnVJdGVtTmFtZS5ob21lXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG1lbnVSb290SXRlbXMuZmluZCgocm9vdEl0ZW06IE1lbnVJdGVtTmFtZSkgPT4ge1xyXG4gICAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbTogTmF2aWdhdGlvbkl0ZW0gPSB0aGlzLmdldE5hdmlnYXRpb25JdGVtKHJvb3RJdGVtKTtcclxuICAgICAgcmV0dXJuIG5hdmlnYXRpb25JdGVtICYmIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIudXJsID09PSAnLycgKyBuYXZpZ2F0aW9uSXRlbS5wYXRoO1xyXG4gICAgfSkgIT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1RoZXJlQVJvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnVybCAhPT0gKCcvJyArIHJvdXRlKSAmJlxyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnVybC5pbmRleE9mKHJvdXRlKSA+IC0xO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1lbnVOYXZpZ2F0aW9uKGRlc3RpbmF0aW9uOiBNZW51SXRlbU5hbWUpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uSXRlbTogTmF2aWdhdGlvbkl0ZW0gPSB0aGlzLmdldE5hdmlnYXRpb25JdGVtKGRlc3RpbmF0aW9uKTtcclxuICAgIGlmIChkZXN0aW5hdGlvbkl0ZW0pIHtcclxuICAgICAgdGhpcy5jbGVhckhpc3RvcnkoZGVzdGluYXRpb24pO1xyXG4gICAgICBjb25zdCBkZXN0aW5hdGlvblBhdGggPSBbZGVzdGluYXRpb25JdGVtLnBhdGhdO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKGRlc3RpbmF0aW9uUGF0aCwge1xyXG4gICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcclxuICAgICAgICBhbmltYXRlZDogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmF2aWdhdGVCYWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5oaWRlQW5kcm9pZEtleWJvYXJkSWZPcGVuKCk7XHJcbiAgICB0aGlzLm5hdmlnYXRpb25IaXN0b3J5LnBvcCgpO1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTmF2aWdhdGUgYmFjayB0byB0aGUgZ2l2ZW4gbWVudWl0ZW0gaWYgaXQgaXMgYXZhaWxhYmxlIGluIHRoZSBuYXZpZ2F0aW9uIGhpc3RvcnlcclxuICAgKiBUaGUgdGltZW91dCBpbiB0aGlzIG1ldGhvZCBpcyBuZWNlc3NhcnkgYmVjYXVzZSBvblVubG9hZGVkIGFuZCBvbk5hdmlnYXRlZEZyb20gZXZlbnRzIHNob3VsZG4ndFxyXG4gICAqIGJlIHRyaWdnZXJlZCBzaW11bHRhbmVvdXNseVxyXG4gICAqL1xyXG4gIHB1YmxpYyBuYXZpZ2F0ZUJhY2tUbyhkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lKTogdm9pZCB7XHJcbiAgICBjb25zdCBkZXB0aCA9IHRoaXMubmF2aWdhdGlvbkhpc3RvcnkuaW5kZXhPZihkZXN0aW5hdGlvbik7XHJcbiAgICBpZiAoZGVwdGggPCAwKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignVGhlIGdpdmVuIG1lbnVJdGVtIGlzIG5vdCBwcmVzZW50IG9mIHRoZSBuYXZpZ2F0aW9uIGhpc3RvcnknKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oaWRlQW5kcm9pZEtleWJvYXJkSWZPcGVuKCk7XHJcbiAgICB0aGlzLm5hdmlnYXRpb25IaXN0b3J5LnNwbGljZShkZXB0aCArIDEpO1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmZyYW1lU2VydmljZS5nZXRGcmFtZSgpLmJhY2tTdGFjay5tYXAoKGJhY2tzdGFja0VudHJ5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA+IGRlcHRoICYmIGJhY2tzdGFja0VudHJ5LnJlc29sdmVkUGFnZSkge1xyXG4gICAgICAgICAgY29uc3QgcGFnZTogYW55ID0gYmFja3N0YWNrRW50cnkucmVzb2x2ZWRQYWdlO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYWdlLmlzTG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgcGFnZS5vblVubG9hZGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFnZS5vbk5hdmlnYXRlZEZyb20odHJ1ZSk7XHJcbiAgICAgICAgICB9LCBpbmRleCAtIGRlcHRoICogMTAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBkZXB0aCkge1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmZyYW1lU2VydmljZS5nZXRGcmFtZSgpLmdvQmFjayhiYWNrc3RhY2tFbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuZnJhbWVTZXJ2aWNlLmdldEZyYW1lXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TWVudUl0ZW1OYW1lfSBkZXN0aW5hdGlvblxyXG4gICAqIEBwYXJhbSBjb21tYW5kc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFuc2l0aW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgcHVibGljIG5hdmlnYXRlVG8oZGVzdGluYXRpb246IE1lbnVJdGVtTmFtZSwgY29tbWFuZHM/OiBhbnksIHRyYW5zaXRpb246IHN0cmluZyA9ICdzbGlkZUxlZnQnKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICB0aGlzLm5hdmlnYXRpb25IaXN0b3J5LnB1c2goZGVzdGluYXRpb24pO1xyXG4gICAgcmV0dXJuIHRoaXMuZG9OYXZpZ2F0ZVRvKGRlc3RpbmF0aW9uLCBjb21tYW5kcywgZmFsc2UsIHRyYW5zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5hdmlnYXRlVG9BbmRDbGVhckhpc3RvcnkoZGVzdGluYXRpb246IE1lbnVJdGVtTmFtZSwgY29tbWFuZHM/OiBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogc3RyaW5nID0gJ3NsaWRlTGVmdCcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHRoaXMuY2xlYXJIaXN0b3J5KGRlc3RpbmF0aW9uKTtcclxuICAgIHJldHVybiB0aGlzLmRvTmF2aWdhdGVUbyhkZXN0aW5hdGlvbiwgY29tbWFuZHMsIHRydWUsIHRyYW5zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckhpc3RvcnkobWVudUl0ZW1OYW1lOiBNZW51SXRlbU5hbWUpOiB2b2lkIHtcclxuICAgIHRoaXMubmF2aWdhdGlvbkhpc3RvcnkgPSBbbWVudUl0ZW1OYW1lXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtNZW51SXRlbU5hbWV9IGRlc3RpbmF0aW9uXHJcbiAgICogQHBhcmFtIGNvbW1hbmRzXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBjbGVhckhpc3RvcnlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhbnNpdGlvblxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZG9OYXZpZ2F0ZVRvKGRlc3RpbmF0aW9uOiBNZW51SXRlbU5hbWUsIGV4dHJhQ29tbWFuZHM6IGFueSwgY2xlYXJIaXN0b3J5OiBib29sZWFuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG5cclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uSXRlbTogTmF2aWdhdGlvbkl0ZW0gPSB0aGlzLmdldE5hdmlnYXRpb25JdGVtKGRlc3RpbmF0aW9uKTtcclxuICAgIHRoaXMuaGlkZUFuZHJvaWRLZXlib2FyZElmT3BlbigpO1xyXG4gICAgaWYgKGRlc3RpbmF0aW9uSXRlbSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3RoaXMuZmFsbGJhY2tTaXRlXSwge2NsZWFySGlzdG9yeX0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGNvbW1hbmRzOiBhbnlbXSA9IFtkZXN0aW5hdGlvbkl0ZW0ucGF0aF07XHJcbiAgICAgIGlmIChleHRyYUNvbW1hbmRzKSB7XHJcbiAgICAgICAgY29tbWFuZHMgPSBjb21tYW5kcy5jb25jYXQoZXh0cmFDb21tYW5kcyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShjb21tYW5kcywge1xyXG4gICAgICAgIGNsZWFySGlzdG9yeSxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICBuYW1lOiB0cmFuc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TmF2aWdhdGlvbkl0ZW0obWVudUl0ZW1OYW1lOiBNZW51SXRlbU5hbWUpOiBOYXZpZ2F0aW9uSXRlbSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uSXRlbXMuZmluZCgobmF2aWdhdGlvbkl0ZW06IE5hdmlnYXRpb25JdGVtKSA9PiBuYXZpZ2F0aW9uSXRlbS5uYW1lID09PSBtZW51SXRlbU5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb25JdGVtczogTmF2aWdhdGlvbkl0ZW1bXSA9XHJcbiAgW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBNZW51SXRlbU5hbWUuaG9tZSxcclxuICAgICAgcGF0aDogJ2hvbWUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBNZW51SXRlbU5hbWUuc2luZ2xlcGxheWVyLFxyXG4gICAgICBwYXRoOiBcInNpbmdsZXBsYXllclwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBNZW51SXRlbU5hbWUubXVsdGlwbGF5ZXIsXHJcbiAgICAgIHBhdGg6IFwibXVsdGlwbGF5ZXJcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogTWVudUl0ZW1OYW1lLmxvZ2luLFxyXG4gICAgICBwYXRoOiBcImxvZ2luXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IE1lbnVJdGVtTmFtZS5sZWFkZXJib2FyZCxcclxuICAgICAgcGF0aDogXCJsZWFkZXJib2FyZFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBNZW51SXRlbU5hbWUuZnJpZW5kcyxcclxuICAgICAgcGF0aDogXCJmcmllbmRzXCJcclxuICAgIH1cclxuICBdO1xyXG4iXX0=
