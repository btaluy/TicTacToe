"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sound = require('nativescript-sound');
var domain_1 = require("~/assets/domain");
var SinglePlayerService = /** @class */ (function () {
    function SinglePlayerService() {
        this.sessionGameWon = false;
        this.click = sound.create('~/assets/sound/click.mp3');
        this.board = new domain_1.Board(3);
    }
    SinglePlayerService.prototype.clickSound = function () {
        this.click.reset();
        this.click.play();
    };
    SinglePlayerService.prototype.restart = function () {
        this.newGame(0);
        this.board.circleScore = 0;
        this.board.crossScore = 0;
    };
    SinglePlayerService.prototype.newGame = function (miliSeconds) {
        var _this = this;
        if (miliSeconds === void 0) { miliSeconds = 2000; }
        setTimeout(function () {
            _this.sessionGameWon = false;
            _this.board.startNewGame();
        }, miliSeconds);
    };
    Object.defineProperty(SinglePlayerService.prototype, "gamePanelStateImageVisibility", {
        get: function () {
            return this.board.isDraw ? 'collapsed' : 'visible';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerService.prototype, "gamePanelCaption", {
        get: function () {
            if (this.board.isDraw) {
                return 'Draw';
            }
            return this.board.isGameWon ? 'Winner' : 'Next to play';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerService.prototype, "foundSquare", {
        get: function () {
            var min = 0;
            var max = this.board.getEmptySquares().length;
            var chosenTile = Math.floor(Math.random() * (max - min));
            return this.board.getEmptySquares()[chosenTile];
        },
        enumerable: true,
        configurable: true
    });
    SinglePlayerService = __decorate([
        core_1.Injectable()
    ], SinglePlayerService);
    return SinglePlayerService;
}());
exports.SinglePlayerService = SinglePlayerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGVwbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUU1QywwQ0FBcUU7QUFLckU7SUFEQTtRQUVTLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLFVBQUssR0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFdEQsVUFBSyxHQUFVLElBQUksY0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBcUNyQyxDQUFDO0lBbkNRLHdDQUFVLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxxQ0FBTyxHQUFkO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxxQ0FBTyxHQUFkLFVBQWUsV0FBMEI7UUFBekMsaUJBS0M7UUFMYyw0QkFBQSxFQUFBLGtCQUEwQjtRQUN2QyxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVCLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsc0JBQVcsOERBQTZCO2FBQXhDO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGlEQUFnQjthQUEzQjtZQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNoQixDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUEsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUN6RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDRDQUFXO2FBQXRCO1lBQ0UsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDaEQsSUFBTSxVQUFVLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTtJQXhDVSxtQkFBbUI7UUFEL0IsaUJBQVUsRUFBRTtPQUNBLG1CQUFtQixDQXlDL0I7SUFBRCwwQkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmNvbnN0IHNvdW5kID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXNvdW5kJyk7XHJcblxyXG5pbXBvcnQgeyBCb2FyZCwgTWVudUl0ZW1OYW1lLCBTcXVhcmUsIFN0YXRlIH0gZnJvbSBcIn4vYXNzZXRzL2RvbWFpblwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2luZ2xlUGxheWVyU2VydmljZSB7XHJcbiAgcHVibGljIHNlc3Npb25HYW1lV29uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGNsaWNrOiBhbnkgPSBzb3VuZC5jcmVhdGUoJ34vYXNzZXRzL3NvdW5kL2NsaWNrLm1wMycpO1xyXG5cclxuICBwdWJsaWMgYm9hcmQ6IEJvYXJkID0gbmV3IEJvYXJkKDMpO1xyXG5cclxuICBwdWJsaWMgY2xpY2tTb3VuZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2sucmVzZXQoKTtcclxuICAgIHRoaXMuY2xpY2sucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5ld0dhbWUoMCk7XHJcbiAgICB0aGlzLmJvYXJkLmNpcmNsZVNjb3JlID0gMDtcclxuICAgIHRoaXMuYm9hcmQuY3Jvc3NTY29yZSA9IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmV3R2FtZShtaWxpU2Vjb25kczogbnVtYmVyID0gMjAwMCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2Vzc2lvbkdhbWVXb24gPSBmYWxzZTtcclxuICAgICAgdGhpcy5ib2FyZC5zdGFydE5ld0dhbWUoKTtcclxuICAgIH0sIG1pbGlTZWNvbmRzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZ2FtZVBhbmVsU3RhdGVJbWFnZVZpc2liaWxpdHkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkLmlzRHJhdyA/ICdjb2xsYXBzZWQnOiAndmlzaWJsZSc7XHJcbiAgfVxyXG4gXHJcbiAgcHVibGljIGdldCBnYW1lUGFuZWxDYXB0aW9uKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5ib2FyZC5pc0RyYXcpIHtcclxuICAgICAgcmV0dXJuICdEcmF3JztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmJvYXJkLmlzR2FtZVdvbiA/ICdXaW5uZXInOiAnTmV4dCB0byBwbGF5JztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZm91bmRTcXVhcmUoKTogU3F1YXJlIHtcclxuICAgIGNvbnN0IG1pbiA9IDA7XHJcbiAgICBjb25zdCBtYXggPSB0aGlzLmJvYXJkLmdldEVtcHR5U3F1YXJlcygpLmxlbmd0aDtcclxuICAgIGNvbnN0IGNob3NlblRpbGU6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXgtbWluKSk7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXRFbXB0eVNxdWFyZXMoKVtjaG9zZW5UaWxlXTtcclxuICB9XHJcbn0iXX0=