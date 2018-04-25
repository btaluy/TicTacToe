import {Injectable} from '@angular/core';
let sound = require('nativescript-sound');

@Injectable()
export class SinglePlayerService {

    private _clickSound: any = sound.create('~/assets/sound/click.mp3');

    public clickSound(): void {
        this._clickSound.reset();
        this._clickSound.play();
    }
}