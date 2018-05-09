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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1ZGlvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MseURBQStDO0FBQy9DLDZEQUE4RDtBQUU5RCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyxJQUFJLEtBQUssR0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFHMUQ7SUFLRTtRQUpPLHdCQUFtQixHQUFZLGlDQUFVLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLG1CQUFjLEdBQWMsSUFBSSw4QkFBUyxFQUFFLENBQUM7UUFHakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVNLGlDQUFVLEdBQWpCO1FBQ0UsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVNLHlDQUFrQixHQUF6QjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSw4QkFBUyxFQUFFLENBQUM7UUFFdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7WUFDL0IsU0FBUyxFQUFFLCtCQUErQjtZQUMxQyxJQUFJLEVBQUUsSUFBSTtZQUNWLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNqRCxDQUFDLENBQUM7UUFFSCxpQ0FBVSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVNLHVDQUFnQixHQUF2QjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFTSx3Q0FBaUIsR0FBeEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFFTSxxQ0FBYyxHQUFyQixVQUFzQixJQUFVO1FBQWhDLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixVQUFVLENBQUM7WUFDVCxpQ0FBVSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVNLHNDQUFlLEdBQXRCLFVBQXVCLElBQVU7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixpQ0FBVSxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVPLHNDQUFlLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixpQ0FBVSxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQTdEVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7O09BQ0EsWUFBWSxDQThEeEI7SUFBRCxtQkFBQztDQUFBLEFBOURELElBOERDO0FBOURZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUTlNQbGF5ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYXVkaW8nO1xyXG5pbXBvcnQgeyBnZXRCb29sZWFuLCBzZXRCb29sZWFuIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5sZXQgc291bmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNvdW5kXCIpO1xyXG5sZXQgY2xpY2s6IGFueSA9IHNvdW5kLmNyZWF0ZSgnfi90b29scy9hc3NldHMvY2xpY2subXAzJyk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdWRpb1NlcnZpY2Uge1xyXG4gIHB1YmxpYyBpc1BsYXlpbmdCYWNrR3JvdW5kOiBib29sZWFuID0gZ2V0Qm9vbGVhbignaXNQbGF5aW5nQmFja0dyb3VuZCcsIHRydWUpO1xyXG4gIHB1YmxpYyBhcHBJc0luQmFja2dyb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBiYWNrZ3JvdW5kU29uZzogVE5TUGxheWVyID0gbmV3IFROU1BsYXllcigpO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAodGhpcy5pc1BsYXlpbmdCYWNrR3JvdW5kKSB7XHJcbiAgICAgIHRoaXMuaW5pdEJhY2tHcm91bmRTb25nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xpY2tTb3VuZCgpOiB2b2lkIHtcclxuICAgIGNsaWNrLnJlc2V0KCk7XHJcbiAgICBjbGljay5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdEJhY2tHcm91bmRTb25nKCk6IHZvaWQge1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kU29uZyA9IG5ldyBUTlNQbGF5ZXIoKTtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRTb25nLnBsYXlGcm9tRmlsZSh7XHJcbiAgICAgIGF1ZGlvRmlsZTogJ34vdG9vbHMvYXNzZXRzL2JhY2tncm91bmQubXAzJyxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgY29tcGxldGVDYWxsYmFjazogdGhpcy5wbGF5QmFja2dyb3VuZC5iaW5kKHRoaXMpXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRCb29sZWFuKCdpc1BsYXlpbmdCYWNrR3JvdW5kJywgdHJ1ZSk7XHJcbiAgICB0aGlzLmlzUGxheWluZ0JhY2tHcm91bmQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZUJhY2tncm91bmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsaWNrU291bmQoKTtcclxuICAgIGlmICh0aGlzLmJhY2tncm91bmRTb25nLmlzQXVkaW9QbGF5aW5nKCkpIHtcclxuICAgICAgdGhpcy5yZXNldEJhY2tHcm91bmQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5pdEJhY2tHcm91bmRTb25nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNBcHBJbkJhY2tncm91bmQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5hcHBJc0luQmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwbGF5QmFja2dyb3VuZChhcmdzPzogYW55KSB7XHJcbiAgICB0aGlzLmJhY2tncm91bmRTb25nLnBsYXkoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRCb29sZWFuKCdpc1BsYXlpbmdCYWNrR3JvdW5kJywgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuaXNQbGF5aW5nQmFja0dyb3VuZCA9IHRydWU7XHJcbiAgICB9LCAxMCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGF1c2VCYWNrZ3JvdW5kKGFyZ3M/OiBhbnkpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZFNvbmcucGF1c2UoKTtcclxuICAgIHNldEJvb2xlYW4oJ2lzUGxheWluZ0JhY2tHcm91bmQnLCBmYWxzZSk7XHJcbiAgICB0aGlzLmlzUGxheWluZ0JhY2tHcm91bmQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRCYWNrR3JvdW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kU29uZy5wYXVzZSgpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kU29uZy5zZWVrVG8oMCk7XHJcbiAgICBzZXRCb29sZWFuKCdpc1BsYXlpbmdCYWNrR3JvdW5kJywgZmFsc2UpO1xyXG4gICAgdGhpcy5pc1BsYXlpbmdCYWNrR3JvdW5kID0gZmFsc2U7XHJcbiAgfVxyXG59Il19