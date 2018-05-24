import { Injectable } from '@angular/core';

let sound = require("nativescript-sound");
let click: any = sound.create('~/tools/assets/click.mp3');

@Injectable()
export class AudioService {
  public clickSound(): void {
    click.reset();
    click.play();
  }
}