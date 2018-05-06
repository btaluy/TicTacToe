import { Injectable } from '@angular/core';
import { TNSPlayer } from 'nativescript-audio';
import { getBoolean, setBoolean } from "application-settings";

let sound = require("nativescript-sound");
let click: any = sound.create('~/tools/assets/click.mp3');

@Injectable()
export class AudioService {
  public isPlayingBackGround: boolean = getBoolean('isPlayingBackGround', false);
  private _backgroundSong: TNSPlayer = new TNSPlayer();

  public constructor() {
    console.log(this.isPlayingBackGround);
    if (this.isPlayingBackGround) {
      this.initBackGroundSong();
    }
  }

  public clickSound(): void {
    click.reset();
    click.play();
  }

  public initBackGroundSong(): void {
    this._backgroundSong = new TNSPlayer();

    this._backgroundSong.playFromFile({
      audioFile: '~/tools/assets/background.mp3',
      loop: true,
      completeCallback: this.playBackground.bind(this)
    });

    setBoolean('isPlayingBackGround', true);
  }

  public toggleBackground(): void {
    if (this._backgroundSong.isAudioPlaying()) {
      this.resetBackGround();
    } else {
      this.initBackGroundSong();
    }
  }

  public playBackground(args?: any) {
    this._backgroundSong.play();
    setBoolean('isPlayingBackGround', true);
  }

  private pauseBackground(args?: any) {
    this._backgroundSong.pause();
    setBoolean('isPlayingBackGround', false);
  }

  private resetBackGround(): void {
    this._backgroundSong.pause();
    this._backgroundSong.seekTo(0);
    setBoolean('isPlayingBackGround', false);
  }
}