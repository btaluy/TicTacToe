import * as app from 'application';
import { Injectable } from '@angular/core';
import { isAndroid } from 'platform';
import { RouterExtensions } from 'nativescript-angular/router';
import { MenuItemName, NavigationItem } from '../domain/index';

type NavigateToCallback = () => void;

// unfortunately we cannot inject an Interface
@Injectable()
export class NavigationService {
  public fallbackSite: string = 'not-implemented';
  public navigationHistory: MenuItemName[] = [];
  public navigationItems: NavigationItem[] = navigationItems;
  public navigateToAfterLogoutCallback: NavigateToCallback;
  public navigateToAfterRegistrationCallback: NavigateToCallback;

  public constructor(private routerExtensions: RouterExtensions) { }

  public hideAndroidKeyboardIfOpen(): void {
    if (isAndroid) {
      const activity = app.android.foregroundActivity;
      const context = app.android.context;
      if (context && activity && activity.getCurrentFocus()) {
        const inputManager = context.getSystemService(android.content.Context.INPUT_METHOD_SERVICE);
        inputManager.hideSoftInputFromWindow(activity.getCurrentFocus().getWindowToken(),
          android.view.inputmethod.InputMethodManager.HIDE_NOT_ALWAYS);
      }
    }
  }

  public isCurrentMenuRootItem(): boolean {
    const menuRootItems = [
      MenuItemName.home
    ];
    return menuRootItems.find((rootItem: MenuItemName) => {
      const navigationItem: NavigationItem = this.getNavigationItem(rootItem);
      return navigationItem && this.routerExtensions.router.url === '/' + navigationItem.path;
    }) !== undefined;
  }

  public isThereARoute(route: string): boolean {
    return this.routerExtensions.router.url !== ('/' + route) &&
      this.routerExtensions.router.url.indexOf(route) > -1;
  }

  public menuNavigation(destination: MenuItemName): Promise<boolean> {
    const destinationItem: NavigationItem = this.getNavigationItem(destination);
    if (destinationItem) {
      this.clearHistory(destination);
      const destinationPath = [destinationItem.path];
      return this.routerExtensions.navigate(destinationPath, {
        clearHistory: true,
        animated: false
      });
    }
  }

  public navigateBack(): void {
    this.hideAndroidKeyboardIfOpen();
    this.navigationHistory.pop();
    this.routerExtensions.backToPreviousPage();
  }

  /**
   * Navigate back to the given menuitem if it is available in the navigation history
   * The timeout in this method is necessary because onUnloaded and onNavigatedFrom events shouldn't
   * be triggered simultaneously
   */
  public navigateBackTo(destination: MenuItemName): void {
    const depth = this.navigationHistory.indexOf(destination);
    if (depth < 0) {
      console.warn('The given menuItem is not present of the navigation history');
      return;
    }
    this.hideAndroidKeyboardIfOpen();
    this.navigationHistory.splice(depth + 1);
    this.routerExtensions.frameService.getFrame().backStack.map((backstackEntry, index) => {
        if (index > depth && backstackEntry.resolvedPage) {
          const page: any = backstackEntry.resolvedPage;
          setTimeout(() => {
            if (page.isLoaded) {
              page.onUnloaded();
            }
            page.onNavigatedFrom(true);
          }, index - depth * 100);
        } else if (index === depth) {
          this.routerExtensions.frameService.getFrame().goBack(backstackEntry);
        }
      });

    this.routerExtensions.frameService.getFrame
  }

  /**
   *
   * @param {MenuItemName} destination
   * @param commands
   * @param {string} transition
   * @returns {Promise<boolean>}
   */
  public navigateTo(destination: MenuItemName, commands?: any, transition: string = 'slideLeft'): Promise<boolean> {
    this.navigationHistory.push(destination);
    return this.doNavigateTo(destination, commands, false, transition);
  }

  public navigateToAndClearHistory(destination: MenuItemName, commands?: any,
                                   transition: string = 'slideLeft'): Promise<boolean> {
    this.clearHistory(destination);
    return this.doNavigateTo(destination, commands, true, transition);
  }

  private clearHistory(menuItemName: MenuItemName): void {
    this.navigationHistory = [menuItemName];
  }

  /**
   *
   * @param {MenuItemName} destination
   * @param commands
   * @param {boolean} clearHistory
   * @param {string} transition
   * @returns {Promise<boolean>}
   */
  private doNavigateTo(destination: MenuItemName, extraCommands: any, clearHistory: boolean,
                       transition: string): Promise<boolean> {

    const destinationItem: NavigationItem = this.getNavigationItem(destination);
    this.hideAndroidKeyboardIfOpen();
    if (destinationItem === undefined) {
      return this.routerExtensions.navigate([this.fallbackSite], {clearHistory});
    } else {
      let commands: any[] = [destinationItem.path];
      if (extraCommands) {
        commands = commands.concat(extraCommands);
      }
      return this.routerExtensions.navigate(commands, {
        clearHistory,
        transition: {
          name: transition
        }
      });
    }
  }

  private getNavigationItem(menuItemName: MenuItemName): NavigationItem {
    return this.navigationItems.find((navigationItem: NavigationItem) => navigationItem.name === menuItemName);
  }
}

export const navigationItems: NavigationItem[] =
  [
    {
      name: MenuItemName.home,
      path: 'home'
    },
    {
      name: MenuItemName.singleplayer,
      path: "singleplayer"
    },
    {
      name: MenuItemName.multiplayer,
      path: "multiplayer"
    },
    {
      name: MenuItemName.mpSession,
      path: 'multiplayer/mpSession'
    },
    {
      name: MenuItemName.login,
      path: "login"
    },
    {
      name: MenuItemName.leaderboard,
      path: "leaderboard"
    },
    {
      name: MenuItemName.friends,
      path: "friends"
    }
  ];
