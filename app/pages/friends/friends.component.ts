import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import * as firebase from 'nativescript-plugin-firebase';

import { NavigationService, PopupService, AudioService, UserService, FriendsService } from "~/assets/services";
import { MenuItemName } from "~/assets/domain";
import { LeaderBoardService } from "~/assets/services/leaderboard.service";

@Component({
    selector: "friends",
    moduleId: module.id,
    templateUrl: "./friends.component.html"
})
export class FriendsComponent implements OnInit {
  public selectedIndex: number;
  public isLoadingSPScore: boolean = false;

    constructor(
      public audioService: AudioService,
      public userService: UserService,
      public friends: FriendsService,
      private _page: Page,
      private _navigationService: NavigationService,
      private _popupService: PopupService,
      private cd: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
      this._page.actionBarHidden = true;
      this.isLoadingSPScore = true;
      this.cd.detectChanges();

    }
}
