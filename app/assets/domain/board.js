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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUc4QjtBQUU5QixpQ0FBeUQ7QUFFekQ7SUFZRSxlQUFtQixJQUFZO1FBVnhCLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFRdEIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFHOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQ0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLGdDQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0NBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sNEJBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQUssQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSx1QkFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFTSxvQkFBSSxHQUFYLFVBQVksTUFBYztRQUN4QixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsS0FB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QVksOEJBQVc7YUFBdkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7OztPQUFBO0lBRU8sK0JBQWUsR0FBdkI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQjs7Ozs7Ozs7O1dBU0c7UUFFSCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxjQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUEzSEQsSUEySEM7QUEzSFksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGdldEJvb2xlYW4sIHNldEJvb2xlYW4sIGdldE51bWJlciwgc2V0TnVtYmVyLFxyXG4gIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXJcclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbmltcG9ydCB7IFNxdWFyZSwgU3RhdGUsIFdpbm5lclJldHJpZXZlciB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvYXJkIHtcclxuICBwdWJsaWMgYm9hcmRTaXplOiBudW1iZXI7XHJcbiAgcHVibGljIHNxdWFyZXM6IFNxdWFyZVtdID0gW107XHJcbiAgcHVibGljIGN1cnJlbnRTdGF0ZTogU3RhdGU7XHJcbiAgcHVibGljIGNyb3NzU2NvcmU6IG51bWJlcjtcclxuICBwdWJsaWMgY2lyY2xlU2NvcmU6IG51bWJlcjtcclxuICBwdWJsaWMgZHJhd1Njb3JlOiBudW1iZXI7XHJcbiAgcHVibGljIGlzR2FtZVdvbjogYm9vbGVhbjtcclxuICBwdWJsaWMgd2lubmVyUmV0cmVpdmVyOiBXaW5uZXJSZXRyaWV2ZXI7XHJcblxyXG4gIHByaXZhdGUgX21hcmtzQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIpIHtcclxuICAgIHRoaXMuYm9hcmRTaXplID0gc2l6ZTtcclxuICAgIHRoaXMuc3F1YXJlcyA9IFtdO1xyXG4gICAgdGhpcy5jcm9zc1Njb3JlID0gZ2V0TnVtYmVyKCdjcm9zc1Njb3JlJywgMCk7XHJcbiAgICB0aGlzLmNpcmNsZVNjb3JlID0gZ2V0TnVtYmVyKCdjaXJjbGVTY29yZScsIDApO1xyXG4gICAgdGhpcy5kcmF3U2NvcmUgPSBnZXROdW1iZXIoJ2RyYXdTY29yZScsIDApO1xyXG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSBTdGF0ZS5Dcm9zcztcclxuICAgIHRoaXMuc3RhcnROZXdHYW1lKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnROZXdHYW1lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0dhbWVXb24gPSBmYWxzZTtcclxuICAgIHRoaXMuY3VycmVudFN0YXRlID0gU3RhdGUuQ3Jvc3M7XHJcbiAgICB0aGlzLl9tYXJrc0NvdW50ID0gMDtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUJvYXJkKCk7XHJcbiAgICB0aGlzLndpbm5lclJldHJlaXZlciA9IG5ldyBXaW5uZXJSZXRyaWV2ZXIodGhpcy5zcXVhcmVzLCB0aGlzLmJvYXJkU2l6ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbWFyayhzcXVhcmU6IFNxdWFyZSk6IHZvaWQge1xyXG4gICAgaWYoc3F1YXJlLmNhbkNoYW5nZVN0YXRlKSB7XHJcbiAgICAgIHNxdWFyZS5zdGF0ZSA9IHRoaXMuY3VycmVudFN0YXRlO1xyXG4gICAgICB0aGlzLl9tYXJrc0NvdW50Kys7XHJcbiAgICAgIHRoaXMuc2V0R2FtZVdvblN0YXRlRnJvbShzcXVhcmUpO1xyXG4gICAgICB0aGlzLmNoYW5nZUN1cnJlbnRTdGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFdpbm5pbmdJbmRleGVzRm9yKHNxdWFyZSk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLndpbm5lclJldHJlaXZlci5nZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEVtcHR5U3F1YXJlcygpOiBTcXVhcmVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy53aW5uZXJSZXRyZWl2ZXIuZ2V0RW1wdHlTcXVhcmVzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FsY3VsYXRlQm9hcmQoKTogYW55W10ge1xyXG4gICAgcmV0dXJuIHRoaXMud2lubmVyUmV0cmVpdmVyLmNhbGN1bGF0ZUJvYXJkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0QmVzdFNwb3QoaW5kZXg6IGFueSk6IFNxdWFyZSB7XHJcbiAgICByZXR1cm4gdGhpcy53aW5uZXJSZXRyZWl2ZXIuZ2V0QmVzdFNwb3QoaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENyb3NzU2NvcmUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5jcm9zc1Njb3JlID0gdmFsdWU7XHJcbiAgICBzZXROdW1iZXIoJ2Nyb3NzU2NvcmUnLCB0aGlzLmNyb3NzU2NvcmUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENpcmNsZVNjb3JlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuY2lyY2xlU2NvcmUgPSB2YWx1ZTtcclxuICAgIHNldE51bWJlcignY2lyY2xlU2NvcmUnLCB0aGlzLmNpcmNsZVNjb3JlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXREcmF3U2NvcmUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5kcmF3U2NvcmUgPSB2YWx1ZTtcclxuICAgIHNldE51bWJlcignZHJhd1Njb3JlJywgdGhpcy5kcmF3U2NvcmUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0RyYXcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNHYW1lV29uICYmIHRoaXMuaXNCb2FyZEZ1bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEdhbWVXb25TdGF0ZUZyb20oc3F1YXJlOiBTcXVhcmUpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNHYW1lV29uID0gdGhpcy5nZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpICE9IHVuZGVmaW5lZDtcclxuICAgIGlmICh0aGlzLmlzR2FtZVdvbilcclxuICAgICAgdGhpcy5pbmNyZW1lbnRXaW5uZXJTY29yZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbmNyZW1lbnRXaW5uZXJTY29yZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gU3RhdGUuQ3Jvc3MpIHtcclxuICAgICAgdGhpcy5jcm9zc1Njb3JlKys7XHJcbiAgICAgIHRoaXMuc2V0Q3Jvc3NTY29yZSh0aGlzLmNyb3NzU2NvcmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jaXJjbGVTY29yZSsrO1xyXG4gICAgICB0aGlzLnNldENpcmNsZVNjb3JlKHRoaXMuY2lyY2xlU2NvcmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VDdXJyZW50U3RhdGUoKTogdm9pZCB7XHJcbiAgICBpZighdGhpcy5pc0dhbWVXb24pIHtcclxuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLm5leHRTdGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IG5leHRTdGF0ZSgpOiBTdGF0ZSB7XHJcbiAgICByZXR1cm4gKHRoaXMuY3VycmVudFN0YXRlID09IFN0YXRlLkNyb3NzKSA/IFN0YXRlLkNpcmNsZSA6IFN0YXRlLkNyb3NzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgaXNCb2FyZEZ1bGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya3NDb3VudCA9PT0gKHRoaXMuYm9hcmRTaXplICogdGhpcy5ib2FyZFNpemUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplQm9hcmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNxdWFyZXMgPSBbXTtcclxuICAgIC8qKlxyXG4gICAgICogLy8gZ2VuZXJhdGVzXHJcbiAgICAgKiAvLy8vLy8vLy8vL1xcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcIFxyXG4gICAgICogLy8gMCwgMCB8IDAsIDEgfCAwLCAyIFxcXFxcclxuICAgICAqIC8vIC0tLS0tLS0tLS0tLS0tLS0tLSBcXFxcXHJcbiAgICAgKiAvLyAxLCAwIHwgMSwgMSB8IDEsIDIgXFxcXFxyXG4gICAgICogLy8gLS0tLS0tLS0tLS0tLS0tLS0tIFxcXFwgXHJcbiAgICAgKiAvLyAyLCAwIHwgMiwgMSB8IDIsIDIgXFxcXFxyXG4gICAgICogLy8vLy8vLy8vLy9cXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXCBcclxuICAgICAqL1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYm9hcmRTaXplOyB4KyspIHtcclxuICAgICAgZm9yIChsZXQgeSA9IDA7IHk8IHRoaXMuYm9hcmRTaXplOyB5KyspIHtcclxuICAgICAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKHgsIHkpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==