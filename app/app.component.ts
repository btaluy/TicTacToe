import { Component, OnInit } from "@angular/core";

import { AudioService } from "~/assets/services/audio.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit { 
  public constructor(private _audioService: AudioService) { }

  ngOnInit() {
    this._audioService.initBackGroundSong();
  }
}
