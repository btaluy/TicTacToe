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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1ZGlvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MseURBQStDO0FBQy9DLDZEQUE4RDtBQUU5RCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyxJQUFJLEtBQUssR0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFHMUQ7SUFLRTtRQUpPLHdCQUFtQixHQUFZLGlDQUFVLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLG1CQUFjLEdBQWMsSUFBSSw4QkFBUyxFQUFFLENBQUM7UUFHakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVNLGlDQUFVLEdBQWpCO1FBQ0UsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVNLHlDQUFrQixHQUF6QjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSw4QkFBUyxFQUFFLENBQUM7UUFFdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7WUFDL0IsU0FBUyxFQUFFLCtCQUErQjtZQUMxQyxJQUFJLEVBQUUsSUFBSTtZQUNWLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNqRCxDQUFDLENBQUM7UUFFSCxpQ0FBVSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVNLHVDQUFnQixHQUF2QjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFTSx3Q0FBaUIsR0FBeEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFFTSxxQ0FBYyxHQUFyQixVQUFzQixJQUFVO1FBQWhDLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixVQUFVLENBQUM7WUFDVCxpQ0FBVSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVNLHNDQUFlLEdBQXRCLFVBQXVCLElBQVU7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixpQ0FBVSxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVPLHNDQUFlLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixpQ0FBVSxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQTdEVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7O09BQ0EsWUFBWSxDQThEeEI7SUFBRCxtQkFBQztDQUFBLEFBOURELElBOERDO0FBOURZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVE5TUGxheWVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWF1ZGlvJztcbmltcG9ydCB7IGdldEJvb2xlYW4sIHNldEJvb2xlYW4gfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxubGV0IHNvdW5kID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zb3VuZFwiKTtcbmxldCBjbGljazogYW55ID0gc291bmQuY3JlYXRlKCd+L3Rvb2xzL2Fzc2V0cy9jbGljay5tcDMnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1ZGlvU2VydmljZSB7XG4gIHB1YmxpYyBpc1BsYXlpbmdCYWNrR3JvdW5kOiBib29sZWFuID0gZ2V0Qm9vbGVhbignaXNQbGF5aW5nQmFja0dyb3VuZCcsIHRydWUpO1xuICBwdWJsaWMgYXBwSXNJbkJhY2tncm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGJhY2tncm91bmRTb25nOiBUTlNQbGF5ZXIgPSBuZXcgVE5TUGxheWVyKCk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICh0aGlzLmlzUGxheWluZ0JhY2tHcm91bmQpIHtcbiAgICAgIHRoaXMuaW5pdEJhY2tHcm91bmRTb25nKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsaWNrU291bmQoKTogdm9pZCB7XG4gICAgY2xpY2sucmVzZXQoKTtcbiAgICBjbGljay5wbGF5KCk7XG4gIH1cblxuICBwdWJsaWMgaW5pdEJhY2tHcm91bmRTb25nKCk6IHZvaWQge1xuICAgIHRoaXMuYmFja2dyb3VuZFNvbmcgPSBuZXcgVE5TUGxheWVyKCk7XG5cbiAgICB0aGlzLmJhY2tncm91bmRTb25nLnBsYXlGcm9tRmlsZSh7XG4gICAgICBhdWRpb0ZpbGU6ICd+L3Rvb2xzL2Fzc2V0cy9iYWNrZ3JvdW5kLm1wMycsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgY29tcGxldGVDYWxsYmFjazogdGhpcy5wbGF5QmFja2dyb3VuZC5iaW5kKHRoaXMpXG4gICAgfSk7XG5cbiAgICBzZXRCb29sZWFuKCdpc1BsYXlpbmdCYWNrR3JvdW5kJywgdHJ1ZSk7XG4gICAgdGhpcy5pc1BsYXlpbmdCYWNrR3JvdW5kID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVCYWNrZ3JvdW5kKCk6IHZvaWQge1xuICAgIHRoaXMuY2xpY2tTb3VuZCgpO1xuICAgIGlmICh0aGlzLmJhY2tncm91bmRTb25nLmlzQXVkaW9QbGF5aW5nKCkpIHtcbiAgICAgIHRoaXMucmVzZXRCYWNrR3JvdW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdEJhY2tHcm91bmRTb25nKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzQXBwSW5CYWNrZ3JvdW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFwcElzSW5CYWNrZ3JvdW5kO1xuICB9XG5cbiAgcHVibGljIHBsYXlCYWNrZ3JvdW5kKGFyZ3M/OiBhbnkpIHtcbiAgICB0aGlzLmJhY2tncm91bmRTb25nLnBsYXkoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEJvb2xlYW4oJ2lzUGxheWluZ0JhY2tHcm91bmQnLCB0cnVlKTtcbiAgICAgIHRoaXMuaXNQbGF5aW5nQmFja0dyb3VuZCA9IHRydWU7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgcHVibGljIHBhdXNlQmFja2dyb3VuZChhcmdzPzogYW55KSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kU29uZy5wYXVzZSgpO1xuICAgIHNldEJvb2xlYW4oJ2lzUGxheWluZ0JhY2tHcm91bmQnLCBmYWxzZSk7XG4gICAgdGhpcy5pc1BsYXlpbmdCYWNrR3JvdW5kID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0QmFja0dyb3VuZCgpOiB2b2lkIHtcbiAgICB0aGlzLmJhY2tncm91bmRTb25nLnBhdXNlKCk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kU29uZy5zZWVrVG8oMCk7XG4gICAgc2V0Qm9vbGVhbignaXNQbGF5aW5nQmFja0dyb3VuZCcsIGZhbHNlKTtcbiAgICB0aGlzLmlzUGxheWluZ0JhY2tHcm91bmQgPSBmYWxzZTtcbiAgfVxufSJdfQ==