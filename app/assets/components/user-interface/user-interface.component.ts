import { Component, Input } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

import { PopupService, UserService } from "~/assets/services";

@Component({
  selector: "user-interface",
  moduleId: module.id,
  templateUrl: "./user-interface.html"
})
export class UserInterfaceComponent {
  @Input() public row: number;
  @Input() public columns: number;

  public constructor(public userService: UserService, private _popupService: PopupService) {}

  public logout(): void {
    this._popupService.loading('Signing out...');
    firebase.logout()
      .then(() => {
        this._popupService.hideLoading();
        this._popupService.toast('Signed out...');
      });
  }
}
