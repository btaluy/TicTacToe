"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sound = require('nativescript-sound');
var SinglePlayerService = /** @class */ (function () {
    function SinglePlayerService() {
        this._clickSound = sound.create('~/tools/assets/click.mp3');
    }
    SinglePlayerService.checkWins = function (playerScore) {
        var possibleWins = [7, 56, 448, 73, 146, 292, 273, 84];
        for (var i = 0; i < possibleWins.length; i++) {
            if ((possibleWins[i] & playerScore) === possibleWins[i]) {
                return true;
            }
        }
        return false;
    };
    SinglePlayerService.prototype.clickSound = function () {
        this._clickSound.reset();
        this._clickSound.play();
    };
    SinglePlayerService = __decorate([
        core_1.Injectable()
    ], SinglePlayerService);
    return SinglePlayerService;
}());
exports.SinglePlayerService = SinglePlayerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGVwbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUcxQztJQURBO1FBR1ksZ0JBQVcsR0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFpQnhFLENBQUM7SUFmVSw2QkFBUyxHQUFoQixVQUFpQixXQUFtQjtRQUNsQyxJQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV6RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELHdDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQWxCUSxtQkFBbUI7UUFEL0IsaUJBQVUsRUFBRTtPQUNBLG1CQUFtQixDQW1CL0I7SUFBRCwwQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmxldCBzb3VuZCA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1zb3VuZCcpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2luZ2xlUGxheWVyU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xpY2tTb3VuZDogYW55ID0gc291bmQuY3JlYXRlKCd+L3Rvb2xzL2Fzc2V0cy9jbGljay5tcDMnKTtcclxuXHJcbiAgICBzdGF0aWMgY2hlY2tXaW5zKHBsYXllclNjb3JlOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgY29uc3QgcG9zc2libGVXaW5zID0gWzcsIDU2LCA0NDgsIDczLCAxNDYsIDI5MiwgMjczLCA4NF07XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlV2lucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICgocG9zc2libGVXaW5zW2ldICYgcGxheWVyU2NvcmUpID09PSBwb3NzaWJsZVdpbnNbaV0pIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jbGlja1NvdW5kLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5fY2xpY2tTb3VuZC5wbGF5KCk7XHJcbiAgICB9XHJcbn0iXX0=