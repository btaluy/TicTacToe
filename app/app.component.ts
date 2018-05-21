import { Component, ChangeDetectorRef } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

import { User } from "~/assets/domain";
import { AudioService, UserService } from "~/assets/services";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
  public constructor(
    public userService: UserService,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    let parent = this;

    firebase.init({
      // optional but useful to immediately re-logon the user when he re-visits your app
      onAuthStateChanged: function(data) {
        if (data && data.loggedIn) {
          parent.userService.setUser(data.user)
            .then(() => parent.cd.detectChanges());
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
