import { Component, ChangeDetectorRef, NgZone } from "@angular/core";
import * as firebase from 'nativescript-plugin-firebase';

import { User } from "~/assets/domain";
import { LeaderBoardService } from "~/assets/services/leaderboard.service";
import { UserService } from "~/assets/services/user.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
  public constructor(
    public leaderBoard: LeaderBoardService,
    public userService: UserService,
    private cd: ChangeDetectorRef,
    private zone: NgZone
    ) { }

  ngOnInit(): void {
    let parent = this;

    firebase.init({
      // optional but useful to immediately re-logon the user when he re-visits your app
      onAuthStateChanged: function(data) {
        if (data && data.loggedIn) {
          parent.zone.run(() => {
            parent.userService.setUser(data.user)
              .then(() => {
                parent.leaderBoard.setNewSPScore();
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
}
