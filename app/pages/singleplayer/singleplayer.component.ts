import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { NavigationService, PopupService } from "~/services";
import { MenuItemName } from "~/domain";

@Component({
    selector: "Singleplayer",
    moduleId: module.id,
    templateUrl: "./singleplayer.component.html"
})
export class SinglePlayerComponent implements OnInit {
    constructor(
      private _page: Page,
      private _navigationService: NavigationService,
      private _popupService: PopupService
    ) { }

    ngOnInit(): void {
        // Init your component properties here.
        this._page.actionBarHidden = true;
    }
}
