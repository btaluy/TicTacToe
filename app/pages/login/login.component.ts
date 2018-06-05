import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import * as firebase from 'nativescript-plugin-firebase';

import { NavigationService, PopupService, AudioService, UserService } from "~/assets/services";
import { MenuItemName } from "~/assets/domain";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./login.html"
})
export class LoginComponent implements OnInit {
  public isLogginIn: boolean = false;

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
      if (!this.isLogginIn) {
        this.isLogginIn = true;
        firebase.login({
          type: firebase.LoginType.GOOGLE
        }).then(() => {
            this._navigationService.navigateToAndClearHistory(MenuItemName.home)
              .then(() => {
                this.isLogginIn = false;
              });
          },
          errorMessage => {
            console.log(errorMessage);
            this.isLogginIn = false;
          }
        );
      }
    }
}
