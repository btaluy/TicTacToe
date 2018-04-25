"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Board = /** @class */ (function () {
    function Board(size) {
        this.squares = [];
        this.boardSize = size;
        this.squares = [];
        this.crossScore = 0;
        this.circleScore = 0;
        this.currentState = index_1.State.Cross;
        this.startNewGame();
    }
    Board.prototype.startNewGame = function () {
        this.isGameWon = false;
        this.initializeBoard();
        this.winnerRetreiver = new index_1.WinnerRetriever(this.squares, this.boardSize);
    };
    Board.prototype.mark = function (square) {
        if (square.canChangeState) {
            square.state = this.currentState;
            this._marksCount++;
            this.setGameWonStateFrom(square);
            this.changeCurrentState();
        }
    };
    Board.prototype.getWinningIndexesFor = function (square) {
        return this.winnerRetreiver.getWinningIndexesFor(square);
    };
    Object.defineProperty(Board.prototype, "isDraw", {
        get: function () {
            return !this.isGameWon && this.isBoardFull;
        },
        enumerable: true,
        configurable: true
    });
    Board.prototype.setGameWonStateFrom = function (square) {
        this.isGameWon = this.getWinningIndexesFor(square) != undefined;
        if (this.isGameWon)
            this.incrementWinnerScore();
    };
    Board.prototype.incrementWinnerScore = function () {
        if (this.currentState == index_1.State.Cross)
            this.crossScore++;
        else
            this.circleScore++;
    };
    Board.prototype.changeCurrentState = function () {
        if (!this.isGameWon) {
            this.currentState = this.nextState;
        }
    };
    Object.defineProperty(Board.prototype, "nextState", {
        get: function () {
            return (this.currentState == index_1.State.Cross) ? index_1.State.Circle : index_1.State.Cross;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "isBoardFull", {
        get: function () {
            return this._marksCount == this.boardSize * this.boardSize;
        },
        enumerable: true,
        configurable: true
    });
    Board.prototype.initializeBoard = function () {
        this.squares = [];
        /**
         * // generates
         * ///////////\\\\\\\\\\\\\
         * // 0, 0 | 0, 1 | 0, 2 \\
         * // ------------------ \\
         * // 1, 0 | 1, 1 | 1, 2 \\
         * // ------------------ \\
         * // 2, 0 | 2, 1 | 2, 2 \\
         * ///////////\\\\\\\\\\\\\
         */
        for (var x = 0; x < this.boardSize; x++) {
            for (var y = 0; y < this.boardSize; y++) {
                this.squares.push(new index_1.Square(x, y));
            }
        }
    };
    return Board;
}());
exports.Board = Board;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUF5RDtBQUV6RDtJQVdFLGVBQW1CLElBQVk7UUFUeEIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQVU1QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQUssQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSw0QkFBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksdUJBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU0sb0JBQUksR0FBWCxVQUFZLE1BQWM7UUFDeEIsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFTSxvQ0FBb0IsR0FBM0IsVUFBNEIsTUFBTTtRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsc0JBQVcseUJBQU07YUFBakI7WUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFFTyxtQ0FBbUIsR0FBM0IsVUFBNEIsTUFBYztRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUM7UUFDaEUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNqQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU8sb0NBQW9CLEdBQTVCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxhQUFLLENBQUMsS0FBSyxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixJQUFJO1lBQ0YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxrQ0FBa0IsR0FBMUI7UUFDRSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztJQUVELHNCQUFZLDRCQUFTO2FBQXJCO1lBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxhQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQUssQ0FBQyxLQUFLLENBQUM7UUFDekUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSw4QkFBVzthQUF2QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQUVPLCtCQUFlLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEI7Ozs7Ozs7OztXQVNHO1FBRUgsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDeEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksY0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBekZELElBeUZDO0FBekZZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3F1YXJlLCBTdGF0ZSwgV2lubmVyUmV0cmlldmVyIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9hcmQge1xyXG4gIHB1YmxpYyBib2FyZFNpemU6IG51bWJlcjtcclxuICBwdWJsaWMgc3F1YXJlczogU3F1YXJlW10gPSBbXTtcclxuICBwdWJsaWMgY3VycmVudFN0YXRlOiBTdGF0ZTtcclxuICBwdWJsaWMgY3Jvc3NTY29yZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBjaXJjbGVTY29yZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBpc0dhbWVXb246IGJvb2xlYW47XHJcbiAgcHVibGljIHdpbm5lclJldHJlaXZlcjogV2lubmVyUmV0cmlldmVyO1xyXG5cclxuICBwcml2YXRlIF9tYXJrc0NvdW50OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIpIHtcclxuICAgIHRoaXMuYm9hcmRTaXplID0gc2l6ZTtcclxuICAgIHRoaXMuc3F1YXJlcyA9IFtdO1xyXG4gICAgdGhpcy5jcm9zc1Njb3JlID0gMDtcclxuICAgIHRoaXMuY2lyY2xlU2NvcmUgPSAwO1xyXG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSBTdGF0ZS5Dcm9zcztcclxuICAgIHRoaXMuc3RhcnROZXdHYW1lKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnROZXdHYW1lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0dhbWVXb24gPSBmYWxzZTtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUJvYXJkKCk7XHJcbiAgICB0aGlzLndpbm5lclJldHJlaXZlciA9IG5ldyBXaW5uZXJSZXRyaWV2ZXIodGhpcy5zcXVhcmVzLCB0aGlzLmJvYXJkU2l6ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbWFyayhzcXVhcmU6IFNxdWFyZSk6IHZvaWQge1xyXG4gICAgaWYoc3F1YXJlLmNhbkNoYW5nZVN0YXRlKSB7XHJcbiAgICAgIHNxdWFyZS5zdGF0ZSA9IHRoaXMuY3VycmVudFN0YXRlO1xyXG4gICAgICB0aGlzLl9tYXJrc0NvdW50Kys7XHJcbiAgICAgIHRoaXMuc2V0R2FtZVdvblN0YXRlRnJvbShzcXVhcmUpO1xyXG4gICAgICB0aGlzLmNoYW5nZUN1cnJlbnRTdGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFdpbm5pbmdJbmRleGVzRm9yKHNxdWFyZSk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLndpbm5lclJldHJlaXZlci5nZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0RyYXcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNHYW1lV29uICYmIHRoaXMuaXNCb2FyZEZ1bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEdhbWVXb25TdGF0ZUZyb20oc3F1YXJlOiBTcXVhcmUpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNHYW1lV29uID0gdGhpcy5nZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpICE9IHVuZGVmaW5lZDtcclxuICAgIGlmICh0aGlzLmlzR2FtZVdvbilcclxuICAgICAgdGhpcy5pbmNyZW1lbnRXaW5uZXJTY29yZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbmNyZW1lbnRXaW5uZXJTY29yZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSA9PSBTdGF0ZS5Dcm9zcylcclxuICAgICAgdGhpcy5jcm9zc1Njb3JlKys7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuY2lyY2xlU2NvcmUrKztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlQ3VycmVudFN0YXRlKCk6IHZvaWQge1xyXG4gICAgaWYoIXRoaXMuaXNHYW1lV29uKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5uZXh0U3RhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBuZXh0U3RhdGUoKTogU3RhdGUge1xyXG4gICAgcmV0dXJuICh0aGlzLmN1cnJlbnRTdGF0ZSA9PSBTdGF0ZS5Dcm9zcykgPyBTdGF0ZS5DaXJjbGUgOiBTdGF0ZS5Dcm9zcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGlzQm9hcmRGdWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcmtzQ291bnQgPT0gdGhpcy5ib2FyZFNpemUgKiB0aGlzLmJvYXJkU2l6ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUJvYXJkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zcXVhcmVzID0gW107XHJcbiAgICAvKipcclxuICAgICAqIC8vIGdlbmVyYXRlc1xyXG4gICAgICogLy8vLy8vLy8vLy9cXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXCBcclxuICAgICAqIC8vIDAsIDAgfCAwLCAxIHwgMCwgMiBcXFxcXHJcbiAgICAgKiAvLyAtLS0tLS0tLS0tLS0tLS0tLS0gXFxcXFxyXG4gICAgICogLy8gMSwgMCB8IDEsIDEgfCAxLCAyIFxcXFxcclxuICAgICAqIC8vIC0tLS0tLS0tLS0tLS0tLS0tLSBcXFxcIFxyXG4gICAgICogLy8gMiwgMCB8IDIsIDEgfCAyLCAyIFxcXFxcclxuICAgICAqIC8vLy8vLy8vLy8vXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFwgXHJcbiAgICAgKi9cclxuICAgIFxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvYXJkU2l6ZTsgeCsrKSB7XHJcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5PCB0aGlzLmJvYXJkU2l6ZTsgeSsrKSB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVzLnB1c2gobmV3IFNxdWFyZSh4LCB5KSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0=