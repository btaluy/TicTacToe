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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUc4QjtBQUU5QixpQ0FBeUQ7QUFFekQ7SUFXRSxlQUFtQixJQUFZO1FBVHhCLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFPdEIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFHOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQ0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLGdDQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBSyxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLDRCQUFZLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksdUJBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU0sb0JBQUksR0FBWCxVQUFZLE1BQWM7UUFDeEIsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNu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QUUsRUFBRSxDQUFDO2dCQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQTVHRCxJQTRHQztBQTVHWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZ2V0Qm9vbGVhbiwgc2V0Qm9vbGVhbiwgZ2V0TnVtYmVyLCBzZXROdW1iZXIsXHJcbiAgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhclxyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuaW1wb3J0IHsgU3F1YXJlLCBTdGF0ZSwgV2lubmVyUmV0cmlldmVyIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9hcmQge1xyXG4gIHB1YmxpYyBib2FyZFNpemU6IG51bWJlcjtcclxuICBwdWJsaWMgc3F1YXJlczogU3F1YXJlW10gPSBbXTtcclxuICBwdWJsaWMgY3VycmVudFN0YXRlOiBTdGF0ZTtcclxuICBwdWJsaWMgY3Jvc3NTY29yZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBjaXJjbGVTY29yZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBpc0dhbWVXb246IGJvb2xlYW47XHJcbiAgcHVibGljIHdpbm5lclJldHJlaXZlcjogV2lubmVyUmV0cmlldmVyO1xyXG5cclxuICBwcml2YXRlIF9tYXJrc0NvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2l6ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IHNpemU7XHJcbiAgICB0aGlzLnNxdWFyZXMgPSBbXTtcclxuICAgIHRoaXMuY3Jvc3NTY29yZSA9IGdldE51bWJlcignY3Jvc3NTY29yZScsIDApO1xyXG4gICAgdGhpcy5jaXJjbGVTY29yZSA9IGdldE51bWJlcignY2lyY2xlU2NvcmUnLCAwKTtcclxuICAgIHRoaXMuY3VycmVudFN0YXRlID0gU3RhdGUuQ3Jvc3M7XHJcbiAgICB0aGlzLnN0YXJ0TmV3R2FtZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0TmV3R2FtZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNHYW1lV29uID0gZmFsc2U7XHJcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFN0YXRlLkNyb3NzO1xyXG4gICAgdGhpcy5fbWFya3NDb3VudCA9IDA7XHJcbiAgICB0aGlzLmluaXRpYWxpemVCb2FyZCgpO1xyXG4gICAgdGhpcy53aW5uZXJSZXRyZWl2ZXIgPSBuZXcgV2lubmVyUmV0cmlldmVyKHRoaXMuc3F1YXJlcywgdGhpcy5ib2FyZFNpemUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1hcmsoc3F1YXJlOiBTcXVhcmUpOiB2b2lkIHtcclxuICAgIGlmKHNxdWFyZS5jYW5DaGFuZ2VTdGF0ZSkge1xyXG4gICAgICBzcXVhcmUuc3RhdGUgPSB0aGlzLmN1cnJlbnRTdGF0ZTtcclxuICAgICAgdGhpcy5fbWFya3NDb3VudCsrO1xyXG4gICAgICB0aGlzLnNldEdhbWVXb25TdGF0ZUZyb20oc3F1YXJlKTtcclxuICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50U3RhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy53aW5uZXJSZXRyZWl2ZXIuZ2V0V2lubmluZ0luZGV4ZXNGb3Ioc3F1YXJlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRFbXB0eVNxdWFyZXMoKTogU3F1YXJlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMud2lubmVyUmV0cmVpdmVyLmdldEVtcHR5U3F1YXJlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENyb3NzU2NvcmUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5jcm9zc1Njb3JlID0gdmFsdWU7XHJcbiAgICBzZXROdW1iZXIoJ2Nyb3NzU2NvcmUnLCB0aGlzLmNyb3NzU2NvcmUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldENpcmNsZVNjb3JlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuY2lyY2xlU2NvcmUgPSB2YWx1ZTtcclxuICAgIHNldE51bWJlcignY2lyY2xlU2NvcmUnLCB0aGlzLmNpcmNsZVNjb3JlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNEcmF3KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzR2FtZVdvbiAmJiB0aGlzLmlzQm9hcmRGdWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRHYW1lV29uU3RhdGVGcm9tKHNxdWFyZTogU3F1YXJlKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzR2FtZVdvbiA9IHRoaXMuZ2V0V2lubmluZ0luZGV4ZXNGb3Ioc3F1YXJlKSAhPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAodGhpcy5pc0dhbWVXb24pXHJcbiAgICAgIHRoaXMuaW5jcmVtZW50V2lubmVyU2NvcmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5jcmVtZW50V2lubmVyU2NvcmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50U3RhdGUgPT0gU3RhdGUuQ3Jvc3MpIHtcclxuICAgICAgdGhpcy5jcm9zc1Njb3JlKys7XHJcbiAgICAgIHRoaXMuc2V0Q3Jvc3NTY29yZSh0aGlzLmNyb3NzU2NvcmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jaXJjbGVTY29yZSsrO1xyXG4gICAgICB0aGlzLnNldENpcmNsZVNjb3JlKHRoaXMuY2lyY2xlU2NvcmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VDdXJyZW50U3RhdGUoKTogdm9pZCB7XHJcbiAgICBpZighdGhpcy5pc0dhbWVXb24pIHtcclxuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLm5leHRTdGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IG5leHRTdGF0ZSgpOiBTdGF0ZSB7XHJcbiAgICByZXR1cm4gKHRoaXMuY3VycmVudFN0YXRlID09IFN0YXRlLkNyb3NzKSA/IFN0YXRlLkNpcmNsZSA6IFN0YXRlLkNyb3NzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgaXNCb2FyZEZ1bGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFya3NDb3VudCA9PT0gKHRoaXMuYm9hcmRTaXplICogdGhpcy5ib2FyZFNpemUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplQm9hcmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNxdWFyZXMgPSBbXTtcclxuICAgIC8qKlxyXG4gICAgICogLy8gZ2VuZXJhdGVzXHJcbiAgICAgKiAvLy8vLy8vLy8vL1xcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcIFxyXG4gICAgICogLy8gMCwgMCB8IDAsIDEgfCAwLCAyIFxcXFxcclxuICAgICAqIC8vIC0tLS0tLS0tLS0tLS0tLS0tLSBcXFxcXHJcbiAgICAgKiAvLyAxLCAwIHwgMSwgMSB8IDEsIDIgXFxcXFxyXG4gICAgICogLy8gLS0tLS0tLS0tLS0tLS0tLS0tIFxcXFwgXHJcbiAgICAgKiAvLyAyLCAwIHwgMiwgMSB8IDIsIDIgXFxcXFxyXG4gICAgICogLy8vLy8vLy8vLy9cXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXCBcclxuICAgICAqL1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYm9hcmRTaXplOyB4KyspIHtcclxuICAgICAgZm9yIChsZXQgeSA9IDA7IHk8IHRoaXMuYm9hcmRTaXplOyB5KyspIHtcclxuICAgICAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKHgsIHkpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==