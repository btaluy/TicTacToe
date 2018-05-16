"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_settings_1 = require("application-settings");
var index_1 = require("./index");
var Board = /** @class */ (function () {
    function Board(size) {
        this.squares = [];
        this._marksCount = 0;
        this.boardSize = size;
        this.squares = [];
        this.crossScore = application_settings_1.getNumber('crossScore', 0);
        this.circleScore = application_settings_1.getNumber('circleScore', 0);
        this.drawScore = application_settings_1.getNumber('drawScore', 0);
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
    Board.prototype.calculateBoard = function () {
        return this.winnerRetreiver.calculateBoard();
    };
    Board.prototype.getBestSpot = function (index) {
        return this.winnerRetreiver.getBestSpot(index);
    };
    Board.prototype.setCrossScore = function (value) {
        this.crossScore = value;
        application_settings_1.setNumber('crossScore', this.crossScore);
    };
    Board.prototype.setCircleScore = function (value) {
        this.circleScore = value;
        application_settings_1.setNumber('circleScore', this.circleScore);
    };
    Board.prototype.setDrawScore = function (value) {
        this.drawScore = value;
        application_settings_1.setNumber('drawScore', this.drawScore);
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
        if (this.currentState === index_1.State.Cross) {
            this.crossScore++;
            this.setCrossScore(this.crossScore);
        }
        else {
            this.circleScore++;
            this.setCircleScore(this.circleScore);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUc4QjtBQUU5QixpQ0FBeUQ7QUFFekQ7SUFZRSxlQUFtQixJQUFZO1FBVnhCLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFRdEIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFHOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQ0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLGdDQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0NBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sNEJBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQUssQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSx1QkFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFTSxvQkFBSSxHQUFYLFVBQVksTUFBYztRQUN4QixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsS0FB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QVksOEJBQVc7YUFBdkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7OztPQUFBO0lBRU8sK0JBQWUsR0FBdkI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQjs7Ozs7Ozs7O1dBU0c7UUFFSCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxjQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUEzSEQsSUEySEM7QUEzSFksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBnZXRCb29sZWFuLCBzZXRCb29sZWFuLCBnZXROdW1iZXIsIHNldE51bWJlcixcbiAgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuaW1wb3J0IHsgU3F1YXJlLCBTdGF0ZSwgV2lubmVyUmV0cmlldmVyIH0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBjbGFzcyBCb2FyZCB7XG4gIHB1YmxpYyBib2FyZFNpemU6IG51bWJlcjtcbiAgcHVibGljIHNxdWFyZXM6IFNxdWFyZVtdID0gW107XG4gIHB1YmxpYyBjdXJyZW50U3RhdGU6IFN0YXRlO1xuICBwdWJsaWMgY3Jvc3NTY29yZTogbnVtYmVyO1xuICBwdWJsaWMgY2lyY2xlU2NvcmU6IG51bWJlcjtcbiAgcHVibGljIGRyYXdTY29yZTogbnVtYmVyO1xuICBwdWJsaWMgaXNHYW1lV29uOiBib29sZWFuO1xuICBwdWJsaWMgd2lubmVyUmV0cmVpdmVyOiBXaW5uZXJSZXRyaWV2ZXI7XG5cbiAgcHJpdmF0ZSBfbWFya3NDb3VudDogbnVtYmVyID0gMDtcblxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5ib2FyZFNpemUgPSBzaXplO1xuICAgIHRoaXMuc3F1YXJlcyA9IFtdO1xuICAgIHRoaXMuY3Jvc3NTY29yZSA9IGdldE51bWJlcignY3Jvc3NTY29yZScsIDApO1xuICAgIHRoaXMuY2lyY2xlU2NvcmUgPSBnZXROdW1iZXIoJ2NpcmNsZVNjb3JlJywgMCk7XG4gICAgdGhpcy5kcmF3U2NvcmUgPSBnZXROdW1iZXIoJ2RyYXdTY29yZScsIDApO1xuICAgIHRoaXMuY3VycmVudFN0YXRlID0gU3RhdGUuQ3Jvc3M7XG4gICAgdGhpcy5zdGFydE5ld0dhbWUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGFydE5ld0dhbWUoKTogdm9pZCB7XG4gICAgdGhpcy5pc0dhbWVXb24gPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFN0YXRlLkNyb3NzO1xuICAgIHRoaXMuX21hcmtzQ291bnQgPSAwO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUJvYXJkKCk7XG4gICAgdGhpcy53aW5uZXJSZXRyZWl2ZXIgPSBuZXcgV2lubmVyUmV0cmlldmVyKHRoaXMuc3F1YXJlcywgdGhpcy5ib2FyZFNpemUpO1xuICB9XG5cbiAgcHVibGljIG1hcmsoc3F1YXJlOiBTcXVhcmUpOiB2b2lkIHtcbiAgICBpZihzcXVhcmUuY2FuQ2hhbmdlU3RhdGUpIHtcbiAgICAgIHNxdWFyZS5zdGF0ZSA9IHRoaXMuY3VycmVudFN0YXRlO1xuICAgICAgdGhpcy5fbWFya3NDb3VudCsrO1xuICAgICAgdGhpcy5zZXRHYW1lV29uU3RhdGVGcm9tKHNxdWFyZSk7XG4gICAgICB0aGlzLmNoYW5nZUN1cnJlbnRTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMud2lubmVyUmV0cmVpdmVyLmdldFdpbm5pbmdJbmRleGVzRm9yKHNxdWFyZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RW1wdHlTcXVhcmVzKCk6IFNxdWFyZVtdIHtcbiAgICByZXR1cm4gdGhpcy53aW5uZXJSZXRyZWl2ZXIuZ2V0RW1wdHlTcXVhcmVzKCk7XG4gIH1cblxuICBwdWJsaWMgY2FsY3VsYXRlQm9hcmQoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLndpbm5lclJldHJlaXZlci5jYWxjdWxhdGVCb2FyZCgpO1xuICB9XG5cbiAgcHVibGljIGdldEJlc3RTcG90KGluZGV4OiBhbnkpOiBTcXVhcmUge1xuICAgIHJldHVybiB0aGlzLndpbm5lclJldHJlaXZlci5nZXRCZXN0U3BvdChpbmRleCk7XG4gIH1cblxuICBwdWJsaWMgc2V0Q3Jvc3NTY29yZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jcm9zc1Njb3JlID0gdmFsdWU7XG4gICAgc2V0TnVtYmVyKCdjcm9zc1Njb3JlJywgdGhpcy5jcm9zc1Njb3JlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDaXJjbGVTY29yZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jaXJjbGVTY29yZSA9IHZhbHVlO1xuICAgIHNldE51bWJlcignY2lyY2xlU2NvcmUnLCB0aGlzLmNpcmNsZVNjb3JlKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXREcmF3U2NvcmUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZHJhd1Njb3JlID0gdmFsdWU7XG4gICAgc2V0TnVtYmVyKCdkcmF3U2NvcmUnLCB0aGlzLmRyYXdTY29yZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRHJhdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXNHYW1lV29uICYmIHRoaXMuaXNCb2FyZEZ1bGw7XG4gIH1cblxuICBwcml2YXRlIHNldEdhbWVXb25TdGF0ZUZyb20oc3F1YXJlOiBTcXVhcmUpOiB2b2lkIHtcbiAgICB0aGlzLmlzR2FtZVdvbiA9IHRoaXMuZ2V0V2lubmluZ0luZGV4ZXNGb3Ioc3F1YXJlKSAhPSB1bmRlZmluZWQ7XG4gICAgaWYgKHRoaXMuaXNHYW1lV29uKVxuICAgICAgdGhpcy5pbmNyZW1lbnRXaW5uZXJTY29yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbmNyZW1lbnRXaW5uZXJTY29yZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jdXJyZW50U3RhdGUgPT09IFN0YXRlLkNyb3NzKSB7XG4gICAgICB0aGlzLmNyb3NzU2NvcmUrKztcbiAgICAgIHRoaXMuc2V0Q3Jvc3NTY29yZSh0aGlzLmNyb3NzU2NvcmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNpcmNsZVNjb3JlKys7XG4gICAgICB0aGlzLnNldENpcmNsZVNjb3JlKHRoaXMuY2lyY2xlU2NvcmUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlQ3VycmVudFN0YXRlKCk6IHZvaWQge1xuICAgIGlmKCF0aGlzLmlzR2FtZVdvbikge1xuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLm5leHRTdGF0ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBuZXh0U3RhdGUoKTogU3RhdGUge1xuICAgIHJldHVybiAodGhpcy5jdXJyZW50U3RhdGUgPT0gU3RhdGUuQ3Jvc3MpID8gU3RhdGUuQ2lyY2xlIDogU3RhdGUuQ3Jvc3M7XG4gIH1cblxuICBwcml2YXRlIGdldCBpc0JvYXJkRnVsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbWFya3NDb3VudCA9PT0gKHRoaXMuYm9hcmRTaXplICogdGhpcy5ib2FyZFNpemUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplQm9hcmQoKTogdm9pZCB7XG4gICAgdGhpcy5zcXVhcmVzID0gW107XG4gICAgLyoqXG4gICAgICogLy8gZ2VuZXJhdGVzXG4gICAgICogLy8vLy8vLy8vLy9cXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXCBcbiAgICAgKiAvLyAwLCAwIHwgMCwgMSB8IDAsIDIgXFxcXFxuICAgICAqIC8vIC0tLS0tLS0tLS0tLS0tLS0tLSBcXFxcXG4gICAgICogLy8gMSwgMCB8IDEsIDEgfCAxLCAyIFxcXFxcbiAgICAgKiAvLyAtLS0tLS0tLS0tLS0tLS0tLS0gXFxcXCBcbiAgICAgKiAvLyAyLCAwIHwgMiwgMSB8IDIsIDIgXFxcXFxuICAgICAqIC8vLy8vLy8vLy8vXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFwgXG4gICAgICovXG4gICAgXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvYXJkU2l6ZTsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeTwgdGhpcy5ib2FyZFNpemU7IHkrKykge1xuICAgICAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKHgsIHkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=