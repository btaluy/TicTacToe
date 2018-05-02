"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform = require("platform");
var page_1 = require("ui/page");
var services_1 = require("~/assets/services");
var domain_1 = require("~/assets/domain");
var SinglePlayerComponent = /** @class */ (function () {
    function SinglePlayerComponent(singlePlayerService, _page, _navigationService, _popupService) {
        this.singlePlayerService = singlePlayerService;
        this._page = _page;
        this._navigationService = _navigationService;
        this._popupService = _popupService;
        this.board = new domain_1.Board(3);
    }
    SinglePlayerComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        this.makeBoardGridSquared();
    };
    SinglePlayerComponent.prototype.mark = function (square) {
        var _this = this;
        if (!this.singlePlayerService.sessionGameWon && this.board.currentState === domain_1.State.Cross) {
            this.singlePlayerService.clickSound();
            this.board.mark(square);
            this.updateState(square)
                .then(function () {
                _this.botMark();
            });
        }
    };
    SinglePlayerComponent.prototype.newGame = function (miliSeconds) {
        var _this = this;
        if (miliSeconds === void 0) { miliSeconds = 2000; }
        setTimeout(function () {
            _this.singlePlayerService.sessionGameWon = false;
            _this.board.startNewGame();
        }, miliSeconds);
    };
    Object.defineProperty(SinglePlayerComponent.prototype, "boardSideSpecification", {
        get: function () {
            var specs = [];
            for (var i = 0; i < this.board.boardSize; i++) {
                specs.push('*');
            }
            return specs.join(',');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerComponent.prototype, "foundSquare", {
        get: function () {
            var min = 0;
            var max = this.board.getEmptySquares().length;
            var chosenTile = Math.floor(Math.random() * (max - min));
            return this.board.getEmptySquares()[chosenTile];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerComponent.prototype, "gamePanelStateImageVisibility", {
        get: function () {
            return this.board.isDraw ? 'collapsed' : 'visible';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerComponent.prototype, "gamePanelCaption", {
        get: function () {
            if (this.board.isDraw) {
                return 'Draw';
            }
            return this.board.isGameWon ? 'Winner' : 'Next to play';
        },
        enumerable: true,
        configurable: true
    });
    SinglePlayerComponent.prototype.classOf = function (square) {
        return (square.xPosition + square.yPosition) % 2 == 0 ? 'light-square' : 'dark-square';
    };
    SinglePlayerComponent.prototype.restartDialog = function () {
        var _this = this;
        this._popupService.confirm('Restart', 'Are you sure you want to restart the game?', 'Yes', 'No')
            .then(function (result) {
            if (result) {
                _this.restart();
            }
        });
    };
    SinglePlayerComponent.prototype.botMark = function () {
        var _this = this;
        var foundSquare = this.board.getEmptySquares().length > 0 ? this.foundSquare : undefined;
        if (foundSquare && !this.singlePlayerService.sessionGameWon) {
            setTimeout(function () {
                _this.singlePlayerService.clickSound();
                _this.board.mark(foundSquare);
                _this.updateState(foundSquare);
            }, 1000);
        }
    };
    SinglePlayerComponent.prototype.restart = function () {
        this.newGame(0);
        this.board.circleScore = 0;
        this.board.crossScore = 0;
    };
    SinglePlayerComponent.prototype.updateState = function (square) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var winningIndexes = _this.board.getWinningIndexesFor(square);
            if (winningIndexes) {
                _this.singlePlayerService.sessionGameWon = true;
                for (var _i = 0, winningIndexes_1 = winningIndexes; _i < winningIndexes_1.length; _i++) {
                    var index = winningIndexes_1[_i];
                    var view = _this.squareViews[index];
                    view.animate({ backgroundColor: new page_1.Color("#BA4A00"), duration: 2000 });
                }
                resolve(_this.newGame(4000));
            }
            else if (_this.board.isDraw) {
                resolve(_this.newGame());
            }
            resolve();
        });
    };
    Object.defineProperty(SinglePlayerComponent.prototype, "boardGridView", {
        get: function () {
            return this.boardGrid.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    SinglePlayerComponent.prototype.makeBoardGridSquared = function () {
        var heightOverflow = 120;
        var height = this.screenHeight - heightOverflow;
        var minimumSideDimension = Math.min(this.screenWidth, height);
        this.boardGridView.height = minimumSideDimension;
        this.boardGridView.width = minimumSideDimension;
    };
    Object.defineProperty(SinglePlayerComponent.prototype, "screenWidth", {
        get: function () {
            return platform.screen.mainScreen.widthDIPs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerComponent.prototype, "screenHeight", {
        get: function () {
            return platform.screen.mainScreen.heightDIPs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerComponent.prototype, "squareViews", {
        get: function () {
            return this.squares.map(function (s) { return s.nativeElement; });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChild('boardGrid'),
        __metadata("design:type", core_1.ElementRef)
    ], SinglePlayerComponent.prototype, "boardGrid", void 0);
    __decorate([
        core_1.ViewChildren('square'),
        __metadata("design:type", core_1.QueryList)
    ], SinglePlayerComponent.prototype, "squares", void 0);
    SinglePlayerComponent = __decorate([
        core_1.Component({
            selector: "Singleplayer",
            moduleId: module.id,
            templateUrl: "./singleplayer.component.html"
        }),
        __metadata("design:paramtypes", [services_1.SinglePlayerService,
            page_1.Page,
            services_1.NavigationService,
            services_1.PopupService])
    ], SinglePlayerComponent);
    return SinglePlayerComponent;
}());
exports.SinglePlayerComponent = SinglePlayerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbmdsZXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0c7QUFDbEcsbUNBQXFDO0FBSXJDLGdDQUFzQztBQUV0Qyw4Q0FBeUY7QUFDekYsMENBQXFFO0FBT3JFO0lBTUUsK0JBQ1MsbUJBQXdDLEVBQ3ZDLEtBQVcsRUFDWCxrQkFBcUMsRUFDckMsYUFBMkI7UUFINUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN2QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQU45QixVQUFLLEdBQVUsSUFBSSxjQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFPL0IsQ0FBQztJQUVMLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLG9DQUFJLEdBQVgsVUFBWSxNQUFNO1FBQWxCLGlCQVNDO1FBUkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLGNBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztpQkFDckIsSUFBSSxDQUFDO2dCQUNKLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDSCxD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QUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBbUIsaUJBQVU7NERBQUM7SUFDN0I7UUFBdkIsbUJBQVksQ0FBQyxRQUFRLENBQUM7a0NBQVUsZ0JBQVM7MERBQWE7SUFGNUMscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtTQUMvQyxDQUFDO3lDQVE4Qiw4QkFBbUI7WUFDaEMsV0FBSTtZQUNTLDRCQUFpQjtZQUN0Qix1QkFBWTtPQVYxQixxQkFBcUIsQ0F3SWpDO0lBQUQsNEJBQUM7Q0FBQSxBQXhJRCxJQXdJQztBQXhJWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gJ3BsYXRmb3JtJztcclxuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gJ3VpL2xheW91dHMvZ3JpZC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgUGFnZSwgQ29sb3IgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UsIFBvcHVwU2VydmljZSwgU2luZ2xlUGxheWVyU2VydmljZSB9IGZyb20gXCJ+L2Fzc2V0cy9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBCb2FyZCwgTWVudUl0ZW1OYW1lLCBTcXVhcmUsIFN0YXRlIH0gZnJvbSBcIn4vYXNzZXRzL2RvbWFpblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJTaW5nbGVwbGF5ZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NpbmdsZXBsYXllci5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVQbGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ2JvYXJkR3JpZCcpIHB1YmxpYyBib2FyZEdyaWQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZHJlbignc3F1YXJlJykgc3F1YXJlczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG5cclxuICBwdWJsaWMgYm9hcmQ6IEJvYXJkID0gbmV3IEJvYXJkKDMpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBzaW5nbGVQbGF5ZXJTZXJ2aWNlOiBTaW5nbGVQbGF5ZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfcGFnZTogUGFnZSxcclxuICAgIHByaXZhdGUgX25hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgX3BvcHVwU2VydmljZTogUG9wdXBTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLm1ha2VCb2FyZEdyaWRTcXVhcmVkKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbWFyayhzcXVhcmUpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5zaW5nbGVQbGF5ZXJTZXJ2aWNlLnNlc3Npb25HYW1lV29uICYmIHRoaXMuYm9hcmQuY3VycmVudFN0YXRlID09PSBTdGF0ZS5Dcm9zcykge1xyXG4gICAgICB0aGlzLnNpbmdsZVBsYXllclNlcnZpY2UuY2xpY2tTb3VuZCgpO1xyXG4gICAgICB0aGlzLmJvYXJkLm1hcmsoc3F1YXJlKTtcclxuICAgICAgdGhpcy51cGRhdGVTdGF0ZShzcXVhcmUpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ib3RNYXJrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmV3R2FtZShtaWxpU2Vjb25kczogbnVtYmVyID0gMjAwMCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2luZ2xlUGxheWVyU2VydmljZS5zZXNzaW9uR2FtZVdvbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmJvYXJkLnN0YXJ0TmV3R2FtZSgpO1xyXG4gICAgfSwgbWlsaVNlY29uZHMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBib2FyZFNpZGVTcGVjaWZpY2F0aW9uKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgc3BlY3MgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5ib2FyZFNpemU7IGkrKykge1xyXG4gICAgICBzcGVjcy5wdXNoKCcqJyk7XHJcbiAgICB9XHJcbiBcclxuICAgIHJldHVybiBzcGVjcy5qb2luKCcsJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGZvdW5kU3F1YXJlKCk6IFNxdWFyZSB7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgY29uc3QgbWF4ID0gdGhpcy5ib2FyZC5nZXRFbXB0eVNxdWFyZXMoKS5sZW5ndGg7XHJcbiAgICBjb25zdCBjaG9zZW5UaWxlOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4LW1pbikpO1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0RW1wdHlTcXVhcmVzKClbY2hvc2VuVGlsZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGdhbWVQYW5lbFN0YXRlSW1hZ2VWaXNpYmlsaXR5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZC5pc0RyYXcgPyAnY29sbGFwc2VkJzogJ3Zpc2libGUnO1xyXG4gIH1cclxuIFxyXG4gIHB1YmxpYyBnZXQgZ2FtZVBhbmVsQ2FwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuYm9hcmQuaXNEcmF3KSB7XHJcbiAgICAgIHJldHVybiAnRHJhdyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZC5pc0dhbWVXb24gPyAnV2lubmVyJzogJ05leHQgdG8gcGxheSc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xhc3NPZihzcXVhcmU6IFNxdWFyZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gKHNxdWFyZS54UG9zaXRpb24gKyBzcXVhcmUueVBvc2l0aW9uKSAlIDIgPT0gMCA/ICdsaWdodC1zcXVhcmUnIDogJ2Rhcmstc3F1YXJlJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXN0YXJ0RGlhbG9nKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcG9wdXBTZXJ2aWNlLmNvbmZpcm0oJ1Jlc3RhcnQnLCAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc3RhcnQgdGhlIGdhbWU/JywgJ1llcycsICdObycpXHJcbiAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJvdE1hcmsoKTogdm9pZCB7XHJcbiAgICBjb25zdCBmb3VuZFNxdWFyZTogU3F1YXJlID0gdGhpcy5ib2FyZC5nZXRFbXB0eVNxdWFyZXMoKS5sZW5ndGggPiAwID8gdGhpcy5mb3VuZFNxdWFyZSA6IHVuZGVmaW5lZDtcclxuICAgIGlmIChmb3VuZFNxdWFyZSAmJiF0aGlzLnNpbmdsZVBsYXllclNlcnZpY2Uuc2Vzc2lvbkdhbWVXb24pIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaW5nbGVQbGF5ZXJTZXJ2aWNlLmNsaWNrU291bmQoKTtcclxuICAgICAgICB0aGlzLmJvYXJkLm1hcmsoZm91bmRTcXVhcmUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZm91bmRTcXVhcmUpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMubmV3R2FtZSgwKTtcclxuICAgIHRoaXMuYm9hcmQuY2lyY2xlU2NvcmUgPSAwO1xyXG4gICAgdGhpcy5ib2FyZC5jcm9zc1Njb3JlID0gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlU3RhdGUoc3F1YXJlOiBTcXVhcmUpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3Qgd2lubmluZ0luZGV4ZXM6IG51bWJlcltdID0gdGhpcy5ib2FyZC5nZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpO1xyXG5cclxuICAgICAgaWYgKHdpbm5pbmdJbmRleGVzKSB7XHJcbiAgICAgICAgdGhpcy5zaW5nbGVQbGF5ZXJTZXJ2aWNlLnNlc3Npb25HYW1lV29uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggb2Ygd2lubmluZ0luZGV4ZXMpIHtcclxuICAgICAgICAgIGxldCB2aWV3ID0gdGhpcy5zcXVhcmVWaWV3c1tpbmRleF07XHJcbiAgICAgICAgICB2aWV3LmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcIiNCQTRBMDBcIiksIGR1cmF0aW9uOiAyMDAwIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXNvbHZlKHRoaXMubmV3R2FtZSg0MDAwKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZC5pc0RyYXcpIHtcclxuICAgICAgICByZXNvbHZlKHRoaXMubmV3R2FtZSgpKTtcclxuICAgICAgfVxyXG4gICAgICByZXNvbHZlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgICBcclxuICBwcml2YXRlIGdldCBib2FyZEdyaWRWaWV3KCk6IEdyaWRMYXlvdXQge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmRHcmlkLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1ha2VCb2FyZEdyaWRTcXVhcmVkKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaGVpZ2h0T3ZlcmZsb3cgPSAxMjA7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnNjcmVlbkhlaWdodCAtIGhlaWdodE92ZXJmbG93O1xyXG4gICAgY29uc3QgbWluaW11bVNpZGVEaW1lbnNpb24gPSBNYXRoLm1pbih0aGlzLnNjcmVlbldpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy5ib2FyZEdyaWRWaWV3LmhlaWdodCA9IG1pbmltdW1TaWRlRGltZW5zaW9uO1xyXG4gICAgdGhpcy5ib2FyZEdyaWRWaWV3LndpZHRoID0gbWluaW11bVNpZGVEaW1lbnNpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBzY3JlZW5XaWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcclxuICB9XHJcbiBcclxuICBwcml2YXRlIGdldCBzY3JlZW5IZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBwbGF0Zm9ybS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgc3F1YXJlVmlld3MoKTogQXJyYXk8U3RhY2tMYXlvdXQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNxdWFyZXMubWFwKHMgPT4gcy5uYXRpdmVFbGVtZW50KTtcclxuICB9XHJcbn1cclxuIl19