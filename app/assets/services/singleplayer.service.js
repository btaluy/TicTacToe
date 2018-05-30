"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var domain_1 = require("~/assets/domain");
var SinglePlayerService = /** @class */ (function () {
    function SinglePlayerService() {
        this.sessionGameWon = false;
        this.board = new domain_1.Board(3);
    }
    SinglePlayerService.prototype.restart = function () {
        this.newGame(0);
    };
    SinglePlayerService.prototype.reset = function () {
        this.restart();
        this.board.setCircleScore(0);
        this.board.setCrossScore(0);
        this.board.setDrawScore(0);
    };
    SinglePlayerService.prototype.newGame = function (miliSeconds) {
        var _this = this;
        if (miliSeconds === void 0) { miliSeconds = 2000; }
        setTimeout(function () {
            _this.sessionGameWon = false;
            _this.board.startNewGame();
        }, miliSeconds);
    };
    Object.defineProperty(SinglePlayerService.prototype, "gamePanelStateImageVisibility", {
        get: function () {
            return this.board.isDraw ? 'collapsed' : 'visible';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerService.prototype, "gamePanelCaption", {
        get: function () {
            if (this.board.isDraw) {
                return 'Draw';
            }
            return this.board.isGameWon ? 'Winner' : 'Next';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerService.prototype, "foundSquare", {
        get: function () {
            var min = 0;
            var max = this.board.getEmptySquares().length;
            if (max > 0) {
                var chosenTile = Math.floor(Math.random() * (max - min));
                return this.board.getEmptySquares()[chosenTile];
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    SinglePlayerService = __decorate([
        core_1.Injectable()
    ], SinglePlayerService);
    return SinglePlayerService;
}());
exports.SinglePlayerService = SinglePlayerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGVwbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QywwQ0FBcUU7QUFLckU7SUFEQTtRQUVTLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLFVBQUssR0FBVSxJQUFJLGNBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQTBDckMsQ0FBQztJQXhDUSxxQ0FBTyxHQUFkO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRU0sbUNBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSxxQ0FBTyxHQUFkLFVBQWUsV0FBMEI7UUFBekMsaUJBS0M7UUFMYyw0QkFBQSxFQUFBLGtCQUEwQjtRQUN2QyxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVCLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsc0JBQVcsOERBQTZCO2FBQXhDO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGlEQUFnQjthQUEzQjtZQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNoQixDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDRDQUFXO2FBQXRCO1lBQ0UsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFFaEQsRUFBRSxDQUFBLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsSUFBTSxVQUFVLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUVELE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUEzQ1UsbUJBQW1CO1FBRC9CLGlCQUFVLEVBQUU7T0FDQSxtQkFBbUIsQ0E0Qy9CO0lBQUQsMEJBQUM7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCb2FyZCwgTWVudUl0ZW1OYW1lLCBTcXVhcmUsIFN0YXRlIH0gZnJvbSBcIn4vYXNzZXRzL2RvbWFpblwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0L3N0YWNrLWxheW91dCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaW5nbGVQbGF5ZXJTZXJ2aWNlIHtcbiAgcHVibGljIHNlc3Npb25HYW1lV29uOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBib2FyZDogQm9hcmQgPSBuZXcgQm9hcmQoMyk7XG5cbiAgcHVibGljIHJlc3RhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5uZXdHYW1lKDApO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMucmVzdGFydCgpO1xuICAgIHRoaXMuYm9hcmQuc2V0Q2lyY2xlU2NvcmUoMCk7XG4gICAgdGhpcy5ib2FyZC5zZXRDcm9zc1Njb3JlKDApO1xuICAgIHRoaXMuYm9hcmQuc2V0RHJhd1Njb3JlKDApO1xuICB9XG5cbiAgcHVibGljIG5ld0dhbWUobWlsaVNlY29uZHM6IG51bWJlciA9IDIwMDApOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2Vzc2lvbkdhbWVXb24gPSBmYWxzZTtcbiAgICAgIHRoaXMuYm9hcmQuc3RhcnROZXdHYW1lKCk7XG4gICAgfSwgbWlsaVNlY29uZHMpO1xuICB9XG5cbiAgcHVibGljIGdldCBnYW1lUGFuZWxTdGF0ZUltYWdlVmlzaWJpbGl0eSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmJvYXJkLmlzRHJhdyA/ICdjb2xsYXBzZWQnOiAndmlzaWJsZSc7XG4gIH1cbiBcbiAgcHVibGljIGdldCBnYW1lUGFuZWxDYXB0aW9uKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuYm9hcmQuaXNEcmF3KSB7XG4gICAgICByZXR1cm4gJ0RyYXcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ib2FyZC5pc0dhbWVXb24gPyAnV2lubmVyJzogJ05leHQnO1xuICB9XG5cbiAgcHVibGljIGdldCBmb3VuZFNxdWFyZSgpOiBTcXVhcmUge1xuICAgIGNvbnN0IG1pbiA9IDA7XG4gICAgY29uc3QgbWF4ID0gdGhpcy5ib2FyZC5nZXRFbXB0eVNxdWFyZXMoKS5sZW5ndGg7XG5cbiAgICBpZihtYXggPiAwKSB7XG4gICAgICBjb25zdCBjaG9zZW5UaWxlOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4LW1pbikpO1xuICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0RW1wdHlTcXVhcmVzKClbY2hvc2VuVGlsZV07XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn0iXX0=