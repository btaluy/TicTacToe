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
        this.navigationItems = exports.navigationItems;
    }
    NavigationService.prototype.hideAndroidKeyboardIfOpen = function () {
        if (platform_1.isAndroid) {
            var activity = app.android.foregroundActivity;
            var context = app.android.context;
            /*if (context && activity && activity.getCurrentFocus()) {
              const inputManager = context.getSystemService(android.content.Context.INPUT_METHOD_SERVICE);
              inputManager.hideSoftInputFromWindow(activity.getCurrentFocus().getWindowToken(),
                android.view.inputmethod.InputMethodManager.HIDE_NOT_ALWAYS);
            }*/
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
        var depth = this.navigationHistory.indexOf(destination);
        if (depth < 0) {
            console.warn('The given menuItem is not present of the navigation history');
            return;
        }
        this.hideAndroidKeyboardIfOpen();
        this.navigationHistory.splice(depth + 1);
        /*this.routerExtensions.frame.backStack.map((backstackEntry, index) => {
          if (index > depth && backstackEntry.resolvedPage) {
            const page: any = backstackEntry.resolvedPage;
            setTimeout(() => {
              if (page.isLoaded) {
                page.onUnloaded();
              }
              page.onNavigatedFrom(true);
            }, index - depth * 100);
          } else if (index === depth) {
            this.routerExtensions.frame.goBack(backstackEntry);
          }
        });*/
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
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBQ25DLHNDQUEyQztBQUMzQyxxQ0FBcUM7QUFDckMsc0RBQStEO0FBQy9ELHlDQUErRDtBQUkvRCw4Q0FBOEM7QUFFOUM7SUFPRSwyQkFBMkIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEQsaUJBQVksR0FBVyxpQkFBaUIsQ0FBQztRQUV6QyxvQkFBZSxHQUFxQix1QkFBZSxDQUFDO0lBSU0sQ0FBQztJQUUzRCxxREFBeUIsR0FBaEM7UUFDRSxFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFDaEQsSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDcEM7Ozs7ZUFJRztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRU0saURBQXFCLEdBQTVCO1FBQUEsaUJBUUM7UUFQQyxJQUFNLGFBQWEsR0FBRztZQUNwQixvQkFBWSxDQUFDLElBQUk7U0FDbEIsQ0FBQztRQUNGLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBc0I7WUFDL0MsSUFBTSxjQUFjLEdBQW1CLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RSxNQUFNLENBQUMsY0FBYyxJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDO1FBQzFGLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU0seUNBQWEsR0FBcEIsVUFBcUIsS0FBYTtRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFD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QkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBQyxZQUFZLGNBQUEsRUFBQyxDQUFDLENBQUM7UUFDN0UsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxRQUFRLEdBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtnQkFDOUMsWUFBWSxjQUFBO2dCQUNaLFVBQVUsRUFBRTtvQkFDVixJQUFJLEVBQUUsVUFBVTtpQkFDakI7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVPLDZDQUFpQixHQUF6QixVQUEwQixZQUEwQjtRQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBQyxjQUE4QixJQUFLLE9BQUEsY0FBYyxDQUFDLElBQUksS0FBSyxZQUFZLEVBQXBDLENBQW9DLENBQUMsQ0FBQztJQUM3RyxDQUFDO0lBdklVLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFO3lDQVFrQyx5QkFBZ0I7T0FQbEQsaUJBQWlCLENBd0k3QjtJQUFELHdCQUFDO0NBQUEsQUF4SUQsSUF3SUM7QUF4SVksOENBQWlCO0FBMElqQixRQUFBLGVBQWUsR0FDMUI7SUFDRTtRQUNFLElBQUksRUFBRSxvQkFBWSxDQUFDLElBQUk7UUFDdkIsSUFBSSxFQUFFLE1BQU07S0FDYjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3BsYXRmb3JtJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1lbnVJdGVtTmFtZSwgTmF2aWdhdGlvbkl0ZW0gfSBmcm9tICcuLi9kb21haW4vaW5kZXgnO1xyXG5cclxudHlwZSBOYXZpZ2F0ZVRvQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xyXG5cclxuLy8gdW5mb3J0dW5hdGVseSB3ZSBjYW5ub3QgaW5qZWN0IGFuIEludGVyZmFjZVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XHJcbiAgcHVibGljIGZhbGxiYWNrU2l0ZTogc3RyaW5nID0gJ25vdC1pbXBsZW1lbnRlZCc7XHJcbiAgcHVibGljIG5hdmlnYXRpb25IaXN0b3J5OiBNZW51SXRlbU5hbWVbXTtcclxuICBwdWJsaWMgbmF2aWdhdGlvbkl0ZW1zOiBOYXZpZ2F0aW9uSXRlbVtdID0gbmF2aWdhdGlvbkl0ZW1zO1xyXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvQWZ0ZXJMb2dvdXRDYWxsYmFjazogTmF2aWdhdGVUb0NhbGxiYWNrO1xyXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvQWZ0ZXJSZWdpc3RyYXRpb25DYWxsYmFjazogTmF2aWdhdGVUb0NhbGxiYWNrO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgcHVibGljIGhpZGVBbmRyb2lkS2V5Ym9hcmRJZk9wZW4oKTogdm9pZCB7XHJcbiAgICBpZiAoaXNBbmRyb2lkKSB7XHJcbiAgICAgIGNvbnN0IGFjdGl2aXR5ID0gYXBwLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5O1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gYXBwLmFuZHJvaWQuY29udGV4dDtcclxuICAgICAgLyppZiAoY29udGV4dCAmJiBhY3Rpdml0eSAmJiBhY3Rpdml0eS5nZXRDdXJyZW50Rm9jdXMoKSkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0TWFuYWdlciA9IGNvbnRleHQuZ2V0U3lzdGVtU2VydmljZShhbmRyb2lkLmNvbnRlbnQuQ29udGV4dC5JTlBVVF9NRVRIT0RfU0VSVklDRSk7XHJcbiAgICAgICAgaW5wdXRNYW5hZ2VyLmhpZGVTb2Z0SW5wdXRGcm9tV2luZG93KGFjdGl2aXR5LmdldEN1cnJlbnRGb2N1cygpLmdldFdpbmRvd1Rva2VuKCksXHJcbiAgICAgICAgICBhbmRyb2lkLnZpZXcuaW5wdXRtZXRob2QuSW5wdXRNZXRob2RNYW5hZ2VyLkhJREVfTk9UX0FMV0FZUyk7XHJcbiAgICAgIH0qL1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQ3VycmVudE1lbnVSb290SXRlbSgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IG1lbnVSb290SXRlbXMgPSBbXHJcbiAgICAgIE1lbnVJdGVtTmFtZS5ob21lXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG1lbnVSb290SXRlbXMuZmluZCgocm9vdEl0ZW06IE1lbnVJdGVtTmFtZSkgPT4ge1xyXG4gICAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbTogTmF2aWdhdGlvbkl0ZW0gPSB0aGlzLmdldE5hdmlnYXRpb25JdGVtKHJvb3RJdGVtKTtcclxuICAgICAgcmV0dXJuIG5hdmlnYXRpb25JdGVtICYmIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIudXJsID09PSAnLycgKyBuYXZpZ2F0aW9uSXRlbS5wYXRoO1xyXG4gICAgfSkgIT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1RoZXJlQVJvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnVybCAhPT0gKCcvJyArIHJvdXRlKSAmJlxyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnVybC5pbmRleE9mKHJvdXRlKSA+IC0xO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1lbnVOYXZpZ2F0aW9uKGRlc3RpbmF0aW9uOiBNZW51SXRlbU5hbWUpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uSXRlbTogTmF2aWdhdGlvbkl0ZW0gPSB0aGlzLmdldE5hdmlnYXRpb25JdGVtKGRlc3RpbmF0aW9uKTtcclxuICAgIGlmIChkZXN0aW5hdGlvbkl0ZW0pIHtcclxuICAgICAgdGhpcy5jbGVhckhpc3RvcnkoZGVzdGluYXRpb24pO1xyXG4gICAgICBjb25zdCBkZXN0aW5hdGlvblBhdGggPSBbZGVzdGluYXRpb25JdGVtLnBhdGhdO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKGRlc3RpbmF0aW9uUGF0aCwge1xyXG4gICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcclxuICAgICAgICBhbmltYXRlZDogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmF2aWdhdGVCYWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5oaWRlQW5kcm9pZEtleWJvYXJkSWZPcGVuKCk7XHJcbiAgICB0aGlzLm5hdmlnYXRpb25IaXN0b3J5LnBvcCgpO1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTmF2aWdhdGUgYmFjayB0byB0aGUgZ2l2ZW4gbWVudWl0ZW0gaWYgaXQgaXMgYXZhaWxhYmxlIGluIHRoZSBuYXZpZ2F0aW9uIGhpc3RvcnlcclxuICAgKiBUaGUgdGltZW91dCBpbiB0aGlzIG1ldGhvZCBpcyBuZWNlc3NhcnkgYmVjYXVzZSBvblVubG9hZGVkIGFuZCBvbk5hdmlnYXRlZEZyb20gZXZlbnRzIHNob3VsZG4ndFxyXG4gICAqIGJlIHRyaWdnZXJlZCBzaW11bHRhbmVvdXNseVxyXG4gICAqL1xyXG4gIHB1YmxpYyBuYXZpZ2F0ZUJhY2tUbyhkZXN0aW5hdGlvbjogTWVudUl0ZW1OYW1lKTogdm9pZCB7XHJcbiAgICBjb25zdCBkZXB0aCA9IHRoaXMubmF2aWdhdGlvbkhpc3RvcnkuaW5kZXhPZihkZXN0aW5hdGlvbik7XHJcbiAgICBpZiAoZGVwdGggPCAwKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignVGhlIGdpdmVuIG1lbnVJdGVtIGlzIG5vdCBwcmVzZW50IG9mIHRoZSBuYXZpZ2F0aW9uIGhpc3RvcnknKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oaWRlQW5kcm9pZEtleWJvYXJkSWZPcGVuKCk7XHJcbiAgICB0aGlzLm5hdmlnYXRpb25IaXN0b3J5LnNwbGljZShkZXB0aCArIDEpO1xyXG4gICAgLyp0aGlzLnJvdXRlckV4dGVuc2lvbnMuZnJhbWUuYmFja1N0YWNrLm1hcCgoYmFja3N0YWNrRW50cnksIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCA+IGRlcHRoICYmIGJhY2tzdGFja0VudHJ5LnJlc29sdmVkUGFnZSkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2U6IGFueSA9IGJhY2tzdGFja0VudHJ5LnJlc29sdmVkUGFnZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmIChwYWdlLmlzTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHBhZ2Uub25VbmxvYWRlZCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcGFnZS5vbk5hdmlnYXRlZEZyb20odHJ1ZSk7XHJcbiAgICAgICAgfSwgaW5kZXggLSBkZXB0aCAqIDEwMCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGRlcHRoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmZyYW1lLmdvQmFjayhiYWNrc3RhY2tFbnRyeSk7XHJcbiAgICAgIH1cclxuICAgIH0pOyovXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TWVudUl0ZW1OYW1lfSBkZXN0aW5hdGlvblxyXG4gICAqIEBwYXJhbSBjb21tYW5kc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFuc2l0aW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgcHVibGljIG5hdmlnYXRlVG8oZGVzdGluYXRpb246IE1lbnVJdGVtTmFtZSwgY29tbWFuZHM/OiBhbnksIHRyYW5zaXRpb246IHN0cmluZyA9ICdzbGlkZUxlZnQnKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICB0aGlzLm5hdmlnYXRpb25IaXN0b3J5LnB1c2goZGVzdGluYXRpb24pO1xyXG4gICAgcmV0dXJuIHRoaXMuZG9OYXZpZ2F0ZVRvKGRlc3RpbmF0aW9uLCBjb21tYW5kcywgZmFsc2UsIHRyYW5zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5hdmlnYXRlVG9BbmRDbGVhckhpc3RvcnkoZGVzdGluYXRpb246IE1lbnVJdGVtTmFtZSwgY29tbWFuZHM/OiBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogc3RyaW5nID0gJ3NsaWRlTGVmdCcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHRoaXMuY2xlYXJIaXN0b3J5KGRlc3RpbmF0aW9uKTtcclxuICAgIHJldHVybiB0aGlzLmRvTmF2aWdhdGVUbyhkZXN0aW5hdGlvbiwgY29tbWFuZHMsIHRydWUsIHRyYW5zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckhpc3RvcnkobWVudUl0ZW1OYW1lOiBNZW51SXRlbU5hbWUpOiB2b2lkIHtcclxuICAgIHRoaXMubmF2aWdhdGlvbkhpc3RvcnkgPSBbbWVudUl0ZW1OYW1lXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtNZW51SXRlbU5hbWV9IGRlc3RpbmF0aW9uXHJcbiAgICogQHBhcmFtIGNvbW1hbmRzXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBjbGVhckhpc3RvcnlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhbnNpdGlvblxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZG9OYXZpZ2F0ZVRvKGRlc3RpbmF0aW9uOiBNZW51SXRlbU5hbWUsIGV4dHJhQ29tbWFuZHM6IGFueSwgY2xlYXJIaXN0b3J5OiBib29sZWFuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG5cclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uSXRlbTogTmF2aWdhdGlvbkl0ZW0gPSB0aGlzLmdldE5hdmlnYXRpb25JdGVtKGRlc3RpbmF0aW9uKTtcclxuICAgIHRoaXMuaGlkZUFuZHJvaWRLZXlib2FyZElmT3BlbigpO1xyXG4gICAgaWYgKGRlc3RpbmF0aW9uSXRlbSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3RoaXMuZmFsbGJhY2tTaXRlXSwge2NsZWFySGlzdG9yeX0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGNvbW1hbmRzOiBhbnlbXSA9IFtkZXN0aW5hdGlvbkl0ZW0ucGF0aF07XHJcbiAgICAgIGlmIChleHRyYUNvbW1hbmRzKSB7XHJcbiAgICAgICAgY29tbWFuZHMgPSBjb21tYW5kcy5jb25jYXQoZXh0cmFDb21tYW5kcyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShjb21tYW5kcywge1xyXG4gICAgICAgIGNsZWFySGlzdG9yeSxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICBuYW1lOiB0cmFuc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TmF2aWdhdGlvbkl0ZW0obWVudUl0ZW1OYW1lOiBNZW51SXRlbU5hbWUpOiBOYXZpZ2F0aW9uSXRlbSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uSXRlbXMuZmluZCgobmF2aWdhdGlvbkl0ZW06IE5hdmlnYXRpb25JdGVtKSA9PiBuYXZpZ2F0aW9uSXRlbS5uYW1lID09PSBtZW51SXRlbU5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb25JdGVtczogTmF2aWdhdGlvbkl0ZW1bXSA9XHJcbiAgW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBNZW51SXRlbU5hbWUuaG9tZSxcclxuICAgICAgcGF0aDogJ2hvbWUnXHJcbiAgICB9XHJcbiAgXTtcclxuIl19