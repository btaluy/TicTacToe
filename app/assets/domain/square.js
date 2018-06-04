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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3F1YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFNRSxnQkFBbUIsQ0FBUyxFQUFFLENBQVMsRUFBRSxXQUFtQjtRQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVELHNCQUFXLGtDQUFjO2FBQXpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUNILGFBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLHdCQUFNO0FBa0JuQixJQUFZLEtBSVg7QUFKRCxXQUFZLEtBQUs7SUFDZixtQ0FBSyxDQUFBO0lBQ0wsbUNBQUssQ0FBQTtJQUNMLHFDQUFNLENBQUE7QUFDUixDQUFDLEVBSlcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBSWhCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNxdWFyZSB7XG4gIHB1YmxpYyBzdGF0ZTogU3RhdGU7XG4gIHB1YmxpYyB4UG9zaXRpb246IG51bWJlcjtcbiAgcHVibGljIHlQb3NpdGlvbjogbnVtYmVyO1xuICBwdWJsaWMgY2xhc3NTdHJpbmc6IHN0cmluZztcblxuICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNsYXNzU3RyaW5nOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0YXRlID0gU3RhdGUuQmxhbms7XG4gICAgdGhpcy54UG9zaXRpb24gPSB4O1xuICAgIHRoaXMueVBvc2l0aW9uID0geTtcbiAgICB0aGlzLmNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmc7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhbkNoYW5nZVN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09IFN0YXRlLkJsYW5rO1xuICB9XG59XG5cbmV4cG9ydCBlbnVtIFN0YXRlIHtcbiAgQmxhbmssXG4gIENyb3NzLFxuICBDaXJjbGVcbn0iXX0=