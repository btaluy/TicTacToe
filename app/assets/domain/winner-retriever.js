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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lubmVyLXJldHJpZXZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndpbm5lci1yZXRyaWV2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBd0M7QUFFeEM7SUFJRSx5QkFBbUIsT0FBaUIsRUFBRSxJQUFZO1FBRjNDLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFHNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLDhDQUFvQixHQUEzQixVQUE0QixNQUFjO1FBQ3hDLElBQUksS0FBSyxHQUFHO1lBQ1YsSUFBSSxDQUFDLDhCQUE4QjtZQUNuQyxJQUFJLENBQUMsaUNBQWlDO1lBQ3RDLElBQUksQ0FBQywyQkFBMkI7WUFDaEMsSUFBSSxDQUFDLCtCQUErQjtTQUNyQyxDQUFDO1FBRUYsR0FBRyxDQUFDLENBQWEsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUs7WUFBakIsSUFBSSxJQUFJLGNBQUE7WUFDWCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsY0FBYyxDQUFDO1lBQ3hCLENBQUM7U0FDRjtJQUNILENBQUM7SUFFTSx5Q0FBZSxHQUF0QjtRQUNFLElBQUksa0JBQWtCLEdBQWEsRUFBRSxDQUFDO1FBRXRDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssYUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLGtC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QUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDbkIsQ0FBQztZQUVELG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxNQUFNLElBQUksZUFBZSxDQUFDO1FBQzVCLENBQUM7UUFFRCxNQUFNLENBQUMsb0JBQW9CLENBQUM7SUFDOUIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWxHRCxJQWtHQztBQWxHWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNxdWFyZSwgU3RhdGUgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5uZXJSZXRyaWV2ZXIge1xyXG4gIHB1YmxpYyBib2FyZFNpemU6IG51bWJlcjtcclxuICBwdWJsaWMgc3F1YXJlczogU3F1YXJlW10gPSBbXTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNxdWFyZXM6IFNxdWFyZVtdLCBzaXplOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc3F1YXJlcyA9IHNxdWFyZXM7XHJcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IHNpemU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0V2lubmluZ0luZGV4ZXNGb3Ioc3F1YXJlOiBTcXVhcmUpOiBudW1iZXJbXSB7XHJcbiAgICBsZXQgc3RlcHMgPSBbXHJcbiAgICAgIHRoaXMuZ2V0V2lubmluZ1NxdWFyZUluZGV4ZXNJblJvd09mLFxyXG4gICAgICB0aGlzLmdldFdpbm5pbmdTcXVhcmVJbmRleGVzSW5Db2x1bW5PZixcclxuICAgICAgdGhpcy5nZXRXaW5uaW5nSW5kZXhlc0luRGlhZ29uYWwsXHJcbiAgICAgIHRoaXMuZ2V0V2lubmluZ0luZGV4ZXNJbkFudGlEaWFnb25hbFxyXG4gICAgXTtcclxuXHJcbiAgICBmb3IgKGxldCBzdGVwIG9mIHN0ZXBzKSB7XHJcbiAgICAgIGxldCB3aW5uaW5nSW5kZXhlcyA9IHN0ZXAuY2FsbCh0aGlzLCBzcXVhcmUpO1xyXG4gICAgICBpZiAod2lubmluZ0luZGV4ZXMpIHtcclxuICAgICAgICByZXR1cm4gd2lubmluZ0luZGV4ZXM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRFbXB0eVNxdWFyZXMoKTogU3F1YXJlW10ge1xyXG4gICAgbGV0IGVtcHR5U3F1YXJlSW5kZXhlczogU3F1YXJlW10gPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAgIGlmKHRoaXMuc3F1YXJlc1tpXS5zdGF0ZSA9PT0gU3RhdGUuQmxhbmspIHtcclxuICAgICAgICBlbXB0eVNxdWFyZUluZGV4ZXMucHVzaCh0aGlzLnNxdWFyZXNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVtcHR5U3F1YXJlSW5kZXhlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxjdWxhdGVCb2FyZCgpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBzcXVhcmVzOiBTcXVhcmVbXSA9IHRoaXMuc3F1YXJlcztcclxuICAgIGxldCBvcmlnQm9hcmQ6IGFueVtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcXVhcmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHN3aXRjaChzcXVhcmVzW2ldLnN0YXRlKSB7XHJcbiAgICAgICAgY2FzZSBTdGF0ZS5Dcm9zczogXHJcbiAgICAgICAgICBvcmlnQm9hcmQucHVzaCgnWCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU3RhdGUuQ2lyY2xlOlxyXG4gICAgICAgICAgb3JpZ0JvYXJkLnB1c2goJ08nKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgb3JpZ0JvYXJkLnB1c2goaSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3JpZ0JvYXJkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEJlc3RTcG90KGluZGV4OiBudW1iZXIpOiBTcXVhcmUge1xyXG4gICAgcmV0dXJuIHRoaXMuc3F1YXJlc1tpbmRleF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdpbm5pbmdJbmRleGVzSW5EaWFnb25hbChzcXVhcmU6IFNxdWFyZSk6IG51bWJlcltdIHtcclxuICAgIGlmKHNxdWFyZS54UG9zaXRpb24gPT0gc3F1YXJlLnlQb3NpdGlvbikge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRXaW5uaW5nU3F1YXJlSW5kZXhlcyhzcXVhcmUsIDAsIHRoaXMuYm9hcmRTaXplICsgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdpbm5pbmdTcXVhcmVJbmRleGVzSW5Sb3dPZihzcXVhcmU6IFNxdWFyZSk6IG51bWJlcltdICB7XHJcbiAgICBjb25zdCBudW1iZXJPZlNxdWFyZXMgPSB0aGlzLmJvYXJkU2l6ZSAqIHNxdWFyZS54UG9zaXRpb247XHJcbiAgICByZXR1cm4gdGhpcy5nZXRXaW5uaW5nU3F1YXJlSW5kZXhlcyhzcXVhcmUsIG51bWJlck9mU3F1YXJlcywgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdpbm5pbmdTcXVhcmVJbmRleGVzSW5Db2x1bW5PZihzcXVhcmU6IFNxdWFyZSk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLmdldFdpbm5pbmdTcXVhcmVJbmRleGVzKHNxdWFyZSwgc3F1YXJlLnlQb3NpdGlvbiwgdGhpcy5ib2FyZFNpemUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRXaW5uaW5nSW5kZXhlc0luQW50aURpYWdvbmFsKHNxdWFyZTogU3F1YXJlKTogbnVtYmVyW10ge1xyXG4gICAgaWYoc3F1YXJlLnhQb3NpdGlvbiArIHNxdWFyZS55UG9zaXRpb24gPT09IHRoaXMuYm9hcmRTaXplIC0gMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRXaW5uaW5nU3F1YXJlSW5kZXhlcyhzcXVhcmUsIHRoaXMuYm9hcmRTaXplIC0gMSwgdGhpcy5ib2FyZFNpemUgLTEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRXaW5uaW5nU3F1YXJlSW5kZXhlcyhzcXVhcmU6IFNxdWFyZSwgb2Zmc2V0SW5pdHZhbHVlOiBudW1iZXIsIG9mZnNldEluY3JlbWVudCk6IG51bWJlcltdIHtcclxuICAgIGxldCB3aW5uaW5nU2VyaWVzSW5kZXhlczogbnVtYmVyW10gPSBbXTtcclxuICAgIGxldCBvZmZzZXQgPSBvZmZzZXRJbml0dmFsdWU7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmRTaXplOyBpKyspIHtcclxuICAgICAgaWYodGhpcy5zcXVhcmVzW29mZnNldF0uc3RhdGUgIT0gc3F1YXJlLnN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2lubmluZ1Nlcmllc0luZGV4ZXMucHVzaChvZmZzZXQpO1xyXG4gICAgICBvZmZzZXQgKz0gb2Zmc2V0SW5jcmVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3aW5uaW5nU2VyaWVzSW5kZXhlcztcclxuICB9XHJcbn0iXX0=