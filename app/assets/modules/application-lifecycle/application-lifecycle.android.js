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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tbGlmZWN5Y2xlLmFuZHJvaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi1saWZlY3ljbGUuYW5kcm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywyQ0FLcUI7QUFFckIsOENBQWlEO0FBR2pEO0lBQ0UsOEJBQTJCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUcsQ0FBQztJQUVsRCx5Q0FBVSxHQUFqQjtRQUFBLGlCQXNCQztRQXJCQyxnQkFBYSxDQUFDLDBCQUFZLEVBQUUsVUFBQyxJQUEwQjtZQUNyRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNqRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2hHLEtBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3BDLEtBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2dCQUM3QyxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsZ0JBQWEsQ0FBQyx5QkFBVyxFQUFFLFVBQUMsSUFBMEI7WUFDbEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDaEUsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNoRyxVQUFVLENBQUM7d0JBQ1QsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDbkMsS0FBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7b0JBQzlDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDO1lBQ0gsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXpCVSxvQkFBb0I7UUFEaEMsaUJBQVUsRUFBRTt5Q0FFOEIsdUJBQVk7T0FEMUMsb0JBQW9CLENBMEJoQztJQUFELDJCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgb24gYXMgYXBwbGljYXRpb25PbixcbiAgc3VzcGVuZEV2ZW50LFxuICByZXN1bWVFdmVudCxcbiAgQXBwbGljYXRpb25FdmVudERhdGFcbn0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbmltcG9ydCB7IEF1ZGlvU2VydmljZSB9IGZyb20gJ34vYXNzZXRzL3NlcnZpY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uTGlmZWN5Y2xlIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgYXVkaW9TZXJ2aWNlOiBBdWRpb1NlcnZpY2UpIHt9XG5cbiAgcHVibGljIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgYXBwbGljYXRpb25PbihzdXNwZW5kRXZlbnQsIChhcmdzOiBBcHBsaWNhdGlvbkV2ZW50RGF0YSkgPT4ge1xuICAgICAgaWYgKGFyZ3MuYW5kcm9pZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VzcGVuZDogJyArIHRoaXMuYXVkaW9TZXJ2aWNlLmlzUGxheWluZ0JhY2tHcm91bmQpO1xuICAgICAgICBpZiAoIXRoaXMuYXVkaW9TZXJ2aWNlLmlzQXBwSW5CYWNrZ3JvdW5kKCkgJiYgdGhpcy5hdWRpb1NlcnZpY2UuYmFja2dyb3VuZFNvbmcuaXNBdWRpb1BsYXlpbmcoKSkge1xuICAgICAgICAgIHRoaXMuYXVkaW9TZXJ2aWNlLnBhdXNlQmFja2dyb3VuZCgpO1xuICAgICAgICAgIHRoaXMuYXVkaW9TZXJ2aWNlLmFwcElzSW5CYWNrZ3JvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIGFwcGxpY2F0aW9uT24ocmVzdW1lRXZlbnQsIChhcmdzOiBBcHBsaWNhdGlvbkV2ZW50RGF0YSkgPT4ge1xuICAgICAgICBpZiAoYXJncy5hbmRyb2lkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3VtZTogJyArIHRoaXMuYXVkaW9TZXJ2aWNlLmlzUGxheWluZ0JhY2tHcm91bmQpO1xuICAgICAgICAgIGlmICh0aGlzLmF1ZGlvU2VydmljZS5pc0FwcEluQmFja2dyb3VuZCgpICYmICF0aGlzLmF1ZGlvU2VydmljZS5iYWNrZ3JvdW5kU29uZy5pc0F1ZGlvUGxheWluZygpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5hdWRpb1NlcnZpY2UucGxheUJhY2tncm91bmQoKTtcbiAgICAgICAgICAgICAgdGhpcy5hdWRpb1NlcnZpY2UuYXBwSXNJbkJhY2tncm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxufSJdfQ==