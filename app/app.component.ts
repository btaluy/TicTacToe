import { Component, ChangeDetectorRef } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

import { ApplicationLifecycle } from "~/assets/modules/application-lifecycle/application-lifecycle";
import { User } from "~/assets/domain";
import { AudioService, UserService } from "~/assets/services";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
  public constructor(
    public userService: UserService,
    private lifeCycle: ApplicationLifecycle,
    private cd: ChangeDetectorRef) {
    this.lifeCycle.initialise();
  }

  ngOnInit(): void {
    let parent = this;
    firebase.init({
      onAuthStateChanged: function(data) { // optional but useful to immediately re-logon the user when he re-visits your app
        console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        if (data.loggedIn) {
          parent.userService.user = User.fromObject(data.user);
        } else {
          parent.userService.user = undefined;
        }

        parent.cd.detectChanges();
      }
    }).then(
      instance => console.log("firebase.init done"),
      error => console.log(`firebase.init error: ${error}`)
    );
  }
}
