import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import firebase = require("nativescript-plugin-firebase");

import { NavigationService, PopupService, AudioService, UserService } from "~/assets/services";
import { MenuItemName } from "~/assets/domain";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
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

    public goToSP(): void {
      this.audioService.clickSound();
      this._navigationService.navigateTo(MenuItemName.singleplayer);
    }

    public goToMP(): void {
      this.audioService.clickSound();
      //this._popupService.toast('Mutliplayer will be added soon');
      this.login();
    }

    public goToLB(): void {
      this._popupService.toast('Leaderboards coming soon...');
      console.log(JSON.stringify(this.userService.user));
    }

    public toggleMusic(): void {
      this.audioService.toggleBackground();
    }

    private login(): void {
      this._popupService.loading('Authenticating...');
      firebase.login({
        type: firebase.LoginType.GOOGLE
      }).then(result => {
          this._popupService.toast('Logged in...');
        },
        errorMessage => {
          console.log(errorMessage);
          this._popupService.toast('No internet connection...');
        }
      );
    }
}
