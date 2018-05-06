import {Injectable} from '@angular/core';
import { TNSPlayer } from 'nativescript-audio';

const sound = require("nativescript-sound");

@Injectable()
export class AudioService {
  private _click: any = sound.create('~/assets/sound/click.mp3');
  private _backgroundSong: TNSPlayer;

  public clickSound(): void {
    this._click.pause();
    this._click.seekTo(0);
    this._click.play();
  }

  public initBackGroundSong(): void {
    this._backgroundSong = new TNSPlayer();

    this._backgroundSong.playFromFile({
      audioFile: '~/tools/assets/background.mp3',
      loop: true
    });
  }
}