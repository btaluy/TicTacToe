"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var domain_1 = require("~/assets/domain");
var leaderboard_service_1 = require("./leaderboard.service");
var services_1 = require("~/assets/services");
var SinglePlayerService = /** @class */ (function () {
    function SinglePlayerService(popupService, zone, leaderBoard) {
        this.popupService = popupService;
        this.zone = zone;
        this.leaderBoard = leaderBoard;
        this.sessionGameWon = false;
        this.board = new domain_1.Board(3);
    }
    SinglePlayerService.prototype.restart = function () {
        this.newGame(0);
    };
    SinglePlayerService.prototype.mark = function (square) {
        if (square.canChangeState) {
            square.state = this.board.currentState;
            this.board.marksCount++;
            this.setGameWonStateFrom(square);
            this.board.changeCurrentState();
        }
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
            return !this.board.isDraw;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerService.prototype, "gamePanelCaption", {
        get: function () {
            if (this.board.isDraw) {
                return 'Draw';
            }
            return this.board.isGameWon ? ' won' : '\'s turn';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerService.prototype, "foundSquare", {
        get: function () {
            var min = 0;
            var max = this.board.getEmptySquares().length;
            if (max > 0) {
                var chosenTile = Math.floor(Math.random() * (max - min));
                return this.board.getEmptySquares()[chosenTile];
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    SinglePlayerService.prototype.incrementWinnerScore = function () {
        if (this.board.currentState === domain_1.State.Cross) {
            this.leaderBoard.spScore.wins++;
            this.leaderBoard.updateSPScore();
        }
        else {
            this.leaderBoard.spScore.losses++;
            this.leaderBoard.updateSPScore();
        }
    };
    SinglePlayerService.prototype.setGameWonStateFrom = function (square) {
        this.board.isGameWon = this.board.getWinningIndexesFor(square) != undefined;
        if (this.board.isGameWon)
            this.incrementWinnerScore();
    };
    SinglePlayerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [services_1.PopupService, core_1.NgZone, leaderboard_service_1.LeaderBoardService])
    ], SinglePlayerService);
    return SinglePlayerService;
}());
exports.SinglePlayerService = SinglePlayerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGVwbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUVqRCwwQ0FBcUU7QUFHckUsNkRBQTJEO0FBQzNELDhDQUFpRDtBQUdqRDtJQUlFLDZCQUEyQixZQUEwQixFQUFVLElBQVksRUFBVSxXQUErQjtRQUF6RixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFIN0csbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsVUFBSyxHQUFVLElBQUksY0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXFGLENBQUM7SUFFbEgscUNBQU8sR0FBZDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVNLGtDQUFJLEdBQVgsVUFBWSxNQUFjO1FBQ3hCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRU0scUNBQU8sR0FBZCxVQUFlLFdBQTBCO1FBQXpDLGlCQUtDO1FBTGMsNEJBQUEsRUFBQSxrQkFBMEI7UUFDdkMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QixDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELHNCQUFXLDhEQUE2QjthQUF4QztZQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsaURBQWdCO2FBQTNCO1lBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2hCLENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNENBQVc7YUFBdEI7WUFDRSxJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUVoRCxFQUFFLENBQUEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxJQUFNLFVBQVUsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsRCxDQUFDO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUVPLGtEQUFvQixHQUE1QjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLGNBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUVPLGlEQUFtQixHQUEzQixVQUE0QixNQUFjO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDO1FBQzVFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUEvRFUsbUJBQW1CO1FBRC9CLGlCQUFVLEVBQUU7eUNBSzhCLHVCQUFZLEVBQWdCLGFBQU0sRUFBdUIsd0NBQWtCO09BSnpHLG1CQUFtQixDQWdFL0I7SUFBRCwwQkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQm9hcmQsIE1lbnVJdGVtTmFtZSwgU3F1YXJlLCBTdGF0ZSB9IGZyb20gXCJ+L2Fzc2V0cy9kb21haW5cIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXQnO1xuaW1wb3J0IHsgTGVhZGVyQm9hcmRTZXJ2aWNlIH0gZnJvbSAnLi9sZWFkZXJib2FyZC5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwU2VydmljZSB9IGZyb20gJ34vYXNzZXRzL3NlcnZpY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpbmdsZVBsYXllclNlcnZpY2Uge1xuICBwdWJsaWMgc2Vzc2lvbkdhbWVXb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGJvYXJkOiBCb2FyZCA9IG5ldyBCb2FyZCgzKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBwb3B1cFNlcnZpY2U6IFBvcHVwU2VydmljZSwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgbGVhZGVyQm9hcmQ6IExlYWRlckJvYXJkU2VydmljZSkgeyB9XG5cbiAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5uZXdHYW1lKDApO1xuICB9XG5cbiAgcHVibGljIG1hcmsoc3F1YXJlOiBTcXVhcmUpOiB2b2lkIHtcbiAgICBpZihzcXVhcmUuY2FuQ2hhbmdlU3RhdGUpIHtcbiAgICAgIHNxdWFyZS5zdGF0ZSA9IHRoaXMuYm9hcmQuY3VycmVudFN0YXRlO1xuICAgICAgdGhpcy5ib2FyZC5tYXJrc0NvdW50Kys7XG4gICAgICB0aGlzLnNldEdhbWVXb25TdGF0ZUZyb20oc3F1YXJlKTtcbiAgICAgIHRoaXMuYm9hcmQuY2hhbmdlQ3VycmVudFN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5ld0dhbWUobWlsaVNlY29uZHM6IG51bWJlciA9IDIwMDApOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2Vzc2lvbkdhbWVXb24gPSBmYWxzZTtcbiAgICAgIHRoaXMuYm9hcmQuc3RhcnROZXdHYW1lKCk7XG4gICAgfSwgbWlsaVNlY29uZHMpO1xuICB9XG5cbiAgcHVibGljIGdldCBnYW1lUGFuZWxTdGF0ZUltYWdlVmlzaWJpbGl0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuYm9hcmQuaXNEcmF3O1xuICB9XG4gXG4gIHB1YmxpYyBnZXQgZ2FtZVBhbmVsQ2FwdGlvbigpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmJvYXJkLmlzRHJhdykge1xuICAgICAgcmV0dXJuICdEcmF3JztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuaXNHYW1lV29uID8gJyB3b24nOiAnXFwncyB0dXJuJztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm91bmRTcXVhcmUoKTogU3F1YXJlIHtcbiAgICBjb25zdCBtaW4gPSAwO1xuICAgIGNvbnN0IG1heCA9IHRoaXMuYm9hcmQuZ2V0RW1wdHlTcXVhcmVzKCkubGVuZ3RoO1xuXG4gICAgaWYobWF4ID4gMCkge1xuICAgICAgY29uc3QgY2hvc2VuVGlsZTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heC1taW4pKTtcbiAgICAgIHJldHVybiB0aGlzLmJvYXJkLmdldEVtcHR5U3F1YXJlcygpW2Nob3NlblRpbGVdO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBpbmNyZW1lbnRXaW5uZXJTY29yZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ib2FyZC5jdXJyZW50U3RhdGUgPT09IFN0YXRlLkNyb3NzKSB7XG4gICAgICB0aGlzLmxlYWRlckJvYXJkLnNwU2NvcmUud2lucysrO1xuICAgICAgdGhpcy5sZWFkZXJCb2FyZC51cGRhdGVTUFNjb3JlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGVhZGVyQm9hcmQuc3BTY29yZS5sb3NzZXMrKztcbiAgICAgIHRoaXMubGVhZGVyQm9hcmQudXBkYXRlU1BTY29yZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0R2FtZVdvblN0YXRlRnJvbShzcXVhcmU6IFNxdWFyZSk6IHZvaWQge1xuICAgIHRoaXMuYm9hcmQuaXNHYW1lV29uID0gdGhpcy5ib2FyZC5nZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpICE9IHVuZGVmaW5lZDtcbiAgICBpZiAodGhpcy5ib2FyZC5pc0dhbWVXb24pXG4gICAgICB0aGlzLmluY3JlbWVudFdpbm5lclNjb3JlKCk7XG4gIH1cbn0iXX0=