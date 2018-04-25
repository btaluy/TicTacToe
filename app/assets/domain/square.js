"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Square = /** @class */ (function () {
    function Square(x, y) {
        this.state = State.Blank;
        this.xPosition = x;
        this.yPosition = y;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3F1YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFLRSxnQkFBbUIsQ0FBUyxFQUFFLENBQVM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBVyxrQ0FBYzthQUF6QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSx3QkFBTTtBQWdCbkIsSUFBWSxLQUlYO0FBSkQsV0FBWSxLQUFLO0lBQ2YsbUNBQUssQ0FBQTtJQUNMLG1DQUFLLENBQUE7SUFDTCxxQ0FBTSxDQUFBO0FBQ1IsQ0FBQyxFQUpXLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQUloQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTcXVhcmUge1xyXG4gIHB1YmxpYyBzdGF0ZTogU3RhdGU7XHJcbiAgcHVibGljIHhQb3NpdGlvbjogbnVtYmVyO1xyXG4gIHB1YmxpYyB5UG9zaXRpb246IG51bWJlcjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gU3RhdGUuQmxhbms7XHJcbiAgICB0aGlzLnhQb3NpdGlvbiA9IHg7XHJcbiAgICB0aGlzLnlQb3NpdGlvbiA9IHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGNhbkNoYW5nZVN0YXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT0gU3RhdGUuQmxhbms7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTdGF0ZSB7XHJcbiAgQmxhbmssXHJcbiAgQ3Jvc3MsXHJcbiAgQ2lyY2xlXHJcbn0iXX0=