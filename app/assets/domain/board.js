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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLGlDQUF5RDtBQUV6RDtJQUFBO1FBQ1MsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixjQUFTLEdBQVcsQ0FBQyxDQUFDO0lBVS9CLENBQUM7SUFSZSxnQkFBVSxHQUF4QixVQUF5QixNQUFXO1FBQ2xDLElBQU0sS0FBSyxHQUFVLElBQUksS0FBSyxFQUFFLENBQUM7UUFDakMsS0FBSyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFFbkMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxzQkFBSztBQWVsQjtJQVFFLGVBQW1CLElBQVk7UUFOeEIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUd2QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBSTVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBSyxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLDRCQUFZLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJ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QUFDLElBQUksY0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUFyRUQsSUFxRUM7QUFyRVksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBnZXRCb29sZWFuLCBzZXRCb29sZWFuLCBnZXROdW1iZXIsIHNldE51bWJlcixcbiAgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuaW1wb3J0IHsgU3F1YXJlLCBTdGF0ZSwgV2lubmVyUmV0cmlldmVyIH0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBjbGFzcyBTY29yZSB7XG4gIHB1YmxpYyBjcm9zc1Njb3JlOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgY2lyY2xlU2NvcmU6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBkcmF3U2NvcmU6IG51bWJlciA9IDA7XG5cbiAgcHVibGljIHN0YXRpYyBmcm9tT2JqZWN0KG9iamVjdDogYW55KTogU2NvcmUge1xuICAgIGNvbnN0IHNjb3JlOiBTY29yZSA9IG5ldyBTY29yZSgpO1xuICAgIHNjb3JlLmNpcmNsZVNjb3JlID0gb2JqZWN0LmNpcmNsZVNjb3JlO1xuICAgIHNjb3JlLmNyb3NzU2NvcmUgPSBvYmplY3QuY3Jvc3NTY29yZTtcbiAgICBzY29yZS5kcmF3U2NvcmUgPSBvYmplY3QuZHJhd1Njb3JlO1xuXG4gICAgcmV0dXJuIHNjb3JlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb2FyZCB7XG4gIHB1YmxpYyBib2FyZFNpemU6IG51bWJlcjtcbiAgcHVibGljIHNxdWFyZXM6IFNxdWFyZVtdID0gW107XG4gIHB1YmxpYyBjdXJyZW50U3RhdGU6IFN0YXRlO1xuICBwdWJsaWMgaXNHYW1lV29uOiBib29sZWFuO1xuICBwdWJsaWMgbWFya3NDb3VudDogbnVtYmVyID0gMDtcbiAgcHVibGljIHdpbm5lclJldHJlaXZlcjogV2lubmVyUmV0cmlldmVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IHNpemU7XG4gICAgdGhpcy5zcXVhcmVzID0gW107XG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSBTdGF0ZS5Dcm9zcztcbiAgICB0aGlzLnN0YXJ0TmV3R2FtZSgpO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0TmV3R2FtZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzR2FtZVdvbiA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudFN0YXRlID0gU3RhdGUuQ3Jvc3M7XG4gICAgdGhpcy5tYXJrc0NvdW50ID0gMDtcbiAgICB0aGlzLmluaXRpYWxpemVCb2FyZCgpO1xuICAgIHRoaXMud2lubmVyUmV0cmVpdmVyID0gbmV3IFdpbm5lclJldHJpZXZlcih0aGlzLnNxdWFyZXMsIHRoaXMuYm9hcmRTaXplKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMud2lubmVyUmV0cmVpdmVyLmdldFdpbm5pbmdJbmRleGVzRm9yKHNxdWFyZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RW1wdHlTcXVhcmVzKCk6IFNxdWFyZVtdIHtcbiAgICByZXR1cm4gdGhpcy53aW5uZXJSZXRyZWl2ZXIuZ2V0RW1wdHlTcXVhcmVzKCk7XG4gIH1cblxuICBwdWJsaWMgY2FsY3VsYXRlQm9hcmQoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLndpbm5lclJldHJlaXZlci5jYWxjdWxhdGVCb2FyZCgpO1xuICB9XG5cbiAgcHVibGljIGdldEJlc3RTcG90KGluZGV4OiBhbnkpOiBTcXVhcmUge1xuICAgIHJldHVybiB0aGlzLndpbm5lclJldHJlaXZlci5nZXRCZXN0U3BvdChpbmRleCk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlQ3VycmVudFN0YXRlKCk6IHZvaWQge1xuICAgIGlmKCF0aGlzLmlzR2FtZVdvbikge1xuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLm5leHRTdGF0ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRHJhdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXNHYW1lV29uICYmIHRoaXMuaXNCb2FyZEZ1bGw7XG4gIH1cblxuICBwcml2YXRlIGdldCBuZXh0U3RhdGUoKTogU3RhdGUge1xuICAgIHJldHVybiAodGhpcy5jdXJyZW50U3RhdGUgPT0gU3RhdGUuQ3Jvc3MpID8gU3RhdGUuQ2lyY2xlIDogU3RhdGUuQ3Jvc3M7XG4gIH1cblxuICBwcml2YXRlIGdldCBpc0JvYXJkRnVsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrc0NvdW50ID09PSAodGhpcy5ib2FyZFNpemUgKiB0aGlzLmJvYXJkU2l6ZSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVCb2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNxdWFyZXMgPSBbXTtcbiAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKDAsIDAsICdzcXVhcmUgYm90dG9tLXJpZ2h0JykpO1xuICAgIHRoaXMuc3F1YXJlcy5wdXNoKG5ldyBTcXVhcmUoMCwgMSwgJ3NxdWFyZSBib3R0b20tcmlnaHQnKSk7XG4gICAgdGhpcy5zcXVhcmVzLnB1c2gobmV3IFNxdWFyZSgwLCAyLCAnc3F1YXJlIGJvdHRvbScpKTtcbiAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKDEsIDAsICdzcXVhcmUgYm90dG9tLXJpZ2h0JykpO1xuICAgIHRoaXMuc3F1YXJlcy5wdXNoKG5ldyBTcXVhcmUoMSwgMSwgJ3NxdWFyZSBib3R0b20tcmlnaHQnKSk7XG4gICAgdGhpcy5zcXVhcmVzLnB1c2gobmV3IFNxdWFyZSgxLCAyLCAnc3F1YXJlIGJvdHRvbScpKTtcbiAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKDIsIDAsICdzcXVhcmUgcmlnaHQnKSk7XG4gICAgdGhpcy5zcXVhcmVzLnB1c2gobmV3IFNxdWFyZSgyLCAxLCAnc3F1YXJlIHJpZ2h0JykpO1xuICAgIHRoaXMuc3F1YXJlcy5wdXNoKG5ldyBTcXVhcmUoMiwgMiwgJ3NxdWFyZScpKTtcbiAgfVxufSJdfQ==