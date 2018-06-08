import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import * as firebase from 'nativescript-plugin-firebase';

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
      this._navigationService.navigateTo(MenuItemName.multiplayer);
    }

    public goToLB(): void {
      this.audioService.clickSound();
      this._navigationService.navigateTo(MenuItemName.leaderboard);
    }
}
