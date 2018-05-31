"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sound = require("nativescript-sound");
var click = sound.create('~/tools/assets/click.mp3');
var AudioService = /** @class */ (function () {
    function AudioService() {
    }
    AudioService.prototype.clickSound = function () {
        click.reset();
        click.play();
    };
    AudioService = __decorate([
        core_1.Injectable()
    ], AudioService);
    return AudioService;
}());
exports.AudioService = AudioService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1ZGlvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDMUMsSUFBSSxLQUFLLEdBQVEsS0FBSyxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRzFEO0lBQUE7SUFLQSxDQUFDO0lBSlEsaUNBQVUsR0FBakI7UUFDRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZixDQUFDO0lBSlUsWUFBWTtRQUR4QixpQkFBVSxFQUFFO09BQ0EsWUFBWSxDQUt4QjtJQUFELG1CQUFDO0NBQUEsQUFMRCxJQUtDO0FBTFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5sZXQgc291bmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNvdW5kXCIpO1xyXG5sZXQgY2xpY2s6IGFueSA9IHNvdW5kLmNyZWF0ZSgnfi90b29scy9hc3NldHMvY2xpY2subXAzJyk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdWRpb1NlcnZpY2Uge1xyXG4gIHB1YmxpYyBjbGlja1NvdW5kKCk6IHZvaWQge1xyXG4gICAgY2xpY2sucmVzZXQoKTtcclxuICAgIGNsaWNrLnBsYXkoKTtcclxuICB9XHJcbn0iXX0=