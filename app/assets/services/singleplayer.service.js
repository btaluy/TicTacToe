"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sound = require('nativescript-sound');
var SinglePlayerService = /** @class */ (function () {
    function SinglePlayerService() {
        this.sessionGameWon = false;
        this.click = sound.create('~/assets/sound/click.mp3');
    }
    SinglePlayerService.prototype.clickSound = function () {
        this.click.reset();
        this.click.play();
    };
    SinglePlayerService = __decorate([
        core_1.Injectable()
    ], SinglePlayerService);
    return SinglePlayerService;
}());
exports.SinglePlayerService = SinglePlayerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nbGVwbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUc1QztJQURBO1FBRVMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsVUFBSyxHQUFRLEtBQUssQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQU0vRCxDQUFDO0lBSlEsd0NBQVUsR0FBakI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQVBVLG1CQUFtQjtRQUQvQixpQkFBVSxFQUFFO09BQ0EsbUJBQW1CLENBUS9CO0lBQUQsMEJBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5jb25zdCBzb3VuZCA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1zb3VuZCcpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2luZ2xlUGxheWVyU2VydmljZSB7XHJcbiAgcHVibGljIHNlc3Npb25HYW1lV29uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGNsaWNrOiBhbnkgPSBzb3VuZC5jcmVhdGUoJ34vYXNzZXRzL3NvdW5kL2NsaWNrLm1wMycpO1xyXG5cclxuICBwdWJsaWMgY2xpY2tTb3VuZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2sucmVzZXQoKTtcclxuICAgIHRoaXMuY2xpY2sucGxheSgpO1xyXG4gIH1cclxufSJdfQ==