import {Injectable, OnInit} from '@angular/core';
import { TNSPlayer } from 'nativescript-audio';

let sound = require("nativescript-sound");

@Injectable()
export class AudioService implements OnInit {
  private _click: any ;
  private _backgroundSong: TNSPlayer;

  public ngOnInit(): void {
    this._click = sound.create('~/tools/assets/click.mp3');
  }

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