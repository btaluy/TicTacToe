import { Component } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

import { AudioService } from "~/assets/services/audio.service";
import { ApplicationLifecycle } from "~/assets/modules/application-lifecycle/application-lifecycle";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
  public constructor(private lifeCycle: ApplicationLifecycle) {
    this.lifeCycle.initialise();
  }

  ngOnInit(): void {
    firebase.init({
      onAuthStateChanged: function(data) { // optional but useful to immediately re-logon the user when he re-visits your app
        console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        if (data.loggedIn) {
          console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
          console.log(JSON.stringify(data));
        }
      }
    }).then(
      instance => console.log("firebase.init done"),
      error => console.log(`firebase.init error: ${error}`)
    );
  }
}
