"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform = require("platform");
var page_1 = require("ui/page");
var services_1 = require("~/assets/services");
var domain_1 = require("~/assets/domain");
var SinglePlayerComponent = /** @class */ (function () {
    function SinglePlayerComponent(spService, _page, _navigationService, _popupService) {
        this.spService = spService;
        this._page = _page;
        this._navigationService = _navigationService;
        this._popupService = _popupService;
    }
    SinglePlayerComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        this.makeBoardGridSquared();
    };
    SinglePlayerComponent.prototype.mark = function (square) {
        var _this = this;
        if (!this.spService.sessionGameWon && this.spService.board.currentState === domain_1.State.Cross) {
            this.spService.clickSound();
            this.spService.board.mark(square);
            this.updateState(square)
                .then(function () {
                _this.botMark();
            });
        }
    };
    SinglePlayerComponent.prototype.newGame = function (miliSeconds) {
        if (miliSeconds === void 0) { miliSeconds = 2000; }
        this.spService.newGame(miliSeconds);
    };
    Object.defineProperty(SinglePlayerComponent.prototype, "boardSideSpecification", {
        get: function () {
            var specs = [];
            for (var i = 0; i < this.spService.board.boardSize; i++) {
                specs.push('*');
            }
            return specs.join(',');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerComponent.prototype, "gamePanelStateImageVisibility", {
        get: function () {
            return this.spService.gamePanelStateImageVisibility;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SinglePlayerComponent.prototype, "gamePanelCaption", {
        get: function () {
            return this.spService.gamePanelCaption;
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
                _this.spService.restart();
            }
        });
    };
    SinglePlayerComponent.prototype.updateState = function (square) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var winningIndexes = _this.spService.board.getWinningIndexesFor(square);
            if (winningIndexes) {
                _this.spService.sessionGameWon = true;
                for (var _i = 0, winningIndexes_1 = winningIndexes; _i < winningIndexes_1.length; _i++) {
                    var index = winningIndexes_1[_i];
                    var view = _this.squareViews[index];
                    view.animate({ backgroundColor: new page_1.Color("#BA4A00"), duration: 2000 });
                }
                resolve(_this.newGame(4000));
            }
            else if (_this.spService.board.isDraw) {
                resolve(_this.newGame());
            }
            resolve();
        });
    };
    SinglePlayerComponent.prototype.botMark = function () {
        var _this = this;
        var foundSquare = this.spService.board.getEmptySquares().length > 0 ? this.spService.foundSquare : undefined;
        if (foundSquare && !this.spService.sessionGameWon) {
            setTimeout(function () {
                _this.spService.clickSound();
                _this.spService.board.mark(foundSquare);
                _this.updateState(foundSquare);
            }, 1000);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbmdsZXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0c7QUFDbEcsbUNBQXFDO0FBSXJDLGdDQUFzQztBQUV0Qyw4Q0FBeUY7QUFDekYsMENBQXFFO0FBT3JFO0lBSUUsK0JBQ1MsU0FBOEIsRUFDN0IsS0FBVyxFQUNYLGtCQUFxQyxFQUNyQyxhQUEyQjtRQUg1QixjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQUM3QixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUNqQyxDQUFDO0lBRUwsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sb0NBQUksR0FBWCxVQUFZLE1BQWM7UUFBMUIsaUJBU0M7UUFSQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxjQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN4RixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztpQkFDckIsSUFBSSxDQUFDO2dCQUNKLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDSCxDQUFDO0lBRU0sdUNBQU8sR0FBZCxVQUFlLFdBQTBCO1FBQTFC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TUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBWSw4Q0FBVzthQUF2QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxhQUFhLEVBQWYsQ0FBZSxDQUFDLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7SUFsSHVCO1FBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDO2tDQUFtQixpQkFBVTs0REFBQztJQUM3QjtRQUF2QixtQkFBWSxDQUFDLFFBQVEsQ0FBQztrQ0FBVSxnQkFBUzswREFBYTtJQUY1QyxxQkFBcUI7UUFMakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQy9DLENBQUM7eUNBTW9CLDhCQUFtQjtZQUN0QixXQUFJO1lBQ1MsNEJBQWlCO1lBQ3RCLHVCQUFZO09BUjFCLHFCQUFxQixDQW9IakM7SUFBRCw0QkFBQztDQUFBLEFBcEhELElBb0hDO0FBcEhZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSAncGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSAndWkvbGF5b3V0cy9ncmlkLWxheW91dCc7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xyXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBQYWdlLCBDb2xvciB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSwgUG9wdXBTZXJ2aWNlLCBTaW5nbGVQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIn4vYXNzZXRzL3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEJvYXJkLCBNZW51SXRlbU5hbWUsIFNxdWFyZSwgU3RhdGUgfSBmcm9tIFwifi9hc3NldHMvZG9tYWluXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlNpbmdsZXBsYXllclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2luZ2xlcGxheWVyLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpbmdsZVBsYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnYm9hcmRHcmlkJykgcHVibGljIGJvYXJkR3JpZDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkcmVuKCdzcXVhcmUnKSBzcXVhcmVzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHNwU2VydmljZTogU2luZ2xlUGxheWVyU2VydmljZSxcclxuICAgIHByaXZhdGUgX3BhZ2U6IFBhZ2UsXHJcbiAgICBwcml2YXRlIF9uYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9wb3B1cFNlcnZpY2U6IFBvcHVwU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5tYWtlQm9hcmRHcmlkU3F1YXJlZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1hcmsoc3F1YXJlOiBTcXVhcmUpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5zcFNlcnZpY2Uuc2Vzc2lvbkdhbWVXb24gJiYgdGhpcy5zcFNlcnZpY2UuYm9hcmQuY3VycmVudFN0YXRlID09PSBTdGF0ZS5Dcm9zcykge1xyXG4gICAgICB0aGlzLnNwU2VydmljZS5jbGlja1NvdW5kKCk7XHJcbiAgICAgIHRoaXMuc3BTZXJ2aWNlLmJvYXJkLm1hcmsoc3F1YXJlKTtcclxuICAgICAgdGhpcy51cGRhdGVTdGF0ZShzcXVhcmUpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ib3RNYXJrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmV3R2FtZShtaWxpU2Vjb25kczogbnVtYmVyID0gMjAwMCk6IHZvaWQge1xyXG4gICAgdGhpcy5zcFNlcnZpY2UubmV3R2FtZShtaWxpU2Vjb25kcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGJvYXJkU2lkZVNwZWNpZmljYXRpb24oKTogc3RyaW5nIHtcclxuICAgIGxldCBzcGVjcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwU2VydmljZS5ib2FyZC5ib2FyZFNpemU7IGkrKykge1xyXG4gICAgICBzcGVjcy5wdXNoKCcqJyk7XHJcbiAgICB9XHJcbiBcclxuICAgIHJldHVybiBzcGVjcy5qb2luKCcsJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGdhbWVQYW5lbFN0YXRlSW1hZ2VWaXNpYmlsaXR5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zcFNlcnZpY2UuZ2FtZVBhbmVsU3RhdGVJbWFnZVZpc2liaWxpdHk7XHJcbiAgfVxyXG4gXHJcbiAgcHVibGljIGdldCBnYW1lUGFuZWxDYXB0aW9uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zcFNlcnZpY2UuZ2FtZVBhbmVsQ2FwdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGFzc09mKHNxdWFyZTogU3F1YXJlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAoc3F1YXJlLnhQb3NpdGlvbiArIHNxdWFyZS55UG9zaXRpb24pICUgMiA9PSAwID8gJ2xpZ2h0LXNxdWFyZScgOiAnZGFyay1zcXVhcmUnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc3RhcnREaWFsb2coKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wb3B1cFNlcnZpY2UuY29uZmlybSgnUmVzdGFydCcsICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVzdGFydCB0aGUgZ2FtZT8nLCAnWWVzJywgJ05vJylcclxuICAgICAgLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgdGhpcy5zcFNlcnZpY2UucmVzdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVN0YXRlKHNxdWFyZTogU3F1YXJlKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHdpbm5pbmdJbmRleGVzOiBudW1iZXJbXSA9IHRoaXMuc3BTZXJ2aWNlLmJvYXJkLmdldFdpbm5pbmdJbmRleGVzRm9yKHNxdWFyZSk7XHJcblxyXG4gICAgICBpZiAod2lubmluZ0luZGV4ZXMpIHtcclxuICAgICAgICB0aGlzLnNwU2VydmljZS5zZXNzaW9uR2FtZVdvbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4IG9mIHdpbm5pbmdJbmRleGVzKSB7XHJcbiAgICAgICAgICBsZXQgdmlldyA9IHRoaXMuc3F1YXJlVmlld3NbaW5kZXhdO1xyXG4gICAgICAgICAgdmlldy5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjQkE0QTAwXCIpLCBkdXJhdGlvbjogMjAwMCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLm5ld0dhbWUoNDAwMCkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3BTZXJ2aWNlLmJvYXJkLmlzRHJhdykge1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5uZXdHYW1lKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc29sdmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBib3RNYXJrKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZm91bmRTcXVhcmU6IFNxdWFyZSA9XHJcbiAgICAgICAgICAgIHRoaXMuc3BTZXJ2aWNlLmJvYXJkLmdldEVtcHR5U3F1YXJlcygpLmxlbmd0aCA+IDAgPyB0aGlzLnNwU2VydmljZS5mb3VuZFNxdWFyZSA6IHVuZGVmaW5lZDtcclxuICAgIGlmIChmb3VuZFNxdWFyZSAmJiF0aGlzLnNwU2VydmljZS5zZXNzaW9uR2FtZVdvbikge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNwU2VydmljZS5jbGlja1NvdW5kKCk7XHJcbiAgICAgICAgdGhpcy5zcFNlcnZpY2UuYm9hcmQubWFyayhmb3VuZFNxdWFyZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShmb3VuZFNxdWFyZSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuIFxyXG4gIHByaXZhdGUgZ2V0IGJvYXJkR3JpZFZpZXcoKTogR3JpZExheW91dCB7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZEdyaWQubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZUJvYXJkR3JpZFNxdWFyZWQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBoZWlnaHRPdmVyZmxvdyA9IDEyMDtcclxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuc2NyZWVuSGVpZ2h0IC0gaGVpZ2h0T3ZlcmZsb3c7XHJcbiAgICBjb25zdCBtaW5pbXVtU2lkZURpbWVuc2lvbiA9IE1hdGgubWluKHRoaXMuc2NyZWVuV2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLmJvYXJkR3JpZFZpZXcuaGVpZ2h0ID0gbWluaW11bVNpZGVEaW1lbnNpb247XHJcbiAgICB0aGlzLmJvYXJkR3JpZFZpZXcud2lkdGggPSBtaW5pbXVtU2lkZURpbWVuc2lvbjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IHNjcmVlbldpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xyXG4gIH1cclxuIFxyXG4gIHByaXZhdGUgZ2V0IHNjcmVlbkhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHBsYXRmb3JtLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBzcXVhcmVWaWV3cygpOiBBcnJheTxTdGFja0xheW91dD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3F1YXJlcy5tYXAocyA9PiBzLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=