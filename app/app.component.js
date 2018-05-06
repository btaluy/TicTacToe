"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var audio_service_1 = require("~/assets/services/audio.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(_audioService) {
        this._audioService = _audioService;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsaUVBQStEO0FBTS9EO0lBQ0Usc0JBQTJCLGFBQTJCO1FBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUksQ0FBQztJQURoRCxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBRTBDLDRCQUFZO09BRDNDLFlBQVksQ0FFeEI7SUFBRCxtQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEF1ZGlvU2VydmljZSB9IGZyb20gXCJ+L2Fzc2V0cy9zZXJ2aWNlcy9hdWRpby5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IFxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdWRpb1NlcnZpY2U6IEF1ZGlvU2VydmljZSkgeyB9XHJcbn1cclxuIl19