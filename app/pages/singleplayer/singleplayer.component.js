"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform = require("platform");
var page_1 = require("ui/page");
var services_1 = require("~/services");
var SinglePlayerComponent = /** @class */ (function () {
    function SinglePlayerComponent(_page, _navigationService, _popupService, _singlePlayerService) {
        this._page = _page;
        this._navigationService = _navigationService;
        this._popupService = _popupService;
        this._singlePlayerService = _singlePlayerService;
        this.activePlayer = 'player - x';
        this.squareDigits = [1, 2, 4, 8, 16, 32, 64, 128, 256];
        this._player = 'x';
        this._scores = { x: { score: 0, index: [] }, o: { score: 0, index: [] } };
        this._turns = 0;
        this._buttons = [];
    }
    SinglePlayerComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        this.makeBoardGridSquared();
    };
    SinglePlayerComponent.prototype.toggleTile = function (args) {
        this._turns++;
        this.activePlayer = "player - " + (this._player === 'x' ? 'o' : 'x');
        var button = args.object;
        button.set('text', this._player.toUpperCase());
        button.set('isEnabled', false);
        this._buttons.push(button);
        this._scores[this._player].score = this._scores[this._player].score + parseInt(button.get('score'));
        this._scores[this._player].index.push(parseInt(button.get('score')));
        if (services_1.SinglePlayerService.checkWins(this._scores[this._player].score)) {
            console.log(JSON.stringify(this._scores[this._player]));
            this._popupService.toast("Player: " + this._player.toUpperCase() + " has won the match, resetting the game...");
            this.resetGame();
        }
        else if (this._turns === 9) {
            this._popupService.toast('Game is a tie, resetting the game...');
            this.resetGame();
        }
        this._player = this._player === 'o' ? 'x' : 'o';
        this._singlePlayerService.clickSound();
    };
    SinglePlayerComponent.prototype.resetGame = function () {
        var _this = this;
        this._player = 'o';
        setTimeout(function () {
            _this.activePlayer = 'player - x';
            _this._scores = { x: { score: 0, index: [] }, o: { score: 0, index: [] } };
            _this._turns = 0;
            if (_this._buttons.length > 0) {
                _this._buttons.forEach(function (button) {
                    button.set('text', '');
                    button.set('isEnabled', true);
                });
                _this._buttons = [];
            }
        }, 1000);
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
    __decorate([
        core_1.ViewChild('boardGrid'),
        __metadata("design:type", core_1.ElementRef)
    ], SinglePlayerComponent.prototype, "boardGrid", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbmdsZXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsbUNBQXFDO0FBR3JDLGdDQUErQjtBQUMvQix1Q0FBa0Y7QUFRbEY7SUFXRSwrQkFDVSxLQUFXLEVBQ1gsa0JBQXFDLEVBQ3JDLGFBQTJCLEVBQzNCLG9CQUF5QztRQUh6QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBWjVDLGlCQUFZLEdBQVcsWUFBWSxDQUFDO1FBQ3BDLGlCQUFZLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTNELFlBQU8sR0FBVyxHQUFHLENBQUM7UUFDdEIsWUFBTyxHQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFDLEVBQUMsQ0FBQztRQUN2RSxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGFBQVEsR0FBVSxFQUFFLENBQUM7SUFPekIsQ0FBQztJQUVMLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLDBDQUFVLEdBQWpCLFVBQWtCLElBQWU7UUFDL0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FB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QixDQXNGakM7SUFBRCw0QkFBQztDQUFBLEFBdEZELElBc0ZDO0FBdEZZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tICdwbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL2dyaWQtbGF5b3V0JztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlLCBQb3B1cFNlcnZpY2UsIFNpbmdsZVBsYXllclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBNZW51SXRlbU5hbWUgfSBmcm9tIFwifi9kb21haW5cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiU2luZ2xlcGxheWVyXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zaW5nbGVwbGF5ZXIuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2luZ2xlUGxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKCdib2FyZEdyaWQnKSBwdWJsaWMgYm9hcmRHcmlkOiBFbGVtZW50UmVmO1xyXG4gIFxyXG4gIHB1YmxpYyBhY3RpdmVQbGF5ZXI6IHN0cmluZyA9ICdwbGF5ZXIgLSB4JztcclxuICBwdWJsaWMgc3F1YXJlRGlnaXRzOiBudW1iZXJbXSA9IFsxLCAyLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1Nl07XHJcbiAgXHJcbiAgcHJpdmF0ZSBfcGxheWVyOiBzdHJpbmcgPSAneCc7XHJcbiAgcHJpdmF0ZSBfc2NvcmVzOiBhbnkgPSB7IHg6IHsgc2NvcmU6IDAsIGluZGV4OiBbXX0sIG86IHsgc2NvcmU6IDAsIGluZGV4OiBbXX19O1xyXG4gIHByaXZhdGUgX3R1cm5zOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgX2J1dHRvbnM6IGFueVtdID0gW107XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9wYWdlOiBQYWdlLFxyXG4gICAgcHJpdmF0ZSBfbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfcG9wdXBTZXJ2aWNlOiBQb3B1cFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9zaW5nbGVQbGF5ZXJTZXJ2aWNlOiBTaW5nbGVQbGF5ZXJTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLm1ha2VCb2FyZEdyaWRTcXVhcmVkKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyB0b2dnbGVUaWxlKGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xyXG4gICAgdGhpcy5fdHVybnMrKztcclxuICAgIHRoaXMuYWN0aXZlUGxheWVyID0gYHBsYXllciAtICR7dGhpcy5fcGxheWVyID09PSAneCcgPyAnbycgOiAneCd9YDtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBhcmdzLm9iamVjdDtcclxuICAgIGJ1dHRvbi5zZXQoJ3RleHQnLCB0aGlzLl9wbGF5ZXIudG9VcHBlckNhc2UoKSk7XHJcbiAgICBidXR0b24uc2V0KCdpc0VuYWJsZWQnLCBmYWxzZSk7XHJcbiAgICB0aGlzLl9idXR0b25zLnB1c2goYnV0dG9uKTtcclxuXHJcbiAgICB0aGlzLl9zY29yZXNbdGhpcy5fcGxheWVyXS5zY29yZSA9IHRoaXMuX3Njb3Jlc1t0aGlzLl9wbGF5ZXJdLnNjb3JlICsgcGFyc2VJbnQoYnV0dG9uLmdldCgnc2NvcmUnKSk7XHJcbiAgICB0aGlzLl9zY29yZXNbdGhpcy5fcGxheWVyXS5pbmRleC5wdXNoKHBhcnNlSW50KGJ1dHRvbi5nZXQoJ3Njb3JlJykpKTtcclxuXHJcbiAgICBpZiAoU2luZ2xlUGxheWVyU2VydmljZS5jaGVja1dpbnModGhpcy5fc2NvcmVzW3RoaXMuX3BsYXllcl0uc2NvcmUpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5fc2NvcmVzW3RoaXMuX3BsYXllcl0pKTtcclxuICAgICAgICB0aGlzLl9wb3B1cFNlcnZpY2UudG9hc3QoYFBsYXllcjogJHt0aGlzLl9wbGF5ZXIudG9VcHBlckNhc2UoKX0gaGFzIHdvbiB0aGUgbWF0Y2gsIHJlc2V0dGluZyB0aGUgZ2FtZS4uLmApO1xyXG4gICAgICAgIHRoaXMucmVzZXRHYW1lKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3R1cm5zID09PSA5KSB7XHJcbiAgICAgIHRoaXMuX3BvcHVwU2VydmljZS50b2FzdCgnR2FtZSBpcyBhIHRpZSwgcmVzZXR0aW5nIHRoZSBnYW1lLi4uJyk7XHJcbiAgICAgIHRoaXMucmVzZXRHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcGxheWVyID0gdGhpcy5fcGxheWVyID09PSAnbycgPyAneCcgOiAnbyc7XHJcbiAgICB0aGlzLl9zaW5nbGVQbGF5ZXJTZXJ2aWNlLmNsaWNrU291bmQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRHYW1lKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcGxheWVyID0gJ28nO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4geyAgXHJcbiAgICAgIHRoaXMuYWN0aXZlUGxheWVyID0gJ3BsYXllciAtIHgnO1xyXG4gICAgICB0aGlzLl9zY29yZXMgPSB7IHg6IHsgc2NvcmU6IDAsIGluZGV4OiBbXX0sIG86IHsgc2NvcmU6IDAsIGluZGV4OiBbXX19O1xyXG4gICAgICB0aGlzLl90dXJucyA9IDA7XHJcbiAgXHJcbiAgICAgIGlmKHRoaXMuX2J1dHRvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgYnV0dG9uLnNldCgndGV4dCcsICcnKTtcclxuICAgICAgICAgIGJ1dHRvbi5zZXQoJ2lzRW5hYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgIHRoaXMuX2J1dHRvbnMgPSBbXTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG4gICAgXHJcbiAgcHJpdmF0ZSBnZXQgYm9hcmRHcmlkVmlldygpOiBHcmlkTGF5b3V0IHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkR3JpZC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYWtlQm9hcmRHcmlkU3F1YXJlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGhlaWdodE92ZXJmbG93ID0gMTIwO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5zY3JlZW5IZWlnaHQgLSBoZWlnaHRPdmVyZmxvdztcclxuICAgIGNvbnN0IG1pbmltdW1TaWRlRGltZW5zaW9uID0gTWF0aC5taW4odGhpcy5zY3JlZW5XaWR0aCwgaGVpZ2h0KTtcclxuICAgIHRoaXMuYm9hcmRHcmlkVmlldy5oZWlnaHQgPSBtaW5pbXVtU2lkZURpbWVuc2lvbjtcclxuICAgIHRoaXMuYm9hcmRHcmlkVmlldy53aWR0aCA9IG1pbmltdW1TaWRlRGltZW5zaW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgc2NyZWVuV2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBwbGF0Zm9ybS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XHJcbiAgfVxyXG4gXHJcbiAgcHJpdmF0ZSBnZXQgc2NyZWVuSGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcztcclxuICB9XHJcbn1cclxuIl19