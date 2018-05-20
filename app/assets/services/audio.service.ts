import { Injectable } from '@angular/core';
import { TNSPlayer } from 'nativescript-audio';
import { getBoolean, setBoolean } from "application-settings";

let sound = require("nativescript-sound");
let click: any = sound.create('~/tools/assets/click.mp3');

@Injectable()
export class AudioService {
  public isPlayingBackGround: boolean = getBoolean('isPlayingBackGround', true);
  public appIsInBackground: boolean = false;
  public backgroundSong: TNSPlayer = new TNSPlayer();

  public constructor() {
    /*if (this.isPlayingBackGround) {
      this.initBackGroundSong();
    }*/
  }

  public clickSound(): void {
    click.reset();
    click.play();
  }

  public initBackGroundSong(): void {
    this.backgroundSong = new TNSPlayer();

    this.backgroundSong.playFromFile({
      audioFile: '~/tools/assets/background.mp3',
      loop: true,
      completeCallback: this.playBackground.bind(this)
    });

    setBoolean('isPlayingBackGround', true);
    this.isPlayingBackGround = true;
  }

  public toggleBackground(): void {
    this.clickSound();
    if (this.backgroundSong.isAudioPlaying()) {
      this.resetBackGround();
    } else {
      this.initBackGroundSong();
    }
  }

  public isAppInBackground(): boolean {
    return this.appIsInBackground;
  }

  public playBackground(args?: any) {
    this.backgroundSong.play();
    setTimeout(() => {
      setBoolean('isPlayingBackGround', true);
      this.isPlayingBackGround = true;
    }, 10);
  }

  public pauseBackground(args?: any) {
    this.backgroundSong.pause();
    setBoolean('isPlayingBackGround', false);
    this.isPlayingBackGround = false;
  }

  private resetBackGround(): void {
    this.backgroundSong.pause();
    this.backgroundSong.seekTo(0);
    setBoolean('isPlayingBackGround', false);
    this.isPlayingBackGround = false;
  }
}