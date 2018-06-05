import { Component, Input } from "@angular/core";
import * as firebase from 'nativescript-plugin-firebase';

import { PopupService, UserService, NavigationService } from "~/assets/services";
import { MenuItemName } from "~/assets/domain";

@Component({
  selector: "user-interface",
  moduleId: module.id,
  templateUrl: "./user-interface.html"
})
export class UserInterfaceComponent {
  @Input() public row: number;
  @Input() public columns: number;
  @Input() public showLogout: boolean = false;

  public constructor(public userService: UserService,
                     private _navigationService: NavigationService,
                     private _popupService: PopupService) {
  }

  public logout(): void {
    this._popupService.loading('Signing out...');
    firebase.logout()
      .then(() => {
        this._navigationService.navigateToAndClearHistory(MenuItemName.login)
          .then(() => {
            this._popupService.hideLoading();
            this._popupService.toast('Signed out...');
          });
      });
  }
}
