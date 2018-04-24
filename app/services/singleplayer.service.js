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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGVwbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUcxQztJQURBO1FBR1ksZ0JBQVcsR0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFpQnhFLENBQUM7SUFmaUIsNkJBQVMsR0FBdkIsVUFBd0IsV0FBbUI7UUFDekMsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFekQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTSx3Q0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBbEJRLG1CQUFtQjtRQUQvQixpQkFBVSxFQUFFO09BQ0EsbUJBQW1CLENBbUIvQjtJQUFELDBCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxubGV0IHNvdW5kID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXNvdW5kJyk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVQbGF5ZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1NvdW5kOiBhbnkgPSBzb3VuZC5jcmVhdGUoJ34vdG9vbHMvYXNzZXRzL2NsaWNrLm1wMycpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tXaW5zKHBsYXllclNjb3JlOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgY29uc3QgcG9zc2libGVXaW5zID0gWzcsIDU2LCA0NDgsIDczLCAxNDYsIDI5MiwgMjczLCA4NF07XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlV2lucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICgocG9zc2libGVXaW5zW2ldICYgcGxheWVyU2NvcmUpID09PSBwb3NzaWJsZVdpbnNbaV0pIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsaWNrU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2xpY2tTb3VuZC5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuX2NsaWNrU291bmQucGxheSgpO1xyXG4gICAgfVxyXG59Il19