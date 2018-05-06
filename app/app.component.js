"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var audio_service_1 = require("~/assets/services/audio.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(_audioService) {
        this._audioService = _audioService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._audioService.initBackGroundSong();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [audio_service_1.AudioService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsaUVBQStEO0FBTS9EO0lBQ0Usc0JBQTJCLGFBQTJCO1FBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUksQ0FBQztJQUUzRCwrQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFMVSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBRTBDLDRCQUFZO09BRDNDLFlBQVksQ0FNeEI7SUFBRCxtQkFBQztDQUFBLEFBTkQsSUFNQztBQU5ZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgQXVkaW9TZXJ2aWNlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzL2F1ZGlvLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHsgXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1ZGlvU2VydmljZTogQXVkaW9TZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLl9hdWRpb1NlcnZpY2UuaW5pdEJhY2tHcm91bmRTb25nKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==