import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import firebase = require("nativescript-plugin-firebase");

import { NavigationService, PopupService, AudioService, UserService } from "~/assets/services";
import { MenuItemName } from "~/assets/domain";

@Component({
    selector: "Results",
    moduleId: module.id,
    templateUrl: "./results.component.html"
})
export class ResultsComponent implements OnInit {
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

    public goToLB(): void {
      this._popupService.toast('Leaderboards coming soon...');
      console.log(JSON.stringify(this.userService.user));
    }
}
