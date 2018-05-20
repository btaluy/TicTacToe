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
        /*if (this.isPlayingBackGround) {
          this.initBackGroundSong();
        }*/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1ZGlvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MseURBQStDO0FBQy9DLDZEQUE4RDtBQUU5RCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyxJQUFJLEtBQUssR0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFHMUQ7SUFLRTtRQUpPLHdCQUFtQixHQUFZLGlDQUFVLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLG1CQUFjLEdBQWMsSUFBSSw4QkFBUyxFQUFFLENBQUM7UUFHakQ7O1dBRUc7SUFDTCxDQUFDO0lBRU0saUNBQVUsR0FBakI7UUFDRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZixDQUFDO0lBRU0seUNBQWtCLEdBQXpCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLDhCQUFTLEVBQUUsQ0FBQztRQUV0QyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztZQUMvQixTQUFTLEVBQUUsK0JBQStCO1lBQzFDLElBQUksRUFBRSxJQUFJO1lBQ1YsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2pELENBQUMsQ0FBQztRQUVILGlDQUFVLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRU0sdUNBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVNLHdDQUFpQixHQUF4QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUVNLHFDQUFjLEdBQXJCLFVBQXNCLElBQVU7UUFBaEMsaUJBTUM7UUFMQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLFVBQVUsQ0FBQztZQUNULGlDQUFVLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNsQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRU0sc0NBQWUsR0FBdEIsVUFBdUIsSUFBVTtRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLGlDQUFVLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBRU8sc0NBQWUsR0FBdkI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLGlDQUFVLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBN0RVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTs7T0FDQSxZQUFZLENBOER4QjtJQUFELG1CQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFROU1BsYXllciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hdWRpbyc7XHJcbmltcG9ydCB7IGdldEJvb2xlYW4sIHNldEJvb2xlYW4gfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbmxldCBzb3VuZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc291bmRcIik7XHJcbmxldCBjbGljazogYW55ID0gc291bmQuY3JlYXRlKCd+L3Rvb2xzL2Fzc2V0cy9jbGljay5tcDMnKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1ZGlvU2VydmljZSB7XHJcbiAgcHVibGljIGlzUGxheWluZ0JhY2tHcm91bmQ6IGJvb2xlYW4gPSBnZXRCb29sZWFuKCdpc1BsYXlpbmdCYWNrR3JvdW5kJywgdHJ1ZSk7XHJcbiAgcHVibGljIGFwcElzSW5CYWNrZ3JvdW5kOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGJhY2tncm91bmRTb25nOiBUTlNQbGF5ZXIgPSBuZXcgVE5TUGxheWVyKCk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8qaWYgKHRoaXMuaXNQbGF5aW5nQmFja0dyb3VuZCkge1xyXG4gICAgICB0aGlzLmluaXRCYWNrR3JvdW5kU29uZygpO1xyXG4gICAgfSovXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xpY2tTb3VuZCgpOiB2b2lkIHtcclxuICAgIGNsaWNrLnJlc2V0KCk7XHJcbiAgICBjbGljay5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdEJhY2tHcm91bmRTb25nKCk6IHZvaWQge1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kU29uZyA9IG5ldyBUTlNQbGF5ZXIoKTtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRTb25nLnBsYXlGcm9tRmlsZSh7XHJcbiAgICAgIGF1ZGlvRmlsZTogJ34vdG9vbHMvYXNzZXRzL2JhY2tncm91bmQubXAzJyxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgY29tcGxldGVDYWxsYmFjazogdGhpcy5wbGF5QmFja2dyb3VuZC5iaW5kKHRoaXMpXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRCb29sZWFuKCdpc1BsYXlpbmdCYWNrR3JvdW5kJywgdHJ1ZSk7XHJcbiAgICB0aGlzLmlzUGxheWluZ0JhY2tHcm91bmQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZUJhY2tncm91bmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrU291bmQoKTtcclxuICAgIGlmICh0aGlzLmJhY2tncm91bmRTb25nLmlzQXVkaW9QbGF5aW5nKCkpIHtcclxuICAgICAgdGhpcy5yZXNldEJhY2tHcm91bmQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5pdEJhY2tHcm91bmRTb25nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNBcHBJbkJhY2tncm91bmQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hcHBJc0luQmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwbGF5QmFja2dyb3VuZChhcmdzPzogYW55KSB7XHJcbiAgICB0aGlzLmJhY2tncm91bmRTb25nLnBsYXkoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRCb29sZWFuKCdpc1BsYXlpbmdCYWNrR3JvdW5kJywgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuaXNQbGF5aW5nQmFja0dyb3VuZCA9IHRydWU7XHJcbiAgICB9LCAxMCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGF1c2VCYWNrZ3JvdW5kKGFyZ3M/OiBhbnkpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZFNvbmcucGF1c2UoKTtcclxuICAgIHNldEJvb2xlYW4oJ2lzUGxheWluZ0JhY2tHcm91bmQnLCBmYWxzZSk7XHJcbiAgICB0aGlzLmlzUGxheWluZ0JhY2tHcm91bmQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRCYWNrR3JvdW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kU29uZy5wYXVzZSgpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kU29uZy5zZWVrVG8oMCk7XHJcbiAgICBzZXRCb29sZWFuKCdpc1BsYXlpbmdCYWNrR3JvdW5kJywgZmFsc2UpO1xyXG4gICAgdGhpcy5pc1BsYXlpbmdCYWNrR3JvdW5kID0gZmFsc2U7XHJcbiAgfVxyXG59Il19