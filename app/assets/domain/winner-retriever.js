"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lubmVyLXJldHJpZXZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndpbm5lci1yZXRyaWV2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUlFLHlCQUFtQixPQUFpQixFQUFFLElBQVk7UUFGM0MsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUc1QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sOENBQW9CLEdBQTNCLFVBQTRCLE1BQWM7UUFDeEMsSUFBSSxLQUFLLEdBQUc7WUFDVixJQUFJLENBQUMsOEJBQThCO1lBQ25DLElBQUksQ0FBQyxpQ0FBaUM7WUFDdEMsSUFBSSxDQUFDLDJCQUEyQjtZQUNoQyxJQUFJLENBQUMsK0JBQStCO1NBQ3JDLENBQUM7UUFFRixHQUFHLENBQUMsQ0FBYSxVQUFLLEVBQUwsZUFBSyxFQUFMLG1CQUFLLEVBQUwsSUFBSztZQUFqQixJQUFJLElBQUksY0FBQTtZQUNYLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDeEIsQ0FBQztTQUNGO0lBQ0gsQ0FBQztJQUVPLHFEQUEyQixHQUFuQyxVQUFvQyxNQUFjO1FBQ2hELEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckUsQ0FBQztJQUNILENBQUM7SUFFTyx3REFBOEIsR0FBdEMsVUFBdUMsTUFBYztRQUNuRCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTywyREFBaUMsR0FBekMsVUFBMEMsTUFBYztRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRU8seURBQStCLEdBQXZDLFVBQXdDLE1BQWM7UUFDcEQsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7SUFDSCxDQUFDO0lBRU8saURBQXVCLEdBQS9CLFVBQWdDLE1BQWMsRUFBRSxlQUF1QixFQUFFLGVBQWU7UUFDdEYsSUFBSSxvQkFBb0IsR0FBYSxFQUFFLENBQUM7UUFDeEMsSUFBSSxNQUFNLEdBQUcsZUFBZSxDQUFDO1FBRTdCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ25CLENBQUM7WUFFRCxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsTUFBTSxJQUFJLGVBQWUsQ0FBQztRQUM1QixDQUFDO1FBRUQsTUFBTSxDQUFDLG9CQUFvQixDQUFDO0lBQzlCLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUE3REQsSUE2REM7QUE3RFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcXVhcmUgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5uZXJSZXRyaWV2ZXIge1xyXG4gIHB1YmxpYyBib2FyZFNpemU6IG51bWJlcjtcclxuICBwdWJsaWMgc3F1YXJlczogU3F1YXJlW10gPSBbXTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNxdWFyZXM6IFNxdWFyZVtdLCBzaXplOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc3F1YXJlcyA9IHNxdWFyZXM7XHJcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IHNpemU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0V2lubmluZ0luZGV4ZXNGb3Ioc3F1YXJlOiBTcXVhcmUpOiBudW1iZXJbXSB7XHJcbiAgICBsZXQgc3RlcHMgPSBbXHJcbiAgICAgIHRoaXMuZ2V0V2lubmluZ1NxdWFyZUluZGV4ZXNJblJvd09mLFxyXG4gICAgICB0aGlzLmdldFdpbm5pbmdTcXVhcmVJbmRleGVzSW5Db2x1bW5PZixcclxuICAgICAgdGhpcy5nZXRXaW5uaW5nSW5kZXhlc0luRGlhZ29uYWwsXHJcbiAgICAgIHRoaXMuZ2V0V2lubmluZ0luZGV4ZXNJbkFudGlEaWFnb25hbFxyXG4gICAgXTtcclxuXHJcbiAgICBmb3IgKGxldCBzdGVwIG9mIHN0ZXBzKSB7XHJcbiAgICAgIGxldCB3aW5uaW5nSW5kZXhlcyA9IHN0ZXAuY2FsbCh0aGlzLCBzcXVhcmUpO1xyXG4gICAgICBpZiAod2lubmluZ0luZGV4ZXMpIHtcclxuICAgICAgICByZXR1cm4gd2lubmluZ0luZGV4ZXM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0V2lubmluZ0luZGV4ZXNJbkRpYWdvbmFsKHNxdWFyZTogU3F1YXJlKTogbnVtYmVyW10ge1xyXG4gICAgaWYoc3F1YXJlLnhQb3NpdGlvbiA9PSBzcXVhcmUueVBvc2l0aW9uKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldFdpbm5pbmdTcXVhcmVJbmRleGVzKHNxdWFyZSwgMCwgdGhpcy5ib2FyZFNpemUgKyAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0V2lubmluZ1NxdWFyZUluZGV4ZXNJblJvd09mKHNxdWFyZTogU3F1YXJlKTogbnVtYmVyW10gIHtcclxuICAgIGNvbnN0IG51bWJlck9mU3F1YXJlcyA9IHRoaXMuYm9hcmRTaXplICogc3F1YXJlLnhQb3NpdGlvbjtcclxuICAgIHJldHVybiB0aGlzLmdldFdpbm5pbmdTcXVhcmVJbmRleGVzKHNxdWFyZSwgbnVtYmVyT2ZTcXVhcmVzLCAxKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0V2lubmluZ1NxdWFyZUluZGV4ZXNJbkNvbHVtbk9mKHNxdWFyZTogU3F1YXJlKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lubmluZ1NxdWFyZUluZGV4ZXMoc3F1YXJlLCBzcXVhcmUueVBvc2l0aW9uLCB0aGlzLmJvYXJkU2l6ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdpbm5pbmdJbmRleGVzSW5BbnRpRGlhZ29uYWwoc3F1YXJlOiBTcXVhcmUpOiBudW1iZXJbXSB7XHJcbiAgICBpZihzcXVhcmUueFBvc2l0aW9uICsgc3F1YXJlLnlQb3NpdGlvbiA9PT0gdGhpcy5ib2FyZFNpemUgLSAxKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldFdpbm5pbmdTcXVhcmVJbmRleGVzKHNxdWFyZSwgdGhpcy5ib2FyZFNpemUgLSAxLCB0aGlzLmJvYXJkU2l6ZSAtMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFdpbm5pbmdTcXVhcmVJbmRleGVzKHNxdWFyZTogU3F1YXJlLCBvZmZzZXRJbml0dmFsdWU6IG51bWJlciwgb2Zmc2V0SW5jcmVtZW50KTogbnVtYmVyW10ge1xyXG4gICAgbGV0IHdpbm5pbmdTZXJpZXNJbmRleGVzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgbGV0IG9mZnNldCA9IG9mZnNldEluaXR2YWx1ZTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZFNpemU7IGkrKykge1xyXG4gICAgICBpZih0aGlzLnNxdWFyZXNbb2Zmc2V0XS5zdGF0ZSAhPSBzcXVhcmUuc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3aW5uaW5nU2VyaWVzSW5kZXhlcy5wdXNoKG9mZnNldCk7XHJcbiAgICAgIG9mZnNldCArPSBvZmZzZXRJbmNyZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdpbm5pbmdTZXJpZXNJbmRleGVzO1xyXG4gIH1cclxufSJdfQ==