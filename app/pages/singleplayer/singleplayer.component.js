"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform = require("platform");
var page_1 = require("ui/page");
var services_1 = require("~/assets/services");
var domain_1 = require("~/assets/domain");
var SinglePlayerComponent = /** @class */ (function () {
    function SinglePlayerComponent(spService, audioService, _page, _navigationService, _popupService) {
        this.spService = spService;
        this.audioService = audioService;
        this._page = _page;
        this._navigationService = _navigationService;
        this._popupService = _popupService;
        // human
        this.huPlayer = "X";
        // ai
        this.aiPlayer = "O";
    }
    SinglePlayerComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        this.makeBoardGridSquared();
    };
    SinglePlayerComponent.prototype.mark = function (square) {
        var _this = this;
        if (!this.spService.sessionGameWon
            && this.spService.board.currentState === domain_1.State.Cross
            && square.state === domain_1.State.Blank) {
            this.audioService.clickSound();
            this.spService.board.mark(square);
            this.updateState(square)
                .then(function () {
                _this.botMark();
            });
        }
    };
    SinglePlayerComponent.prototype.newGame = function (miliSeconds) {
        if (miliSeconds === void 0) { miliSeconds = 2000; }
        this.spService.newGame(miliSeconds);
    };
    Object.defineProperty(SinglePlayerComponent.prototype, "boardSideSpecification", {
        get: function () {
            var specs = [];
            for (var i = 0; i < this.spService.board.boardSize; i++) {
                specs.push('*');
            }
            return specs.join(',');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerComponent.prototype, "gamePanelStateImageVisibility", {
        get: function () {
            return this.spService.gamePanelStateImageVisibility;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerComponent.prototype, "gamePanelCaption", {
        get: function () {
            return this.spService.gamePanelCaption;
        },
        enumerable: true,
        configurable: true
    });
    SinglePlayerComponent.prototype.restartDialog = function () {
        var _this = this;
        this._popupService.confirm('Restart', 'Are you sure you want to restart the game?', 'Yes', 'No')
            .then(function (result) {
            if (result) {
                _this.spService.restart();
            }
        });
    };
    SinglePlayerComponent.prototype.updateState = function (square) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var winningIndexes = _this.spService.board.getWinningIndexesFor(square);
            if (winningIndexes) {
                _this.spService.sessionGameWon = true;
                for (var _i = 0, winningIndexes_1 = winningIndexes; _i < winningIndexes_1.length; _i++) {
                    var index = winningIndexes_1[_i];
                    var view = _this.squareViews[index];
                    view.animate({ backgroundColor: new page_1.Color("#FFFFFF"), duration: 1000 });
                }
                resolve(_this.newGame(2000));
            }
            else if (_this.spService.board.isDraw) {
                var drawScore = _this.spService.board.drawScore;
                drawScore++;
                _this.spService.board.setDrawScore(drawScore);
                resolve(_this.newGame());
            }
            resolve();
        });
    };
    SinglePlayerComponent.prototype.botMark = function () {
        var _this = this;
        var bestSpot = this.miniMax(this.spService.board.calculateBoard(), this.aiPlayer);
        var foundSquare;
        if (this.shouldUseMiniMax()) {
            foundSquare = this.spService.board.getBestSpot(bestSpot.index);
        }
        else {
            foundSquare = this.spService.foundSquare;
        }
        if (foundSquare && !this.spService.sessionGameWon) {
            setTimeout(function () {
                _this.audioService.clickSound();
                _this.spService.board.mark(foundSquare);
                _this.updateState(foundSquare);
            }, 1000);
        }
    };
    SinglePlayerComponent.prototype.shouldUseMiniMax = function () {
        var array = [5, 5, 5, 5, 5, 5, 5, 5, 5, 95];
        var randomChosenNumber = array[Math.floor(Math.random() * (10 - 0))];
        return randomChosenNumber === 5 ? true : false;
    };
    SinglePlayerComponent.prototype.miniMax = function (newBoard, player) {
        //check which spots are available and store them in an object.
        var availSpots = this.emptyIndexies(newBoard);
        if (this.winning(newBoard, this.huPlayer)) {
            return { score: -10 };
        }
        else if (this.winning(newBoard, this.aiPlayer)) {
            return { score: 10 };
        }
        else if (availSpots.length === 0) {
            return { score: 0 };
        }
        var moves = [];
        for (var i = 0; i < availSpots.length; i++) {
            var move = { index: 0, score: 0 };
            move.index = newBoard[availSpots[i]];
            newBoard[availSpots[i]] = player;
            if (player == this.aiPlayer) {
                var result = this.miniMax(newBoard, this.huPlayer);
                move.score = result.score;
            }
            else {
                var result = this.miniMax(newBoard, this.aiPlayer);
                move.score = result.score;
            }
            //reset the spot to empty
            newBoard[availSpots[i]] = move.index;
            // push the object to the array
            moves.push(move);
        }
        var bestMove = this.checkBestMove(player, moves);
        return moves[bestMove];
    };
    SinglePlayerComponent.prototype.checkBestMove = function (player, moves) {
        var bestMove;
        if (player === this.aiPlayer) {
            var bestScore = -10000;
            for (var i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }
        else {
            // else loop over the moves and choose the move with the lowest score
            var bestScore = 10000;
            for (var i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }
        return bestMove;
    };
    SinglePlayerComponent.prototype.emptyIndexies = function (board) {
        return board.filter(function (s) { return s != "O" && s != "X"; });
    };
    SinglePlayerComponent.prototype.winning = function (board, player) {
        if ((board[0] == player && board[1] == player && board[2] == player) ||
            (board[3] == player && board[4] == player && board[5] == player) ||
            (board[6] == player && board[7] == player && board[8] == player) ||
            (board[0] == player && board[3] == player && board[6] == player) ||
            (board[1] == player && board[4] == player && board[7] == player) ||
            (board[2] == player && board[5] == player && board[8] == player) ||
            (board[0] == player && board[4] == player && board[8] == player) ||
            (board[2] == player && board[4] == player && board[6] == player)) {
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(SinglePlayerComponent.prototype, "boardGridView", {
        get: function () {
            return this.boardGrid.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    SinglePlayerComponent.prototype.makeBoardGridSquared = function () {
        var heightOverflow = 120;
        var height = this.screenHeight - heightOverflow;
        var minimumSideDimension = Math.min(this.screenWidth, height);
        this.boardGridView.height = minimumSideDimension;
        this.boardGridView.width = minimumSideDimension;
    };
    Object.defineProperty(SinglePlayerComponent.prototype, "screenWidth", {
        get: function () {
            return platform.screen.mainScreen.widthDIPs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerComponent.prototype, "screenHeight", {
        get: function () {
            return platform.screen.mainScreen.heightDIPs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerComponent.prototype, "squareViews", {
        get: function () {
            return this.squares.map(function (s) { return s.nativeElement; });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChild('boardGrid'),
        __metadata("design:type", core_1.ElementRef)
    ], SinglePlayerComponent.prototype, "boardGrid", void 0);
    __decorate([
        core_1.ViewChildren('square'),
        __metadata("design:type", core_1.QueryList)
    ], SinglePlayerComponent.prototype, "squares", void 0);
    SinglePlayerComponent = __decorate([
        core_1.Component({
            selector: "Singleplayer",
            moduleId: module.id,
            templateUrl: "./singleplayer.component.html"
        }),
        __metadata("design:paramtypes", [services_1.SinglePlayerService,
            services_1.AudioService,
            page_1.Page,
            services_1.NavigationService,
            services_1.PopupService])
    ], SinglePlayerComponent);
    return SinglePlayerComponent;
}());
exports.SinglePlayerComponent = SinglePlayerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbmdsZXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0c7QUFDbEcsbUNBQXFDO0FBSXJDLGdDQUFzQztBQUV0Qyw4Q0FBdUc7QUFDdkcsMENBQXFFO0FBT3JFO0lBU0UsK0JBQ1MsU0FBOEIsRUFDOUIsWUFBMEIsRUFDekIsS0FBVyxFQUNYLGtCQUFxQyxFQUNyQyxhQUEyQjtRQUo1QixjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQVZyQyxRQUFRO1FBQ0QsYUFBUSxHQUFXLEdBQUcsQ0FBQztRQUM5QixLQUFLO1FBQ0UsYUFBUSxHQUFXLEdBQUcsQ0FBQztJQVExQixDQUFDO0lBRUwsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sb0NBQUksR0FBWCxVQUFZLE1BQWM7UUFBMUIsaUJBV0M7UUFWQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYztlQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLEtBQUssY0FBSyxDQUFDLEtBQUs7ZUFDakQsTUFBTSxDQUFDLEtBQUssS0FBSyxjQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNs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QyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNoRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ2hFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUM7WUFDaEUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNoRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ2hFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUM7WUFDaEUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNoRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2hCLENBQUM7SUFDTixDQUFDO0lBRUQsc0JBQVksZ0RBQWE7YUFBekI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFTyxvREFBb0IsR0FBNUI7UUFDRSxJQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7UUFDM0IsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7UUFDbEQsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUM7SUFDbEQsQ0FBQztJQUVELHNCQUFZLDhDQUFXO2FBQXZCO1lBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUM5QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLCtDQUFZO2FBQXhCO1lBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLDhDQUFXO2FBQXZCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLGFBQWEsRUFBZixDQUFlLENBQUMsQ0FBQztRQUNoRCxDQUFDOzs7T0FBQTtJQTlOdUI7UUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7a0NBQW1CLGlCQUFVOzREQUFDO0lBQzdCO1FBQXZCLG1CQUFZLENBQUMsUUFBUSxDQUFDO2tDQUFVLGdCQUFTOzBEQUFhO0lBRjVDLHFCQUFxQjtRQUxqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQzt5Q0FXb0IsOEJBQW1CO1lBQ2hCLHVCQUFZO1lBQ2xCLFdBQUk7WUFDUyw0QkFBaUI7WUFDdEIsdUJBQVk7T0FkMUIscUJBQXFCLENBZ09qQztJQUFELDRCQUFDO0NBQUEsQUFoT0QsSUFnT0M7QUFoT1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tICdwbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL2dyaWQtbGF5b3V0JztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFBhZ2UsIENvbG9yIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlLCBQb3B1cFNlcnZpY2UsIFNpbmdsZVBsYXllclNlcnZpY2UsIEF1ZGlvU2VydmljZSB9IGZyb20gXCJ+L2Fzc2V0cy9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBCb2FyZCwgTWVudUl0ZW1OYW1lLCBTcXVhcmUsIFN0YXRlIH0gZnJvbSBcIn4vYXNzZXRzL2RvbWFpblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJTaW5nbGVwbGF5ZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NpbmdsZXBsYXllci5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVQbGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ2JvYXJkR3JpZCcpIHB1YmxpYyBib2FyZEdyaWQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZHJlbignc3F1YXJlJykgc3F1YXJlczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG5cclxuICAvLyBodW1hblxyXG4gIHB1YmxpYyBodVBsYXllcjogc3RyaW5nID0gXCJYXCI7XHJcbiAgLy8gYWlcclxuICBwdWJsaWMgYWlQbGF5ZXI6IHN0cmluZyA9IFwiT1wiO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBzcFNlcnZpY2U6IFNpbmdsZVBsYXllclNlcnZpY2UsXHJcbiAgICBwdWJsaWMgYXVkaW9TZXJ2aWNlOiBBdWRpb1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9wYWdlOiBQYWdlLFxyXG4gICAgcHJpdmF0ZSBfbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfcG9wdXBTZXJ2aWNlOiBQb3B1cFNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMubWFrZUJvYXJkR3JpZFNxdWFyZWQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYXJrKHNxdWFyZTogU3F1YXJlKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc3BTZXJ2aWNlLnNlc3Npb25HYW1lV29uXHJcbiAgICAgICAgJiYgdGhpcy5zcFNlcnZpY2UuYm9hcmQuY3VycmVudFN0YXRlID09PSBTdGF0ZS5Dcm9zc1xyXG4gICAgICAgICYmIHNxdWFyZS5zdGF0ZSA9PT0gU3RhdGUuQmxhbmspIHtcclxuICAgICAgdGhpcy5hdWRpb1NlcnZpY2UuY2xpY2tTb3VuZCgpO1xyXG4gICAgICB0aGlzLnNwU2VydmljZS5ib2FyZC5tYXJrKHNxdWFyZSk7XHJcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3F1YXJlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuYm90TWFyaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5ld0dhbWUobWlsaVNlY29uZHM6IG51bWJlciA9IDIwMDApOiB2b2lkIHtcclxuICAgIHRoaXMuc3BTZXJ2aWNlLm5ld0dhbWUobWlsaVNlY29uZHMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBib2FyZFNpZGVTcGVjaWZpY2F0aW9uKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgc3BlY3MgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcFNlcnZpY2UuYm9hcmQuYm9hcmRTaXplOyBpKyspIHtcclxuICAgICAgc3BlY3MucHVzaCgnKicpO1xyXG4gICAgfVxyXG4gXHJcbiAgICByZXR1cm4gc3BlY3Muam9pbignLCcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBnYW1lUGFuZWxTdGF0ZUltYWdlVmlzaWJpbGl0eSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BTZXJ2aWNlLmdhbWVQYW5lbFN0YXRlSW1hZ2VWaXNpYmlsaXR5O1xyXG4gIH1cclxuIFxyXG4gIHB1YmxpYyBnZXQgZ2FtZVBhbmVsQ2FwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BTZXJ2aWNlLmdhbWVQYW5lbENhcHRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzdGFydERpYWxvZygpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BvcHVwU2VydmljZS5jb25maXJtKCdSZXN0YXJ0JywgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZXN0YXJ0IHRoZSBnYW1lPycsICdZZXMnLCAnTm8nKVxyXG4gICAgICAudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICB0aGlzLnNwU2VydmljZS5yZXN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlU3RhdGUoc3F1YXJlOiBTcXVhcmUpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgd2lubmluZ0luZGV4ZXM6IG51bWJlcltdID0gdGhpcy5zcFNlcnZpY2UuYm9hcmQuZ2V0V2lubmluZ0luZGV4ZXNGb3Ioc3F1YXJlKTtcclxuXHJcbiAgICAgIGlmICh3aW5uaW5nSW5kZXhlcykge1xyXG4gICAgICAgIHRoaXMuc3BTZXJ2aWNlLnNlc3Npb25HYW1lV29uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggb2Ygd2lubmluZ0luZGV4ZXMpIHtcclxuICAgICAgICAgIGxldCB2aWV3ID0gdGhpcy5zcXVhcmVWaWV3c1tpbmRleF07XHJcbiAgICAgICAgICB2aWV3LmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcIiNGRkZGRkZcIiksIGR1cmF0aW9uOiAxMDAwIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXNvbHZlKHRoaXMubmV3R2FtZSgyMDAwKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zcFNlcnZpY2UuYm9hcmQuaXNEcmF3KSB7XHJcbiAgICAgICAgbGV0IGRyYXdTY29yZSA9IHRoaXMuc3BTZXJ2aWNlLmJvYXJkLmRyYXdTY29yZTtcclxuICAgICAgICBkcmF3U2NvcmUrKztcclxuICAgICAgICB0aGlzLnNwU2VydmljZS5ib2FyZC5zZXREcmF3U2NvcmUoZHJhd1Njb3JlKTtcclxuICAgICAgICByZXNvbHZlKHRoaXMubmV3R2FtZSgpKTtcclxuICAgICAgfVxyXG4gICAgICByZXNvbHZlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYm90TWFyaygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGJlc3RTcG90ID0gdGhpcy5taW5pTWF4KHRoaXMuc3BTZXJ2aWNlLmJvYXJkLmNhbGN1bGF0ZUJvYXJkKCksIHRoaXMuYWlQbGF5ZXIpO1xyXG4gICAgbGV0IGZvdW5kU3F1YXJlOiBTcXVhcmU7XHJcbiAgICBcclxuICAgIGlmKHRoaXMuc2hvdWxkVXNlTWluaU1heCgpKSB7XHJcbiAgICAgIGZvdW5kU3F1YXJlID0gdGhpcy5zcFNlcnZpY2UuYm9hcmQuZ2V0QmVzdFNwb3QoYmVzdFNwb3QuaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm91bmRTcXVhcmUgPSB0aGlzLnNwU2VydmljZS5mb3VuZFNxdWFyZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGZvdW5kU3F1YXJlICYmIXRoaXMuc3BTZXJ2aWNlLnNlc3Npb25HYW1lV29uKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYXVkaW9TZXJ2aWNlLmNsaWNrU291bmQoKTtcclxuICAgICAgICB0aGlzLnNwU2VydmljZS5ib2FyZC5tYXJrKGZvdW5kU3F1YXJlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGZvdW5kU3F1YXJlKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvdWxkVXNlTWluaU1heCgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGFycmF5OiBudW1iZXJbXSA9IFs1LCA1LCA1LCA1LCA1LCA1LCA1LCA1LCA1LCA5NV07XHJcbiAgICBjb25zdCByYW5kb21DaG9zZW5OdW1iZXI6IG51bWJlciA9IGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMC0wKSldO1xyXG5cclxuICAgIHJldHVybiByYW5kb21DaG9zZW5OdW1iZXIgPT09IDUgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1pbmlNYXgobmV3Qm9hcmQ6IGFueVtdLCBwbGF5ZXI6IHN0cmluZyk6IGFueSB7XHJcbiAgICAvL2NoZWNrIHdoaWNoIHNwb3RzIGFyZSBhdmFpbGFibGUgYW5kIHN0b3JlIHRoZW0gaW4gYW4gb2JqZWN0LlxyXG4gICAgY29uc3QgYXZhaWxTcG90cyA9IHRoaXMuZW1wdHlJbmRleGllcyhuZXdCb2FyZCk7XHJcblxyXG4gICAgaWYgKHRoaXMud2lubmluZyhuZXdCb2FyZCwgdGhpcy5odVBsYXllcikpe1xyXG4gICAgICAgIHJldHVybiB7c2NvcmU6LTEwfTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMud2lubmluZyhuZXdCb2FyZCwgdGhpcy5haVBsYXllcikpe1xyXG4gICAgICByZXR1cm4ge3Njb3JlOjEwfTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGF2YWlsU3BvdHMubGVuZ3RoID09PSAwKXtcclxuICAgICAgcmV0dXJuIHtzY29yZTowfTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbW92ZXM6IGFueVtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdmFpbFNwb3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgbGV0IG1vdmUgPSB7aW5kZXg6IDAsIHNjb3JlOiAwfTtcclxuICAgICAgbW92ZS5pbmRleCA9IG5ld0JvYXJkW2F2YWlsU3BvdHNbaV1dO1xyXG5cclxuICAgICAgbmV3Qm9hcmRbYXZhaWxTcG90c1tpXV0gPSBwbGF5ZXI7XHJcblxyXG4gICAgICBpZiAocGxheWVyID09IHRoaXMuYWlQbGF5ZXIpe1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLm1pbmlNYXgobmV3Qm9hcmQsIHRoaXMuaHVQbGF5ZXIpO1xyXG4gICAgICAgIG1vdmUuc2NvcmUgPSByZXN1bHQuc2NvcmU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMubWluaU1heChuZXdCb2FyZCwgdGhpcy5haVBsYXllcik7XHJcbiAgICAgICAgbW92ZS5zY29yZSA9IHJlc3VsdC5zY29yZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9yZXNldCB0aGUgc3BvdCB0byBlbXB0eVxyXG4gICAgICBuZXdCb2FyZFthdmFpbFNwb3RzW2ldXSA9IG1vdmUuaW5kZXg7XHJcblxyXG4gICAgICAvLyBwdXNoIHRoZSBvYmplY3QgdG8gdGhlIGFycmF5XHJcbiAgICAgIG1vdmVzLnB1c2gobW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmVzdE1vdmUgPSB0aGlzLmNoZWNrQmVzdE1vdmUocGxheWVyLCBtb3Zlcyk7XHJcblxyXG4gICAgcmV0dXJuIG1vdmVzW2Jlc3RNb3ZlXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tCZXN0TW92ZShwbGF5ZXI6IGFueSwgbW92ZXM6IGFueSk6IGFueSB7XHJcbiAgICBsZXQgYmVzdE1vdmU7XHJcblxyXG4gICAgaWYocGxheWVyID09PSB0aGlzLmFpUGxheWVyKXtcclxuICAgICAgbGV0IGJlc3RTY29yZSA9IC0xMDAwMDtcclxuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG1vdmVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZihtb3Zlc1tpXS5zY29yZSA+IGJlc3RTY29yZSl7XHJcbiAgICAgICAgICBiZXN0U2NvcmUgPSBtb3Zlc1tpXS5zY29yZTtcclxuICAgICAgICAgIGJlc3RNb3ZlID0gaTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGVsc2UgbG9vcCBvdmVyIHRoZSBtb3ZlcyBhbmQgY2hvb3NlIHRoZSBtb3ZlIHdpdGggdGhlIGxvd2VzdCBzY29yZVxyXG4gICAgICBsZXQgYmVzdFNjb3JlID0gMTAwMDA7XHJcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBtb3Zlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChtb3Zlc1tpXS5zY29yZSA8IGJlc3RTY29yZSkge1xyXG4gICAgICAgICAgYmVzdFNjb3JlID0gbW92ZXNbaV0uc2NvcmU7XHJcbiAgICAgICAgICBiZXN0TW92ZSA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJlc3RNb3ZlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbXB0eUluZGV4aWVzKGJvYXJkOiBhbnlbXSk6IGFueVtdIHtcclxuICAgIHJldHVybiBib2FyZC5maWx0ZXIocyA9PiBzICE9IFwiT1wiICYmIHMgIT0gXCJYXCIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3aW5uaW5nKGJvYXJkLCBwbGF5ZXIpe1xyXG4gICAgaWYgKChib2FyZFswXSA9PSBwbGF5ZXIgJiYgYm9hcmRbMV0gPT0gcGxheWVyICYmIGJvYXJkWzJdID09IHBsYXllcikgfHxcclxuICAgICAgICAoYm9hcmRbM10gPT0gcGxheWVyICYmIGJvYXJkWzRdID09IHBsYXllciAmJiBib2FyZFs1XSA9PSBwbGF5ZXIpIHx8XHJcbiAgICAgICAgKGJvYXJkWzZdID09IHBsYXllciAmJiBib2FyZFs3XSA9PSBwbGF5ZXIgJiYgYm9hcmRbOF0gPT0gcGxheWVyKSB8fFxyXG4gICAgICAgIChib2FyZFswXSA9PSBwbGF5ZXIgJiYgYm9hcmRbM10gPT0gcGxheWVyICYmIGJvYXJkWzZdID09IHBsYXllcikgfHxcclxuICAgICAgICAoYm9hcmRbMV0gPT0gcGxheWVyICYmIGJvYXJkWzRdID09IHBsYXllciAmJiBib2FyZFs3XSA9PSBwbGF5ZXIpIHx8XHJcbiAgICAgICAgKGJvYXJkWzJdID09IHBsYXllciAmJiBib2FyZFs1XSA9PSBwbGF5ZXIgJiYgYm9hcmRbOF0gPT0gcGxheWVyKSB8fFxyXG4gICAgICAgIChib2FyZFswXSA9PSBwbGF5ZXIgJiYgYm9hcmRbNF0gPT0gcGxheWVyICYmIGJvYXJkWzhdID09IHBsYXllcikgfHxcclxuICAgICAgICAoYm9hcmRbMl0gPT0gcGxheWVyICYmIGJvYXJkWzRdID09IHBsYXllciAmJiBib2FyZFs2XSA9PSBwbGF5ZXIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBib2FyZEdyaWRWaWV3KCk6IEdyaWRMYXlvdXQge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmRHcmlkLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VCb2FyZEdyaWRTcXVhcmVkKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaGVpZ2h0T3ZlcmZsb3cgPSAxMjA7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnNjcmVlbkhlaWdodCAtIGhlaWdodE92ZXJmbG93O1xyXG4gICAgY29uc3QgbWluaW11bVNpZGVEaW1lbnNpb24gPSBNYXRoLm1pbih0aGlzLnNjcmVlbldpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy5ib2FyZEdyaWRWaWV3LmhlaWdodCA9IG1pbmltdW1TaWRlRGltZW5zaW9uO1xyXG4gICAgdGhpcy5ib2FyZEdyaWRWaWV3LndpZHRoID0gbWluaW11bVNpZGVEaW1lbnNpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBzY3JlZW5XaWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcclxuICB9XHJcbiBcclxuICBwcml2YXRlIGdldCBzY3JlZW5IZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBwbGF0Zm9ybS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgc3F1YXJlVmlld3MoKTogQXJyYXk8U3RhY2tMYXlvdXQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNxdWFyZXMubWFwKHMgPT4gcy5uYXRpdmVFbGVtZW50KTtcclxuICB9XHJcbn1cclxuIl19