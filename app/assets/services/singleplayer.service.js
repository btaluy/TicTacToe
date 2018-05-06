"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_audio_1 = require("nativescript-audio");
var domain_1 = require("~/assets/domain");
var SinglePlayerService = /** @class */ (function () {
    function SinglePlayerService() {
        this.sessionGameWon = false;
        this.board = new domain_1.Board(3);
        this._player = new nativescript_audio_1.TNSPlayer();
        this._player.initFromFile({
            audioFile: '~/assets/sound/click.mp3',
            loop: false
        });
    }
    SinglePlayerService.prototype.clickSound = function () {
        this._player.pause();
        this._player.seekTo(0);
        this._player.play();
    };
    SinglePlayerService.prototype.restart = function () {
        this.newGame(0);
        this.board.setCircleScore(0);
        this.board.setCrossScore(0);
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SinglePlayerService);
    return SinglePlayerService;
}());
exports.SinglePlayerService = SinglePlayerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGVwbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6Qyx5REFBK0M7QUFFL0MsMENBQXFFO0FBS3JFO0lBTUU7UUFMTyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxVQUFLLEdBQVUsSUFBSSxjQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFLakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLDhCQUFTLEVBQUUsQ0FBQztRQUUvQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUN4QixTQUFTLEVBQUUsMEJBQTBCO1lBQ3JDLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdNLHdDQUFVLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxxQ0FBTyxHQUFkO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0scUNBQU8sR0FBZCxVQUFlLFdBQTBCO1FBQXpDLGlCQUtDO1FBTGMsNEJBQUEsRUFBQSxrQkFBMEI7UUFDdkMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QixDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELHNCQUFXLDhEQUE2QjthQUF4QztZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxpREFBZ0I7YUFBM0I7WUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDaEIsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFDekQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0Q0FBVzthQUF0QjtZQUNFLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBRWhELEVBQUUsQ0FBQSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFDQSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBdkRVLG1CQUFtQjtRQUQvQixpQkFBVSxFQUFFOztPQUNBLG1CQUFtQixDQXdEL0I7SUFBRCwwQkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFROU1BsYXllciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hdWRpbyc7XHJcblxyXG5pbXBvcnQgeyBCb2FyZCwgTWVudUl0ZW1OYW1lLCBTcXVhcmUsIFN0YXRlIH0gZnJvbSBcIn4vYXNzZXRzL2RvbWFpblwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2luZ2xlUGxheWVyU2VydmljZSB7XHJcbiAgcHVibGljIHNlc3Npb25HYW1lV29uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGJvYXJkOiBCb2FyZCA9IG5ldyBCb2FyZCgzKTtcclxuXHJcbiAgcHJpdmF0ZSBfcGxheWVyOiBUTlNQbGF5ZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3BsYXllciA9IG5ldyBUTlNQbGF5ZXIoKTtcclxuXHJcbiAgICB0aGlzLl9wbGF5ZXIuaW5pdEZyb21GaWxlKHtcclxuICAgICAgYXVkaW9GaWxlOiAnfi9hc3NldHMvc291bmQvY2xpY2subXAzJyxcclxuICAgICAgbG9vcDogZmFsc2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBjbGlja1NvdW5kKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcGxheWVyLnBhdXNlKCk7XHJcbiAgICB0aGlzLl9wbGF5ZXIuc2Vla1RvKDApO1xyXG4gICAgdGhpcy5fcGxheWVyLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZXdHYW1lKDApO1xyXG4gICAgdGhpcy5ib2FyZC5zZXRDaXJjbGVTY29yZSgwKTtcclxuICAgIHRoaXMuYm9hcmQuc2V0Q3Jvc3NTY29yZSgwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZXdHYW1lKG1pbGlTZWNvbmRzOiBudW1iZXIgPSAyMDAwKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXNzaW9uR2FtZVdvbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmJvYXJkLnN0YXJ0TmV3R2FtZSgpO1xyXG4gICAgfSwgbWlsaVNlY29uZHMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBnYW1lUGFuZWxTdGF0ZUltYWdlVmlzaWJpbGl0eSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuaXNEcmF3ID8gJ2NvbGxhcHNlZCc6ICd2aXNpYmxlJztcclxuICB9XHJcbiBcclxuICBwdWJsaWMgZ2V0IGdhbWVQYW5lbENhcHRpb24oKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmJvYXJkLmlzRHJhdykge1xyXG4gICAgICByZXR1cm4gJ0RyYXcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuaXNHYW1lV29uID8gJ1dpbm5lcic6ICdOZXh0IHRvIHBsYXknO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBmb3VuZFNxdWFyZSgpOiBTcXVhcmUge1xyXG4gICAgY29uc3QgbWluID0gMDtcclxuICAgIGNvbnN0IG1heCA9IHRoaXMuYm9hcmQuZ2V0RW1wdHlTcXVhcmVzKCkubGVuZ3RoO1xyXG5cclxuICAgIGlmKG1heCA+IDApIHtcclxuICAgICAgY29uc3QgY2hvc2VuVGlsZTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heC1taW4pKTtcclxuICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0RW1wdHlTcXVhcmVzKClbY2hvc2VuVGlsZV07XHJcbiAgICB9XHJcbiAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn0iXX0=