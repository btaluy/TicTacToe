"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var domain_1 = require("~/assets/domain");
var SinglePlayerService = /** @class */ (function () {
    function SinglePlayerService() {
        this.sessionGameWon = false;
        this.board = new domain_1.Board(3);
    }
    SinglePlayerService.prototype.restart = function () {
        this.newGame(0);
        this.board.setCircleScore(0);
        this.board.setCrossScore(0);
        this.board.setDrawScore(0);
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
    SinglePlayerService = __decorate([
        core_1.Injectable()
    ], SinglePlayerService);
    return SinglePlayerService;
}());
exports.SinglePlayerService = SinglePlayerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGVwbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QywwQ0FBcUU7QUFLckU7SUFEQTtRQUVTLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLFVBQUssR0FBVSxJQUFJLGNBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQXNDckMsQ0FBQztJQXBDUSxxQ0FBTyxHQUFkO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0scUNBQU8sR0FBZCxVQUFlLFdBQTBCO1FBQXpDLGlCQUtDO1FBTGMsNEJBQUEsRUFBQSxrQkFBMEI7UUFDdkMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QixDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELHNCQUFXLDhEQUE2QjthQUF4QztZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxpREFBZ0I7YUFBM0I7WUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDaEIsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0Q0FBVzthQUF0QjtZQUNFLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBRWhELEVBQUUsQ0FBQSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBdkNVLG1CQUFtQjtRQUQvQixpQkFBVSxFQUFFO09BQ0EsbUJBQW1CLENBd0MvQjtJQUFELDBCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQm9hcmQsIE1lbnVJdGVtTmFtZSwgU3F1YXJlLCBTdGF0ZSB9IGZyb20gXCJ+L2Fzc2V0cy9kb21haW5cIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2luZ2xlUGxheWVyU2VydmljZSB7XG4gIHB1YmxpYyBzZXNzaW9uR2FtZVdvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgYm9hcmQ6IEJvYXJkID0gbmV3IEJvYXJkKDMpO1xuXG4gIHB1YmxpYyByZXN0YXJ0KCk6IHZvaWQge1xuICAgIHRoaXMubmV3R2FtZSgwKTtcbiAgICB0aGlzLmJvYXJkLnNldENpcmNsZVNjb3JlKDApO1xuICAgIHRoaXMuYm9hcmQuc2V0Q3Jvc3NTY29yZSgwKTtcbiAgICB0aGlzLmJvYXJkLnNldERyYXdTY29yZSgwKTtcbiAgfVxuXG4gIHB1YmxpYyBuZXdHYW1lKG1pbGlTZWNvbmRzOiBudW1iZXIgPSAyMDAwKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNlc3Npb25HYW1lV29uID0gZmFsc2U7XG4gICAgICB0aGlzLmJvYXJkLnN0YXJ0TmV3R2FtZSgpO1xuICAgIH0sIG1pbGlTZWNvbmRzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZ2FtZVBhbmVsU3RhdGVJbWFnZVZpc2liaWxpdHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5ib2FyZC5pc0RyYXcgPyAnY29sbGFwc2VkJzogJ3Zpc2libGUnO1xuICB9XG4gXG4gIHB1YmxpYyBnZXQgZ2FtZVBhbmVsQ2FwdGlvbigpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmJvYXJkLmlzRHJhdykge1xuICAgICAgcmV0dXJuICdEcmF3JztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuaXNHYW1lV29uID8gJ1dpbm5lcic6ICdOZXh0JztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm91bmRTcXVhcmUoKTogU3F1YXJlIHtcbiAgICBjb25zdCBtaW4gPSAwO1xuICAgIGNvbnN0IG1heCA9IHRoaXMuYm9hcmQuZ2V0RW1wdHlTcXVhcmVzKCkubGVuZ3RoO1xuXG4gICAgaWYobWF4ID4gMCkge1xuICAgICAgY29uc3QgY2hvc2VuVGlsZTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heC1taW4pKTtcbiAgICAgIHJldHVybiB0aGlzLmJvYXJkLmdldEVtcHR5U3F1YXJlcygpW2Nob3NlblRpbGVdO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59Il19