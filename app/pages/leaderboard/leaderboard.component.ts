import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import firebase = require("nativescript-plugin-firebase");

import { NavigationService, PopupService, AudioService, UserService } from "~/assets/services";
import { MenuItemName } from "~/assets/domain";

@Component({
    selector: "leaderboard",
    moduleId: module.id,
    templateUrl: "./leaderboard.component.html"
})
export class LeaderboardComponent implements OnInit {
  public selectedIndex: number;

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

    public test(): void {
      console.log(this.selectedIndex);
    }
}
