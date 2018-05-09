import { Injectable } from '@angular/core';
import {
  on as applicationOn,
  suspendEvent,
  resumeEvent,
  ApplicationEventData
} from "application";

import { AudioService } from '~/assets/services';

@Injectable()
export class ApplicationLifecycle {
  public constructor(private audioService: AudioService) {}

  public initialise(): void {
    applicationOn(suspendEvent, (args: ApplicationEventData) => {
      if (args.android) {
        console.log('suspend: ' + this.audioService.isPlayingBackGround);
        if (!this.audioService.isAppInBackground() && this.audioService.backgroundSong.isAudioPlaying()) {
          this.audioService.pauseBackground();
          this.audioService.appIsInBackground = true;
        }
      }
    });
    
    applicationOn(resumeEvent, (args: ApplicationEventData) => {
        if (args.android) {
          console.log('resume: ' + this.audioService.isPlayingBackGround);
          if (this.audioService.isAppInBackground() && !this.audioService.backgroundSong.isAudioPlaying()) {
            setTimeout(() => {
              this.audioService.playBackground();
              this.audioService.appIsInBackground = false;
            }, 20);
          }
        }
    });
  }
}