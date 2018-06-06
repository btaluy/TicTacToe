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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGVwbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUVqRCwwQ0FBcUU7QUFHckUsNkRBQTJEO0FBQzNELDhDQUFpRDtBQUdqRDtJQUlFLDZCQUEyQixZQUEwQixFQUFVLElBQVksRUFBVSxXQUErQjtRQUF6RixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFIN0csbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsVUFBSyxHQUFVLElBQUksY0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXFGLENBQUM7SUFFbEgscUNBQU8sR0FBZDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVNLGtDQUFJLEdBQVgsVUFBWSxNQUFjO1FBQ3hCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRU0scUNBQU8sR0FBZCxVQUFlLFdBQTBCO1FBQXpDLGlCQUtDO1FBTGMsNEJBQUEsRUFBQSxrQkFBMEI7UUFDdkMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QixDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELHNCQUFXLDhEQUE2QjthQUF4QztZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxpREFBZ0I7YUFBM0I7WUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDaEIsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0Q0FBVzthQUF0QjtZQUNFLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBRWhELEVBQUUsQ0FBQSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRU8sa0RBQW9CLEdBQTVCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEtBQUssY0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRU8saURBQW1CLEdBQTNCLFVBQTRCLE1BQWM7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUM7UUFDNUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQS9EVSxtQkFBbUI7UUFEL0IsaUJBQVUsRUFBRTt5Q0FLOEIsdUJBQVksRUFBZ0IsYUFBTSxFQUF1Qix3Q0FBa0I7T0FKekcsbUJBQW1CLENBZ0UvQjtJQUFELDBCQUFDO0NBQUEsQUFoRUQsSUFnRUM7QUFoRVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCb2FyZCwgTWVudUl0ZW1OYW1lLCBTcXVhcmUsIFN0YXRlIH0gZnJvbSBcIn4vYXNzZXRzL2RvbWFpblwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0L3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBMZWFkZXJCb2FyZFNlcnZpY2UgfSBmcm9tICcuL2xlYWRlcmJvYXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9wdXBTZXJ2aWNlIH0gZnJvbSAnfi9hc3NldHMvc2VydmljZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2luZ2xlUGxheWVyU2VydmljZSB7XG4gIHB1YmxpYyBzZXNzaW9uR2FtZVdvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgYm9hcmQ6IEJvYXJkID0gbmV3IEJvYXJkKDMpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvcHVwU2VydmljZTogUG9wdXBTZXJ2aWNlLCBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBsZWFkZXJCb2FyZDogTGVhZGVyQm9hcmRTZXJ2aWNlKSB7IH1cblxuICBwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLm5ld0dhbWUoMCk7XG4gIH1cblxuICBwdWJsaWMgbWFyayhzcXVhcmU6IFNxdWFyZSk6IHZvaWQge1xuICAgIGlmKHNxdWFyZS5jYW5DaGFuZ2VTdGF0ZSkge1xuICAgICAgc3F1YXJlLnN0YXRlID0gdGhpcy5ib2FyZC5jdXJyZW50U3RhdGU7XG4gICAgICB0aGlzLmJvYXJkLm1hcmtzQ291bnQrKztcbiAgICAgIHRoaXMuc2V0R2FtZVdvblN0YXRlRnJvbShzcXVhcmUpO1xuICAgICAgdGhpcy5ib2FyZC5jaGFuZ2VDdXJyZW50U3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmV3R2FtZShtaWxpU2Vjb25kczogbnVtYmVyID0gMjAwMCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXNzaW9uR2FtZVdvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5ib2FyZC5zdGFydE5ld0dhbWUoKTtcbiAgICB9LCBtaWxpU2Vjb25kcyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGdhbWVQYW5lbFN0YXRlSW1hZ2VWaXNpYmlsaXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuaXNEcmF3ID8gJ2NvbGxhcHNlZCc6ICd2aXNpYmxlJztcbiAgfVxuIFxuICBwdWJsaWMgZ2V0IGdhbWVQYW5lbENhcHRpb24oKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5ib2FyZC5pc0RyYXcpIHtcbiAgICAgIHJldHVybiAnRHJhdyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmJvYXJkLmlzR2FtZVdvbiA/ICdXaW5uZXInOiAnTmV4dCc7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvdW5kU3F1YXJlKCk6IFNxdWFyZSB7XG4gICAgY29uc3QgbWluID0gMDtcbiAgICBjb25zdCBtYXggPSB0aGlzLmJvYXJkLmdldEVtcHR5U3F1YXJlcygpLmxlbmd0aDtcblxuICAgIGlmKG1heCA+IDApIHtcbiAgICAgIGNvbnN0IGNob3NlblRpbGU6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXgtbWluKSk7XG4gICAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXRFbXB0eVNxdWFyZXMoKVtjaG9zZW5UaWxlXTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgaW5jcmVtZW50V2lubmVyU2NvcmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYm9hcmQuY3VycmVudFN0YXRlID09PSBTdGF0ZS5Dcm9zcykge1xuICAgICAgdGhpcy5sZWFkZXJCb2FyZC5zcFNjb3JlLmNyb3NzU2NvcmUrKztcbiAgICAgIHRoaXMubGVhZGVyQm9hcmQudXBkYXRlU1BTY29yZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxlYWRlckJvYXJkLnNwU2NvcmUuY2lyY2xlU2NvcmUrKztcbiAgICAgIHRoaXMubGVhZGVyQm9hcmQudXBkYXRlU1BTY29yZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0R2FtZVdvblN0YXRlRnJvbShzcXVhcmU6IFNxdWFyZSk6IHZvaWQge1xuICAgIHRoaXMuYm9hcmQuaXNHYW1lV29uID0gdGhpcy5ib2FyZC5nZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpICE9IHVuZGVmaW5lZDtcbiAgICBpZiAodGhpcy5ib2FyZC5pc0dhbWVXb24pXG4gICAgICB0aGlzLmluY3JlbWVudFdpbm5lclNjb3JlKCk7XG4gIH1cbn0iXX0=