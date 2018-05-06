"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_audio_1 = require("nativescript-audio");
var sound = require("nativescript-sound");
var AudioService = /** @class */ (function () {
    function AudioService() {
    }
    AudioService.prototype.ngOnInit = function () {
        this._click = sound.create('~/tools/assets/click.mp3');
    };
    AudioService.prototype.clickSound = function () {
        this._click.pause();
        this._click.seekTo(0);
        this._click.play();
    };
    AudioService.prototype.initBackGroundSong = function () {
        this._backgroundSong = new nativescript_audio_1.TNSPlayer();
        this._backgroundSong.playFromFile({
            audioFile: '~/tools/assets/background.mp3',
            loop: true
        });
    };
    AudioService = __decorate([
        core_1.Injectable()
    ], AudioService);
    return AudioService;
}());
exports.AudioService = AudioService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1ZGlvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQseURBQStDO0FBRS9DLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRzFDO0lBQUE7SUFzQkEsQ0FBQztJQWxCUSwrQkFBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLGlDQUFVLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSx5Q0FBa0IsR0FBekI7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksOEJBQVMsRUFBRSxDQUFDO1FBRXZDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDO1lBQ2hDLFNBQVMsRUFBRSwrQkFBK0I7WUFDMUMsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBckJVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTtPQUNBLFlBQVksQ0FzQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVE5TUGxheWVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWF1ZGlvJztcclxuXHJcbmxldCBzb3VuZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc291bmRcIik7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdWRpb1NlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgX2NsaWNrOiBhbnkgO1xyXG4gIHByaXZhdGUgX2JhY2tncm91bmRTb25nOiBUTlNQbGF5ZXI7XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NsaWNrID0gc291bmQuY3JlYXRlKCd+L3Rvb2xzL2Fzc2V0cy9jbGljay5tcDMnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGlja1NvdW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2xpY2sucGF1c2UoKTtcclxuICAgIHRoaXMuX2NsaWNrLnNlZWtUbygwKTtcclxuICAgIHRoaXMuX2NsaWNrLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0QmFja0dyb3VuZFNvbmcoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9iYWNrZ3JvdW5kU29uZyA9IG5ldyBUTlNQbGF5ZXIoKTtcclxuXHJcbiAgICB0aGlzLl9iYWNrZ3JvdW5kU29uZy5wbGF5RnJvbUZpbGUoe1xyXG4gICAgICBhdWRpb0ZpbGU6ICd+L3Rvb2xzL2Fzc2V0cy9iYWNrZ3JvdW5kLm1wMycsXHJcbiAgICAgIGxvb3A6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxufSJdfQ==