import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import firebase = require("nativescript-plugin-firebase");

import { NavigationService, PopupService, AudioService, UserService } from "~/assets/services";
import { MenuItemName } from "~/assets/domain";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./login.html"
})
export class LoginComponent implements OnInit {
    constructor(
      public audioService: AudioService,
      public userService: UserService,
      private _page: Page,
      private _navigationService: NavigationService,
      private _popupService: PopupService,
      private cd: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
      this._page.actionBarHidden = true;
      this.cd.detectChanges();
    }

    public login(): void {
      this._popupService.loading('Authenticating...');
      firebase.login({
        type: firebase.LoginType.GOOGLE
      }).then(result => {
          this._popupService.toast('Logged in...');
          this._navigationService.navigateToAndClearHistory(MenuItemName.home);
        },
        errorMessage => {
          console.log(errorMessage);
          this._popupService.toast('No internet connection...');
        }
      );
    }
}
