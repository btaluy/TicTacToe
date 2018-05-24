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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbmdsZXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0c7QUFDbEcsbUNBQXFDO0FBSXJDLGdDQUFzQztBQUV0Qyw4Q0FBdUc7QUFDdkcsMENBQXFFO0FBT3JFO0lBU0UsK0JBQ1MsU0FBOEIsRUFDOUIsWUFBMEIsRUFDekIsS0FBVyxFQUNYLGtCQUFxQyxFQUNyQyxhQUEyQjtRQUo1QixjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQVZyQyxRQUFRO1FBQ0QsYUFBUSxHQUFXLEdBQUcsQ0FBQztRQUM5QixLQUFLO1FBQ0UsYUFBUSxHQUFXLEdBQUcsQ0FBQztJQVExQixDQUFDO0lBRUwsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sb0NBQUksR0FBWCxVQUFZLE1BQWM7UUFBMUIsaUJBV0M7UUFWQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYztlQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLEtBQUssY0FBSyxDQUFDLEtBQUs7ZUFDakQsTUFBTSxDQUFDLEtBQUssS0FBSyxjQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNs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QyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNoRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ2hFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUM7WUFDaEUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNoRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ2hFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUM7WUFDaEUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNoRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2hCLENBQUM7SUFDTixDQUFDO0lBRUQsc0JBQVksZ0RBQWE7YUFBekI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFTyxvREFBb0IsR0FBNUI7UUFDRSxJQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7UUFDM0IsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7UUFDbEQsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUM7SUFDbEQsQ0FBQztJQUVELHNCQUFZLDhDQUFXO2FBQXZCO1lBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUM5QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLCtDQUFZO2FBQXhCO1lBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLDhDQUFXO2FBQXZCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLGFBQWEsRUFBZixDQUFlLENBQUMsQ0FBQztRQUNoRCxDQUFDOzs7T0FBQTtJQTlOdUI7UUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7a0NBQW1CLGlCQUFVOzREQUFDO0lBQzdCO1FBQXZCLG1CQUFZLENBQUMsUUFBUSxDQUFDO2tDQUFVLGdCQUFTOzBEQUFhO0lBRjVDLHFCQUFxQjtRQUxqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQzt5Q0FXb0IsOEJBQW1CO1lBQ2hCLHVCQUFZO1lBQ2xCLFdBQUk7WUFDUyw0QkFBaUI7WUFDdEIsdUJBQVk7T0FkMUIscUJBQXFCLENBZ09qQztJQUFELDRCQUFDO0NBQUEsQUFoT0QsSUFnT0M7QUFoT1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gJ3VpL2xheW91dHMvZ3JpZC1sYXlvdXQnO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSwgQ29sb3IgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSwgUG9wdXBTZXJ2aWNlLCBTaW5nbGVQbGF5ZXJTZXJ2aWNlLCBBdWRpb1NlcnZpY2UgfSBmcm9tIFwifi9hc3NldHMvc2VydmljZXNcIjtcbmltcG9ydCB7IEJvYXJkLCBNZW51SXRlbU5hbWUsIFNxdWFyZSwgU3RhdGUgfSBmcm9tIFwifi9hc3NldHMvZG9tYWluXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlNpbmdsZXBsYXllclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zaW5nbGVwbGF5ZXIuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBTaW5nbGVQbGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdib2FyZEdyaWQnKSBwdWJsaWMgYm9hcmRHcmlkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkcmVuKCdzcXVhcmUnKSBzcXVhcmVzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG5cbiAgLy8gaHVtYW5cbiAgcHVibGljIGh1UGxheWVyOiBzdHJpbmcgPSBcIlhcIjtcbiAgLy8gYWlcbiAgcHVibGljIGFpUGxheWVyOiBzdHJpbmcgPSBcIk9cIjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc3BTZXJ2aWNlOiBTaW5nbGVQbGF5ZXJTZXJ2aWNlLFxuICAgIHB1YmxpYyBhdWRpb1NlcnZpY2U6IEF1ZGlvU2VydmljZSxcbiAgICBwcml2YXRlIF9wYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgX25hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9wb3B1cFNlcnZpY2U6IFBvcHVwU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLm1ha2VCb2FyZEdyaWRTcXVhcmVkKCk7XG4gIH1cblxuICBwdWJsaWMgbWFyayhzcXVhcmU6IFNxdWFyZSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zcFNlcnZpY2Uuc2Vzc2lvbkdhbWVXb25cbiAgICAgICAgJiYgdGhpcy5zcFNlcnZpY2UuYm9hcmQuY3VycmVudFN0YXRlID09PSBTdGF0ZS5Dcm9zc1xuICAgICAgICAmJiBzcXVhcmUuc3RhdGUgPT09IFN0YXRlLkJsYW5rKSB7XG4gICAgICB0aGlzLmF1ZGlvU2VydmljZS5jbGlja1NvdW5kKCk7XG4gICAgICB0aGlzLnNwU2VydmljZS5ib2FyZC5tYXJrKHNxdWFyZSk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKHNxdWFyZSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYm90TWFyaygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmV3R2FtZShtaWxpU2Vjb25kczogbnVtYmVyID0gMjAwMCk6IHZvaWQge1xuICAgIHRoaXMuc3BTZXJ2aWNlLm5ld0dhbWUobWlsaVNlY29uZHMpO1xuICB9XG5cbiAgcHVibGljIGdldCBib2FyZFNpZGVTcGVjaWZpY2F0aW9uKCk6IHN0cmluZyB7XG4gICAgbGV0IHNwZWNzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwU2VydmljZS5ib2FyZC5ib2FyZFNpemU7IGkrKykge1xuICAgICAgc3BlY3MucHVzaCgnKicpO1xuICAgIH1cbiBcbiAgICByZXR1cm4gc3BlY3Muam9pbignLCcpO1xuICB9XG5cbiAgcHVibGljIGdldCBnYW1lUGFuZWxTdGF0ZUltYWdlVmlzaWJpbGl0eSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNwU2VydmljZS5nYW1lUGFuZWxTdGF0ZUltYWdlVmlzaWJpbGl0eTtcbiAgfVxuIFxuICBwdWJsaWMgZ2V0IGdhbWVQYW5lbENhcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcFNlcnZpY2UuZ2FtZVBhbmVsQ2FwdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyByZXN0YXJ0RGlhbG9nKCk6IHZvaWQge1xuICAgIHRoaXMuX3BvcHVwU2VydmljZS5jb25maXJtKCdSZXN0YXJ0JywgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZXN0YXJ0IHRoZSBnYW1lPycsICdZZXMnLCAnTm8nKVxuICAgICAgLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLnNwU2VydmljZS5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdGF0ZShzcXVhcmU6IFNxdWFyZSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHdpbm5pbmdJbmRleGVzOiBudW1iZXJbXSA9IHRoaXMuc3BTZXJ2aWNlLmJvYXJkLmdldFdpbm5pbmdJbmRleGVzRm9yKHNxdWFyZSk7XG5cbiAgICAgIGlmICh3aW5uaW5nSW5kZXhlcykge1xuICAgICAgICB0aGlzLnNwU2VydmljZS5zZXNzaW9uR2FtZVdvbiA9IHRydWU7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggb2Ygd2lubmluZ0luZGV4ZXMpIHtcbiAgICAgICAgICBsZXQgdmlldyA9IHRoaXMuc3F1YXJlVmlld3NbaW5kZXhdO1xuICAgICAgICAgIHZpZXcuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwiI0ZGRkZGRlwiKSwgZHVyYXRpb246IDEwMDAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlc29sdmUodGhpcy5uZXdHYW1lKDIwMDApKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zcFNlcnZpY2UuYm9hcmQuaXNEcmF3KSB7XG4gICAgICAgIGxldCBkcmF3U2NvcmUgPSB0aGlzLnNwU2VydmljZS5ib2FyZC5kcmF3U2NvcmU7XG4gICAgICAgIGRyYXdTY29yZSsrO1xuICAgICAgICB0aGlzLnNwU2VydmljZS5ib2FyZC5zZXREcmF3U2NvcmUoZHJhd1Njb3JlKTtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLm5ld0dhbWUoKSk7XG4gICAgICB9XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGJvdE1hcmsoKTogdm9pZCB7XG4gICAgY29uc3QgYmVzdFNwb3QgPSB0aGlzLm1pbmlNYXgodGhpcy5zcFNlcnZpY2UuYm9hcmQuY2FsY3VsYXRlQm9hcmQoKSwgdGhpcy5haVBsYXllcik7XG4gICAgbGV0IGZvdW5kU3F1YXJlOiBTcXVhcmU7XG4gICAgXG4gICAgaWYodGhpcy5zaG91bGRVc2VNaW5pTWF4KCkpIHtcbiAgICAgIGZvdW5kU3F1YXJlID0gdGhpcy5zcFNlcnZpY2UuYm9hcmQuZ2V0QmVzdFNwb3QoYmVzdFNwb3QuaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3VuZFNxdWFyZSA9IHRoaXMuc3BTZXJ2aWNlLmZvdW5kU3F1YXJlO1xuICAgIH1cbiAgICBcbiAgICBpZiAoZm91bmRTcXVhcmUgJiYhdGhpcy5zcFNlcnZpY2Uuc2Vzc2lvbkdhbWVXb24pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmF1ZGlvU2VydmljZS5jbGlja1NvdW5kKCk7XG4gICAgICAgIHRoaXMuc3BTZXJ2aWNlLmJvYXJkLm1hcmsoZm91bmRTcXVhcmUpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGZvdW5kU3F1YXJlKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkVXNlTWluaU1heCgpOiBib29sZWFuIHtcbiAgICBjb25zdCBhcnJheTogbnVtYmVyW10gPSBbNSwgNSwgNSwgNSwgNSwgNSwgNSwgNSwgNSwgOTVdO1xuICAgIGNvbnN0IHJhbmRvbUNob3Nlbk51bWJlcjogbnVtYmVyID0gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwLTApKV07XG5cbiAgICByZXR1cm4gcmFuZG9tQ2hvc2VuTnVtYmVyID09PSA1ID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBtaW5pTWF4KG5ld0JvYXJkOiBhbnlbXSwgcGxheWVyOiBzdHJpbmcpOiBhbnkge1xuICAgIC8vY2hlY2sgd2hpY2ggc3BvdHMgYXJlIGF2YWlsYWJsZSBhbmQgc3RvcmUgdGhlbSBpbiBhbiBvYmplY3QuXG4gICAgY29uc3QgYXZhaWxTcG90cyA9IHRoaXMuZW1wdHlJbmRleGllcyhuZXdCb2FyZCk7XG5cbiAgICBpZiAodGhpcy53aW5uaW5nKG5ld0JvYXJkLCB0aGlzLmh1UGxheWVyKSl7XG4gICAgICAgIHJldHVybiB7c2NvcmU6LTEwfTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy53aW5uaW5nKG5ld0JvYXJkLCB0aGlzLmFpUGxheWVyKSl7XG4gICAgICByZXR1cm4ge3Njb3JlOjEwfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYXZhaWxTcG90cy5sZW5ndGggPT09IDApe1xuICAgICAgcmV0dXJuIHtzY29yZTowfTtcbiAgICB9XG5cbiAgICBsZXQgbW92ZXM6IGFueVtdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF2YWlsU3BvdHMubGVuZ3RoOyBpKyspe1xuICAgICAgbGV0IG1vdmUgPSB7aW5kZXg6IDAsIHNjb3JlOiAwfTtcbiAgICAgIG1vdmUuaW5kZXggPSBuZXdCb2FyZFthdmFpbFNwb3RzW2ldXTtcblxuICAgICAgbmV3Qm9hcmRbYXZhaWxTcG90c1tpXV0gPSBwbGF5ZXI7XG5cbiAgICAgIGlmIChwbGF5ZXIgPT0gdGhpcy5haVBsYXllcil7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLm1pbmlNYXgobmV3Qm9hcmQsIHRoaXMuaHVQbGF5ZXIpO1xuICAgICAgICBtb3ZlLnNjb3JlID0gcmVzdWx0LnNjb3JlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMubWluaU1heChuZXdCb2FyZCwgdGhpcy5haVBsYXllcik7XG4gICAgICAgIG1vdmUuc2NvcmUgPSByZXN1bHQuc2NvcmU7XG4gICAgICB9XG5cbiAgICAgIC8vcmVzZXQgdGhlIHNwb3QgdG8gZW1wdHlcbiAgICAgIG5ld0JvYXJkW2F2YWlsU3BvdHNbaV1dID0gbW92ZS5pbmRleDtcblxuICAgICAgLy8gcHVzaCB0aGUgb2JqZWN0IHRvIHRoZSBhcnJheVxuICAgICAgbW92ZXMucHVzaChtb3ZlKTtcbiAgICB9XG5cbiAgICBjb25zdCBiZXN0TW92ZSA9IHRoaXMuY2hlY2tCZXN0TW92ZShwbGF5ZXIsIG1vdmVzKTtcblxuICAgIHJldHVybiBtb3Zlc1tiZXN0TW92ZV07XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQmVzdE1vdmUocGxheWVyOiBhbnksIG1vdmVzOiBhbnkpOiBhbnkge1xuICAgIGxldCBiZXN0TW92ZTtcblxuICAgIGlmKHBsYXllciA9PT0gdGhpcy5haVBsYXllcil7XG4gICAgICBsZXQgYmVzdFNjb3JlID0gLTEwMDAwO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG1vdmVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYobW92ZXNbaV0uc2NvcmUgPiBiZXN0U2NvcmUpe1xuICAgICAgICAgIGJlc3RTY29yZSA9IG1vdmVzW2ldLnNjb3JlO1xuICAgICAgICAgIGJlc3RNb3ZlID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlbHNlIGxvb3Agb3ZlciB0aGUgbW92ZXMgYW5kIGNob29zZSB0aGUgbW92ZSB3aXRoIHRoZSBsb3dlc3Qgc2NvcmVcbiAgICAgIGxldCBiZXN0U2NvcmUgPSAxMDAwMDtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBtb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobW92ZXNbaV0uc2NvcmUgPCBiZXN0U2NvcmUpIHtcbiAgICAgICAgICBiZXN0U2NvcmUgPSBtb3Zlc1tpXS5zY29yZTtcbiAgICAgICAgICBiZXN0TW92ZSA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmVzdE1vdmU7XG4gIH1cblxuICBwcml2YXRlIGVtcHR5SW5kZXhpZXMoYm9hcmQ6IGFueVtdKTogYW55W10ge1xuICAgIHJldHVybiBib2FyZC5maWx0ZXIocyA9PiBzICE9IFwiT1wiICYmIHMgIT0gXCJYXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSB3aW5uaW5nKGJvYXJkLCBwbGF5ZXIpe1xuICAgIGlmICgoYm9hcmRbMF0gPT0gcGxheWVyICYmIGJvYXJkWzFdID09IHBsYXllciAmJiBib2FyZFsyXSA9PSBwbGF5ZXIpIHx8XG4gICAgICAgIChib2FyZFszXSA9PSBwbGF5ZXIgJiYgYm9hcmRbNF0gPT0gcGxheWVyICYmIGJvYXJkWzVdID09IHBsYXllcikgfHxcbiAgICAgICAgKGJvYXJkWzZdID09IHBsYXllciAmJiBib2FyZFs3XSA9PSBwbGF5ZXIgJiYgYm9hcmRbOF0gPT0gcGxheWVyKSB8fFxuICAgICAgICAoYm9hcmRbMF0gPT0gcGxheWVyICYmIGJvYXJkWzNdID09IHBsYXllciAmJiBib2FyZFs2XSA9PSBwbGF5ZXIpIHx8XG4gICAgICAgIChib2FyZFsxXSA9PSBwbGF5ZXIgJiYgYm9hcmRbNF0gPT0gcGxheWVyICYmIGJvYXJkWzddID09IHBsYXllcikgfHxcbiAgICAgICAgKGJvYXJkWzJdID09IHBsYXllciAmJiBib2FyZFs1XSA9PSBwbGF5ZXIgJiYgYm9hcmRbOF0gPT0gcGxheWVyKSB8fFxuICAgICAgICAoYm9hcmRbMF0gPT0gcGxheWVyICYmIGJvYXJkWzRdID09IHBsYXllciAmJiBib2FyZFs4XSA9PSBwbGF5ZXIpIHx8XG4gICAgICAgIChib2FyZFsyXSA9PSBwbGF5ZXIgJiYgYm9hcmRbNF0gPT0gcGxheWVyICYmIGJvYXJkWzZdID09IHBsYXllcikpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBib2FyZEdyaWRWaWV3KCk6IEdyaWRMYXlvdXQge1xuICAgIHJldHVybiB0aGlzLmJvYXJkR3JpZC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBtYWtlQm9hcmRHcmlkU3F1YXJlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBoZWlnaHRPdmVyZmxvdyA9IDEyMDtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnNjcmVlbkhlaWdodCAtIGhlaWdodE92ZXJmbG93O1xuICAgIGNvbnN0IG1pbmltdW1TaWRlRGltZW5zaW9uID0gTWF0aC5taW4odGhpcy5zY3JlZW5XaWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLmJvYXJkR3JpZFZpZXcuaGVpZ2h0ID0gbWluaW11bVNpZGVEaW1lbnNpb247XG4gICAgdGhpcy5ib2FyZEdyaWRWaWV3LndpZHRoID0gbWluaW11bVNpZGVEaW1lbnNpb247XG4gIH1cblxuICBwcml2YXRlIGdldCBzY3JlZW5XaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiBwbGF0Zm9ybS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XG4gIH1cbiBcbiAgcHJpdmF0ZSBnZXQgc2NyZWVuSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHM7XG4gIH1cblxuICBwcml2YXRlIGdldCBzcXVhcmVWaWV3cygpOiBBcnJheTxTdGFja0xheW91dD4ge1xuICAgIHJldHVybiB0aGlzLnNxdWFyZXMubWFwKHMgPT4gcy5uYXRpdmVFbGVtZW50KTtcbiAgfVxufVxuIl19