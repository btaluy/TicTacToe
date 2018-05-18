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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBQ25DLHNDQUEyQztBQUMzQyxxQ0FBcUM7QUFDckMsc0RBQStEO0FBQy9ELHlDQUErRDtBQUkvRCw4Q0FBOEM7QUFFOUM7SUFPRSwyQkFBMkIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEQsaUJBQVksR0FBVyxpQkFBaUIsQ0FBQztRQUN6QyxzQkFBaUIsR0FBbUIsRUFBRSxDQUFDO1FBQ3ZDLG9CQUFlLEdBQXFCLHVCQUFlLENBQUM7SUFJTSxDQUFDO0lBRTNELHFEQUF5QixHQUFoQztRQUNFLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRCxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUM1RixZQUFZLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUM5RSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqRSxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTSxpREFBcUIsR0FBNUI7UUFBQSxpQkFRQztRQVBDLElBQU0sYUFBYSxHQUFHO1lBQ3BCLG9CQUFZ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dGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNZW51SXRlbU5hbWUsIE5hdmlnYXRpb25JdGVtIH0gZnJvbSAnLi4vZG9tYWluL2luZGV4JztcblxudHlwZSBOYXZpZ2F0ZVRvQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xuXG4vLyB1bmZvcnR1bmF0ZWx5IHdlIGNhbm5vdCBpbmplY3QgYW4gSW50ZXJmYWNlXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblNlcnZpY2Uge1xuICBwdWJsaWMgZmFsbGJhY2tTaXRlOiBzdHJpbmcgPSAnbm90LWltcGxlbWVudGVkJztcbiAgcHVibGljIG5hdmlnYXRpb25IaXN0b3J5OiBNZW51SXRlbU5hbWVbXSA9IFtdO1xuICBwdWJsaWMgbmF2aWdhdGlvbkl0ZW1zOiBOYXZpZ2F0aW9uSXRlbVtdID0gbmF2aWdhdGlvbkl0ZW1zO1xuICBwdWJsaWMgbmF2aWdhdGVUb0FmdGVyTG9nb3V0Q2FsbGJhY2s6IE5hdmlnYXRlVG9DYWxsYmFjaztcbiAgcHVibGljIG5hdmlnYXRlVG9BZnRlclJlZ2lzdHJhdGlvbkNhbGxiYWNrOiBOYXZpZ2F0ZVRvQ2FsbGJhY2s7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgcHVibGljIGhpZGVBbmRyb2lkS2V5Ym9hcmRJZk9wZW4oKTogdm9pZCB7XG4gICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgY29uc3QgYWN0aXZpdHkgPSBhcHAuYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHk7XG4gICAgICBjb25zdCBjb250ZXh0ID0gYXBwLmFuZHJvaWQuY29udGV4dDtcbiAgICAgIGlmIChjb250ZXh0ICYmIGFjdGl2aXR5ICYmIGFjdGl2aXR5LmdldEN1cnJlbnRGb2N1cygpKSB7XG4gICAgICAgIGNvbnN0IGlucHV0TWFuYWdlciA9IGNvbnRleHQuZ2V0U3lzdGVtU2VydmljZShhbmRyb2lkLmNvbnRlbnQuQ29udGV4dC5JTlBVVF9NRVRIT0RfU0VSVklDRSk7XG4gICAgICAgIGlucHV0TWFuYWdlci5oaWRlU29mdElucHV0RnJvbVdpbmRvdyhhY3Rpdml0eS5nZXRDdXJyZW50Rm9jdXMoKS5nZXRXaW5kb3dUb2tlbigpLFxuICAgICAgICAgIGFuZHJvaWQudmlldy5pbnB1dG1ldGhvZC5JbnB1dE1ldGhvZE1hbmFnZXIuSElERV9OT1RfQUxXQVlTKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNDdXJyZW50TWVudVJvb3RJdGVtKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG1lbnVSb290SXRlbXMgPSBbXG4gICAgICBNZW51SXRlbU5hbWUuaG9tZVxuICAgIF07XG4gICAgcmV0dXJuIG1lbnVSb290SXRlbXMuZmluZCgocm9vdEl0ZW06IE1lbnVJdGVtTmFtZSkgPT4ge1xuICAgICAgY29uc3QgbmF2aWdhdGlvbkl0ZW06IE5hdmlnYXRpb25JdGVtID0gdGhpcy5nZXROYXZpZ2F0aW9uSXRlbShyb290SXRlbSk7XG4gICAgICByZXR1cm4gbmF2aWdhdGlvbkl0ZW0gJiYgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci51cmwgPT09ICcvJyArIG5hdmlnYXRpb25JdGVtLnBhdGg7XG4gICAgfSkgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBpc1RoZXJlQVJvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci51cmwgIT09ICgnLycgKyByb3V0ZSkgJiZcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIudXJsLmluZGV4T2Yocm91dGUpID4gLTE7XG4gIH1cblxuICBwdWJsaWMgbWVudU5hdmlnYXRpb24oZGVzdGluYXRpb246IE1lbnVJdGVtTmFtZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uSXRlbTogTmF2aWdhdGlvbkl0ZW0gPSB0aGlzLmdldE5hdmlnYXRpb25JdGVtKGRlc3RpbmF0aW9uKTtcbiAgICBpZiAoZGVzdGluYXRpb25JdGVtKSB7XG4gICAgICB0aGlzLmNsZWFySGlzdG9yeShkZXN0aW5hdGlvbik7XG4gICAgICBjb25zdCBkZXN0aW5hdGlvblBhdGggPSBbZGVzdGluYXRpb25JdGVtLnBhdGhdO1xuICAgICAgcmV0dXJuIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShkZXN0aW5hdGlvblBhdGgsIHtcbiAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICBhbmltYXRlZDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZUJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlQW5kcm9pZEtleWJvYXJkSWZPcGVuKCk7XG4gICAgdGhpcy5uYXZpZ2F0aW9uSGlzdG9yeS5wb3AoKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGUgYmFjayB0byB0aGUgZ2l2ZW4gbWVudWl0ZW0gaWYgaXQgaXMgYXZhaWxhYmxlIGluIHRoZSBuYXZpZ2F0aW9uIGhpc3RvcnlcbiAgICogVGhlIHRpbWVvdXQgaW4gdGhpcyBtZXRob2QgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugb25VbmxvYWRlZCBhbmQgb25OYXZpZ2F0ZWRGcm9tIGV2ZW50cyBzaG91bGRuJ3RcbiAgICogYmUgdHJpZ2dlcmVkIHNpbXVsdGFuZW91c2x5XG4gICAqL1xuICBwdWJsaWMgbmF2aWdhdGVCYWNrVG8oZGVzdGluYXRpb246IE1lbnVJdGVtTmFtZSk6IHZvaWQge1xuICAgIGNvbnN0IGRlcHRoID0gdGhpcy5uYXZpZ2F0aW9uSGlzdG9yeS5pbmRleE9mKGRlc3RpbmF0aW9uKTtcbiAgICBpZiAoZGVwdGggPCAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1RoZSBnaXZlbiBtZW51SXRlbSBpcyBub3QgcHJlc2VudCBvZiB0aGUgbmF2aWdhdGlvbiBoaXN0b3J5Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaGlkZUFuZHJvaWRLZXlib2FyZElmT3BlbigpO1xuICAgIHRoaXMubmF2aWdhdGlvbkhpc3Rvcnkuc3BsaWNlKGRlcHRoICsgMSk7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmZyYW1lU2VydmljZS5nZXRGcmFtZSgpLmJhY2tTdGFjay5tYXAoKGJhY2tzdGFja0VudHJ5LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPiBkZXB0aCAmJiBiYWNrc3RhY2tFbnRyeS5yZXNvbHZlZFBhZ2UpIHtcbiAgICAgICAgICBjb25zdCBwYWdlOiBhbnkgPSBiYWNrc3RhY2tFbnRyeS5yZXNvbHZlZFBhZ2U7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGFnZS5pc0xvYWRlZCkge1xuICAgICAgICAgICAgICBwYWdlLm9uVW5sb2FkZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZ2Uub25OYXZpZ2F0ZWRGcm9tKHRydWUpO1xuICAgICAgICAgIH0sIGluZGV4IC0gZGVwdGggKiAxMDApO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBkZXB0aCkge1xuICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5mcmFtZVNlcnZpY2UuZ2V0RnJhbWUoKS5nb0JhY2soYmFja3N0YWNrRW50cnkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5mcmFtZVNlcnZpY2UuZ2V0RnJhbWVcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge01lbnVJdGVtTmFtZX0gZGVzdGluYXRpb25cbiAgICogQHBhcmFtIGNvbW1hbmRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFuc2l0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgcHVibGljIG5hdmlnYXRlVG8oZGVzdGluYXRpb246IE1lbnVJdGVtTmFtZSwgY29tbWFuZHM/OiBhbnksIHRyYW5zaXRpb246IHN0cmluZyA9ICdzbGlkZUxlZnQnKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uSGlzdG9yeS5wdXNoKGRlc3RpbmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5kb05hdmlnYXRlVG8oZGVzdGluYXRpb24sIGNvbW1hbmRzLCBmYWxzZSwgdHJhbnNpdGlvbik7XG4gIH1cblxuICBwdWJsaWMgbmF2aWdhdGVUb0FuZENsZWFySGlzdG9yeShkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lLCBjb21tYW5kcz86IGFueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogc3RyaW5nID0gJ3NsaWRlTGVmdCcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICB0aGlzLmNsZWFySGlzdG9yeShkZXN0aW5hdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuZG9OYXZpZ2F0ZVRvKGRlc3RpbmF0aW9uLCBjb21tYW5kcywgdHJ1ZSwgdHJhbnNpdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGNsZWFySGlzdG9yeShtZW51SXRlbU5hbWU6IE1lbnVJdGVtTmFtZSk6IHZvaWQge1xuICAgIHRoaXMubmF2aWdhdGlvbkhpc3RvcnkgPSBbbWVudUl0ZW1OYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge01lbnVJdGVtTmFtZX0gZGVzdGluYXRpb25cbiAgICogQHBhcmFtIGNvbW1hbmRzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2xlYXJIaXN0b3J5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFuc2l0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgcHJpdmF0ZSBkb05hdmlnYXRlVG8oZGVzdGluYXRpb246IE1lbnVJdGVtTmFtZSwgZXh0cmFDb21tYW5kczogYW55LCBjbGVhckhpc3Rvcnk6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXG4gICAgY29uc3QgZGVzdGluYXRpb25JdGVtOiBOYXZpZ2F0aW9uSXRlbSA9IHRoaXMuZ2V0TmF2aWdhdGlvbkl0ZW0oZGVzdGluYXRpb24pO1xuICAgIHRoaXMuaGlkZUFuZHJvaWRLZXlib2FyZElmT3BlbigpO1xuICAgIGlmIChkZXN0aW5hdGlvbkl0ZW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbdGhpcy5mYWxsYmFja1NpdGVdLCB7Y2xlYXJIaXN0b3J5fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjb21tYW5kczogYW55W10gPSBbZGVzdGluYXRpb25JdGVtLnBhdGhdO1xuICAgICAgaWYgKGV4dHJhQ29tbWFuZHMpIHtcbiAgICAgICAgY29tbWFuZHMgPSBjb21tYW5kcy5jb25jYXQoZXh0cmFDb21tYW5kcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKGNvbW1hbmRzLCB7XG4gICAgICAgIGNsZWFySGlzdG9yeSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIG5hbWU6IHRyYW5zaXRpb25cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXROYXZpZ2F0aW9uSXRlbShtZW51SXRlbU5hbWU6IE1lbnVJdGVtTmFtZSk6IE5hdmlnYXRpb25JdGVtIHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uSXRlbXMuZmluZCgobmF2aWdhdGlvbkl0ZW06IE5hdmlnYXRpb25JdGVtKSA9PiBuYXZpZ2F0aW9uSXRlbS5uYW1lID09PSBtZW51SXRlbU5hbWUpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uSXRlbXM6IE5hdmlnYXRpb25JdGVtW10gPVxuICBbXG4gICAge1xuICAgICAgbmFtZTogTWVudUl0ZW1OYW1lLmhvbWUsXG4gICAgICBwYXRoOiAnaG9tZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE1lbnVJdGVtTmFtZS5zaW5nbGVwbGF5ZXIsXG4gICAgICBwYXRoOiBcInNpbmdsZXBsYXllclwiXG4gICAgfVxuICBdO1xuIl19