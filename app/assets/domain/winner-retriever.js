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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lubmVyLXJldHJpZXZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndpbm5lci1yZXRyaWV2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBd0M7QUFFeEM7SUFJRSx5QkFBbUIsT0FBaUIsRUFBRSxJQUFZO1FBRjNDLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFHNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLDhDQUFvQixHQUEzQixVQUE0QixNQUFjO1FBQ3hDLElBQUksS0FBSyxHQUFHO1lBQ1YsSUFBSSxDQUFDLDhCQUE4QjtZQUNuQyxJQUFJLENBQUMsaUNBQWlDO1lBQ3RDLElBQUksQ0FBQywyQkFBMkI7WUFDaEMsSUFBSSxDQUFDLCtCQUErQjtTQUNyQyxDQUFDO1FBRUYsR0FBRyxDQUFDLENBQWEsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUs7WUFBakIsSUFBSSxJQUFJLGNBQUE7WUFDWCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsY0FBYyxDQUFDO1lBQ3hCLENBQUM7U0FDRjtJQUNILENBQUM7SUFFTSx5Q0FBZSxHQUF0QjtRQUNFLElBQUksa0JBQWtCLEdBQWEsRUFBRSxDQUFDO1FBRXRDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssYUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLGtC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QUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDbkIsQ0FBQztZQUVELG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxNQUFNLElBQUksZUFBZSxDQUFDO1FBQzVCLENBQUM7UUFFRCxNQUFNLENBQUMsb0JBQW9CLENBQUM7SUFDOUIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWxHRCxJQWtHQztBQWxHWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNxdWFyZSwgU3RhdGUgfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGNsYXNzIFdpbm5lclJldHJpZXZlciB7XG4gIHB1YmxpYyBib2FyZFNpemU6IG51bWJlcjtcbiAgcHVibGljIHNxdWFyZXM6IFNxdWFyZVtdID0gW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHNxdWFyZXM6IFNxdWFyZVtdLCBzaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLnNxdWFyZXMgPSBzcXVhcmVzO1xuICAgIHRoaXMuYm9hcmRTaXplID0gc2l6ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmU6IFNxdWFyZSk6IG51bWJlcltdIHtcbiAgICBsZXQgc3RlcHMgPSBbXG4gICAgICB0aGlzLmdldFdpbm5pbmdTcXVhcmVJbmRleGVzSW5Sb3dPZixcbiAgICAgIHRoaXMuZ2V0V2lubmluZ1NxdWFyZUluZGV4ZXNJbkNvbHVtbk9mLFxuICAgICAgdGhpcy5nZXRXaW5uaW5nSW5kZXhlc0luRGlhZ29uYWwsXG4gICAgICB0aGlzLmdldFdpbm5pbmdJbmRleGVzSW5BbnRpRGlhZ29uYWxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgc3RlcCBvZiBzdGVwcykge1xuICAgICAgbGV0IHdpbm5pbmdJbmRleGVzID0gc3RlcC5jYWxsKHRoaXMsIHNxdWFyZSk7XG4gICAgICBpZiAod2lubmluZ0luZGV4ZXMpIHtcbiAgICAgICAgcmV0dXJuIHdpbm5pbmdJbmRleGVzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRFbXB0eVNxdWFyZXMoKTogU3F1YXJlW10ge1xuICAgIGxldCBlbXB0eVNxdWFyZUluZGV4ZXM6IFNxdWFyZVtdID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICBpZih0aGlzLnNxdWFyZXNbaV0uc3RhdGUgPT09IFN0YXRlLkJsYW5rKSB7XG4gICAgICAgIGVtcHR5U3F1YXJlSW5kZXhlcy5wdXNoKHRoaXMuc3F1YXJlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtcHR5U3F1YXJlSW5kZXhlcztcbiAgfVxuXG4gIHB1YmxpYyBjYWxjdWxhdGVCb2FyZCgpOiBhbnlbXSB7XG4gICAgY29uc3Qgc3F1YXJlczogU3F1YXJlW10gPSB0aGlzLnNxdWFyZXM7XG4gICAgbGV0IG9yaWdCb2FyZDogYW55W10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3F1YXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgc3dpdGNoKHNxdWFyZXNbaV0uc3RhdGUpIHtcbiAgICAgICAgY2FzZSBTdGF0ZS5Dcm9zczogXG4gICAgICAgICAgb3JpZ0JvYXJkLnB1c2goJ1gnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU3RhdGUuQ2lyY2xlOlxuICAgICAgICAgIG9yaWdCb2FyZC5wdXNoKCdPJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIG9yaWdCb2FyZC5wdXNoKGkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3JpZ0JvYXJkO1xuICB9XG5cbiAgcHVibGljIGdldEJlc3RTcG90KGluZGV4OiBudW1iZXIpOiBTcXVhcmUge1xuICAgIHJldHVybiB0aGlzLnNxdWFyZXNbaW5kZXhdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXaW5uaW5nSW5kZXhlc0luRGlhZ29uYWwoc3F1YXJlOiBTcXVhcmUpOiBudW1iZXJbXSB7XG4gICAgaWYoc3F1YXJlLnhQb3NpdGlvbiA9PSBzcXVhcmUueVBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRXaW5uaW5nU3F1YXJlSW5kZXhlcyhzcXVhcmUsIDAsIHRoaXMuYm9hcmRTaXplICsgMSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRXaW5uaW5nU3F1YXJlSW5kZXhlc0luUm93T2Yoc3F1YXJlOiBTcXVhcmUpOiBudW1iZXJbXSAge1xuICAgIGNvbnN0IG51bWJlck9mU3F1YXJlcyA9IHRoaXMuYm9hcmRTaXplICogc3F1YXJlLnhQb3NpdGlvbjtcbiAgICByZXR1cm4gdGhpcy5nZXRXaW5uaW5nU3F1YXJlSW5kZXhlcyhzcXVhcmUsIG51bWJlck9mU3F1YXJlcywgMSk7XG4gIH1cblxuICBwcml2YXRlIGdldFdpbm5pbmdTcXVhcmVJbmRleGVzSW5Db2x1bW5PZihzcXVhcmU6IFNxdWFyZSk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRXaW5uaW5nU3F1YXJlSW5kZXhlcyhzcXVhcmUsIHNxdWFyZS55UG9zaXRpb24sIHRoaXMuYm9hcmRTaXplKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2lubmluZ0luZGV4ZXNJbkFudGlEaWFnb25hbChzcXVhcmU6IFNxdWFyZSk6IG51bWJlcltdIHtcbiAgICBpZihzcXVhcmUueFBvc2l0aW9uICsgc3F1YXJlLnlQb3NpdGlvbiA9PT0gdGhpcy5ib2FyZFNpemUgLSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRXaW5uaW5nU3F1YXJlSW5kZXhlcyhzcXVhcmUsIHRoaXMuYm9hcmRTaXplIC0gMSwgdGhpcy5ib2FyZFNpemUgLTEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2lubmluZ1NxdWFyZUluZGV4ZXMoc3F1YXJlOiBTcXVhcmUsIG9mZnNldEluaXR2YWx1ZTogbnVtYmVyLCBvZmZzZXRJbmNyZW1lbnQpOiBudW1iZXJbXSB7XG4gICAgbGV0IHdpbm5pbmdTZXJpZXNJbmRleGVzOiBudW1iZXJbXSA9IFtdO1xuICAgIGxldCBvZmZzZXQgPSBvZmZzZXRJbml0dmFsdWU7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZFNpemU7IGkrKykge1xuICAgICAgaWYodGhpcy5zcXVhcmVzW29mZnNldF0uc3RhdGUgIT0gc3F1YXJlLnN0YXRlKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHdpbm5pbmdTZXJpZXNJbmRleGVzLnB1c2gob2Zmc2V0KTtcbiAgICAgIG9mZnNldCArPSBvZmZzZXRJbmNyZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbm5pbmdTZXJpZXNJbmRleGVzO1xuICB9XG59Il19