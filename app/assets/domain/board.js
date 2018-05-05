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
        if (this.currentState == index_1.State.Cross) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUc4QjtBQUU5QixpQ0FBeUQ7QUFFekQ7SUFXRSxlQUFtQixJQUFZO1FBVHhCLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFPdEIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFHOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQ0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLGdDQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBSyxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLDRCQUFZLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksdUJBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU0sb0JBQUksR0FBWCxVQUFZLE1BQWM7UUFDeEIsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNu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UUFFSCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxjQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUFwSEQsSUFvSEM7QUFwSFksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGdldEJvb2xlYW4sIHNldEJvb2xlYW4sIGdldE51bWJlciwgc2V0TnVtYmVyLFxyXG4gIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXJcclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbmltcG9ydCB7IFNxdWFyZSwgU3RhdGUsIFdpbm5lclJldHJpZXZlciB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvYXJkIHtcclxuICBwdWJsaWMgYm9hcmRTaXplOiBudW1iZXI7XHJcbiAgcHVibGljIHNxdWFyZXM6IFNxdWFyZVtdID0gW107XHJcbiAgcHVibGljIGN1cnJlbnRTdGF0ZTogU3RhdGU7XHJcbiAgcHVibGljIGNyb3NzU2NvcmU6IG51bWJlcjtcclxuICBwdWJsaWMgY2lyY2xlU2NvcmU6IG51bWJlcjtcclxuICBwdWJsaWMgaXNHYW1lV29uOiBib29sZWFuO1xyXG4gIHB1YmxpYyB3aW5uZXJSZXRyZWl2ZXI6IFdpbm5lclJldHJpZXZlcjtcclxuXHJcbiAgcHJpdmF0ZSBfbWFya3NDb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNpemU6IG51bWJlcikge1xyXG4gICAgdGhpcy5ib2FyZFNpemUgPSBzaXplO1xyXG4gICAgdGhpcy5zcXVhcmVzID0gW107XHJcbiAgICB0aGlzLmNyb3NzU2NvcmUgPSBnZXROdW1iZXIoJ2Nyb3NzU2NvcmUnLCAwKTtcclxuICAgIHRoaXMuY2lyY2xlU2NvcmUgPSBnZXROdW1iZXIoJ2NpcmNsZVNjb3JlJywgMCk7XHJcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFN0YXRlLkNyb3NzO1xyXG4gICAgdGhpcy5zdGFydE5ld0dhbWUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydE5ld0dhbWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzR2FtZVdvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSBTdGF0ZS5Dcm9zcztcclxuICAgIHRoaXMuX21hcmtzQ291bnQgPSAwO1xyXG4gICAgdGhpcy5pbml0aWFsaXplQm9hcmQoKTtcclxuICAgIHRoaXMud2lubmVyUmV0cmVpdmVyID0gbmV3IFdpbm5lclJldHJpZXZlcih0aGlzLnNxdWFyZXMsIHRoaXMuYm9hcmRTaXplKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYXJrKHNxdWFyZTogU3F1YXJlKTogdm9pZCB7XHJcbiAgICBpZihzcXVhcmUuY2FuQ2hhbmdlU3RhdGUpIHtcclxuICAgICAgc3F1YXJlLnN0YXRlID0gdGhpcy5jdXJyZW50U3RhdGU7XHJcbiAgICAgIHRoaXMuX21hcmtzQ291bnQrKztcclxuICAgICAgdGhpcy5zZXRHYW1lV29uU3RhdGVGcm9tKHNxdWFyZSk7XHJcbiAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFN0YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0V2lubmluZ0luZGV4ZXNGb3Ioc3F1YXJlKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMud2lubmVyUmV0cmVpdmVyLmdldFdpbm5pbmdJbmRleGVzRm9yKHNxdWFyZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RW1wdHlTcXVhcmVzKCk6IFNxdWFyZVtdIHtcclxuICAgIHJldHVybiB0aGlzLndpbm5lclJldHJlaXZlci5nZXRFbXB0eVNxdWFyZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxjdWxhdGVCb2FyZCgpOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gdGhpcy53aW5uZXJSZXRyZWl2ZXIuY2FsY3VsYXRlQm9hcmQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRCZXN0U3BvdChpbmRleDogYW55KTogU3F1YXJlIHtcclxuICAgIHJldHVybiB0aGlzLndpbm5lclJldHJlaXZlci5nZXRCZXN0U3BvdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Q3Jvc3NTY29yZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmNyb3NzU2NvcmUgPSB2YWx1ZTtcclxuICAgIHNldE51bWJlcignY3Jvc3NTY29yZScsIHRoaXMuY3Jvc3NTY29yZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Q2lyY2xlU2NvcmUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5jaXJjbGVTY29yZSA9IHZhbHVlO1xyXG4gICAgc2V0TnVtYmVyKCdjaXJjbGVTY29yZScsIHRoaXMuY2lyY2xlU2NvcmUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0RyYXcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNHYW1lV29uICYmIHRoaXMuaXNCb2FyZEZ1bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEdhbWVXb25TdGF0ZUZyb20oc3F1YXJlOiBTcXVhcmUpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNHYW1lV29uID0gdGhpcy5nZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpICE9IHVuZGVmaW5lZDtcclxuICAgIGlmICh0aGlzLmlzR2FtZVdvbilcclxuICAgICAgdGhpcy5pbmNyZW1lbnRXaW5uZXJTY29yZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbmNyZW1lbnRXaW5uZXJTY29yZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSA9PSBTdGF0ZS5Dcm9zcykge1xyXG4gICAgICB0aGlzLmNyb3NzU2NvcmUrKztcclxuICAgICAgdGhpcy5zZXRDcm9zc1Njb3JlKHRoaXMuY3Jvc3NTY29yZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNpcmNsZVNjb3JlKys7XHJcbiAgICAgIHRoaXMuc2V0Q2lyY2xlU2NvcmUodGhpcy5jaXJjbGVTY29yZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZUN1cnJlbnRTdGF0ZSgpOiB2b2lkIHtcclxuICAgIGlmKCF0aGlzLmlzR2FtZVdvbikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHRoaXMubmV4dFN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgbmV4dFN0YXRlKCk6IFN0YXRlIHtcclxuICAgIHJldHVybiAodGhpcy5jdXJyZW50U3RhdGUgPT0gU3RhdGUuQ3Jvc3MpID8gU3RhdGUuQ2lyY2xlIDogU3RhdGUuQ3Jvc3M7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBpc0JvYXJkRnVsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9tYXJrc0NvdW50ID09PSAodGhpcy5ib2FyZFNpemUgKiB0aGlzLmJvYXJkU2l6ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVCb2FyZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3F1YXJlcyA9IFtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiAvLyBnZW5lcmF0ZXNcclxuICAgICAqIC8vLy8vLy8vLy8vXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFwgXHJcbiAgICAgKiAvLyAwLCAwIHwgMCwgMSB8IDAsIDIgXFxcXFxyXG4gICAgICogLy8gLS0tLS0tLS0tLS0tLS0tLS0tIFxcXFxcclxuICAgICAqIC8vIDEsIDAgfCAxLCAxIHwgMSwgMiBcXFxcXHJcbiAgICAgKiAvLyAtLS0tLS0tLS0tLS0tLS0tLS0gXFxcXCBcclxuICAgICAqIC8vIDIsIDAgfCAyLCAxIHwgMiwgMiBcXFxcXHJcbiAgICAgKiAvLy8vLy8vLy8vL1xcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcIFxyXG4gICAgICovXHJcbiAgICBcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5ib2FyZFNpemU7IHgrKykge1xyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeTwgdGhpcy5ib2FyZFNpemU7IHkrKykge1xyXG4gICAgICAgIHRoaXMuc3F1YXJlcy5wdXNoKG5ldyBTcXVhcmUoeCwgeSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19