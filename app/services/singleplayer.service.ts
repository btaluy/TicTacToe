import {Injectable} from '@angular/core';
let sound = require('nativescript-sound');

@Injectable()
export class SinglePlayerService {

    private _clickSound: any = sound.create('~/tools/assets/click.mp3');

    static checkWins(playerScore: number): boolean {
      const possibleWins = [7, 56, 448, 73, 146, 292, 273, 84];

      for (let i = 0; i < possibleWins.length; i++) {
        if ((possibleWins[i] & playerScore) === possibleWins[i]) {
          return true;
        }
      }
      return false;
    }

    clickSound(): void {
        this._clickSound.reset();
        this._clickSound.play();
    }
}