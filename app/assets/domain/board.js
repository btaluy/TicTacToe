"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Score = /** @class */ (function () {
    function Score() {
        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
    }
    Score.fromObject = function (object) {
        var score = new Score();
        score.wins = object.wins;
        score.draws = object.draws;
        score.losses = object.losses;
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
    Board.fromObject = function (object) {
        var board = new Board(3);
        board.boardSize = object.boardSize;
        board.currentState = object.currentState;
        board.isGameWon = object.isGameWon;
        board.marksCount = object.marksCount;
        if (object.squares) {
            board.squares = [];
            object.squares.forEach(function (item) {
                board.squares.push(index_1.Square.fromObject(item));
            });
        }
        if (object.winnerRetreiver) {
            var squares = [];
            if (object.winnerRetreiver.squares) {
                for (var _i = 0, _a = object.winnerRetreiver.squares; _i < _a.length; _i++) {
                    var item = _a[_i];
                    squares.push(index_1.Square.fromObject(item));
                }
            }
            board.winnerRetreiver = new index_1.WinnerRetriever(squares, object.winnerRetreiver.boardSize);
        }
        return board;
    };
    Board.prototype.startNewGame = function () {
        this.isGameWon = false;
        this.currentState = index_1.State.Cross;
        this.marksCount = 0;
        this.initializeBoard();
        this.winnerRetreiver = new index_1.WinnerRetriever(this.squares, this.boardSize);
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
        this.squares.push(index_1.Square.createSquare(0, 0, 'square bottom-right'));
        this.squares.push(index_1.Square.createSquare(0, 1, 'square bottom-right'));
        this.squares.push(index_1.Square.createSquare(0, 2, 'square bottom'));
        this.squares.push(index_1.Square.createSquare(1, 0, 'square bottom-right'));
        this.squares.push(index_1.Square.createSquare(1, 1, 'square bottom-right'));
        this.squares.push(index_1.Square.createSquare(1, 2, 'square bottom'));
        this.squares.push(index_1.Square.createSquare(2, 0, 'square right'));
        this.squares.push(index_1.Square.createSquare(2, 1, 'square right'));
        this.squares.push(index_1.Square.createSquare(2, 2, 'square'));
    };
    Board.prototype.getWinningIndexesFor = function (square) {
        var steps = [
            this.getWinningSquareIndexesInRowOf,
            this.getWinningSquareIndexesInColumnOf,
            this.getWinningIndexesInDiagonal,
            this.getWinningIndexesInAntiDiagonal
        ];
        for (var _i = 0, steps_1 = steps; _i < steps_1.length; _i++) {
            var step = steps_1[_i];
            var winningIndexes = step.call(this, square);
            if (winningIndexes) {
                return winningIndexes;
            }
        }
    };
    Board.prototype.getEmptySquares = function () {
        var emptySquareIndexes = [];
        for (var i = 0; i < 9; i++) {
            if (this.squares[i].state === index_1.State.Blank) {
                emptySquareIndexes.push(this.squares[i]);
            }
        }
        return emptySquareIndexes;
    };
    Board.prototype.calculateBoard = function () {
        var squares = this.squares;
        var origBoard = [];
        for (var i = 0; i < squares.length; i++) {
            switch (squares[i].state) {
                case index_1.State.Cross:
                    origBoard.push('X');
                    break;
                case index_1.State.Circle:
                    origBoard.push('O');
                    break;
                default:
                    origBoard.push(i);
                    break;
            }
        }
        return origBoard;
    };
    Board.prototype.getBestSpot = function (index) {
        return this.squares[index];
    };
    Board.prototype.getWinningIndexesInDiagonal = function (square) {
        if (square.xPosition == square.yPosition) {
            return this.getWinningSquareIndexes(square, 0, this.boardSize + 1);
        }
    };
    Board.prototype.getWinningSquareIndexesInRowOf = function (square) {
        var numberOfSquares = this.boardSize * square.xPosition;
        return this.getWinningSquareIndexes(square, numberOfSquares, 1);
    };
    Board.prototype.getWinningSquareIndexesInColumnOf = function (square) {
        return this.getWinningSquareIndexes(square, square.yPosition, this.boardSize);
    };
    Board.prototype.getWinningIndexesInAntiDiagonal = function (square) {
        if (square.xPosition + square.yPosition === this.boardSize - 1) {
            return this.getWinningSquareIndexes(square, this.boardSize - 1, this.boardSize - 1);
        }
    };
    Board.prototype.getWinningSquareIndexes = function (square, offsetInitvalue, offsetIncrement) {
        var winningSeriesIndexes = [];
        var offset = offsetInitvalue;
        for (var i = 0; i < this.boardSize; i++) {
            if (this.squares[offset].state != square.state) {
                return undefined;
            }
            winningSeriesIndexes.push(offset);
            offset += offsetIncrement;
        }
        return winningSeriesIndexes;
    };
    return Board;
}());
exports.Board = Board;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLGlDQUF5RDtBQUV6RDtJQUFBO1FBQ1MsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFVBQUssR0FBVyxDQUFDLENBQUM7SUFXM0IsQ0FBQztJQVRlLGdCQUFVLEdBQXhCLFVBQXlCLE1BQVc7UUFDbEMsSUFBTSxLQUFLLEdBQVUsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUVqQyxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzNCLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUU3QixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLHNCQUFLO0FBZ0JsQjtJQVFFLGVBQW1CLElBQVk7UUFOeEIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUd2QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBSTVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBSyxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVhLGdCQUFVLEdBQXhCLFVBQXlCLE1BQVc7UUFDbEMsSUFBTSxLQUFLLEdBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLEtBQUssQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6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QUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRSxDQUFDLENBQUMsQ0FBQztRQUNyRixDQUFDO0lBQ0gsQ0FBQztJQUVPLHVDQUF1QixHQUEvQixVQUFnQyxNQUFjLEVBQUUsZUFBdUIsRUFBRSxlQUFlO1FBQ3RGLElBQUksb0JBQW9CLEdBQWEsRUFBRSxDQUFDO1FBQ3hDLElBQUksTUFBTSxHQUFHLGVBQWUsQ0FBQztRQUU3QixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN2QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNuQixDQUFDO1lBRUQsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sSUFBSSxlQUFlLENBQUM7UUFDNUIsQ0FBQztRQUVELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztJQUM5QixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUE3S0QsSUE2S0M7QUE3S1ksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGdldEJvb2xlYW4sIHNldEJvb2xlYW4sIGdldE51bWJlciwgc2V0TnVtYmVyLFxyXG4gIGdldFN0cmluZywgc2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSwgY2xlYXJcclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbmltcG9ydCB7IFNxdWFyZSwgU3RhdGUsIFdpbm5lclJldHJpZXZlciB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjb3JlIHtcclxuICBwdWJsaWMgd2luczogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgbG9zc2VzOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBkcmF3czogbnVtYmVyID0gMDtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBmcm9tT2JqZWN0KG9iamVjdDogYW55KTogU2NvcmUge1xyXG4gICAgY29uc3Qgc2NvcmU6IFNjb3JlID0gbmV3IFNjb3JlKCk7XHJcbiAgICBcclxuICAgIHNjb3JlLndpbnMgPSBvYmplY3Qud2lucztcclxuICAgIHNjb3JlLmRyYXdzID0gb2JqZWN0LmRyYXdzO1xyXG4gICAgc2NvcmUubG9zc2VzID0gb2JqZWN0Lmxvc3NlcztcclxuXHJcbiAgICByZXR1cm4gc2NvcmU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9hcmQge1xyXG4gIHB1YmxpYyBib2FyZFNpemU6IG51bWJlcjtcclxuICBwdWJsaWMgc3F1YXJlczogU3F1YXJlW10gPSBbXTtcclxuICBwdWJsaWMgY3VycmVudFN0YXRlOiBTdGF0ZTtcclxuICBwdWJsaWMgaXNHYW1lV29uOiBib29sZWFuO1xyXG4gIHB1YmxpYyBtYXJrc0NvdW50OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyB3aW5uZXJSZXRyZWl2ZXI6IFdpbm5lclJldHJpZXZlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNpemU6IG51bWJlcikge1xyXG4gICAgdGhpcy5ib2FyZFNpemUgPSBzaXplO1xyXG4gICAgdGhpcy5zcXVhcmVzID0gW107XHJcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFN0YXRlLkNyb3NzO1xyXG4gICAgdGhpcy5zdGFydE5ld0dhbWUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbU9iamVjdChvYmplY3Q6IGFueSk6IEJvYXJkIHtcclxuICAgIGNvbnN0IGJvYXJkOiBCb2FyZCA9IG5ldyBCb2FyZCgzKTtcclxuICAgIFxyXG4gICAgYm9hcmQuYm9hcmRTaXplID0gb2JqZWN0LmJvYXJkU2l6ZTtcclxuICAgIGJvYXJkLmN1cnJlbnRTdGF0ZSA9IG9iamVjdC5jdXJyZW50U3RhdGU7XHJcbiAgICBib2FyZC5pc0dhbWVXb24gPSBvYmplY3QuaXNHYW1lV29uO1xyXG4gICAgYm9hcmQubWFya3NDb3VudCA9IG9iamVjdC5tYXJrc0NvdW50O1xyXG4gICAgXHJcbiAgICBpZiAob2JqZWN0LnNxdWFyZXMpIHtcclxuICAgICAgYm9hcmQuc3F1YXJlcyA9IFtdO1xyXG4gICAgICBvYmplY3Quc3F1YXJlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGJvYXJkLnNxdWFyZXMucHVzaChTcXVhcmUuZnJvbU9iamVjdChpdGVtKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvYmplY3Qud2lubmVyUmV0cmVpdmVyKSB7XHJcbiAgICAgIGNvbnN0IHNxdWFyZXM6IFNxdWFyZVtdID0gW107XHJcblxyXG4gICAgICBpZiAob2JqZWN0Lndpbm5lclJldHJlaXZlci5zcXVhcmVzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG9iamVjdC53aW5uZXJSZXRyZWl2ZXIuc3F1YXJlcykge1xyXG4gICAgICAgICAgc3F1YXJlcy5wdXNoKFNxdWFyZS5mcm9tT2JqZWN0KGl0ZW0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgYm9hcmQud2lubmVyUmV0cmVpdmVyID0gbmV3IFdpbm5lclJldHJpZXZlcihzcXVhcmVzLCBvYmplY3Qud2lubmVyUmV0cmVpdmVyLmJvYXJkU2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJvYXJkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0TmV3R2FtZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNHYW1lV29uID0gZmFsc2U7XHJcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFN0YXRlLkNyb3NzO1xyXG4gICAgdGhpcy5tYXJrc0NvdW50ID0gMDtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUJvYXJkKCk7XHJcbiAgICB0aGlzLndpbm5lclJldHJlaXZlciA9IG5ldyBXaW5uZXJSZXRyaWV2ZXIodGhpcy5zcXVhcmVzLCB0aGlzLmJvYXJkU2l6ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlQ3VycmVudFN0YXRlKCk6IHZvaWQge1xyXG4gICAgaWYoIXRoaXMuaXNHYW1lV29uKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5uZXh0U3RhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzRHJhdygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5pc0dhbWVXb24gJiYgdGhpcy5pc0JvYXJkRnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IG5leHRTdGF0ZSgpOiBTdGF0ZSB7XHJcbiAgICByZXR1cm4gKHRoaXMuY3VycmVudFN0YXRlID09IFN0YXRlLkNyb3NzKSA/IFN0YXRlLkNpcmNsZSA6IFN0YXRlLkNyb3NzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgaXNCb2FyZEZ1bGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXJrc0NvdW50ID09PSAodGhpcy5ib2FyZFNpemUgKiB0aGlzLmJvYXJkU2l6ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVCb2FyZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3F1YXJlcyA9IFtdO1xyXG4gICAgdGhpcy5zcXVhcmVzLnB1c2goU3F1YXJlLmNyZWF0ZVNxdWFyZSgwLCAwLCAnc3F1YXJlIGJvdHRvbS1yaWdodCcpKTtcclxuICAgIHRoaXMuc3F1YXJlcy5wdXNoKFNxdWFyZS5jcmVhdGVTcXVhcmUoMCwgMSwgJ3NxdWFyZSBib3R0b20tcmlnaHQnKSk7XHJcbiAgICB0aGlzLnNxdWFyZXMucHVzaChTcXVhcmUuY3JlYXRlU3F1YXJlKDAsIDIsICdzcXVhcmUgYm90dG9tJykpO1xyXG4gICAgdGhpcy5zcXVhcmVzLnB1c2goU3F1YXJlLmNyZWF0ZVNxdWFyZSgxLCAwLCAnc3F1YXJlIGJvdHRvbS1yaWdodCcpKTtcclxuICAgIHRoaXMuc3F1YXJlcy5wdXNoKFNxdWFyZS5jcmVhdGVTcXVhcmUoMSwgMSwgJ3NxdWFyZSBib3R0b20tcmlnaHQnKSk7XHJcbiAgICB0aGlzLnNxdWFyZXMucHVzaChTcXVhcmUuY3JlYXRlU3F1YXJlKDEsIDIsICdzcXVhcmUgYm90dG9tJykpO1xyXG4gICAgdGhpcy5zcXVhcmVzLnB1c2goU3F1YXJlLmNyZWF0ZVNxdWFyZSgyLCAwLCAnc3F1YXJlIHJpZ2h0JykpO1xyXG4gICAgdGhpcy5zcXVhcmVzLnB1c2goU3F1YXJlLmNyZWF0ZVNxdWFyZSgyLCAxLCAnc3F1YXJlIHJpZ2h0JykpO1xyXG4gICAgdGhpcy5zcXVhcmVzLnB1c2goU3F1YXJlLmNyZWF0ZVNxdWFyZSgyLCAyLCAnc3F1YXJlJykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFdpbm5pbmdJbmRleGVzRm9yKHNxdWFyZTogU3F1YXJlKTogbnVtYmVyW10ge1xyXG4gICAgbGV0IHN0ZXBzID0gW1xyXG4gICAgICB0aGlzLmdldFdpbm5pbmdTcXVhcmVJbmRleGVzSW5Sb3dPZixcclxuICAgICAgdGhpcy5nZXRXaW5uaW5nU3F1YXJlSW5kZXhlc0luQ29sdW1uT2YsXHJcbiAgICAgIHRoaXMuZ2V0V2lubmluZ0luZGV4ZXNJbkRpYWdvbmFsLFxyXG4gICAgICB0aGlzLmdldFdpbm5pbmdJbmRleGVzSW5BbnRpRGlhZ29uYWxcclxuICAgIF07XHJcblxyXG4gICAgZm9yIChsZXQgc3RlcCBvZiBzdGVwcykge1xyXG4gICAgICBsZXQgd2lubmluZ0luZGV4ZXMgPSBzdGVwLmNhbGwodGhpcywgc3F1YXJlKTtcclxuICAgICAgaWYgKHdpbm5pbmdJbmRleGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbm5pbmdJbmRleGVzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RW1wdHlTcXVhcmVzKCk6IFNxdWFyZVtdIHtcclxuICAgIGxldCBlbXB0eVNxdWFyZUluZGV4ZXM6IFNxdWFyZVtdID0gW107XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xyXG4gICAgICBpZih0aGlzLnNxdWFyZXNbaV0uc3RhdGUgPT09IFN0YXRlLkJsYW5rKSB7XHJcbiAgICAgICAgZW1wdHlTcXVhcmVJbmRleGVzLnB1c2godGhpcy5zcXVhcmVzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbXB0eVNxdWFyZUluZGV4ZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FsY3VsYXRlQm9hcmQoKTogYW55W10ge1xyXG4gICAgY29uc3Qgc3F1YXJlczogU3F1YXJlW10gPSB0aGlzLnNxdWFyZXM7XHJcbiAgICBsZXQgb3JpZ0JvYXJkOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzd2l0Y2goc3F1YXJlc1tpXS5zdGF0ZSkge1xyXG4gICAgICAgIGNhc2UgU3RhdGUuQ3Jvc3M6IFxyXG4gICAgICAgICAgb3JpZ0JvYXJkLnB1c2goJ1gnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFN0YXRlLkNpcmNsZTpcclxuICAgICAgICAgIG9yaWdCb2FyZC5wdXNoKCdPJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIG9yaWdCb2FyZC5wdXNoKGkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9yaWdCb2FyZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRCZXN0U3BvdChpbmRleDogbnVtYmVyKTogU3F1YXJlIHtcclxuICAgIHJldHVybiB0aGlzLnNxdWFyZXNbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRXaW5uaW5nSW5kZXhlc0luRGlhZ29uYWwoc3F1YXJlOiBTcXVhcmUpOiBudW1iZXJbXSB7XHJcbiAgICBpZihzcXVhcmUueFBvc2l0aW9uID09IHNxdWFyZS55UG9zaXRpb24pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0V2lubmluZ1NxdWFyZUluZGV4ZXMoc3F1YXJlLCAwLCB0aGlzLmJvYXJkU2l6ZSArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRXaW5uaW5nU3F1YXJlSW5kZXhlc0luUm93T2Yoc3F1YXJlOiBTcXVhcmUpOiBudW1iZXJbXSAge1xyXG4gICAgY29uc3QgbnVtYmVyT2ZTcXVhcmVzID0gdGhpcy5ib2FyZFNpemUgKiBzcXVhcmUueFBvc2l0aW9uO1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lubmluZ1NxdWFyZUluZGV4ZXMoc3F1YXJlLCBudW1iZXJPZlNxdWFyZXMsIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRXaW5uaW5nU3F1YXJlSW5kZXhlc0luQ29sdW1uT2Yoc3F1YXJlOiBTcXVhcmUpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRXaW5uaW5nU3F1YXJlSW5kZXhlcyhzcXVhcmUsIHNxdWFyZS55UG9zaXRpb24sIHRoaXMuYm9hcmRTaXplKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0V2lubmluZ0luZGV4ZXNJbkFudGlEaWFnb25hbChzcXVhcmU6IFNxdWFyZSk6IG51bWJlcltdIHtcclxuICAgIGlmKHNxdWFyZS54UG9zaXRpb24gKyBzcXVhcmUueVBvc2l0aW9uID09PSB0aGlzLmJvYXJkU2l6ZSAtIDEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0V2lubmluZ1NxdWFyZUluZGV4ZXMoc3F1YXJlLCB0aGlzLmJvYXJkU2l6ZSAtIDEsIHRoaXMuYm9hcmRTaXplIC0xKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0V2lubmluZ1NxdWFyZUluZGV4ZXMoc3F1YXJlOiBTcXVhcmUsIG9mZnNldEluaXR2YWx1ZTogbnVtYmVyLCBvZmZzZXRJbmNyZW1lbnQpOiBudW1iZXJbXSB7XHJcbiAgICBsZXQgd2lubmluZ1Nlcmllc0luZGV4ZXM6IG51bWJlcltdID0gW107XHJcbiAgICBsZXQgb2Zmc2V0ID0gb2Zmc2V0SW5pdHZhbHVlO1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkU2l6ZTsgaSsrKSB7XHJcbiAgICAgIGlmKHRoaXMuc3F1YXJlc1tvZmZzZXRdLnN0YXRlICE9IHNxdWFyZS5zdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdpbm5pbmdTZXJpZXNJbmRleGVzLnB1c2gob2Zmc2V0KTtcclxuICAgICAgb2Zmc2V0ICs9IG9mZnNldEluY3JlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd2lubmluZ1Nlcmllc0luZGV4ZXM7XHJcbiAgfVxyXG59Il19