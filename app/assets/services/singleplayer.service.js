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
            this.leaderBoard.spScore.crossScore++;
            this.leaderBoard.updateSPScore();
        }
        else {
            this.leaderBoard.spScore.circleScore++;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGVwbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUVqRCwwQ0FBcUU7QUFHckUsNkRBQTJEO0FBQzNELDhDQUFpRDtBQUdqRDtJQUlFLDZCQUEyQixZQUEwQixFQUFVLElBQVksRUFBVSxXQUErQjtRQUF6RixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFIN0csbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsVUFBSyxHQUFVLElBQUksY0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXFGLENBQUM7SUFFbEgscUNBQU8sR0FBZDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVNLGtDQUFJLEdBQVgsVUFBWSxNQUFjO1FBQ3hCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRU0scUNBQU8sR0FBZCxVQUFlLFdBQTBCO1FBQXpDLGlCQUtDO1FBTGMsNEJBQUEsRUFBQSxrQkFBMEI7UUFDdkMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QixDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELHNCQUFXLDhEQUE2QjthQUF4QztZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxpREFBZ0I7YUFBM0I7WUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDaEIsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0Q0FBVzthQUF0QjtZQUNFLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBRWhELEVBQUUsQ0FBQSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRU8sa0RBQW9CLEdBQTVCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEtBQUssY0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRU8saURBQW1CLEdBQTNCLFVBQTRCLE1BQWM7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUM7UUFDNUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQS9EVSxtQkFBbUI7UUFEL0IsaUJBQVUsRUFBRTt5Q0FLOEIsdUJBQVksRUFBZ0IsYUFBTSxFQUF1Qix3Q0FBa0I7T0FKekcsbUJBQW1CLENBZ0UvQjtJQUFELDBCQUFDO0NBQUEsQUFoRUQsSUFnRUM7QUFoRVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQm9hcmQsIE1lbnVJdGVtTmFtZSwgU3F1YXJlLCBTdGF0ZSB9IGZyb20gXCJ+L2Fzc2V0cy9kb21haW5cIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQvc3RhY2stbGF5b3V0JztcclxuaW1wb3J0IHsgTGVhZGVyQm9hcmRTZXJ2aWNlIH0gZnJvbSAnLi9sZWFkZXJib2FyZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9wdXBTZXJ2aWNlIH0gZnJvbSAnfi9hc3NldHMvc2VydmljZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2luZ2xlUGxheWVyU2VydmljZSB7XHJcbiAgcHVibGljIHNlc3Npb25HYW1lV29uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGJvYXJkOiBCb2FyZCA9IG5ldyBCb2FyZCgzKTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcG9wdXBTZXJ2aWNlOiBQb3B1cFNlcnZpY2UsIHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGxlYWRlckJvYXJkOiBMZWFkZXJCb2FyZFNlcnZpY2UpIHsgfVxyXG5cclxuICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMubmV3R2FtZSgwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYXJrKHNxdWFyZTogU3F1YXJlKTogdm9pZCB7XHJcbiAgICBpZihzcXVhcmUuY2FuQ2hhbmdlU3RhdGUpIHtcclxuICAgICAgc3F1YXJlLnN0YXRlID0gdGhpcy5ib2FyZC5jdXJyZW50U3RhdGU7XHJcbiAgICAgIHRoaXMuYm9hcmQubWFya3NDb3VudCsrO1xyXG4gICAgICB0aGlzLnNldEdhbWVXb25TdGF0ZUZyb20oc3F1YXJlKTtcclxuICAgICAgdGhpcy5ib2FyZC5jaGFuZ2VDdXJyZW50U3RhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZXdHYW1lKG1pbGlTZWNvbmRzOiBudW1iZXIgPSAyMDAwKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXNzaW9uR2FtZVdvbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmJvYXJkLnN0YXJ0TmV3R2FtZSgpO1xyXG4gICAgfSwgbWlsaVNlY29uZHMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBnYW1lUGFuZWxTdGF0ZUltYWdlVmlzaWJpbGl0eSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuaXNEcmF3ID8gJ2NvbGxhcHNlZCc6ICd2aXNpYmxlJztcclxuICB9XHJcbiBcclxuICBwdWJsaWMgZ2V0IGdhbWVQYW5lbENhcHRpb24oKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmJvYXJkLmlzRHJhdykge1xyXG4gICAgICByZXR1cm4gJ0RyYXcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuaXNHYW1lV29uID8gJ1dpbm5lcic6ICdOZXh0JztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZm91bmRTcXVhcmUoKTogU3F1YXJlIHtcclxuICAgIGNvbnN0IG1pbiA9IDA7XHJcbiAgICBjb25zdCBtYXggPSB0aGlzLmJvYXJkLmdldEVtcHR5U3F1YXJlcygpLmxlbmd0aDtcclxuXHJcbiAgICBpZihtYXggPiAwKSB7XHJcbiAgICAgIGNvbnN0IGNob3NlblRpbGU6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXgtbWluKSk7XHJcbiAgICAgIHJldHVybiB0aGlzLmJvYXJkLmdldEVtcHR5U3F1YXJlcygpW2Nob3NlblRpbGVdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbmNyZW1lbnRXaW5uZXJTY29yZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmJvYXJkLmN1cnJlbnRTdGF0ZSA9PT0gU3RhdGUuQ3Jvc3MpIHtcclxuICAgICAgdGhpcy5sZWFkZXJCb2FyZC5zcFNjb3JlLmNyb3NzU2NvcmUrKztcclxuICAgICAgdGhpcy5sZWFkZXJCb2FyZC51cGRhdGVTUFNjb3JlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxlYWRlckJvYXJkLnNwU2NvcmUuY2lyY2xlU2NvcmUrKztcclxuICAgICAgdGhpcy5sZWFkZXJCb2FyZC51cGRhdGVTUFNjb3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEdhbWVXb25TdGF0ZUZyb20oc3F1YXJlOiBTcXVhcmUpOiB2b2lkIHtcclxuICAgIHRoaXMuYm9hcmQuaXNHYW1lV29uID0gdGhpcy5ib2FyZC5nZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpICE9IHVuZGVmaW5lZDtcclxuICAgIGlmICh0aGlzLmJvYXJkLmlzR2FtZVdvbilcclxuICAgICAgdGhpcy5pbmNyZW1lbnRXaW5uZXJTY29yZSgpO1xyXG4gIH1cclxufSJdfQ==