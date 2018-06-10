"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform = require("platform");
var page_1 = require("ui/page");
var services_1 = require("~/assets/services");
var domain_1 = require("~/assets/domain");
var leaderboard_service_1 = require("~/assets/services/leaderboard.service");
var SinglePlayerComponent = /** @class */ (function () {
    function SinglePlayerComponent(spService, audioService, leaderBoard, _page, _navigationService, _popupService) {
        this.spService = spService;
        this.audioService = audioService;
        this.leaderBoard = leaderBoard;
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
            this.spService.mark(square);
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
                    view.backgroundColor = new page_1.Color("#000000");
                    view.animate({ backgroundColor: new page_1.Color("#BA4A00"), duration: 1000 });
                }
                resolve(_this.newGame(2000));
            }
            else if (_this.spService.board.isDraw) {
                _this.leaderBoard.spScore.draws++;
                _this.leaderBoard.updateSPScore()
                    .then(function () {
                    resolve(_this.newGame());
                });
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
                _this.spService.mark(foundSquare);
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
            leaderboard_service_1.LeaderBoardService,
            page_1.Page,
            services_1.NavigationService,
            services_1.PopupService])
    ], SinglePlayerComponent);
    return SinglePlayerComponent;
}());
exports.SinglePlayerComponent = SinglePlayerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbmdsZXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0c7QUFDbEcsbUNBQXFDO0FBSXJDLGdDQUFzQztBQUV0Qyw4Q0FBdUc7QUFDdkcsMENBQXFFO0FBQ3JFLDZFQUEyRTtBQU8zRTtJQVNFLCtCQUNTLFNBQThCLEVBQzlCLFlBQTBCLEVBQzFCLFdBQStCLEVBQzlCLEtBQVcsRUFDWCxrQkFBcUMsRUFDckMsYUFBMkI7UUFMNUIsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBWHJDLFFBQVE7UUFDRCxhQUFRLEdBQVcsR0FBRyxDQUFDO1FBQzlCLEtBQUs7UUFDRSxhQUFRLEdBQVcsR0FBRyxDQUFDO0lBUzFCLENBQUM7SUFFTCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxvQ0FBSSxHQUFYLFVBQVksTUFBYztRQUExQixpQkFXQztRQVZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2VBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxjQUFLLENBQUMsS0FBSztlQUNqRCxNQUFNLENBQUMsS0FBSyxLQUFLLGNBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDL0IsSUFBSSxD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dUNBQU8sR0FBZixVQUFnQixLQUFLLEVBQUUsTUFBTTtRQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ2hFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUM7WUFDaEUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNoRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ2hFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUM7WUFDaEUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNoRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ2hFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDaEIsQ0FBQztJQUNOLENBQUM7SUFFRCxzQkFBWSxnREFBYTthQUF6QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVPLG9EQUFvQixHQUE1QjtRQUNFLElBQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQztRQUMzQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQztRQUNsRCxJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0JBQVksOENBQVc7YUFBdkI7WUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQzlDLENBQUM7OztPQUFBO0lBRUQsc0JBQVksK0NBQVk7YUFBeEI7WUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBRUQsc0JBQVksOENBQVc7YUFBdkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsYUFBYSxFQUFmLENBQWUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBaE91QjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBbUIsaUJBQVU7NERBQUM7SUFDN0I7UUFBdkIsbUJBQVksQ0FBQyxRQUFRLENBQUM7a0NBQVUsZ0JBQVM7MERBQWE7SUFGNUMscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtTQUMvQyxDQUFDO3lDQVdvQiw4QkFBbUI7WUFDaEIsdUJBQVk7WUFDYix3Q0FBa0I7WUFDdkIsV0FBSTtZQUNTLDRCQUFpQjtZQUN0Qix1QkFBWTtPQWYxQixxQkFBcUIsQ0FrT2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWxPRCxJQWtPQztBQWxPWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gJ3BsYXRmb3JtJztcclxuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gJ3VpL2xheW91dHMvZ3JpZC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgUGFnZSwgQ29sb3IgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UsIFBvcHVwU2VydmljZSwgU2luZ2xlUGxheWVyU2VydmljZSwgQXVkaW9TZXJ2aWNlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEJvYXJkLCBNZW51SXRlbU5hbWUsIFNxdWFyZSwgU3RhdGUgfSBmcm9tIFwifi9hc3NldHMvZG9tYWluXCI7XHJcbmltcG9ydCB7IExlYWRlckJvYXJkU2VydmljZSB9IGZyb20gXCJ+L2Fzc2V0cy9zZXJ2aWNlcy9sZWFkZXJib2FyZC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlNpbmdsZXBsYXllclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2luZ2xlcGxheWVyLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpbmdsZVBsYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnYm9hcmRHcmlkJykgcHVibGljIGJvYXJkR3JpZDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkcmVuKCdzcXVhcmUnKSBzcXVhcmVzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XHJcblxyXG4gIC8vIGh1bWFuXHJcbiAgcHVibGljIGh1UGxheWVyOiBzdHJpbmcgPSBcIlhcIjtcclxuICAvLyBhaVxyXG4gIHB1YmxpYyBhaVBsYXllcjogc3RyaW5nID0gXCJPXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHNwU2VydmljZTogU2luZ2xlUGxheWVyU2VydmljZSxcclxuICAgIHB1YmxpYyBhdWRpb1NlcnZpY2U6IEF1ZGlvU2VydmljZSxcclxuICAgIHB1YmxpYyBsZWFkZXJCb2FyZDogTGVhZGVyQm9hcmRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfcGFnZTogUGFnZSxcclxuICAgIHByaXZhdGUgX25hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgX3BvcHVwU2VydmljZTogUG9wdXBTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLm1ha2VCb2FyZEdyaWRTcXVhcmVkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbWFyayhzcXVhcmU6IFNxdWFyZSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNwU2VydmljZS5zZXNzaW9uR2FtZVdvblxyXG4gICAgICAgICYmIHRoaXMuc3BTZXJ2aWNlLmJvYXJkLmN1cnJlbnRTdGF0ZSA9PT0gU3RhdGUuQ3Jvc3NcclxuICAgICAgICAmJiBzcXVhcmUuc3RhdGUgPT09IFN0YXRlLkJsYW5rKSB7XHJcbiAgICAgIHRoaXMuYXVkaW9TZXJ2aWNlLmNsaWNrU291bmQoKTtcclxuICAgICAgdGhpcy5zcFNlcnZpY2UubWFyayhzcXVhcmUpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKHNxdWFyZSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmJvdE1hcmsoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZXdHYW1lKG1pbGlTZWNvbmRzOiBudW1iZXIgPSAyMDAwKTogdm9pZCB7XHJcbiAgICB0aGlzLnNwU2VydmljZS5uZXdHYW1lKG1pbGlTZWNvbmRzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYm9hcmRTaWRlU3BlY2lmaWNhdGlvbigpOiBzdHJpbmcge1xyXG4gICAgbGV0IHNwZWNzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3BTZXJ2aWNlLmJvYXJkLmJvYXJkU2l6ZTsgaSsrKSB7XHJcbiAgICAgIHNwZWNzLnB1c2goJyonKTtcclxuICAgIH1cclxuIFxyXG4gICAgcmV0dXJuIHNwZWNzLmpvaW4oJywnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZ2FtZVBhbmVsU3RhdGVJbWFnZVZpc2liaWxpdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zcFNlcnZpY2UuZ2FtZVBhbmVsU3RhdGVJbWFnZVZpc2liaWxpdHk7XHJcbiAgfVxyXG4gXHJcbiAgcHVibGljIGdldCBnYW1lUGFuZWxDYXB0aW9uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zcFNlcnZpY2UuZ2FtZVBhbmVsQ2FwdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXN0YXJ0RGlhbG9nKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcG9wdXBTZXJ2aWNlLmNvbmZpcm0oJ1Jlc3RhcnQnLCAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc3RhcnQgdGhlIGdhbWU/JywgJ1llcycsICdObycpXHJcbiAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIHRoaXMuc3BTZXJ2aWNlLnJlc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVTdGF0ZShzcXVhcmU6IFNxdWFyZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCB3aW5uaW5nSW5kZXhlczogbnVtYmVyW10gPSB0aGlzLnNwU2VydmljZS5ib2FyZC5nZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpO1xyXG4gICAgICBpZiAod2lubmluZ0luZGV4ZXMpIHtcclxuICAgICAgICB0aGlzLnNwU2VydmljZS5zZXNzaW9uR2FtZVdvbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4IG9mIHdpbm5pbmdJbmRleGVzKSB7XHJcbiAgICAgICAgICBsZXQgdmlldyA9IHRoaXMuc3F1YXJlVmlld3NbaW5kZXhdO1xyXG4gICAgICAgICAgdmlldy5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IoXCIjMDAwMDAwXCIpO1xyXG4gICAgICAgICAgdmlldy5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjQkE0QTAwXCIpLCBkdXJhdGlvbjogMTAwMCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLm5ld0dhbWUoMjAwMCkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3BTZXJ2aWNlLmJvYXJkLmlzRHJhdykge1xyXG4gICAgICAgIHRoaXMubGVhZGVyQm9hcmQuc3BTY29yZS5kcmF3cysrO1xyXG4gICAgICAgIHRoaXMubGVhZGVyQm9hcmQudXBkYXRlU1BTY29yZSgpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5uZXdHYW1lKCkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJvdE1hcmsoKTogdm9pZCB7XHJcbiAgICBjb25zdCBiZXN0U3BvdCA9IHRoaXMubWluaU1heCh0aGlzLnNwU2VydmljZS5ib2FyZC5jYWxjdWxhdGVCb2FyZCgpLCB0aGlzLmFpUGxheWVyKTtcclxuICAgIGxldCBmb3VuZFNxdWFyZTogU3F1YXJlO1xyXG4gICAgXHJcbiAgICBpZih0aGlzLnNob3VsZFVzZU1pbmlNYXgoKSkge1xyXG4gICAgICBmb3VuZFNxdWFyZSA9IHRoaXMuc3BTZXJ2aWNlLmJvYXJkLmdldEJlc3RTcG90KGJlc3RTcG90LmluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvdW5kU3F1YXJlID0gdGhpcy5zcFNlcnZpY2UuZm91bmRTcXVhcmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChmb3VuZFNxdWFyZSAmJiF0aGlzLnNwU2VydmljZS5zZXNzaW9uR2FtZVdvbikge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmF1ZGlvU2VydmljZS5jbGlja1NvdW5kKCk7XHJcbiAgICAgICAgdGhpcy5zcFNlcnZpY2UubWFyayhmb3VuZFNxdWFyZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShmb3VuZFNxdWFyZSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3VsZFVzZU1pbmlNYXgoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBhcnJheTogbnVtYmVyW10gPSBbNSwgNSwgNSwgNSwgNSwgNSwgNSwgNSwgNSwgOTVdO1xyXG4gICAgY29uc3QgcmFuZG9tQ2hvc2VuTnVtYmVyOiBudW1iZXIgPSBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAtMCkpXTtcclxuXHJcbiAgICByZXR1cm4gcmFuZG9tQ2hvc2VuTnVtYmVyID09PSA1ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtaW5pTWF4KG5ld0JvYXJkOiBhbnlbXSwgcGxheWVyOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgLy9jaGVjayB3aGljaCBzcG90cyBhcmUgYXZhaWxhYmxlIGFuZCBzdG9yZSB0aGVtIGluIGFuIG9iamVjdC5cclxuICAgIGNvbnN0IGF2YWlsU3BvdHMgPSB0aGlzLmVtcHR5SW5kZXhpZXMobmV3Qm9hcmQpO1xyXG5cclxuICAgIGlmICh0aGlzLndpbm5pbmcobmV3Qm9hcmQsIHRoaXMuaHVQbGF5ZXIpKXtcclxuICAgICAgICByZXR1cm4ge3Njb3JlOi0xMH07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLndpbm5pbmcobmV3Qm9hcmQsIHRoaXMuYWlQbGF5ZXIpKXtcclxuICAgICAgcmV0dXJuIHtzY29yZToxMH07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChhdmFpbFNwb3RzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgIHJldHVybiB7c2NvcmU6MH07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1vdmVzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXZhaWxTcG90cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGxldCBtb3ZlID0ge2luZGV4OiAwLCBzY29yZTogMH07XHJcbiAgICAgIG1vdmUuaW5kZXggPSBuZXdCb2FyZFthdmFpbFNwb3RzW2ldXTtcclxuXHJcbiAgICAgIG5ld0JvYXJkW2F2YWlsU3BvdHNbaV1dID0gcGxheWVyO1xyXG5cclxuICAgICAgaWYgKHBsYXllciA9PSB0aGlzLmFpUGxheWVyKXtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5taW5pTWF4KG5ld0JvYXJkLCB0aGlzLmh1UGxheWVyKTtcclxuICAgICAgICBtb3ZlLnNjb3JlID0gcmVzdWx0LnNjb3JlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLm1pbmlNYXgobmV3Qm9hcmQsIHRoaXMuYWlQbGF5ZXIpO1xyXG4gICAgICAgIG1vdmUuc2NvcmUgPSByZXN1bHQuc2NvcmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vcmVzZXQgdGhlIHNwb3QgdG8gZW1wdHlcclxuICAgICAgbmV3Qm9hcmRbYXZhaWxTcG90c1tpXV0gPSBtb3ZlLmluZGV4O1xyXG5cclxuICAgICAgLy8gcHVzaCB0aGUgb2JqZWN0IHRvIHRoZSBhcnJheVxyXG4gICAgICBtb3Zlcy5wdXNoKG1vdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJlc3RNb3ZlID0gdGhpcy5jaGVja0Jlc3RNb3ZlKHBsYXllciwgbW92ZXMpO1xyXG5cclxuICAgIHJldHVybiBtb3Zlc1tiZXN0TW92ZV07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrQmVzdE1vdmUocGxheWVyOiBhbnksIG1vdmVzOiBhbnkpOiBhbnkge1xyXG4gICAgbGV0IGJlc3RNb3ZlO1xyXG5cclxuICAgIGlmKHBsYXllciA9PT0gdGhpcy5haVBsYXllcil7XHJcbiAgICAgIGxldCBiZXN0U2NvcmUgPSAtMTAwMDA7XHJcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBtb3Zlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYobW92ZXNbaV0uc2NvcmUgPiBiZXN0U2NvcmUpe1xyXG4gICAgICAgICAgYmVzdFNjb3JlID0gbW92ZXNbaV0uc2NvcmU7XHJcbiAgICAgICAgICBiZXN0TW92ZSA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBlbHNlIGxvb3Agb3ZlciB0aGUgbW92ZXMgYW5kIGNob29zZSB0aGUgbW92ZSB3aXRoIHRoZSBsb3dlc3Qgc2NvcmVcclxuICAgICAgbGV0IGJlc3RTY29yZSA9IDEwMDAwO1xyXG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbW92ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobW92ZXNbaV0uc2NvcmUgPCBiZXN0U2NvcmUpIHtcclxuICAgICAgICAgIGJlc3RTY29yZSA9IG1vdmVzW2ldLnNjb3JlO1xyXG4gICAgICAgICAgYmVzdE1vdmUgPSBpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiZXN0TW92ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW1wdHlJbmRleGllcyhib2FyZDogYW55W10pOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gYm9hcmQuZmlsdGVyKHMgPT4gcyAhPSBcIk9cIiAmJiBzICE9IFwiWFwiKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgd2lubmluZyhib2FyZCwgcGxheWVyKXtcclxuICAgIGlmICgoYm9hcmRbMF0gPT0gcGxheWVyICYmIGJvYXJkWzFdID09IHBsYXllciAmJiBib2FyZFsyXSA9PSBwbGF5ZXIpIHx8XHJcbiAgICAgICAgKGJvYXJkWzNdID09IHBsYXllciAmJiBib2FyZFs0XSA9PSBwbGF5ZXIgJiYgYm9hcmRbNV0gPT0gcGxheWVyKSB8fFxyXG4gICAgICAgIChib2FyZFs2XSA9PSBwbGF5ZXIgJiYgYm9hcmRbN10gPT0gcGxheWVyICYmIGJvYXJkWzhdID09IHBsYXllcikgfHxcclxuICAgICAgICAoYm9hcmRbMF0gPT0gcGxheWVyICYmIGJvYXJkWzNdID09IHBsYXllciAmJiBib2FyZFs2XSA9PSBwbGF5ZXIpIHx8XHJcbiAgICAgICAgKGJvYXJkWzFdID09IHBsYXllciAmJiBib2FyZFs0XSA9PSBwbGF5ZXIgJiYgYm9hcmRbN10gPT0gcGxheWVyKSB8fFxyXG4gICAgICAgIChib2FyZFsyXSA9PSBwbGF5ZXIgJiYgYm9hcmRbNV0gPT0gcGxheWVyICYmIGJvYXJkWzhdID09IHBsYXllcikgfHxcclxuICAgICAgICAoYm9hcmRbMF0gPT0gcGxheWVyICYmIGJvYXJkWzRdID09IHBsYXllciAmJiBib2FyZFs4XSA9PSBwbGF5ZXIpIHx8XHJcbiAgICAgICAgKGJvYXJkWzJdID09IHBsYXllciAmJiBib2FyZFs0XSA9PSBwbGF5ZXIgJiYgYm9hcmRbNl0gPT0gcGxheWVyKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgYm9hcmRHcmlkVmlldygpOiBHcmlkTGF5b3V0IHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkR3JpZC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlQm9hcmRHcmlkU3F1YXJlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGhlaWdodE92ZXJmbG93ID0gMTIwO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zY3JlZW5IZWlnaHQgLSBoZWlnaHRPdmVyZmxvdztcclxuICAgIGNvbnN0IG1pbmltdW1TaWRlRGltZW5zaW9uID0gTWF0aC5taW4odGhpcy5zY3JlZW5XaWR0aCwgaGVpZ2h0KTtcclxuICAgIHRoaXMuYm9hcmRHcmlkVmlldy5oZWlnaHQgPSBtaW5pbXVtU2lkZURpbWVuc2lvbjtcclxuICAgIHRoaXMuYm9hcmRHcmlkVmlldy53aWR0aCA9IG1pbmltdW1TaWRlRGltZW5zaW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgc2NyZWVuV2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBwbGF0Zm9ybS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XHJcbiAgfVxyXG4gXHJcbiAgcHJpdmF0ZSBnZXQgc2NyZWVuSGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IHNxdWFyZVZpZXdzKCk6IEFycmF5PFN0YWNrTGF5b3V0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zcXVhcmVzLm1hcChzID0+IHMubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==