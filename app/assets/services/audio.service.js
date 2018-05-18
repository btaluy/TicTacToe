"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_audio_1 = require("nativescript-audio");
var application_settings_1 = require("application-settings");
var sound = require("nativescript-sound");
var click = sound.create('~/tools/assets/click.mp3');
var AudioService = /** @class */ (function () {
    function AudioService() {
        this.isPlayingBackGround = application_settings_1.getBoolean('isPlayingBackGround', true);
        this.appIsInBackground = false;
        this.backgroundSong = new nativescript_audio_1.TNSPlayer();
        if (this.isPlayingBackGround) {
            this.initBackGroundSong();
        }
    }
    AudioService.prototype.clickSound = function () {
        click.reset();
        click.play();
    };
    AudioService.prototype.initBackGroundSong = function () {
        this.backgroundSong = new nativescript_audio_1.TNSPlayer();
        this.backgroundSong.playFromFile({
            audioFile: '~/tools/assets/background.mp3',
            loop: true,
            completeCallback: this.playBackground.bind(this)
        });
        application_settings_1.setBoolean('isPlayingBackGround', true);
        this.isPlayingBackGround = true;
    };
    AudioService.prototype.toggleBackground = function () {
        this.clickSound();
        if (this.backgroundSong.isAudioPlaying()) {
            this.resetBackGround();
        }
        else {
            this.initBackGroundSong();
        }
    };
    AudioService.prototype.isAppInBackground = function () {
        return this.appIsInBackground;
    };
    AudioService.prototype.playBackground = function (args) {
        var _this = this;
        this.backgroundSong.play();
        setTimeout(function () {
            application_settings_1.setBoolean('isPlayingBackGround', true);
            _this.isPlayingBackGround = true;
        }, 10);
    };
    AudioService.prototype.pauseBackground = function (args) {
        this.backgroundSong.pause();
        application_settings_1.setBoolean('isPlayingBackGround', false);
        this.isPlayingBackGround = false;
    };
    AudioService.prototype.resetBackGround = function () {
        this.backgroundSong.pause();
        this.backgroundSong.seekTo(0);
        application_settings_1.setBoolean('isPlayingBackGround', false);
        this.isPlayingBackGround = false;
    };
    AudioService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AudioService);
    return AudioService;
}());
exports.AudioService = AudioService;
