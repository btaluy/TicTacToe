"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var WinnerRetriever = /** @class */ (function () {
    function WinnerRetriever(squares, size) {
        this.squares = [];
        this.squares = squares;
        this.boardSize = size;
    }
    WinnerRetriever.prototype.getWinningIndexesFor = function (square) {
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
    WinnerRetriever.prototype.getEmptySquares = function () {
        var emptySquareIndexes = [];
        for (var i = 0; i < 9; i++) {
            if (this.squares[i].state === index_1.State.Blank) {
                emptySquareIndexes.push(this.squares[i]);
            }
        }
        return emptySquareIndexes;
    };
    WinnerRetriever.prototype.calculateBoard = function () {
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
    WinnerRetriever.prototype.getBestSpot = function (index) {
        return this.squares[index];
    };
    WinnerRetriever.prototype.getWinningIndexesInDiagonal = function (square) {
        if (square.xPosition == square.yPosition) {
            return this.getWinningSquareIndexes(square, 0, this.boardSize + 1);
        }
    };
    WinnerRetriever.prototype.getWinningSquareIndexesInRowOf = function (square) {
        var numberOfSquares = this.boardSize * square.xPosition;
        return this.getWinningSquareIndexes(square, numberOfSquares, 1);
    };
    WinnerRetriever.prototype.getWinningSquareIndexesInColumnOf = function (square) {
        return this.getWinningSquareIndexes(square, square.yPosition, this.boardSize);
    };
    WinnerRetriever.prototype.getWinningIndexesInAntiDiagonal = function (square) {
        if (square.xPosition + square.yPosition === this.boardSize - 1) {
            return this.getWinningSquareIndexes(square, this.boardSize - 1, this.boardSize - 1);
        }
    };
    WinnerRetriever.prototype.getWinningSquareIndexes = function (square, offsetInitvalue, offsetIncrement) {
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
    return WinnerRetriever;
}());
exports.WinnerRetriever = WinnerRetriever;
