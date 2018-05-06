import { Component } from "@angular/core";

import { AudioService } from "~/assets/services/audio.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
  public constructor(private _audioService: AudioService) { }
}
