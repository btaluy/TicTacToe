import { Component, ChangeDetectorRef } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

import { User } from "~/assets/domain";
import { LeaderBoardService } from "~/assets/services/leaderboard.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
  public constructor(
    public leaderBoard: LeaderBoardService,
    private cd: ChangeDetectorRef,
    ) { }

  ngOnInit(): void {
    let parent = this;

    firebase.init({
      // optional but useful to immediately re-logon the user when he re-visits your app
      onAuthStateChanged: function(data) {
        if (data && data.loggedIn) {
          parent.leaderBoard.setUser(data.user)
            .then(() => {
              parent.leaderBoard.setNewSPScore();
              parent.cd.detectChanges();
            });
        } else {
          parent.leaderBoard.user = undefined;
          parent.cd.detectChanges();
        }
      }
    }).then(
      instance => console.log("firebase.init done"),
      error => console.log(`firebase.init error: ${error}`)
    );
  }
}
