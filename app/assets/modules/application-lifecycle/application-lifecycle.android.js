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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tbGlmZWN5Y2xlLmFuZHJvaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi1saWZlY3ljbGUuYW5kcm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywyQ0FLcUI7QUFFckIsOENBQWlEO0FBR2pEO0lBQ0UsOEJBQTJCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUcsQ0FBQztJQUVsRCx5Q0FBVSxHQUFqQjtRQUFBLGlCQXNCQztRQXJCQyxnQkFBYSxDQUFDLDBCQUFZLEVBQUUsVUFBQyxJQUEwQjtZQUNyRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNqRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2hHLEtBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3BDLEtBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2dCQUM3QyxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWEsQ0FBQyx5QkFBVyxFQUFFLFVBQUMsSUFBMEI7WUFDbEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDaEUsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNoRyxVQUFVLENBQUM7d0JBQ1QsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDbkMsS0FBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7b0JBQzlDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDO1lBQ0gsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXpCVSxvQkFBb0I7UUFEaEMsaUJBQVUsRUFBRTt5Q0FFOEIsdUJBQVk7T0FEMUMsb0JBQW9CLENBMEJoQztJQUFELDJCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIG9uIGFzIGFwcGxpY2F0aW9uT24sXHJcbiAgc3VzcGVuZEV2ZW50LFxyXG4gIHJlc3VtZUV2ZW50LFxyXG4gIEFwcGxpY2F0aW9uRXZlbnREYXRhXHJcbn0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBBdWRpb1NlcnZpY2UgfSBmcm9tICd+L2Fzc2V0cy9zZXJ2aWNlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbkxpZmVjeWNsZSB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgYXVkaW9TZXJ2aWNlOiBBdWRpb1NlcnZpY2UpIHt9XHJcblxyXG4gIHB1YmxpYyBpbml0aWFsaXNlKCk6IHZvaWQge1xyXG4gICAgYXBwbGljYXRpb25PbihzdXNwZW5kRXZlbnQsIChhcmdzOiBBcHBsaWNhdGlvbkV2ZW50RGF0YSkgPT4ge1xyXG4gICAgICBpZiAoYXJncy5hbmRyb2lkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N1c3BlbmQ6ICcgKyB0aGlzLmF1ZGlvU2VydmljZS5pc1BsYXlpbmdCYWNrR3JvdW5kKTtcclxuICAgICAgICBpZiAoIXRoaXMuYXVkaW9TZXJ2aWNlLmlzQXBwSW5CYWNrZ3JvdW5kKCkgJiYgdGhpcy5hdWRpb1NlcnZpY2UuYmFja2dyb3VuZFNvbmcuaXNBdWRpb1BsYXlpbmcoKSkge1xyXG4gICAgICAgICAgdGhpcy5hdWRpb1NlcnZpY2UucGF1c2VCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgICB0aGlzLmF1ZGlvU2VydmljZS5hcHBJc0luQmFja2dyb3VuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgYXBwbGljYXRpb25PbihyZXN1bWVFdmVudCwgKGFyZ3M6IEFwcGxpY2F0aW9uRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGFyZ3MuYW5kcm9pZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VtZTogJyArIHRoaXMuYXVkaW9TZXJ2aWNlLmlzUGxheWluZ0JhY2tHcm91bmQpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuYXVkaW9TZXJ2aWNlLmlzQXBwSW5CYWNrZ3JvdW5kKCkgJiYgIXRoaXMuYXVkaW9TZXJ2aWNlLmJhY2tncm91bmRTb25nLmlzQXVkaW9QbGF5aW5nKCkpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hdWRpb1NlcnZpY2UucGxheUJhY2tncm91bmQoKTtcclxuICAgICAgICAgICAgICB0aGlzLmF1ZGlvU2VydmljZS5hcHBJc0luQmFja2dyb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCAyMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59Il19