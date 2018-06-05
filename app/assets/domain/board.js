"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Score = /** @class */ (function () {
    function Score() {
        this.crossScore = 0;
        this.circleScore = 0;
        this.drawScore = 0;
    }
    Score.fromObject = function (object) {
        var score = new Score();
        score.circleScore = object.circleScore;
        score.crossScore = object.crossScore;
        score.drawScore = object.drawScore;
        return score;
    };
    return Score;
}());
exports.Score = Score;
var Board = /** @class */ (function () {
    function Board(size) {
        this.squares = [];
        this.marksCount = 0;
        this.boardSize = size;
        this.squares = [];
        this.currentState = index_1.State.Cross;
        this.startNewGame();
    }
    Board.prototype.startNewGame = function () {
        this.isGameWon = false;
        this.currentState = index_1.State.Cross;
        this.marksCount = 0;
        this.initializeBoard();
        this.winnerRetreiver = new index_1.WinnerRetriever(this.squares, this.boardSize);
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
    Board.prototype.changeCurrentState = function () {
        if (!this.isGameWon) {
            this.currentState = this.nextState;
        }
    };
    Object.defineProperty(Board.prototype, "isDraw", {
        get: function () {
            return !this.isGameWon && this.isBoardFull;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "nextState", {
        get: function () {
            return (this.currentState == index_1.State.Cross) ? index_1.State.Circle : index_1.State.Cross;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "isBoardFull", {
        get: function () {
            return this.marksCount === (this.boardSize * this.boardSize);
        },
        enumerable: true,
        configurable: true
    });
    Board.prototype.initializeBoard = function () {
        this.squares = [];
        this.squares.push(new index_1.Square(0, 0, 'square bottom-right'));
        this.squares.push(new index_1.Square(0, 1, 'square bottom-right'));
        this.squares.push(new index_1.Square(0, 2, 'square bottom'));
        this.squares.push(new index_1.Square(1, 0, 'square bottom-right'));
        this.squares.push(new index_1.Square(1, 1, 'square bottom-right'));
        this.squares.push(new index_1.Square(1, 2, 'square bottom'));
        this.squares.push(new index_1.Square(2, 0, 'square right'));
        this.squares.push(new index_1.Square(2, 1, 'square right'));
        this.squares.push(new index_1.Square(2, 2, 'square'));
    };
    return Board;
}());
exports.Board = Board;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLGlDQUF5RDtBQUV6RDtJQUFBO1FBQ1MsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixjQUFTLEdBQVcsQ0FBQyxDQUFDO0lBVS9CLENBQUM7SUFSZSxnQkFBVSxHQUF4QixVQUF5QixNQUFXO1FBQ2xDLElBQU0sS0FBSyxHQUFVLElBQUksS0FBSyxFQUFFLENBQUM7UUFDakMsS0FBSyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFFbkMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxzQkFBSztBQWVsQjtJQVFFLGVBQW1CLElBQVk7UUFOeEIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUd2QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBSTVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBSyxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLDRCQUFZLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJ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QUFDLElBQUksY0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUFyRUQsSUFxRUM7QUFyRVksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGdldEJvb2xlYW4sIHNldEJvb2xlYW4sIGdldE51bWJlciwgc2V0TnVtYmVyLFxyXG4gIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXJcclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbmltcG9ydCB7IFNxdWFyZSwgU3RhdGUsIFdpbm5lclJldHJpZXZlciB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjb3JlIHtcclxuICBwdWJsaWMgY3Jvc3NTY29yZTogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgY2lyY2xlU2NvcmU6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGRyYXdTY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tT2JqZWN0KG9iamVjdDogYW55KTogU2NvcmUge1xyXG4gICAgY29uc3Qgc2NvcmU6IFNjb3JlID0gbmV3IFNjb3JlKCk7XHJcbiAgICBzY29yZS5jaXJjbGVTY29yZSA9IG9iamVjdC5jaXJjbGVTY29yZTtcclxuICAgIHNjb3JlLmNyb3NzU2NvcmUgPSBvYmplY3QuY3Jvc3NTY29yZTtcclxuICAgIHNjb3JlLmRyYXdTY29yZSA9IG9iamVjdC5kcmF3U2NvcmU7XHJcblxyXG4gICAgcmV0dXJuIHNjb3JlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvYXJkIHtcclxuICBwdWJsaWMgYm9hcmRTaXplOiBudW1iZXI7XHJcbiAgcHVibGljIHNxdWFyZXM6IFNxdWFyZVtdID0gW107XHJcbiAgcHVibGljIGN1cnJlbnRTdGF0ZTogU3RhdGU7XHJcbiAgcHVibGljIGlzR2FtZVdvbjogYm9vbGVhbjtcclxuICBwdWJsaWMgbWFya3NDb3VudDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgd2lubmVyUmV0cmVpdmVyOiBXaW5uZXJSZXRyaWV2ZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIpIHtcclxuICAgIHRoaXMuYm9hcmRTaXplID0gc2l6ZTtcclxuICAgIHRoaXMuc3F1YXJlcyA9IFtdO1xyXG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSBTdGF0ZS5Dcm9zcztcclxuICAgIHRoaXMuc3RhcnROZXdHYW1lKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnROZXdHYW1lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0dhbWVXb24gPSBmYWxzZTtcclxuICAgIHRoaXMuY3VycmVudFN0YXRlID0gU3RhdGUuQ3Jvc3M7XHJcbiAgICB0aGlzLm1hcmtzQ291bnQgPSAwO1xyXG4gICAgdGhpcy5pbml0aWFsaXplQm9hcmQoKTtcclxuICAgIHRoaXMud2lubmVyUmV0cmVpdmVyID0gbmV3IFdpbm5lclJldHJpZXZlcih0aGlzLnNxdWFyZXMsIHRoaXMuYm9hcmRTaXplKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy53aW5uZXJSZXRyZWl2ZXIuZ2V0V2lubmluZ0luZGV4ZXNGb3Ioc3F1YXJlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRFbXB0eVNxdWFyZXMoKTogU3F1YXJlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMud2lubmVyUmV0cmVpdmVyLmdldEVtcHR5U3F1YXJlcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbGN1bGF0ZUJvYXJkKCk6IGFueVtdIHtcclxuICAgIHJldHVybiB0aGlzLndpbm5lclJldHJlaXZlci5jYWxjdWxhdGVCb2FyZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEJlc3RTcG90KGluZGV4OiBhbnkpOiBTcXVhcmUge1xyXG4gICAgcmV0dXJuIHRoaXMud2lubmVyUmV0cmVpdmVyLmdldEJlc3RTcG90KGluZGV4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VDdXJyZW50U3RhdGUoKTogdm9pZCB7XHJcbiAgICBpZighdGhpcy5pc0dhbWVXb24pIHtcclxuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLm5leHRTdGF0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNEcmF3KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzR2FtZVdvbiAmJiB0aGlzLmlzQm9hcmRGdWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgbmV4dFN0YXRlKCk6IFN0YXRlIHtcclxuICAgIHJldHVybiAodGhpcy5jdXJyZW50U3RhdGUgPT0gU3RhdGUuQ3Jvc3MpID8gU3RhdGUuQ2lyY2xlIDogU3RhdGUuQ3Jvc3M7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBpc0JvYXJkRnVsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1hcmtzQ291bnQgPT09ICh0aGlzLmJvYXJkU2l6ZSAqIHRoaXMuYm9hcmRTaXplKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUJvYXJkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zcXVhcmVzID0gW107XHJcbiAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKDAsIDAsICdzcXVhcmUgYm90dG9tLXJpZ2h0JykpO1xyXG4gICAgdGhpcy5zcXVhcmVzLnB1c2gobmV3IFNxdWFyZSgwLCAxLCAnc3F1YXJlIGJvdHRvbS1yaWdodCcpKTtcclxuICAgIHRoaXMuc3F1YXJlcy5wdXNoKG5ldyBTcXVhcmUoMCwgMiwgJ3NxdWFyZSBib3R0b20nKSk7XHJcbiAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKDEsIDAsICdzcXVhcmUgYm90dG9tLXJpZ2h0JykpO1xyXG4gICAgdGhpcy5zcXVhcmVzLnB1c2gobmV3IFNxdWFyZSgxLCAxLCAnc3F1YXJlIGJvdHRvbS1yaWdodCcpKTtcclxuICAgIHRoaXMuc3F1YXJlcy5wdXNoKG5ldyBTcXVhcmUoMSwgMiwgJ3NxdWFyZSBib3R0b20nKSk7XHJcbiAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKDIsIDAsICdzcXVhcmUgcmlnaHQnKSk7XHJcbiAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKDIsIDEsICdzcXVhcmUgcmlnaHQnKSk7XHJcbiAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKDIsIDIsICdzcXVhcmUnKSk7XHJcbiAgfVxyXG59Il19