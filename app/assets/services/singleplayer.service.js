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
