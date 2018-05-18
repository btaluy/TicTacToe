"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_1 = require("application");
var services_1 = require("~/assets/services");
var ApplicationLifecycle = /** @class */ (function () {
    function ApplicationLifecycle(audioService) {
        this.audioService = audioService;
    }
    ApplicationLifecycle.prototype.initialise = function () {
        var _this = this;
        application_1.on(application_1.suspendEvent, function (args) {
            if (args.android) {
                console.log('suspend: ' + _this.audioService.isPlayingBackGround);
                if (!_this.audioService.isAppInBackground() && _this.audioService.backgroundSong.isAudioPlaying()) {
                    _this.audioService.pauseBackground();
                    _this.audioService.appIsInBackground = true;
                }
            }
        });
        application_1.on(application_1.resumeEvent, function (args) {
            if (args.android) {
                console.log('resume: ' + _this.audioService.isPlayingBackGround);
                if (_this.audioService.isAppInBackground() && !_this.audioService.backgroundSong.isAudioPlaying()) {
                    setTimeout(function () {
                        _this.audioService.playBackground();
                        _this.audioService.appIsInBackground = false;
                    }, 20);
                }
            }
        });
    };
    ApplicationLifecycle = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [services_1.AudioService])
    ], ApplicationLifecycle);
    return ApplicationLifecycle;
}());
exports.ApplicationLifecycle = ApplicationLifecycle;
