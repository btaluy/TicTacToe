import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { NavigationService, PopupService, AudioService } from "~/assets/services";
import { MenuItemName } from "~/assets/domain";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    constructor(
      public audioService: AudioService,
      private _page: Page,
      private _navigationService: NavigationService,
      private _popupService: PopupService
    ) { }

    ngOnInit(): void {
        // Init your component properties here.
        this._page.actionBarHidden = true;
    }

    public goToSP(): void {
      this.audioService.clickSound();
      this._navigationService.navigateTo(MenuItemName.singleplayer);
    }

    public goToMP(): void {
      this.audioService.clickSound();
      this._popupService.toast('Mutliplayer will be added soon');
    }

    public toggleMusic(): void {
      this.audioService.toggleBackground();
    }
}
