"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sound = require("nativescript-sound");
var click = sound.create('~/tools/assets/click.mp3');
var AudioService = /** @class */ (function () {
    function AudioService() {
    }
    AudioService.prototype.clickSound = function () {
        click.reset();
        click.play();
    };
    AudioService = __decorate([
        core_1.Injectable()
    ], AudioService);
    return AudioService;
}());
exports.AudioService = AudioService;
