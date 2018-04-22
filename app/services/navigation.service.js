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
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBQ25DLHNDQUEyQztBQUMzQyxxQ0FBcUM7QUFDckMsc0RBQStEO0FBQy9ELHlDQUErRDtBQUkvRCw4Q0FBOEM7QUFFOUM7SUFPRSwyQkFBMkIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEQsaUJBQVksR0FBVyxpQkFBaUIsQ0FBQztRQUN6QyxzQkFBaUIsR0FBbUIsRUFBRSxDQUFDO1FBQ3ZDLG9CQUFlLEdBQXFCLHVCQUFlLENBQUM7SUFJTSxDQUFDO0lBRTNELHFEQUF5QixHQUFoQztRQUNFLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRCxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUM1RixZQUFZLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUM5RSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRSxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTSxpREFBcUIsR0FBNUI7UUFBQSxpQkFRQztRQVBDLElBQU0sYUFBYSxHQUFHO1lBQ3BCLG9CQUFZ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dGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3BsYXRmb3JtJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1lbnVJdGVtTmFtZSwgTmF2aWdhdGlvbkl0ZW0gfSBmcm9tICcuLi9kb21haW4vaW5kZXgnO1xyXG5cclxudHlwZSBOYXZpZ2F0ZVRvQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xyXG5cclxuLy8gdW5mb3J0dW5hdGVseSB3ZSBjYW5ub3QgaW5qZWN0IGFuIEludGVyZmFjZVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XHJcbiAgcHVibGljIGZhbGxiYWNrU2l0ZTogc3RyaW5nID0gJ25vdC1pbXBsZW1lbnRlZCc7XHJcbiAgcHVibGljIG5hdmlnYXRpb25IaXN0b3J5OiBNZW51SXRlbU5hbWVbXSA9IFtdO1xyXG4gIHB1YmxpYyBuYXZpZ2F0aW9uSXRlbXM6IE5hdmlnYXRpb25JdGVtW10gPSBuYXZpZ2F0aW9uSXRlbXM7XHJcbiAgcHVibGljIG5hdmlnYXRlVG9BZnRlckxvZ291dENhbGxiYWNrOiBOYXZpZ2F0ZVRvQ2FsbGJhY2s7XHJcbiAgcHVibGljIG5hdmlnYXRlVG9BZnRlclJlZ2lzdHJhdGlvbkNhbGxiYWNrOiBOYXZpZ2F0ZVRvQ2FsbGJhY2s7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICBwdWJsaWMgaGlkZUFuZHJvaWRLZXlib2FyZElmT3BlbigpOiB2b2lkIHtcclxuICAgIGlmIChpc0FuZHJvaWQpIHtcclxuICAgICAgY29uc3QgYWN0aXZpdHkgPSBhcHAuYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHk7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBhcHAuYW5kcm9pZC5jb250ZXh0O1xyXG4gICAgICBpZiAoY29udGV4dCAmJiBhY3Rpdml0eSAmJiBhY3Rpdml0eS5nZXRDdXJyZW50Rm9jdXMoKSkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0TWFuYWdlciA9IGNvbnRleHQuZ2V0U3lzdGVtU2VydmljZShhbmRyb2lkLmNvbnRlbnQuQ29udGV4dC5JTlBVVF9NRVRIT0RfU0VSVklDRSk7XHJcbiAgICAgICAgaW5wdXRNYW5hZ2VyLmhpZGVTb2Z0SW5wdXRGcm9tV2luZG93KGFjdGl2aXR5LmdldEN1cnJlbnRGb2N1cygpLmdldFdpbmRvd1Rva2VuKCksXHJcbiAgICAgICAgICBhbmRyb2lkLnZpZXcuaW5wdXRtZXRob2QuSW5wdXRNZXRob2RNYW5hZ2VyLkhJREVfTk9UX0FMV0FZUyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0N1cnJlbnRNZW51Um9vdEl0ZW0oKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBtZW51Um9vdEl0ZW1zID0gW1xyXG4gICAgICBNZW51SXRlbU5hbWUuaG9tZVxyXG4gICAgXTtcclxuICAgIHJldHVybiBtZW51Um9vdEl0ZW1zLmZpbmQoKHJvb3RJdGVtOiBNZW51SXRlbU5hbWUpID0+IHtcclxuICAgICAgY29uc3QgbmF2aWdhdGlvbkl0ZW06IE5hdmlnYXRpb25JdGVtID0gdGhpcy5nZXROYXZpZ2F0aW9uSXRlbShyb290SXRlbSk7XHJcbiAgICAgIHJldHVybiBuYXZpZ2F0aW9uSXRlbSAmJiB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnVybCA9PT0gJy8nICsgbmF2aWdhdGlvbkl0ZW0ucGF0aDtcclxuICAgIH0pICE9PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNUaGVyZUFSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci51cmwgIT09ICgnLycgKyByb3V0ZSkgJiZcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci51cmwuaW5kZXhPZihyb3V0ZSkgPiAtMTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtZW51TmF2aWdhdGlvbihkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBkZXN0aW5hdGlvbkl0ZW06IE5hdmlnYXRpb25JdGVtID0gdGhpcy5nZXROYXZpZ2F0aW9uSXRlbShkZXN0aW5hdGlvbik7XHJcbiAgICBpZiAoZGVzdGluYXRpb25JdGVtKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJIaXN0b3J5KGRlc3RpbmF0aW9uKTtcclxuICAgICAgY29uc3QgZGVzdGluYXRpb25QYXRoID0gW2Rlc3RpbmF0aW9uSXRlbS5wYXRoXTtcclxuICAgICAgcmV0dXJuIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShkZXN0aW5hdGlvblBhdGgsIHtcclxuICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXHJcbiAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5hdmlnYXRlQmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuaGlkZUFuZHJvaWRLZXlib2FyZElmT3BlbigpO1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uSGlzdG9yeS5wb3AoKTtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE5hdmlnYXRlIGJhY2sgdG8gdGhlIGdpdmVuIG1lbnVpdGVtIGlmIGl0IGlzIGF2YWlsYWJsZSBpbiB0aGUgbmF2aWdhdGlvbiBoaXN0b3J5XHJcbiAgICogVGhlIHRpbWVvdXQgaW4gdGhpcyBtZXRob2QgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugb25VbmxvYWRlZCBhbmQgb25OYXZpZ2F0ZWRGcm9tIGV2ZW50cyBzaG91bGRuJ3RcclxuICAgKiBiZSB0cmlnZ2VyZWQgc2ltdWx0YW5lb3VzbHlcclxuICAgKi9cclxuICBwdWJsaWMgbmF2aWdhdGVCYWNrVG8oZGVzdGluYXRpb246IE1lbnVJdGVtTmFtZSk6IHZvaWQge1xyXG4gICAgY29uc3QgZGVwdGggPSB0aGlzLm5hdmlnYXRpb25IaXN0b3J5LmluZGV4T2YoZGVzdGluYXRpb24pO1xyXG4gICAgaWYgKGRlcHRoIDwgMCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1RoZSBnaXZlbiBtZW51SXRlbSBpcyBub3QgcHJlc2VudCBvZiB0aGUgbmF2aWdhdGlvbiBoaXN0b3J5Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaGlkZUFuZHJvaWRLZXlib2FyZElmT3BlbigpO1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uSGlzdG9yeS5zcGxpY2UoZGVwdGggKyAxKTtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5mcmFtZVNlcnZpY2UuZ2V0RnJhbWUoKS5iYWNrU3RhY2subWFwKChiYWNrc3RhY2tFbnRyeSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPiBkZXB0aCAmJiBiYWNrc3RhY2tFbnRyeS5yZXNvbHZlZFBhZ2UpIHtcclxuICAgICAgICAgIGNvbnN0IHBhZ2U6IGFueSA9IGJhY2tzdGFja0VudHJ5LnJlc29sdmVkUGFnZTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGFnZS5pc0xvYWRlZCkge1xyXG4gICAgICAgICAgICAgIHBhZ2Uub25VbmxvYWRlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhZ2Uub25OYXZpZ2F0ZWRGcm9tKHRydWUpO1xyXG4gICAgICAgICAgfSwgaW5kZXggLSBkZXB0aCAqIDEwMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gZGVwdGgpIHtcclxuICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5mcmFtZVNlcnZpY2UuZ2V0RnJhbWUoKS5nb0JhY2soYmFja3N0YWNrRW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmZyYW1lU2VydmljZS5nZXRGcmFtZVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge01lbnVJdGVtTmFtZX0gZGVzdGluYXRpb25cclxuICAgKiBAcGFyYW0gY29tbWFuZHNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhbnNpdGlvblxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxyXG4gICAqL1xyXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvKGRlc3RpbmF0aW9uOiBNZW51SXRlbU5hbWUsIGNvbW1hbmRzPzogYW55LCB0cmFuc2l0aW9uOiBzdHJpbmcgPSAnc2xpZGVMZWZ0Jyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uSGlzdG9yeS5wdXNoKGRlc3RpbmF0aW9uKTtcclxuICAgIHJldHVybiB0aGlzLmRvTmF2aWdhdGVUbyhkZXN0aW5hdGlvbiwgY29tbWFuZHMsIGZhbHNlLCB0cmFuc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvQW5kQ2xlYXJIaXN0b3J5KGRlc3RpbmF0aW9uOiBNZW51SXRlbU5hbWUsIGNvbW1hbmRzPzogYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHN0cmluZyA9ICdzbGlkZUxlZnQnKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICB0aGlzLmNsZWFySGlzdG9yeShkZXN0aW5hdGlvbik7XHJcbiAgICByZXR1cm4gdGhpcy5kb05hdmlnYXRlVG8oZGVzdGluYXRpb24sIGNvbW1hbmRzLCB0cnVlLCB0cmFuc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJIaXN0b3J5KG1lbnVJdGVtTmFtZTogTWVudUl0ZW1OYW1lKTogdm9pZCB7XHJcbiAgICB0aGlzLm5hdmlnYXRpb25IaXN0b3J5ID0gW21lbnVJdGVtTmFtZV07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TWVudUl0ZW1OYW1lfSBkZXN0aW5hdGlvblxyXG4gICAqIEBwYXJhbSBjb21tYW5kc1xyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2xlYXJIaXN0b3J5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYW5zaXRpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBwcml2YXRlIGRvTmF2aWdhdGVUbyhkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lLCBleHRyYUNvbW1hbmRzOiBhbnksIGNsZWFySGlzdG9yeTogYm9vbGVhbixcclxuICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuXHJcbiAgICBjb25zdCBkZXN0aW5hdGlvbkl0ZW06IE5hdmlnYXRpb25JdGVtID0gdGhpcy5nZXROYXZpZ2F0aW9uSXRlbShkZXN0aW5hdGlvbik7XHJcbiAgICB0aGlzLmhpZGVBbmRyb2lkS2V5Ym9hcmRJZk9wZW4oKTtcclxuICAgIGlmIChkZXN0aW5hdGlvbkl0ZW0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFt0aGlzLmZhbGxiYWNrU2l0ZV0sIHtjbGVhckhpc3Rvcnl9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBjb21tYW5kczogYW55W10gPSBbZGVzdGluYXRpb25JdGVtLnBhdGhdO1xyXG4gICAgICBpZiAoZXh0cmFDb21tYW5kcykge1xyXG4gICAgICAgIGNvbW1hbmRzID0gY29tbWFuZHMuY29uY2F0KGV4dHJhQ29tbWFuZHMpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoY29tbWFuZHMsIHtcclxuICAgICAgICBjbGVhckhpc3RvcnksXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogdHJhbnNpdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5hdmlnYXRpb25JdGVtKG1lbnVJdGVtTmFtZTogTWVudUl0ZW1OYW1lKTogTmF2aWdhdGlvbkl0ZW0ge1xyXG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbkl0ZW1zLmZpbmQoKG5hdmlnYXRpb25JdGVtOiBOYXZpZ2F0aW9uSXRlbSkgPT4gbmF2aWdhdGlvbkl0ZW0ubmFtZSA9PT0gbWVudUl0ZW1OYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uSXRlbXM6IE5hdmlnYXRpb25JdGVtW10gPVxyXG4gIFtcclxuICAgIHtcclxuICAgICAgbmFtZTogTWVudUl0ZW1OYW1lLmhvbWUsXHJcbiAgICAgIHBhdGg6ICdob21lJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogTWVudUl0ZW1OYW1lLnNpbmdsZXBsYXllcixcclxuICAgICAgcGF0aDogXCJzaW5nbGVwbGF5ZXJcIlxyXG4gICAgfVxyXG4gIF07XHJcbiJdfQ==