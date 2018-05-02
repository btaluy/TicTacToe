"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Board = /** @class */ (function () {
    function Board(size) {
        this.squares = [];
        this._marksCount = 0;
        this.boardSize = size;
        this.squares = [];
        this.crossScore = 0;
        this.circleScore = 0;
        this.currentState = index_1.State.Cross;
        this.startNewGame();
    }
    Board.prototype.startNewGame = function () {
        this.isGameWon = false;
        this.currentState = index_1.State.Cross;
        this._marksCount = 0;
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
    Board.prototype.getEmptySquares = function () {
        return this.winnerRetreiver.getEmptySquares();
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
            return this._marksCount === (this.boardSize * this.boardSize);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUF5RDtBQUV6RDtJQVdFLGVBQW1CLElBQVk7UUFUeEIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQU90QixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUc5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQUssQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSw0QkFBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBSyxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLHVCQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVNLG9CQUFJLEdBQVgsVUFBWSxNQUFjO1FBQ3hCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0lBRU0sb0NBQW9CLEdBQTNCLFVBQTRCLE1BQU07UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLCtCQUFlLEdBQXRCO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELHNCQUFXLHlCQUFNO2FBQWpCO1lBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRU8sbUNBQW1CLEdBQTNCLFVBQTRCLE1BQWM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVPLG9DQUFvQixHQUE1QjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksYUFBSyxDQUFDLEtBQUssQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsSUFBSTtZQUNGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU8sa0NBQWtCLEdBQTFCO1FBQ0UsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFFRCxzQkFBWSw0QkFBUzthQUFyQjtZQUNFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksYUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pFLENBQUM7OztPQUFBO0lBRUQsc0JBQVksOEJBQVc7YUFBdkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7OztPQUFBO0lBRU8sK0JBQWUsR0FBdkI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQjs7Ozs7Ozs7O1dBU0c7UUFFSCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxjQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUEvRkQsSUErRkM7QUEvRlksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcXVhcmUsIFN0YXRlLCBXaW5uZXJSZXRyaWV2ZXIgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCb2FyZCB7XHJcbiAgcHVibGljIGJvYXJkU2l6ZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBzcXVhcmVzOiBTcXVhcmVbXSA9IFtdO1xyXG4gIHB1YmxpYyBjdXJyZW50U3RhdGU6IFN0YXRlO1xyXG4gIHB1YmxpYyBjcm9zc1Njb3JlOiBudW1iZXI7XHJcbiAgcHVibGljIGNpcmNsZVNjb3JlOiBudW1iZXI7XHJcbiAgcHVibGljIGlzR2FtZVdvbjogYm9vbGVhbjtcclxuICBwdWJsaWMgd2lubmVyUmV0cmVpdmVyOiBXaW5uZXJSZXRyaWV2ZXI7XHJcblxyXG4gIHByaXZhdGUgX21hcmtzQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIpIHtcclxuICAgIHRoaXMuYm9hcmRTaXplID0gc2l6ZTtcclxuICAgIHRoaXMuc3F1YXJlcyA9IFtdO1xyXG4gICAgdGhpcy5jcm9zc1Njb3JlID0gMDtcclxuICAgIHRoaXMuY2lyY2xlU2NvcmUgPSAwO1xyXG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSBTdGF0ZS5Dcm9zcztcclxuICAgIHRoaXMuc3RhcnROZXdHYW1lKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnROZXdHYW1lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0dhbWVXb24gPSBmYWxzZTtcclxuICAgIHRoaXMuY3VycmVudFN0YXRlID0gU3RhdGUuQ3Jvc3M7XHJcbiAgICB0aGlzLl9tYXJrc0NvdW50ID0gMDtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUJvYXJkKCk7XHJcbiAgICB0aGlzLndpbm5lclJldHJlaXZlciA9IG5ldyBXaW5uZXJSZXRyaWV2ZXIodGhpcy5zcXVhcmVzLCB0aGlzLmJvYXJkU2l6ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbWFyayhzcXVhcmU6IFNxdWFyZSk6IHZvaWQge1xyXG4gICAgaWYoc3F1YXJlLmNhbkNoYW5nZVN0YXRlKSB7XHJcbiAgICAgIHNxdWFyZS5zdGF0ZSA9IHRoaXMuY3VycmVudFN0YXRlO1xyXG4gICAgICB0aGlzLl9tYXJrc0NvdW50Kys7XHJcbiAgICAgIHRoaXMuc2V0R2FtZVdvblN0YXRlRnJvbShzcXVhcmUpO1xyXG4gICAgICB0aGlzLmNoYW5nZUN1cnJlbnRTdGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFdpbm5pbmdJbmRleGVzRm9yKHNxdWFyZSk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLndpbm5lclJldHJlaXZlci5nZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEVtcHR5U3F1YXJlcygpOiBTcXVhcmVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy53aW5uZXJSZXRyZWl2ZXIuZ2V0RW1wdHlTcXVhcmVzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzRHJhdygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5pc0dhbWVXb24gJiYgdGhpcy5pc0JvYXJkRnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0R2FtZVdvblN0YXRlRnJvbShzcXVhcmU6IFNxdWFyZSk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0dhbWVXb24gPSB0aGlzLmdldFdpbm5pbmdJbmRleGVzRm9yKHNxdWFyZSkgIT0gdW5kZWZpbmVkO1xyXG4gICAgaWYgKHRoaXMuaXNHYW1lV29uKVxyXG4gICAgICB0aGlzLmluY3JlbWVudFdpbm5lclNjb3JlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluY3JlbWVudFdpbm5lclNjb3JlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFN0YXRlID09IFN0YXRlLkNyb3NzKVxyXG4gICAgICB0aGlzLmNyb3NzU2NvcmUrKztcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5jaXJjbGVTY29yZSsrO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VDdXJyZW50U3RhdGUoKTogdm9pZCB7XHJcbiAgICBpZighdGhpcy5pc0dhbWVXb24pIHtcclxuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLm5leHRTdGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IG5leHRTdGF0ZSgpOiBTdGF0ZSB7XHJcbiAgICByZXR1cm4gKHRoaXMuY3VycmVudFN0YXRlID09IFN0YXRlLkNyb3NzKSA/IFN0YXRlLkNpcmNsZSA6IFN0YXRlLkNyb3NzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgaXNCb2FyZEZ1bGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya3NDb3VudCA9PT0gKHRoaXMuYm9hcmRTaXplICogdGhpcy5ib2FyZFNpemUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplQm9hcmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNxdWFyZXMgPSBbXTtcclxuICAgIC8qKlxyXG4gICAgICogLy8gZ2VuZXJhdGVzXHJcbiAgICAgKiAvLy8vLy8vLy8vL1xcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcIFxyXG4gICAgICogLy8gMCwgMCB8IDAsIDEgfCAwLCAyIFxcXFxcclxuICAgICAqIC8vIC0tLS0tLS0tLS0tLS0tLS0tLSBcXFxcXHJcbiAgICAgKiAvLyAxLCAwIHwgMSwgMSB8IDEsIDIgXFxcXFxyXG4gICAgICogLy8gLS0tLS0tLS0tLS0tLS0tLS0tIFxcXFwgXHJcbiAgICAgKiAvLyAyLCAwIHwgMiwgMSB8IDIsIDIgXFxcXFxyXG4gICAgICogLy8vLy8vLy8vLy9cXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXCBcclxuICAgICAqL1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYm9hcmRTaXplOyB4KyspIHtcclxuICAgICAgZm9yIChsZXQgeSA9IDA7IHk8IHRoaXMuYm9hcmRTaXplOyB5KyspIHtcclxuICAgICAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKHgsIHkpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==