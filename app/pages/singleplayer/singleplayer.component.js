"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var services_1 = require("~/services");
var SinglePlayerComponent = /** @class */ (function () {
    function SinglePlayerComponent(_page, _navigationService, _popupService, _singlePlayerService) {
        this._page = _page;
        this._navigationService = _navigationService;
        this._popupService = _popupService;
        this._singlePlayerService = _singlePlayerService;
        this.activePlayer = 'player - x';
        this._player = 'x';
        this._scores = { x: 0, o: 0 };
        this._turns = 0;
        this._buttons = [];
    }
    SinglePlayerComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this._page.actionBarHidden = true;
    };
    SinglePlayerComponent.prototype.toggleTile = function (args) {
        this._turns++;
        this.activePlayer = "player - " + (this._player === 'x' ? 'o' : 'x');
        var button = args.object;
        button.set('text', this._player.toUpperCase());
        button.set('isEnabled', false);
        this._buttons.push(button);
        this._scores[this._player] = this._scores[this._player] + parseInt(button.get('score'));
        if (services_1.SinglePlayerService.checkWins(this._scores[this._player])) {
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
        this._player = 'o';
        this.activePlayer = 'player - x';
        this._scores = { x: 0, o: 0 };
        this._turns = 0;
        if (this._buttons.length > 0) {
            this._buttons.forEach(function (button) {
                button.set('text', '');
                button.set('isEnabled', true);
            });
            this._buttons = [];
        }
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbmdsZXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsZ0NBQStCO0FBQy9CLHVDQUFrRjtBQVFsRjtJQVFFLCtCQUNVLEtBQVcsRUFDWCxrQkFBcUMsRUFDckMsYUFBMkIsRUFDM0Isb0JBQXlDO1FBSHpDLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFYNUMsaUJBQVksR0FBVyxZQUFZLENBQUM7UUFFbkMsWUFBTyxHQUFXLEdBQUcsQ0FBQztRQUN0QixZQUFPLEdBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUM1QixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGFBQVEsR0FBVSxFQUFFLENBQUM7SUFPekIsQ0FBQztJQUVMLHdDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFTSwwQ0FBVSxHQUFqQixVQUFrQixJQUFlO1FBQy9CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsZUFBWSxJQUFJLENBQUMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUUsQ0FBQztRQUVuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRXhGLEVBQUUsQ0FBQyxDQUFDLDhCQUFtQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxhQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLDhDQUEyQyxDQUFDLENBQUM7WUFDM0csSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNoRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVPLHlDQUFTLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNO2dCQUMxQixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQXpEVSxxQkFBcUI7UUFMakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQy9DLENBQUM7eUNBVWlCLFdBQUk7WUFDUyw0QkFBaUI7WUFDdEIsdUJBQVk7WUFDTCw4QkFBbUI7T0FaeEMscUJBQXFCLENBMERqQztJQUFELDRCQUFDO0NBQUEsQUExREQsSUEwREM7QUExRFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UsIFBvcHVwU2VydmljZSwgU2luZ2xlUGxheWVyU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IE1lbnVJdGVtTmFtZSB9IGZyb20gXCJ+L2RvbWFpblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJTaW5nbGVwbGF5ZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NpbmdsZXBsYXllci5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVQbGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBhY3RpdmVQbGF5ZXI6IHN0cmluZyA9ICdwbGF5ZXIgLSB4JztcclxuXHJcbiAgcHJpdmF0ZSBfcGxheWVyOiBzdHJpbmcgPSAneCc7XHJcbiAgcHJpdmF0ZSBfc2NvcmVzOiBhbnkgPSB7eDogMCwgbzogMH07XHJcbiAgcHJpdmF0ZSBfdHVybnM6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBfYnV0dG9uczogYW55W10gPSBbXTtcclxuICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3BhZ2U6IFBhZ2UsXHJcbiAgICBwcml2YXRlIF9uYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9wb3B1cFNlcnZpY2U6IFBvcHVwU2VydmljZSxcclxuICAgIHByaXZhdGUgX3NpbmdsZVBsYXllclNlcnZpY2U6IFNpbmdsZVBsYXllclNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgcHVibGljIHRvZ2dsZVRpbGUoYXJnczogRXZlbnREYXRhKTogdm9pZCB7XHJcbiAgICB0aGlzLl90dXJucysrO1xyXG4gICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSBgcGxheWVyIC0gJHt0aGlzLl9wbGF5ZXIgPT09ICd4JyA/ICdvJyA6ICd4J31gO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgYnV0dG9uLnNldCgndGV4dCcsIHRoaXMuX3BsYXllci50b1VwcGVyQ2FzZSgpKTtcclxuICAgIGJ1dHRvbi5zZXQoJ2lzRW5hYmxlZCcsIGZhbHNlKTtcclxuICAgIHRoaXMuX2J1dHRvbnMucHVzaChidXR0b24pO1xyXG5cclxuICAgIHRoaXMuX3Njb3Jlc1t0aGlzLl9wbGF5ZXJdID0gdGhpcy5fc2NvcmVzW3RoaXMuX3BsYXllcl0gKyBwYXJzZUludChidXR0b24uZ2V0KCdzY29yZScpKTtcclxuXHJcbiAgICBpZiAoU2luZ2xlUGxheWVyU2VydmljZS5jaGVja1dpbnModGhpcy5fc2NvcmVzW3RoaXMuX3BsYXllcl0pKSB7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBTZXJ2aWNlLnRvYXN0KGBQbGF5ZXI6ICR7dGhpcy5fcGxheWVyLnRvVXBwZXJDYXNlKCl9IGhhcyB3b24gdGhlIG1hdGNoLCByZXNldHRpbmcgdGhlIGdhbWUuLi5gKTtcclxuICAgICAgICB0aGlzLnJlc2V0R2FtZSgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl90dXJucyA9PT0gOSkge1xyXG4gICAgICB0aGlzLl9wb3B1cFNlcnZpY2UudG9hc3QoJ0dhbWUgaXMgYSB0aWUsIHJlc2V0dGluZyB0aGUgZ2FtZS4uLicpO1xyXG4gICAgICB0aGlzLnJlc2V0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3BsYXllciA9IHRoaXMuX3BsYXllciA9PT0gJ28nID8gJ3gnIDogJ28nO1xyXG4gICAgdGhpcy5fc2luZ2xlUGxheWVyU2VydmljZS5jbGlja1NvdW5kKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0R2FtZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BsYXllciA9ICdvJztcclxuICAgIHRoaXMuYWN0aXZlUGxheWVyID0gJ3BsYXllciAtIHgnO1xyXG4gICAgdGhpcy5fc2NvcmVzID0ge3g6IDAsIG86IDB9O1xyXG4gICAgdGhpcy5fdHVybnMgPSAwO1xyXG5cclxuICAgIGlmKHRoaXMuX2J1dHRvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLl9idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uc2V0KCd0ZXh0JywgJycpO1xyXG4gICAgICAgIGJ1dHRvbi5zZXQoJ2lzRW5hYmxlZCcsIHRydWUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX2J1dHRvbnMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19