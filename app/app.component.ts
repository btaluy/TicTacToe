import { Component } from "@angular/core";

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
}
