"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Square = /** @class */ (function () {
    function Square(x, y, classString) {
        this.state = State.Blank;
        this.xPosition = x;
        this.yPosition = y;
        this.classString = classString;
    }
    Object.defineProperty(Square.prototype, "canChangeState", {
        get: function () {
            return this.state == State.Blank;
        },
        enumerable: true,
        configurable: true
    });
    return Square;
}());
exports.Square = Square;
var State;
(function (State) {
    State[State["Blank"] = 0] = "Blank";
    State[State["Cross"] = 1] = "Cross";
    State[State["Circle"] = 2] = "Circle";
})(State = exports.State || (exports.State = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3F1YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFNRSxnQkFBbUIsQ0FBUyxFQUFFLENBQVMsRUFBRSxXQUFtQjtRQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVELHNCQUFXLGtDQUFjO2FBQXpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUNILGFBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLHdCQUFNO0FBa0JuQixJQUFZLEtBSVg7QUFKRCxXQUFZLEtBQUs7SUFDZixtQ0FBSyxDQUFBO0lBQ0wsbUNBQUssQ0FBQTtJQUNMLHFDQUFNLENBQUE7QUFDUixDQUFDLEVBSlcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBSWhCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNxdWFyZSB7XHJcbiAgcHVibGljIHN0YXRlOiBTdGF0ZTtcclxuICBwdWJsaWMgeFBvc2l0aW9uOiBudW1iZXI7XHJcbiAgcHVibGljIHlQb3NpdGlvbjogbnVtYmVyO1xyXG4gIHB1YmxpYyBjbGFzc1N0cmluZzogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNsYXNzU3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5CbGFuaztcclxuICAgIHRoaXMueFBvc2l0aW9uID0geDtcclxuICAgIHRoaXMueVBvc2l0aW9uID0geTtcclxuICAgIHRoaXMuY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY2FuQ2hhbmdlU3RhdGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PSBTdGF0ZS5CbGFuaztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFN0YXRlIHtcclxuICBCbGFuayxcclxuICBDcm9zcyxcclxuICBDaXJjbGVcclxufSJdfQ==