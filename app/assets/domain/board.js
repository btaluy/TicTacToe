"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Score = /** @class */ (function () {
    function Score() {
        this.player = '';
        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
    }
    Score.fromObject = function (object) {
        var score = new Score();
        score.player = object.player;
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
