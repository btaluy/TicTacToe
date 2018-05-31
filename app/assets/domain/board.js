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
        this.drawScore = application_settings_1.getNumber('drawScore', 0);
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
    Board.prototype.calculateBoard = function () {
        return this.winnerRetreiver.calculateBoard();
    };
    Board.prototype.getBestSpot = function (index) {
        return this.winnerRetreiver.getBestSpot(index);
    };
    Board.prototype.setCrossScore = function (value) {
        this.crossScore = value;
        application_settings_1.setNumber('crossScore', this.crossScore);
    };
    Board.prototype.setCircleScore = function (value) {
        this.circleScore = value;
        application_settings_1.setNumber('circleScore', this.circleScore);
    };
    Board.prototype.setDrawScore = function (value) {
        this.drawScore = value;
        application_settings_1.setNumber('drawScore', this.drawScore);
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
        if (this.currentState === index_1.State.Cross) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUc4QjtBQUU5QixpQ0FBeUQ7QUFFekQ7SUFZRSxlQUFtQixJQUFZO1FBVnhCLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFRdEIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFHOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQ0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLGdDQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0NBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sNEJBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQUssQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSx1QkFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFTSxvQkFBSSxHQUFYLFVBQVksTUFBYztRQUN4QixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsS0FB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LENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxjQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQXBIRCxJQW9IQztBQXBIWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZ2V0Qm9vbGVhbiwgc2V0Qm9vbGVhbiwgZ2V0TnVtYmVyLCBzZXROdW1iZXIsXHJcbiAgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhclxyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuaW1wb3J0IHsgU3F1YXJlLCBTdGF0ZSwgV2lubmVyUmV0cmlldmVyIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9hcmQge1xyXG4gIHB1YmxpYyBib2FyZFNpemU6IG51bWJlcjtcclxuICBwdWJsaWMgc3F1YXJlczogU3F1YXJlW10gPSBbXTtcclxuICBwdWJsaWMgY3VycmVudFN0YXRlOiBTdGF0ZTtcclxuICBwdWJsaWMgY3Jvc3NTY29yZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBjaXJjbGVTY29yZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBkcmF3U2NvcmU6IG51bWJlcjtcclxuICBwdWJsaWMgaXNHYW1lV29uOiBib29sZWFuO1xyXG4gIHB1YmxpYyB3aW5uZXJSZXRyZWl2ZXI6IFdpbm5lclJldHJpZXZlcjtcclxuXHJcbiAgcHJpdmF0ZSBfbWFya3NDb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNpemU6IG51bWJlcikge1xyXG4gICAgdGhpcy5ib2FyZFNpemUgPSBzaXplO1xyXG4gICAgdGhpcy5zcXVhcmVzID0gW107XHJcbiAgICB0aGlzLmNyb3NzU2NvcmUgPSBnZXROdW1iZXIoJ2Nyb3NzU2NvcmUnLCAwKTtcclxuICAgIHRoaXMuY2lyY2xlU2NvcmUgPSBnZXROdW1iZXIoJ2NpcmNsZVNjb3JlJywgMCk7XHJcbiAgICB0aGlzLmRyYXdTY29yZSA9IGdldE51bWJlcignZHJhd1Njb3JlJywgMCk7XHJcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFN0YXRlLkNyb3NzO1xyXG4gICAgdGhpcy5zdGFydE5ld0dhbWUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydE5ld0dhbWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzR2FtZVdvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSBTdGF0ZS5Dcm9zcztcclxuICAgIHRoaXMuX21hcmtzQ291bnQgPSAwO1xyXG4gICAgdGhpcy5pbml0aWFsaXplQm9hcmQoKTtcclxuICAgIHRoaXMud2lubmVyUmV0cmVpdmVyID0gbmV3IFdpbm5lclJldHJpZXZlcih0aGlzLnNxdWFyZXMsIHRoaXMuYm9hcmRTaXplKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYXJrKHNxdWFyZTogU3F1YXJlKTogdm9pZCB7XHJcbiAgICBpZihzcXVhcmUuY2FuQ2hhbmdlU3RhdGUpIHtcclxuICAgICAgc3F1YXJlLnN0YXRlID0gdGhpcy5jdXJyZW50U3RhdGU7XHJcbiAgICAgIHRoaXMuX21hcmtzQ291bnQrKztcclxuICAgICAgdGhpcy5zZXRHYW1lV29uU3RhdGVGcm9tKHNxdWFyZSk7XHJcbiAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFN0YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0V2lubmluZ0luZGV4ZXNGb3Ioc3F1YXJlKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMud2lubmVyUmV0cmVpdmVyLmdldFdpbm5pbmdJbmRleGVzRm9yKHNxdWFyZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RW1wdHlTcXVhcmVzKCk6IFNxdWFyZVtdIHtcclxuICAgIHJldHVybiB0aGlzLndpbm5lclJldHJlaXZlci5nZXRFbXB0eVNxdWFyZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxjdWxhdGVCb2FyZCgpOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gdGhpcy53aW5uZXJSZXRyZWl2ZXIuY2FsY3VsYXRlQm9hcmQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRCZXN0U3BvdChpbmRleDogYW55KTogU3F1YXJlIHtcclxuICAgIHJldHVybiB0aGlzLndpbm5lclJldHJlaXZlci5nZXRCZXN0U3BvdChpbmRleCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Q3Jvc3NTY29yZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmNyb3NzU2NvcmUgPSB2YWx1ZTtcclxuICAgIHNldE51bWJlcignY3Jvc3NTY29yZScsIHRoaXMuY3Jvc3NTY29yZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Q2lyY2xlU2NvcmUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5jaXJjbGVTY29yZSA9IHZhbHVlO1xyXG4gICAgc2V0TnVtYmVyKCdjaXJjbGVTY29yZScsIHRoaXMuY2lyY2xlU2NvcmUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldERyYXdTY29yZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYXdTY29yZSA9IHZhbHVlO1xyXG4gICAgc2V0TnVtYmVyKCdkcmF3U2NvcmUnLCB0aGlzLmRyYXdTY29yZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzRHJhdygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5pc0dhbWVXb24gJiYgdGhpcy5pc0JvYXJkRnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0R2FtZVdvblN0YXRlRnJvbShzcXVhcmU6IFNxdWFyZSk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0dhbWVXb24gPSB0aGlzLmdldFdpbm5pbmdJbmRleGVzRm9yKHNxdWFyZSkgIT0gdW5kZWZpbmVkO1xyXG4gICAgaWYgKHRoaXMuaXNHYW1lV29uKVxyXG4gICAgICB0aGlzLmluY3JlbWVudFdpbm5lclNjb3JlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluY3JlbWVudFdpbm5lclNjb3JlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFN0YXRlID09PSBTdGF0ZS5Dcm9zcykge1xyXG4gICAgICB0aGlzLmNyb3NzU2NvcmUrKztcclxuICAgICAgdGhpcy5zZXRDcm9zc1Njb3JlKHRoaXMuY3Jvc3NTY29yZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNpcmNsZVNjb3JlKys7XHJcbiAgICAgIHRoaXMuc2V0Q2lyY2xlU2NvcmUodGhpcy5jaXJjbGVTY29yZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZUN1cnJlbnRTdGF0ZSgpOiB2b2lkIHtcclxuICAgIGlmKCF0aGlzLmlzR2FtZVdvbikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHRoaXMubmV4dFN0YXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgbmV4dFN0YXRlKCk6IFN0YXRlIHtcclxuICAgIHJldHVybiAodGhpcy5jdXJyZW50U3RhdGUgPT0gU3RhdGUuQ3Jvc3MpID8gU3RhdGUuQ2lyY2xlIDogU3RhdGUuQ3Jvc3M7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBpc0JvYXJkRnVsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9tYXJrc0NvdW50ID09PSAodGhpcy5ib2FyZFNpemUgKiB0aGlzLmJvYXJkU2l6ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVCb2FyZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3F1YXJlcyA9IFtdO1xyXG4gICAgdGhpcy5zcXVhcmVzLnB1c2gobmV3IFNxdWFyZSgwLCAwLCAnc3F1YXJlIGJvdHRvbS1yaWdodCcpKTtcclxuICAgIHRoaXMuc3F1YXJlcy5wdXNoKG5ldyBTcXVhcmUoMCwgMSwgJ3NxdWFyZSBib3R0b20tcmlnaHQnKSk7XHJcbiAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKDAsIDIsICdzcXVhcmUgYm90dG9tJykpO1xyXG4gICAgdGhpcy5zcXVhcmVzLnB1c2gobmV3IFNxdWFyZSgxLCAwLCAnc3F1YXJlIGJvdHRvbS1yaWdodCcpKTtcclxuICAgIHRoaXMuc3F1YXJlcy5wdXNoKG5ldyBTcXVhcmUoMSwgMSwgJ3NxdWFyZSBib3R0b20tcmlnaHQnKSk7XHJcbiAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKDEsIDIsICdzcXVhcmUgYm90dG9tJykpO1xyXG4gICAgdGhpcy5zcXVhcmVzLnB1c2gobmV3IFNxdWFyZSgyLCAwLCAnc3F1YXJlIHJpZ2h0JykpO1xyXG4gICAgdGhpcy5zcXVhcmVzLnB1c2gobmV3IFNxdWFyZSgyLCAxLCAnc3F1YXJlIHJpZ2h0JykpO1xyXG4gICAgdGhpcy5zcXVhcmVzLnB1c2gobmV3IFNxdWFyZSgyLCAyLCAnc3F1YXJlJykpO1xyXG4gIH1cclxufSJdfQ==