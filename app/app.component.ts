import { Component, ChangeDetectorRef, NgZone } from "@angular/core";
import * as firebase from 'nativescript-plugin-firebase';
import { isAndroid } from 'platform';
import * as application from 'application';
import * as frameModule from 'ui/frame';

import { User, MenuItem, MenuItemName } from "~/assets/domain";
import { LeaderBoardService } from "~/assets/services/leaderboard.service";
import { UserService } from "~/assets/services/user.service";
import { NavigationService, MultiPlayerService, PopupService } from "~/assets/services";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
  public constructor(
    public leaderBoard: LeaderBoardService,
    public userService: UserService,
    private mpService: MultiPlayerService,
    private navigationService: NavigationService,
    private popupService: PopupService,
    private cd: ChangeDetectorRef,
    private zone: NgZone
    ) { }

  ngOnInit(): void {
    this.initBackNavigation();
    
    let parent = this;

    firebase.init({
      // optional but useful to immediately re-logon the user when he re-visits your app
      onAuthStateChanged: function(data) {
        if (data && data.loggedIn) {
          parent.zone.run(() => {
            parent.userService.setUser(data.user)
              .then(() => {
                parent.leaderBoard.setNewSPScore();
                parent.leaderBoard.setNewMPScore();
                parent.cd.detectChanges();
              });
          });
        } else {
          parent.userService.user = undefined;
          parent.cd.detectChanges();
        }
      }
    }).then(
      instance => console.log("firebase.init done"),
      error => console.log(`firebase.init error: ${error}`)
    );
  }

  private initBackNavigation(): void {
    if (isAndroid) {
      const activity: any = application.android.startActivity ||
                            application.android.foregroundActivity ||
                            frameModule.topmost().android.currentActivity ||
                            frameModule.topmost().android.activity;
      activity.onBackPressed = (): void => {
        if (this.navigationService.isGameSessionOpen()) {
          this.popupService.confirm('Cancel game',
            'Are you sure you want to cancel the game?')
            .then((result: boolean) => {
              if (result) {
                this.mpService.session.isGameOver = true;
                this.mpService.updateSession()
                  .then(() => {
                    this.navigationService.navigateToAndClearHistory(MenuItemName.multiplayer, undefined, 'slideRight');
                  });
              }
            });
        } else {
          frameModule.topmost().goBack();
        }
      };
    }
  }
}
