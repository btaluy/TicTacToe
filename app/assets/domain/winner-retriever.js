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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lubmVyLXJldHJpZXZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndpbm5lci1yZXRyaWV2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBd0M7QUFFeEM7SUFJRSx5QkFBbUIsT0FBaUIsRUFBRSxJQUFZO1FBRjNDLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFHNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLDhDQUFvQixHQUEzQixVQUE0QixNQUFjO1FBQ3hDLElBQUksS0FBSyxHQUFHO1lBQ1YsSUFBSSxDQUFDLDhCQUE4QjtZQUNuQyxJQUFJLENBQUMsaUNBQWlDO1lBQ3RDLElBQUksQ0FBQywyQkFBMkI7WUFDaEMsSUFBSSxDQUFDLCtCQUErQjtTQUNyQyxDQUFDO1FBRUYsR0FBRyxDQUFDLENBQWEsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUs7WUFBakIsSUFBSSxJQUFJLGNBQUE7WUFDWCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsY0FBYyxDQUFDO1lBQ3hCLENBQUM7U0FDRjtJQUNILENBQUM7SUFFTSx5Q0FBZSxHQUF0QjtRQUNFLElBQUksa0JBQWtCLEdBQWEsRUFBRSxDQUFDO1FBRXRDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssYUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNLENBQUMsa0JBQWtCLENBQUM7SUFDNUIsQ0FBQztJQUVPLHFEQUEyQixHQUFuQyxVQUFvQyxNQUFjO1FBQ2hELEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckUsQ0FBQztJQUNILENBQUM7SUFFTyx3REFBOEIsR0FBdEMsVUFBdUMsTUFBYztRQUNuRCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTywyREFBaUMsR0FBekMsVUFBMEMsTUFBYztRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRU8seURBQStCLEdBQXZDLFVBQXdDLE1BQWM7UUFDcEQsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7SUFDSCxDQUFDO0lBRU8saURBQXVCLEdBQS9CLFVBQWdDLE1BQWMsRUFBRSxlQUF1QixFQUFFLGVBQWU7UUFDdEYsSUFBSSxvQkFBb0IsR0FBYSxFQUFFLENBQUM7UUFDeEMsSUFBSSxNQUFNLEdBQUcsZUFBZSxDQUFDO1FBRTdCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ25CLENBQUM7WUFFRCxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsTUFBTSxJQUFJLGVBQWUsQ0FBQztRQUM1QixDQUFDO1FBRUQsTUFBTSxDQUFDLG9CQUFvQixDQUFDO0lBQzlCLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF6RUQsSUF5RUM7QUF6RVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcXVhcmUsIFN0YXRlIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgV2lubmVyUmV0cmlldmVyIHtcclxuICBwdWJsaWMgYm9hcmRTaXplOiBudW1iZXI7XHJcbiAgcHVibGljIHNxdWFyZXM6IFNxdWFyZVtdID0gW107XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzcXVhcmVzOiBTcXVhcmVbXSwgc2l6ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNxdWFyZXMgPSBzcXVhcmVzO1xyXG4gICAgdGhpcy5ib2FyZFNpemUgPSBzaXplO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFdpbm5pbmdJbmRleGVzRm9yKHNxdWFyZTogU3F1YXJlKTogbnVtYmVyW10ge1xyXG4gICAgbGV0IHN0ZXBzID0gW1xyXG4gICAgICB0aGlzLmdldFdpbm5pbmdTcXVhcmVJbmRleGVzSW5Sb3dPZixcclxuICAgICAgdGhpcy5nZXRXaW5uaW5nU3F1YXJlSW5kZXhlc0luQ29sdW1uT2YsXHJcbiAgICAgIHRoaXMuZ2V0V2lubmluZ0luZGV4ZXNJbkRpYWdvbmFsLFxyXG4gICAgICB0aGlzLmdldFdpbm5pbmdJbmRleGVzSW5BbnRpRGlhZ29uYWxcclxuICAgIF07XHJcblxyXG4gICAgZm9yIChsZXQgc3RlcCBvZiBzdGVwcykge1xyXG4gICAgICBsZXQgd2lubmluZ0luZGV4ZXMgPSBzdGVwLmNhbGwodGhpcywgc3F1YXJlKTtcclxuICAgICAgaWYgKHdpbm5pbmdJbmRleGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbm5pbmdJbmRleGVzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RW1wdHlTcXVhcmVzKCk6IFNxdWFyZVtdIHtcclxuICAgIGxldCBlbXB0eVNxdWFyZUluZGV4ZXM6IFNxdWFyZVtdID0gW107XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xyXG4gICAgICBpZih0aGlzLnNxdWFyZXNbaV0uc3RhdGUgPT09IFN0YXRlLkJsYW5rKSB7XHJcbiAgICAgICAgZW1wdHlTcXVhcmVJbmRleGVzLnB1c2godGhpcy5zcXVhcmVzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbXB0eVNxdWFyZUluZGV4ZXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdpbm5pbmdJbmRleGVzSW5EaWFnb25hbChzcXVhcmU6IFNxdWFyZSk6IG51bWJlcltdIHtcclxuICAgIGlmKHNxdWFyZS54UG9zaXRpb24gPT0gc3F1YXJlLnlQb3NpdGlvbikge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRXaW5uaW5nU3F1YXJlSW5kZXhlcyhzcXVhcmUsIDAsIHRoaXMuYm9hcmRTaXplICsgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdpbm5pbmdTcXVhcmVJbmRleGVzSW5Sb3dPZihzcXVhcmU6IFNxdWFyZSk6IG51bWJlcltdICB7XHJcbiAgICBjb25zdCBudW1iZXJPZlNxdWFyZXMgPSB0aGlzLmJvYXJkU2l6ZSAqIHNxdWFyZS54UG9zaXRpb247XHJcbiAgICByZXR1cm4gdGhpcy5nZXRXaW5uaW5nU3F1YXJlSW5kZXhlcyhzcXVhcmUsIG51bWJlck9mU3F1YXJlcywgMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdpbm5pbmdTcXVhcmVJbmRleGVzSW5Db2x1bW5PZihzcXVhcmU6IFNxdWFyZSk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLmdldFdpbm5pbmdTcXVhcmVJbmRleGVzKHNxdWFyZSwgc3F1YXJlLnlQb3NpdGlvbiwgdGhpcy5ib2FyZFNpemUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRXaW5uaW5nSW5kZXhlc0luQW50aURpYWdvbmFsKHNxdWFyZTogU3F1YXJlKTogbnVtYmVyW10ge1xyXG4gICAgaWYoc3F1YXJlLnhQb3NpdGlvbiArIHNxdWFyZS55UG9zaXRpb24gPT09IHRoaXMuYm9hcmRTaXplIC0gMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRXaW5uaW5nU3F1YXJlSW5kZXhlcyhzcXVhcmUsIHRoaXMuYm9hcmRTaXplIC0gMSwgdGhpcy5ib2FyZFNpemUgLTEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRXaW5uaW5nU3F1YXJlSW5kZXhlcyhzcXVhcmU6IFNxdWFyZSwgb2Zmc2V0SW5pdHZhbHVlOiBudW1iZXIsIG9mZnNldEluY3JlbWVudCk6IG51bWJlcltdIHtcclxuICAgIGxldCB3aW5uaW5nU2VyaWVzSW5kZXhlczogbnVtYmVyW10gPSBbXTtcclxuICAgIGxldCBvZmZzZXQgPSBvZmZzZXRJbml0dmFsdWU7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmRTaXplOyBpKyspIHtcclxuICAgICAgaWYodGhpcy5zcXVhcmVzW29mZnNldF0uc3RhdGUgIT0gc3F1YXJlLnN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2lubmluZ1Nlcmllc0luZGV4ZXMucHVzaChvZmZzZXQpO1xyXG4gICAgICBvZmZzZXQgKz0gb2Zmc2V0SW5jcmVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3aW5uaW5nU2VyaWVzSW5kZXhlcztcclxuICB9XHJcbn0iXX0=