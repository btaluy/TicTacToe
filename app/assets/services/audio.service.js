"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_audio_1 = require("nativescript-audio");
var application_settings_1 = require("application-settings");
var sound = require("nativescript-sound");
var click = sound.create('~/tools/assets/click.mp3');
var AudioService = /** @class */ (function () {
    function AudioService() {
        this.isPlayingBackGround = application_settings_1.getBoolean('isPlayingBackGround', false);
        this._backgroundSong = new nativescript_audio_1.TNSPlayer();
        console.log(this.isPlayingBackGround);
        if (this.isPlayingBackGround) {
            this.initBackGroundSong();
        }
    }
    AudioService.prototype.clickSound = function () {
        click.reset();
        click.play();
    };
    AudioService.prototype.initBackGroundSong = function () {
        this._backgroundSong = new nativescript_audio_1.TNSPlayer();
        this._backgroundSong.playFromFile({
            audioFile: '~/tools/assets/background.mp3',
            loop: true,
            completeCallback: this.playBackground.bind(this)
        });
        application_settings_1.setBoolean('isPlayingBackGround', true);
        this.isPlayingBackGround = true;
    };
    AudioService.prototype.toggleBackground = function () {
        this.clickSound();
        if (this._backgroundSong.isAudioPlaying()) {
            this.resetBackGround();
        }
        else {
            this.initBackGroundSong();
        }
    };
    AudioService.prototype.playBackground = function (args) {
        this._backgroundSong.play();
        application_settings_1.setBoolean('isPlayingBackGround', true);
        this.isPlayingBackGround = true;
    };
    AudioService.prototype.pauseBackground = function (args) {
        this._backgroundSong.pause();
        application_settings_1.setBoolean('isPlayingBackGround', false);
        this.isPlayingBackGround = false;
    };
    AudioService.prototype.resetBackGround = function () {
        this._backgroundSong.pause();
        this._backgroundSong.seekTo(0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1ZGlvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MseURBQStDO0FBQy9DLDZEQUE4RDtBQUU5RCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyxJQUFJLEtBQUssR0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFHMUQ7SUFJRTtRQUhPLHdCQUFtQixHQUFZLGlDQUFVLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkUsb0JBQWUsR0FBYyxJQUFJLDhCQUFTLEVBQUUsQ0FBQztRQUduRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFTSxpQ0FBVSxHQUFqQjtRQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFTSx5Q0FBa0IsR0FBekI7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksOEJBQVMsRUFBRSxDQUFDO1FBRXZDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDO1lBQ2hDLFNBQVMsRUFBRSwrQkFBK0I7WUFDMUMsSUFBSSxFQUFFLElBQUk7WUFDVixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDakQsQ0FBQyxDQUFDO1FBRUgsaUNBQVUsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFTSx1Q0FBZ0IsR0FBdkI7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRU0scUNBQWMsR0FBckIsVUFBc0IsSUFBVTtRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLGlDQUFVLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRU8sc0NBQWUsR0FBdkIsVUFBd0IsSUFBVTtRQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLGlDQUFVLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBRU8sc0NBQWUsR0FBdkI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLGlDQUFVLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBdkRVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTs7T0FDQSxZQUFZLENBd0R4QjtJQUFELG1CQUFDO0NBQUEsQUF4REQsSUF3REM7QUF4RFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFROU1BsYXllciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hdWRpbyc7XHJcbmltcG9ydCB7IGdldEJvb2xlYW4sIHNldEJvb2xlYW4gfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbmxldCBzb3VuZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc291bmRcIik7XHJcbmxldCBjbGljazogYW55ID0gc291bmQuY3JlYXRlKCd+L3Rvb2xzL2Fzc2V0cy9jbGljay5tcDMnKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1ZGlvU2VydmljZSB7XHJcbiAgcHVibGljIGlzUGxheWluZ0JhY2tHcm91bmQ6IGJvb2xlYW4gPSBnZXRCb29sZWFuKCdpc1BsYXlpbmdCYWNrR3JvdW5kJywgZmFsc2UpO1xyXG4gIHByaXZhdGUgX2JhY2tncm91bmRTb25nOiBUTlNQbGF5ZXIgPSBuZXcgVE5TUGxheWVyKCk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaXNQbGF5aW5nQmFja0dyb3VuZCk7XHJcbiAgICBpZiAodGhpcy5pc1BsYXlpbmdCYWNrR3JvdW5kKSB7XHJcbiAgICAgIHRoaXMuaW5pdEJhY2tHcm91bmRTb25nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xpY2tTb3VuZCgpOiB2b2lkIHtcclxuICAgIGNsaWNrLnJlc2V0KCk7XHJcbiAgICBjbGljay5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdEJhY2tHcm91bmRTb25nKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYmFja2dyb3VuZFNvbmcgPSBuZXcgVE5TUGxheWVyKCk7XHJcblxyXG4gICAgdGhpcy5fYmFja2dyb3VuZFNvbmcucGxheUZyb21GaWxlKHtcclxuICAgICAgYXVkaW9GaWxlOiAnfi90b29scy9hc3NldHMvYmFja2dyb3VuZC5tcDMnLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBjb21wbGV0ZUNhbGxiYWNrOiB0aGlzLnBsYXlCYWNrZ3JvdW5kLmJpbmQodGhpcylcclxuICAgIH0pO1xyXG5cclxuICAgIHNldEJvb2xlYW4oJ2lzUGxheWluZ0JhY2tHcm91bmQnLCB0cnVlKTtcclxuICAgIHRoaXMuaXNQbGF5aW5nQmFja0dyb3VuZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlQmFja2dyb3VuZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tTb3VuZCgpO1xyXG4gICAgaWYgKHRoaXMuX2JhY2tncm91bmRTb25nLmlzQXVkaW9QbGF5aW5nKCkpIHtcclxuICAgICAgdGhpcy5yZXNldEJhY2tHcm91bmQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5pdEJhY2tHcm91bmRTb25nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGxheUJhY2tncm91bmQoYXJncz86IGFueSkge1xyXG4gICAgdGhpcy5fYmFja2dyb3VuZFNvbmcucGxheSgpO1xyXG4gICAgc2V0Qm9vbGVhbignaXNQbGF5aW5nQmFja0dyb3VuZCcsIHRydWUpO1xyXG4gICAgdGhpcy5pc1BsYXlpbmdCYWNrR3JvdW5kID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGF1c2VCYWNrZ3JvdW5kKGFyZ3M/OiBhbnkpIHtcclxuICAgIHRoaXMuX2JhY2tncm91bmRTb25nLnBhdXNlKCk7XHJcbiAgICBzZXRCb29sZWFuKCdpc1BsYXlpbmdCYWNrR3JvdW5kJywgZmFsc2UpO1xyXG4gICAgdGhpcy5pc1BsYXlpbmdCYWNrR3JvdW5kID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0QmFja0dyb3VuZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2JhY2tncm91bmRTb25nLnBhdXNlKCk7XHJcbiAgICB0aGlzLl9iYWNrZ3JvdW5kU29uZy5zZWVrVG8oMCk7XHJcbiAgICBzZXRCb29sZWFuKCdpc1BsYXlpbmdCYWNrR3JvdW5kJywgZmFsc2UpO1xyXG4gICAgdGhpcy5pc1BsYXlpbmdCYWNrR3JvdW5kID0gZmFsc2U7XHJcbiAgfVxyXG59Il19