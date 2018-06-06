import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import * as firebase from 'nativescript-plugin-firebase';

import { NavigationService, PopupService, AudioService, UserService } from "~/assets/services";
import { MenuItemName } from "~/assets/domain";
import { LeaderBoardService } from "~/assets/services/leaderboard.service";

@Component({
    selector: "leaderboard",
    moduleId: module.id,
    templateUrl: "./leaderboard.component.html"
})
export class LeaderboardComponent implements OnInit {
  public selectedIndex: number;
  public isLoadingSPScore: boolean = false;

    constructor(
      public audioService: AudioService,
      public userService: UserService,
      public leaderBoard: LeaderBoardService,
      private _page: Page,
      private _navigationService: NavigationService,
      private _popupService: PopupService,
      private cd: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
      this._page.actionBarHidden = true;
      this.isLoadingSPScore = true;
      this.cd.detectChanges();

      this.leaderBoard.getSPScore()
        .then(() => {
          this.isLoadingSPScore = false;
          this.cd.detectChanges();
        });
    }
}
