"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform = require("platform");
var page_1 = require("ui/page");
var services_1 = require("~/assets/services");
var domain_1 = require("~/assets/domain");
var SinglePlayerComponent = /** @class */ (function () {
    function SinglePlayerComponent(_page, _navigationService, _popupService, _singlePlayerService) {
        this._page = _page;
        this._navigationService = _navigationService;
        this._popupService = _popupService;
        this._singlePlayerService = _singlePlayerService;
        this.board = new domain_1.Board(3);
    }
    SinglePlayerComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        this.makeBoardGridSquared();
    };
    SinglePlayerComponent.prototype.mark = function (square) {
        var _this = this;
        if (!this._singlePlayerService.sessionGameWon) {
            this.board.mark(square);
            var winningIndexes = this.board.getWinningIndexesFor(square);
            if (winningIndexes) {
                this._singlePlayerService.sessionGameWon = true;
                for (var _i = 0, winningIndexes_1 = winningIndexes; _i < winningIndexes_1.length; _i++) {
                    var index = winningIndexes_1[_i];
                    var view = this.squareViews[index];
                    view.animate({ backgroundColor: new page_1.Color("#BA4A00"), duration: 2000 });
                }
                setTimeout(function () {
                    _this.newGame();
                }, 4000);
            }
        }
    };
    SinglePlayerComponent.prototype.newGame = function () {
        this._singlePlayerService.sessionGameWon = false;
        this.board.startNewGame();
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
    SinglePlayerComponent.prototype.classOf = function (square) {
        return (square.xPosition + square.yPosition) % 2 == 0 ? 'light-square' : 'dark-square';
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
        __metadata("design:paramtypes", [page_1.Page,
            services_1.NavigationService,
            services_1.PopupService,
            services_1.SinglePlayerService])
    ], SinglePlayerComponent);
    return SinglePlayerComponent;
}());
exports.SinglePlayerComponent = SinglePlayerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbmdsZXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0c7QUFDbEcsbUNBQXFDO0FBSXJDLGdDQUFzQztBQUV0Qyw4Q0FBeUY7QUFDekYsMENBQThEO0FBTzlEO0lBTUUsK0JBQ1UsS0FBVyxFQUNYLGtCQUFxQyxFQUNyQyxhQUEyQixFQUMzQixvQkFBeUM7UUFIekMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQU41QyxVQUFLLEdBQVUsSUFBSSxjQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFPL0IsQ0FBQztJQUVMLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLG9DQUFJLEdBQVgsVUFBWSxNQUFNO1FBQWxCLGlCQWtCQztRQWpCQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFL0QsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBRWhELEdBQUcsQ0FBQyxDQUFjLFVBQWMsRUFBZCxpQ0FBYyxFQUFkLDRCQUFjLEVBQWQs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QkFBaUI7WUFDdEIsdUJBQVk7WUFDTCw4QkFBbUI7T0FWeEMscUJBQXFCLENBK0VqQztJQUFELDRCQUFDO0NBQUEsQUEvRUQsSUErRUM7QUEvRVksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tICdwbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL2dyaWQtbGF5b3V0JztcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFBhZ2UsIENvbG9yIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlLCBQb3B1cFNlcnZpY2UsIFNpbmdsZVBsYXllclNlcnZpY2UgfSBmcm9tIFwifi9hc3NldHMvc2VydmljZXNcIjtcclxuaW1wb3J0IHsgQm9hcmQsIE1lbnVJdGVtTmFtZSwgU3F1YXJlIH0gZnJvbSBcIn4vYXNzZXRzL2RvbWFpblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJTaW5nbGVwbGF5ZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NpbmdsZXBsYXllci5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVQbGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ2JvYXJkR3JpZCcpIHB1YmxpYyBib2FyZEdyaWQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZHJlbignc3F1YXJlJykgc3F1YXJlczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG5cclxuICBwdWJsaWMgYm9hcmQ6IEJvYXJkID0gbmV3IEJvYXJkKDMpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3BhZ2U6IFBhZ2UsXHJcbiAgICBwcml2YXRlIF9uYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9wb3B1cFNlcnZpY2U6IFBvcHVwU2VydmljZSxcclxuICAgIHByaXZhdGUgX3NpbmdsZVBsYXllclNlcnZpY2U6IFNpbmdsZVBsYXllclNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMubWFrZUJvYXJkR3JpZFNxdWFyZWQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYXJrKHNxdWFyZSk6IHZvaWQge1xyXG4gICAgaWYoIXRoaXMuX3NpbmdsZVBsYXllclNlcnZpY2Uuc2Vzc2lvbkdhbWVXb24pIHtcclxuICAgICAgdGhpcy5ib2FyZC5tYXJrKHNxdWFyZSk7XHJcbiAgICAgIGNvbnN0IHdpbm5pbmdJbmRleGVzID0gdGhpcy5ib2FyZC5nZXRXaW5uaW5nSW5kZXhlc0ZvcihzcXVhcmUpO1xyXG5cclxuICAgICAgaWYgKHdpbm5pbmdJbmRleGVzKSB7XHJcbiAgICAgICAgdGhpcy5fc2luZ2xlUGxheWVyU2VydmljZS5zZXNzaW9uR2FtZVdvbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4IG9mIHdpbm5pbmdJbmRleGVzKSB7XHJcbiAgICAgICAgICBsZXQgdmlldyA9IHRoaXMuc3F1YXJlVmlld3NbaW5kZXhdO1xyXG4gICAgICAgICAgdmlldy5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjQkE0QTAwXCIpLCBkdXJhdGlvbjogMjAwMCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZXdHYW1lKCk7XHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZXdHYW1lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2luZ2xlUGxheWVyU2VydmljZS5zZXNzaW9uR2FtZVdvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5ib2FyZC5zdGFydE5ld0dhbWUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYm9hcmRTaWRlU3BlY2lmaWNhdGlvbigpOiBzdHJpbmcge1xyXG4gICAgbGV0IHNwZWNzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQuYm9hcmRTaXplOyBpKyspIHtcclxuICAgICAgc3BlY3MucHVzaCgnKicpO1xyXG4gICAgfVxyXG4gXHJcbiAgICByZXR1cm4gc3BlY3Muam9pbignLCcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsYXNzT2Yoc3F1YXJlOiBTcXVhcmUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIChzcXVhcmUueFBvc2l0aW9uICsgc3F1YXJlLnlQb3NpdGlvbikgJSAyID09IDAgPyAnbGlnaHQtc3F1YXJlJyA6ICdkYXJrLXNxdWFyZSc7XHJcbiAgfVxyXG4gICAgXHJcbiAgcHJpdmF0ZSBnZXQgYm9hcmRHcmlkVmlldygpOiBHcmlkTGF5b3V0IHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkR3JpZC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlQm9hcmRHcmlkU3F1YXJlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGhlaWdodE92ZXJmbG93ID0gMTIwO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zY3JlZW5IZWlnaHQgLSBoZWlnaHRPdmVyZmxvdztcclxuICAgIGNvbnN0IG1pbmltdW1TaWRlRGltZW5zaW9uID0gTWF0aC5taW4odGhpcy5zY3JlZW5XaWR0aCwgaGVpZ2h0KTtcclxuICAgIHRoaXMuYm9hcmRHcmlkVmlldy5oZWlnaHQgPSBtaW5pbXVtU2lkZURpbWVuc2lvbjtcclxuICAgIHRoaXMuYm9hcmRHcmlkVmlldy53aWR0aCA9IG1pbmltdW1TaWRlRGltZW5zaW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgc2NyZWVuV2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBwbGF0Zm9ybS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XHJcbiAgfVxyXG4gXHJcbiAgcHJpdmF0ZSBnZXQgc2NyZWVuSGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IHNxdWFyZVZpZXdzKCk6IEFycmF5PFN0YWNrTGF5b3V0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zcXVhcmVzLm1hcChzID0+IHMubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==