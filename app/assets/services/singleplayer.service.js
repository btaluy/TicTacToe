"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var domain_1 = require("~/assets/domain");
var leaderboard_service_1 = require("~/assets/services/leaderboard.service");
var services_1 = require("~/assets/services");
var SinglePlayerService = /** @class */ (function (_super) {
    __extends(SinglePlayerService, _super);
    function SinglePlayerService(popupService, zone) {
        var _this = _super.call(this, popupService, zone) || this;
        _this.popupService = popupService;
        _this.zone = zone;
        _this.sessionGameWon = false;
        _this.board = new domain_1.Board(3);
        return _this;
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
            return this.board.isGameWon ? 'Winner' : 'Next';
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
            this.spScore.crossScore++;
            this.updateSPScore();
        }
        else {
            this.spScore.circleScore++;
            this.updateSPScore();
        }
    };
    SinglePlayerService.prototype.setGameWonStateFrom = function (square) {
        this.board.isGameWon = this.board.getWinningIndexesFor(square) != undefined;
        if (this.board.isGameWon)
            this.incrementWinnerScore();
    };
    SinglePlayerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [services_1.PopupService, core_1.NgZone])
    ], SinglePlayerService);
    return SinglePlayerService;
}(leaderboard_service_1.LeaderBoardService));
exports.SinglePlayerService = SinglePlayerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGVwbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUVqRCwwQ0FBcUU7QUFHckUsNkVBQTJFO0FBQzNFLDhDQUFpRDtBQUdqRDtJQUF5Qyx1Q0FBa0I7SUFJekQsNkJBQTZCLFlBQTBCLEVBQVksSUFBWTtRQUEvRSxZQUNFLGtCQUFNLFlBQVksRUFBRSxJQUFJLENBQUMsU0FDMUI7UUFGNEIsa0JBQVksR0FBWixZQUFZLENBQWM7UUFBWSxVQUFJLEdBQUosSUFBSSxDQUFRO1FBSHhFLG9CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLFdBQUssR0FBVSxJQUFJLGNBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFJbkMsQ0FBQztJQUVNLHFDQUFPLEdBQWQ7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFTSxrQ0FBSSxHQUFYLFVBQVksTUFBYztRQUN4QixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVNLHFDQUFPLEdBQWQsVUFBZSxXQUEwQjtRQUF6QyxpQkFLQztRQUxjLDRCQUFBLEVBQUEsa0JBQTBCO1FBQ3ZDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxzQkFBVyw4REFBNkI7YUFBeEM7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBRUQsc0JBQVcsaURBQWdCO2FBQTNCO1lBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2hCLENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNENBQVc7YUFBdEI7WUFDRSxJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUVoRCxFQUFFLENBQUEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxJQUFNLFVBQVUsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsRCxDQUFDO1lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUVPLGtEQUFvQixHQUE1QjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLGNBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBRU8saURBQW1CLEdBQTNCLFVBQTRCLE1BQWM7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUM7UUFDNUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQWpFVSxtQkFBbUI7UUFEL0IsaUJBQVUsRUFBRTt5Q0FLZ0MsdUJBQVksRUFBa0IsYUFBTTtPQUpwRSxtQkFBbUIsQ0FrRS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWxFRCxDQUF5Qyx3Q0FBa0IsR0FrRTFEO0FBbEVZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQm9hcmQsIE1lbnVJdGVtTmFtZSwgU3F1YXJlLCBTdGF0ZSB9IGZyb20gXCJ+L2Fzc2V0cy9kb21haW5cIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXQnO1xuaW1wb3J0IHsgTGVhZGVyQm9hcmRTZXJ2aWNlIH0gZnJvbSAnfi9hc3NldHMvc2VydmljZXMvbGVhZGVyYm9hcmQuc2VydmljZSc7XG5pbXBvcnQgeyBQb3B1cFNlcnZpY2UgfSBmcm9tICd+L2Fzc2V0cy9zZXJ2aWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaW5nbGVQbGF5ZXJTZXJ2aWNlIGV4dGVuZHMgTGVhZGVyQm9hcmRTZXJ2aWNle1xuICBwdWJsaWMgc2Vzc2lvbkdhbWVXb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGJvYXJkOiBCb2FyZCA9IG5ldyBCb2FyZCgzKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJvdGVjdGVkIHBvcHVwU2VydmljZTogUG9wdXBTZXJ2aWNlLCBwcm90ZWN0ZWQgem9uZTogTmdab25lKSB7XG4gICAgc3VwZXIocG9wdXBTZXJ2aWNlLCB6b25lKTtcbiAgfVxuXG4gIHB1YmxpYyByZXN0YXJ0KCk6IHZvaWQge1xuICAgIHRoaXMubmV3R2FtZSgwKTtcbiAgfVxuXG4gIHB1YmxpYyBtYXJrKHNxdWFyZTogU3F1YXJlKTogdm9pZCB7XG4gICAgaWYoc3F1YXJlLmNhbkNoYW5nZVN0YXRlKSB7XG4gICAgICBzcXVhcmUuc3RhdGUgPSB0aGlzLmJvYXJkLmN1cnJlbnRTdGF0ZTtcbiAgICAgIHRoaXMuYm9hcmQubWFya3NDb3VudCsrO1xuICAgICAgdGhpcy5zZXRHYW1lV29uU3RhdGVGcm9tKHNxdWFyZSk7XG4gICAgICB0aGlzLmJvYXJkLmNoYW5nZUN1cnJlbnRTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZXdHYW1lKG1pbGlTZWNvbmRzOiBudW1iZXIgPSAyMDAwKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNlc3Npb25HYW1lV29uID0gZmFsc2U7XG4gICAgICB0aGlzLmJvYXJkLnN0YXJ0TmV3R2FtZSgpO1xuICAgIH0sIG1pbGlTZWNvbmRzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZ2FtZVBhbmVsU3RhdGVJbWFnZVZpc2liaWxpdHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5ib2FyZC5pc0RyYXcgPyAnY29sbGFwc2VkJzogJ3Zpc2libGUnO1xuICB9XG4gXG4gIHB1YmxpYyBnZXQgZ2FtZVBhbmVsQ2FwdGlvbigpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmJvYXJkLmlzRHJhdykge1xuICAgICAgcmV0dXJuICdEcmF3JztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuaXNHYW1lV29uID8gJ1dpbm5lcic6ICdOZXh0JztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm91bmRTcXVhcmUoKTogU3F1YXJlIHtcbiAgICBjb25zdCBtaW4gPSAwO1xuICAgIGNvbnN0IG1heCA9IHRoaXMuYm9hcmQuZ2V0RW1wdHlTcXVhcmVzKCkubGVuZ3RoO1xuXG4gICAgaWYobWF4ID4gMCkge1xuICAgICAgY29uc3QgY2hvc2VuVGlsZTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heC1taW4pKTtcbiAgICAgIHJldHVybiB0aGlzLmJvYXJkLmdldEVtcHR5U3F1YXJlcygpW2Nob3NlblRpbGVdO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBpbmNyZW1lbnRXaW5uZXJTY29yZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ib2FyZC5jdXJyZW50U3RhdGUgPT09IFN0YXRlLkNyb3NzKSB7XG4gICAgICB0aGlzLnNwU2NvcmUuY3Jvc3NTY29yZSsrO1xuICAgICAgdGhpcy51cGRhdGVTUFNjb3JlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3BTY29yZS5jaXJjbGVTY29yZSsrO1xuICAgICAgdGhpcy51cGRhdGVTUFNjb3JlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRHYW1lV29uU3RhdGVGcm9tKHNxdWFyZTogU3F1YXJlKTogdm9pZCB7XG4gICAgdGhpcy5ib2FyZC5pc0dhbWVXb24gPSB0aGlzLmJvYXJkLmdldFdpbm5pbmdJbmRleGVzRm9yKHNxdWFyZSkgIT0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLmJvYXJkLmlzR2FtZVdvbilcbiAgICAgIHRoaXMuaW5jcmVtZW50V2lubmVyU2NvcmUoKTtcbiAgfVxufSJdfQ==