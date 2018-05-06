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
    SinglePlayerComponent.prototype.classOf = function (square) {
        return (square.xPosition + square.yPosition) % 2 == 0 ? 'light-square' : 'dark-square';
    };
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
                    view.animate({ backgroundColor: new page_1.Color("#BA4A00"), duration: 1000 });
                }
                resolve(_this.newGame(2000));
            }
            else if (_this.spService.board.isDraw) {
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
        var array = [5, 5, 5, 95];
        var randomChosenNumber = array[Math.floor(Math.random() * (4 - 0))];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbmdsZXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0c7QUFDbEcsbUNBQXFDO0FBSXJDLGdDQUFzQztBQUV0Qyw4Q0FBdUc7QUFDdkcsMENBQXFFO0FBT3JFO0lBU0UsK0JBQ1MsU0FBOEIsRUFDN0IsWUFBMEIsRUFDMUIsS0FBVyxFQUNYLGtCQUFxQyxFQUNyQyxhQUEyQjtRQUo1QixjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQUM3QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQVZyQyxRQUFRO1FBQ0QsYUFBUSxHQUFXLEdBQUcsQ0FBQztRQUM5QixLQUFLO1FBQ0UsYUFBUSxHQUFXLEdBQUcsQ0FBQztJQVExQixDQUFDO0lBRUwsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sb0NBQUksR0FBWCxVQUFZLE1BQWM7UUFBMUIsaUJBV0M7UUFWQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYztlQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLEtBQUssY0FBSyxDQUFDLEtBQUs7ZUFDakQsTUFBTSxDQUFDLEtBQUssS0FBSyxjQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNs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SUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNoRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ2hFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUM7WUFDaEUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNoRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ2hFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUM7WUFDaEUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQztZQUNoRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0lBYUYsc0JBQVksZ0RBQWE7YUFBekI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFTyxvREFBb0IsR0FBNUI7UUFDRSxJQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7UUFDM0IsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7UUFDbEQsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUM7SUFDbEQsQ0FBQztJQUVELHNCQUFZLDhDQUFXO2FBQXZCO1lBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUM5QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLCtDQUFZO2FBQXhCO1lBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLDhDQUFXO2FBQXZCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLGFBQWEsRUFBZixDQUFlLENBQUMsQ0FBQztRQUNoRCxDQUFDOzs7T0FBQTtJQTFPdUI7UUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7a0NBQW1CLGlCQUFVOzREQUFDO0lBQzdCO1FBQXZCLG1CQUFZLENBQUMsUUFBUSxDQUFDO2tDQUFVLGdCQUFTOzBEQUFhO0lBRjVDLHFCQUFxQjtRQUxqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQzt5Q0FXb0IsOEJBQW1CO1lBQ2YsdUJBQVk7WUFDbkIsV0FBSTtZQUNTLDRCQUFpQjtZQUN0Qix1QkFBWTtPQWQxQixxQkFBcUIsQ0E0T2pDO0lBQUQsNEJBQUM7Q0FBQSxBQTVPRCxJQTRPQztBQTVPWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gJ3BsYXRmb3JtJztcclxuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gJ3VpL2xheW91dHMvZ3JpZC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgUGFnZSwgQ29sb3IgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UsIFBvcHVwU2VydmljZSwgU2luZ2xlUGxheWVyU2VydmljZSwgQXVkaW9TZXJ2aWNlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEJvYXJkLCBNZW51SXRlbU5hbWUsIFNxdWFyZSwgU3RhdGUgfSBmcm9tIFwifi9hc3NldHMvZG9tYWluXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlNpbmdsZXBsYXllclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2luZ2xlcGxheWVyLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpbmdsZVBsYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnYm9hcmRHcmlkJykgcHVibGljIGJvYXJkR3JpZDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkcmVuKCdzcXVhcmUnKSBzcXVhcmVzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XHJcblxyXG4gIC8vIGh1bWFuXHJcbiAgcHVibGljIGh1UGxheWVyOiBzdHJpbmcgPSBcIlhcIjtcclxuICAvLyBhaVxyXG4gIHB1YmxpYyBhaVBsYXllcjogc3RyaW5nID0gXCJPXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHNwU2VydmljZTogU2luZ2xlUGxheWVyU2VydmljZSxcclxuICAgIHByaXZhdGUgYXVkaW9TZXJ2aWNlOiBBdWRpb1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9wYWdlOiBQYWdlLFxyXG4gICAgcHJpdmF0ZSBfbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfcG9wdXBTZXJ2aWNlOiBQb3B1cFNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMubWFrZUJvYXJkR3JpZFNxdWFyZWQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYXJrKHNxdWFyZTogU3F1YXJlKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc3BTZXJ2aWNlLnNlc3Npb25HYW1lV29uXHJcbiAgICAgICAgJiYgdGhpcy5zcFNlcnZpY2UuYm9hcmQuY3VycmVudFN0YXRlID09PSBTdGF0ZS5Dcm9zc1xyXG4gICAgICAgICYmIHNxdWFyZS5zdGF0ZSA9PT0gU3RhdGUuQmxhbmspIHtcclxuICAgICAgdGhpcy5hdWRpb1NlcnZpY2UuY2xpY2tTb3VuZCgpO1xyXG4gICAgICB0aGlzLnNwU2VydmljZS5ib2FyZC5tYXJrKHNxdWFyZSk7XHJcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3F1YXJlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuYm90TWFyaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5ld0dhbWUobWlsaVNlY29uZHM6IG51bWJlciA9IDIwMDApOiB2b2lkIHtcclxuICAgIHRoaXMuc3BTZXJ2aWNlLm5ld0dhbWUobWlsaVNlY29uZHMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBib2FyZFNpZGVTcGVjaWZpY2F0aW9uKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgc3BlY3MgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcFNlcnZpY2UuYm9hcmQuYm9hcmRTaXplOyBpKyspIHtcclxuICAgICAgc3BlY3MucHVzaCgnKicpO1xyXG4gICAgfVxyXG4gXHJcbiAgICByZXR1cm4gc3BlY3Muam9pbignLCcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBnYW1lUGFuZWxTdGF0ZUltYWdlVmlzaWJpbGl0eSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BTZXJ2aWNlLmdhbWVQYW5lbFN0YXRlSW1hZ2VWaXNpYmlsaXR5O1xyXG4gIH1cclxuIFxyXG4gIHB1YmxpYyBnZXQgZ2FtZVBhbmVsQ2FwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BTZXJ2aWNlLmdhbWVQYW5lbENhcHRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xhc3NPZihzcXVhcmU6IFNxdWFyZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gKHNxdWFyZS54UG9zaXRpb24gKyBzcXVhcmUueVBvc2l0aW9uKSAlIDIgPT0gMCA/ICdsaWdodC1zcXVhcmUnIDogJ2Rhcmstc3F1YXJlJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXN0YXJ0RGlhbG9nKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcG9wdXBTZXJ2aWNlLmNvbmZpcm0oJ1Jlc3RhcnQnLCAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc3RhcnQgdGhlIGdhbWU/JywgJ1llcycsICdObycpXHJcbiAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIHRoaXMuc3BTZXJ2aWNlLnJlc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVTdGF0ZShzcXVhcmU6IFNxdWFyZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCB3aW5uaW5nSW5kZXhlczogbnVtYmVyW10gPSB0aGlzLnNwU2VydmljZS5ib2FyZC5nZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpO1xyXG5cclxuICAgICAgaWYgKHdpbm5pbmdJbmRleGVzKSB7XHJcbiAgICAgICAgdGhpcy5zcFNlcnZpY2Uuc2Vzc2lvbkdhbWVXb24gPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCBvZiB3aW5uaW5nSW5kZXhlcykge1xyXG4gICAgICAgICAgbGV0IHZpZXcgPSB0aGlzLnNxdWFyZVZpZXdzW2luZGV4XTtcclxuICAgICAgICAgIHZpZXcuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwiI0JBNEEwMFwiKSwgZHVyYXRpb246IDEwMDAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc29sdmUodGhpcy5uZXdHYW1lKDIwMDApKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNwU2VydmljZS5ib2FyZC5pc0RyYXcpIHtcclxuICAgICAgICByZXNvbHZlKHRoaXMubmV3R2FtZSgpKTtcclxuICAgICAgfVxyXG4gICAgICByZXNvbHZlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYm90TWFyaygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGJlc3RTcG90ID0gdGhpcy5taW5pTWF4KHRoaXMuc3BTZXJ2aWNlLmJvYXJkLmNhbGN1bGF0ZUJvYXJkKCksIHRoaXMuYWlQbGF5ZXIpO1xyXG4gICAgbGV0IGZvdW5kU3F1YXJlOiBTcXVhcmU7XHJcbiAgICBcclxuICAgIGlmKHRoaXMuc2hvdWxkVXNlTWluaU1heCgpKSB7XHJcbiAgICAgIGZvdW5kU3F1YXJlID0gdGhpcy5zcFNlcnZpY2UuYm9hcmQuZ2V0QmVzdFNwb3QoYmVzdFNwb3QuaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm91bmRTcXVhcmUgPSB0aGlzLnNwU2VydmljZS5mb3VuZFNxdWFyZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGZvdW5kU3F1YXJlICYmIXRoaXMuc3BTZXJ2aWNlLnNlc3Npb25HYW1lV29uKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYXVkaW9TZXJ2aWNlLmNsaWNrU291bmQoKTtcclxuICAgICAgICB0aGlzLnNwU2VydmljZS5ib2FyZC5tYXJrKGZvdW5kU3F1YXJlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGZvdW5kU3F1YXJlKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvdWxkVXNlTWluaU1heCgpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGFycmF5OiBudW1iZXJbXSA9IFs1LCA1LCA1LCA5NV07XHJcbiAgICBjb25zdCByYW5kb21DaG9zZW5OdW1iZXI6IG51bWJlciA9IGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg0LTApKV07XHJcblxyXG4gICAgcmV0dXJuIHJhbmRvbUNob3Nlbk51bWJlciA9PT0gNSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWluaU1heChuZXdCb2FyZDogYW55W10sIHBsYXllcjogc3RyaW5nKTogYW55IHtcclxuICAgIC8vY2hlY2sgd2hpY2ggc3BvdHMgYXJlIGF2YWlsYWJsZSBhbmQgc3RvcmUgdGhlbSBpbiBhbiBvYmplY3QuXHJcbiAgICBjb25zdCBhdmFpbFNwb3RzID0gdGhpcy5lbXB0eUluZGV4aWVzKG5ld0JvYXJkKTtcclxuXHJcbiAgICBpZiAodGhpcy53aW5uaW5nKG5ld0JvYXJkLCB0aGlzLmh1UGxheWVyKSl7XHJcbiAgICAgICAgcmV0dXJuIHtzY29yZTotMTB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy53aW5uaW5nKG5ld0JvYXJkLCB0aGlzLmFpUGxheWVyKSl7XHJcbiAgICAgIHJldHVybiB7c2NvcmU6MTB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYXZhaWxTcG90cy5sZW5ndGggPT09IDApe1xyXG4gICAgICByZXR1cm4ge3Njb3JlOjB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBtb3ZlczogYW55W10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF2YWlsU3BvdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICBsZXQgbW92ZSA9IHtpbmRleDogMCwgc2NvcmU6IDB9O1xyXG4gICAgICBtb3ZlLmluZGV4ID0gbmV3Qm9hcmRbYXZhaWxTcG90c1tpXV07XHJcblxyXG4gICAgICBuZXdCb2FyZFthdmFpbFNwb3RzW2ldXSA9IHBsYXllcjtcclxuXHJcbiAgICAgIGlmIChwbGF5ZXIgPT0gdGhpcy5haVBsYXllcil7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMubWluaU1heChuZXdCb2FyZCwgdGhpcy5odVBsYXllcik7XHJcbiAgICAgICAgbW92ZS5zY29yZSA9IHJlc3VsdC5zY29yZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5taW5pTWF4KG5ld0JvYXJkLCB0aGlzLmFpUGxheWVyKTtcclxuICAgICAgICBtb3ZlLnNjb3JlID0gcmVzdWx0LnNjb3JlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL3Jlc2V0IHRoZSBzcG90IHRvIGVtcHR5XHJcbiAgICAgIG5ld0JvYXJkW2F2YWlsU3BvdHNbaV1dID0gbW92ZS5pbmRleDtcclxuXHJcbiAgICAgIC8vIHB1c2ggdGhlIG9iamVjdCB0byB0aGUgYXJyYXlcclxuICAgICAgbW92ZXMucHVzaChtb3ZlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiZXN0TW92ZSA9IHRoaXMuY2hlY2tCZXN0TW92ZShwbGF5ZXIsIG1vdmVzKTtcclxuXHJcbiAgICByZXR1cm4gbW92ZXNbYmVzdE1vdmVdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0Jlc3RNb3ZlKHBsYXllcjogYW55LCBtb3ZlczogYW55KTogYW55IHtcclxuICAgIGxldCBiZXN0TW92ZTtcclxuXHJcbiAgICBpZihwbGF5ZXIgPT09IHRoaXMuYWlQbGF5ZXIpe1xyXG4gICAgICBsZXQgYmVzdFNjb3JlID0gLTEwMDAwO1xyXG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbW92ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmKG1vdmVzW2ldLnNjb3JlID4gYmVzdFNjb3JlKXtcclxuICAgICAgICAgIGJlc3RTY29yZSA9IG1vdmVzW2ldLnNjb3JlO1xyXG4gICAgICAgICAgYmVzdE1vdmUgPSBpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZWxzZSBsb29wIG92ZXIgdGhlIG1vdmVzIGFuZCBjaG9vc2UgdGhlIG1vdmUgd2l0aCB0aGUgbG93ZXN0IHNjb3JlXHJcbiAgICAgIGxldCBiZXN0U2NvcmUgPSAxMDAwMDtcclxuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG1vdmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG1vdmVzW2ldLnNjb3JlIDwgYmVzdFNjb3JlKSB7XHJcbiAgICAgICAgICBiZXN0U2NvcmUgPSBtb3Zlc1tpXS5zY29yZTtcclxuICAgICAgICAgIGJlc3RNb3ZlID0gaTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYmVzdE1vdmU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVtcHR5SW5kZXhpZXMoYm9hcmQ6IGFueVtdKTogYW55W10ge1xyXG4gICAgcmV0dXJuIGJvYXJkLmZpbHRlcihzID0+IHMgIT0gXCJPXCIgJiYgcyAhPSBcIlhcIik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHdpbm5pbmcoYm9hcmQsIHBsYXllcil7XHJcbiAgICBpZiAoKGJvYXJkWzBdID09IHBsYXllciAmJiBib2FyZFsxXSA9PSBwbGF5ZXIgJiYgYm9hcmRbMl0gPT0gcGxheWVyKSB8fFxyXG4gICAgICAgIChib2FyZFszXSA9PSBwbGF5ZXIgJiYgYm9hcmRbNF0gPT0gcGxheWVyICYmIGJvYXJkWzVdID09IHBsYXllcikgfHxcclxuICAgICAgICAoYm9hcmRbNl0gPT0gcGxheWVyICYmIGJvYXJkWzddID09IHBsYXllciAmJiBib2FyZFs4XSA9PSBwbGF5ZXIpIHx8XHJcbiAgICAgICAgKGJvYXJkWzBdID09IHBsYXllciAmJiBib2FyZFszXSA9PSBwbGF5ZXIgJiYgYm9hcmRbNl0gPT0gcGxheWVyKSB8fFxyXG4gICAgICAgIChib2FyZFsxXSA9PSBwbGF5ZXIgJiYgYm9hcmRbNF0gPT0gcGxheWVyICYmIGJvYXJkWzddID09IHBsYXllcikgfHxcclxuICAgICAgICAoYm9hcmRbMl0gPT0gcGxheWVyICYmIGJvYXJkWzVdID09IHBsYXllciAmJiBib2FyZFs4XSA9PSBwbGF5ZXIpIHx8XHJcbiAgICAgICAgKGJvYXJkWzBdID09IHBsYXllciAmJiBib2FyZFs0XSA9PSBwbGF5ZXIgJiYgYm9hcmRbOF0gPT0gcGxheWVyKSB8fFxyXG4gICAgICAgIChib2FyZFsyXSA9PSBwbGF5ZXIgJiYgYm9hcmRbNF0gPT0gcGxheWVyICYmIGJvYXJkWzZdID09IHBsYXllcikpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgIH1cclxuICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiBcclxuICBwcml2YXRlIGdldCBib2FyZEdyaWRWaWV3KCk6IEdyaWRMYXlvdXQge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmRHcmlkLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VCb2FyZEdyaWRTcXVhcmVkKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaGVpZ2h0T3ZlcmZsb3cgPSAxMjA7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnNjcmVlbkhlaWdodCAtIGhlaWdodE92ZXJmbG93O1xyXG4gICAgY29uc3QgbWluaW11bVNpZGVEaW1lbnNpb24gPSBNYXRoLm1pbih0aGlzLnNjcmVlbldpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy5ib2FyZEdyaWRWaWV3LmhlaWdodCA9IG1pbmltdW1TaWRlRGltZW5zaW9uO1xyXG4gICAgdGhpcy5ib2FyZEdyaWRWaWV3LndpZHRoID0gbWluaW11bVNpZGVEaW1lbnNpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBzY3JlZW5XaWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcclxuICB9XHJcbiBcclxuICBwcml2YXRlIGdldCBzY3JlZW5IZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBwbGF0Zm9ybS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgc3F1YXJlVmlld3MoKTogQXJyYXk8U3RhY2tMYXlvdXQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNxdWFyZXMubWFwKHMgPT4gcy5uYXRpdmVFbGVtZW50KTtcclxuICB9XHJcbn1cclxuIl19