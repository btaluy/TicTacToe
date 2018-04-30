import {Injectable} from '@angular/core';
const sound = require('nativescript-sound');

@Injectable()
export class SinglePlayerService {
  public sessionGameWon: boolean = false;
  public click: any = sound.create('~/assets/sound/click.mp3');

  public clickSound(): void {
    this.click.reset();
    this.click.play();
  }
}