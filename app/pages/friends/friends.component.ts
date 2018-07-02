import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import * as firebase from 'nativescript-plugin-firebase';

import { NavigationService, PopupService, AudioService, UserService, FriendsService } from "~/assets/services";


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
      private cd: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
      this._page.actionBarHidden = true;
      this.cd.detectChanges();

      this.friends.getUsers()
      .then(() => {
        this.cd.detectChanges();
      });

    }
}
