"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_settings_1 = require("application-settings");
var index_1 = require("./index");
var Score = /** @class */ (function () {
    function Score() {
        this.crossScore = 0;
        this.circleScore = 0;
        this.drawScore = 0;
    }
    return Score;
}());
exports.Score = Score;
var Board = /** @class */ (function () {
    function Board(size) {
        this.squares = [];
        this.score = new Score();
        this._marksCount = 0;
        this.boardSize = size;
        this.squares = [];
        this.score.crossScore = application_settings_1.getNumber('crossScore', 0);
        this.score.circleScore = application_settings_1.getNumber('circleScore', 0);
        this.score.drawScore = application_settings_1.getNumber('drawScore', 0);
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
        this.score.crossScore = value;
        application_settings_1.setNumber('crossScore', this.score.crossScore);
    };
    Board.prototype.setCircleScore = function (value) {
        this.score.circleScore = value;
        application_settings_1.setNumber('circleScore', this.score.circleScore);
    };
    Board.prototype.setDrawScore = function (value) {
        this.score.drawScore = value;
        application_settings_1.setNumber('drawScore', this.score.drawScore);
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
            this.score.crossScore++;
            this.setCrossScore(this.score.crossScore);
        }
        else {
            this.score.circleScore++;
            this.setCircleScore(this.score.circleScore);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUc4QjtBQUU5QixpQ0FBeUQ7QUFFekQ7SUFBQTtRQUNTLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsY0FBUyxHQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQUQsWUFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksc0JBQUs7QUFNbEI7SUFVRSxlQUFtQixJQUFZO1FBUnhCLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFFdkIsVUFBSyxHQUFVLElBQUksS0FBSyxFQUFFLENBQUM7UUFJMUIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFHOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsZ0NBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsZ0NBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0NBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sNEJBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQUssQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGVB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QUMsRUFBRSxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksY0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxjQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksY0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUFsSEQsSUFrSEM7QUFsSFksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBnZXRCb29sZWFuLCBzZXRCb29sZWFuLCBnZXROdW1iZXIsIHNldE51bWJlcixcbiAgZ2V0U3RyaW5nLCBzZXRTdHJpbmcsIGhhc0tleSwgcmVtb3ZlLCBjbGVhclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuaW1wb3J0IHsgU3F1YXJlLCBTdGF0ZSwgV2lubmVyUmV0cmlldmVyIH0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBjbGFzcyBTY29yZSB7XG4gIHB1YmxpYyBjcm9zc1Njb3JlOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgY2lyY2xlU2NvcmU6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBkcmF3U2NvcmU6IG51bWJlciA9IDA7XG59XG5cbmV4cG9ydCBjbGFzcyBCb2FyZCB7XG4gIHB1YmxpYyBib2FyZFNpemU6IG51bWJlcjtcbiAgcHVibGljIHNxdWFyZXM6IFNxdWFyZVtdID0gW107XG4gIHB1YmxpYyBjdXJyZW50U3RhdGU6IFN0YXRlO1xuICBwdWJsaWMgc2NvcmU6IFNjb3JlID0gbmV3IFNjb3JlKCk7XG4gIHB1YmxpYyBpc0dhbWVXb246IGJvb2xlYW47XG4gIHB1YmxpYyB3aW5uZXJSZXRyZWl2ZXI6IFdpbm5lclJldHJpZXZlcjtcblxuICBwcml2YXRlIF9tYXJrc0NvdW50OiBudW1iZXIgPSAwO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IHNpemU7XG4gICAgdGhpcy5zcXVhcmVzID0gW107XG4gICAgdGhpcy5zY29yZS5jcm9zc1Njb3JlID0gZ2V0TnVtYmVyKCdjcm9zc1Njb3JlJywgMCk7XG4gICAgdGhpcy5zY29yZS5jaXJjbGVTY29yZSA9IGdldE51bWJlcignY2lyY2xlU2NvcmUnLCAwKTtcbiAgICB0aGlzLnNjb3JlLmRyYXdTY29yZSA9IGdldE51bWJlcignZHJhd1Njb3JlJywgMCk7XG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSBTdGF0ZS5Dcm9zcztcbiAgICB0aGlzLnN0YXJ0TmV3R2FtZSgpO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0TmV3R2FtZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzR2FtZVdvbiA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudFN0YXRlID0gU3RhdGUuQ3Jvc3M7XG4gICAgdGhpcy5fbWFya3NDb3VudCA9IDA7XG4gICAgdGhpcy5pbml0aWFsaXplQm9hcmQoKTtcbiAgICB0aGlzLndpbm5lclJldHJlaXZlciA9IG5ldyBXaW5uZXJSZXRyaWV2ZXIodGhpcy5zcXVhcmVzLCB0aGlzLmJvYXJkU2l6ZSk7XG4gIH1cblxuICBwdWJsaWMgbWFyayhzcXVhcmU6IFNxdWFyZSk6IHZvaWQge1xuICAgIGlmKHNxdWFyZS5jYW5DaGFuZ2VTdGF0ZSkge1xuICAgICAgc3F1YXJlLnN0YXRlID0gdGhpcy5jdXJyZW50U3RhdGU7XG4gICAgICB0aGlzLl9tYXJrc0NvdW50Kys7XG4gICAgICB0aGlzLnNldEdhbWVXb25TdGF0ZUZyb20oc3F1YXJlKTtcbiAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFdpbm5pbmdJbmRleGVzRm9yKHNxdWFyZSk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy53aW5uZXJSZXRyZWl2ZXIuZ2V0V2lubmluZ0luZGV4ZXNGb3Ioc3F1YXJlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRFbXB0eVNxdWFyZXMoKTogU3F1YXJlW10ge1xuICAgIHJldHVybiB0aGlzLndpbm5lclJldHJlaXZlci5nZXRFbXB0eVNxdWFyZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBjYWxjdWxhdGVCb2FyZCgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMud2lubmVyUmV0cmVpdmVyLmNhbGN1bGF0ZUJvYXJkKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0QmVzdFNwb3QoaW5kZXg6IGFueSk6IFNxdWFyZSB7XG4gICAgcmV0dXJuIHRoaXMud2lubmVyUmV0cmVpdmVyLmdldEJlc3RTcG90KGluZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDcm9zc1Njb3JlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNjb3JlLmNyb3NzU2NvcmUgPSB2YWx1ZTtcbiAgICBzZXROdW1iZXIoJ2Nyb3NzU2NvcmUnLCB0aGlzLnNjb3JlLmNyb3NzU2NvcmUpO1xuICB9XG5cbiAgcHVibGljIHNldENpcmNsZVNjb3JlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNjb3JlLmNpcmNsZVNjb3JlID0gdmFsdWU7XG4gICAgc2V0TnVtYmVyKCdjaXJjbGVTY29yZScsIHRoaXMuc2NvcmUuY2lyY2xlU2NvcmUpO1xuICB9XG5cbiAgcHVibGljIHNldERyYXdTY29yZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zY29yZS5kcmF3U2NvcmUgPSB2YWx1ZTtcbiAgICBzZXROdW1iZXIoJ2RyYXdTY29yZScsIHRoaXMuc2NvcmUuZHJhd1Njb3JlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNEcmF3KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc0dhbWVXb24gJiYgdGhpcy5pc0JvYXJkRnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0R2FtZVdvblN0YXRlRnJvbShzcXVhcmU6IFNxdWFyZSk6IHZvaWQge1xuICAgIHRoaXMuaXNHYW1lV29uID0gdGhpcy5nZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpICE9IHVuZGVmaW5lZDtcbiAgICBpZiAodGhpcy5pc0dhbWVXb24pXG4gICAgICB0aGlzLmluY3JlbWVudFdpbm5lclNjb3JlKCk7XG4gIH1cblxuICBwcml2YXRlIGluY3JlbWVudFdpbm5lclNjb3JlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gU3RhdGUuQ3Jvc3MpIHtcbiAgICAgIHRoaXMuc2NvcmUuY3Jvc3NTY29yZSsrO1xuICAgICAgdGhpcy5zZXRDcm9zc1Njb3JlKHRoaXMuc2NvcmUuY3Jvc3NTY29yZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NvcmUuY2lyY2xlU2NvcmUrKztcbiAgICAgIHRoaXMuc2V0Q2lyY2xlU2NvcmUodGhpcy5zY29yZS5jaXJjbGVTY29yZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VDdXJyZW50U3RhdGUoKTogdm9pZCB7XG4gICAgaWYoIXRoaXMuaXNHYW1lV29uKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHRoaXMubmV4dFN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IG5leHRTdGF0ZSgpOiBTdGF0ZSB7XG4gICAgcmV0dXJuICh0aGlzLmN1cnJlbnRTdGF0ZSA9PSBTdGF0ZS5Dcm9zcykgPyBTdGF0ZS5DaXJjbGUgOiBTdGF0ZS5Dcm9zcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGlzQm9hcmRGdWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tYXJrc0NvdW50ID09PSAodGhpcy5ib2FyZFNpemUgKiB0aGlzLmJvYXJkU2l6ZSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVCb2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNxdWFyZXMgPSBbXTtcbiAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKDAsIDAsICdzcXVhcmUgYm90dG9tLXJpZ2h0JykpO1xuICAgIHRoaXMuc3F1YXJlcy5wdXNoKG5ldyBTcXVhcmUoMCwgMSwgJ3NxdWFyZSBib3R0b20tcmlnaHQnKSk7XG4gICAgdGhpcy5zcXVhcmVzLnB1c2gobmV3IFNxdWFyZSgwLCAyLCAnc3F1YXJlIGJvdHRvbScpKTtcbiAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKDEsIDAsICdzcXVhcmUgYm90dG9tLXJpZ2h0JykpO1xuICAgIHRoaXMuc3F1YXJlcy5wdXNoKG5ldyBTcXVhcmUoMSwgMSwgJ3NxdWFyZSBib3R0b20tcmlnaHQnKSk7XG4gICAgdGhpcy5zcXVhcmVzLnB1c2gobmV3IFNxdWFyZSgxLCAyLCAnc3F1YXJlIGJvdHRvbScpKTtcbiAgICB0aGlzLnNxdWFyZXMucHVzaChuZXcgU3F1YXJlKDIsIDAsICdzcXVhcmUgcmlnaHQnKSk7XG4gICAgdGhpcy5zcXVhcmVzLnB1c2gobmV3IFNxdWFyZSgyLCAxLCAnc3F1YXJlIHJpZ2h0JykpO1xuICAgIHRoaXMuc3F1YXJlcy5wdXNoKG5ldyBTcXVhcmUoMiwgMiwgJ3NxdWFyZScpKTtcbiAgfVxufSJdfQ==