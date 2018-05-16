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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3F1YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFLRSxnQkFBbUIsQ0FBUyxFQUFFLENBQVM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBVyxrQ0FBYzthQUF6QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSx3QkFBTTtBQWdCbkIsSUFBWSxLQUlYO0FBSkQsV0FBWSxLQUFLO0lBQ2YsbUNBQUssQ0FBQTtJQUNMLG1DQUFLLENBQUE7SUFDTCxxQ0FBTSxDQUFBO0FBQ1IsQ0FBQyxFQUpXLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQUloQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTcXVhcmUge1xuICBwdWJsaWMgc3RhdGU6IFN0YXRlO1xuICBwdWJsaWMgeFBvc2l0aW9uOiBudW1iZXI7XG4gIHB1YmxpYyB5UG9zaXRpb246IG51bWJlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0YXRlID0gU3RhdGUuQmxhbms7XG4gICAgdGhpcy54UG9zaXRpb24gPSB4O1xuICAgIHRoaXMueVBvc2l0aW9uID0geTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2FuQ2hhbmdlU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT0gU3RhdGUuQmxhbms7XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gU3RhdGUge1xuICBCbGFuayxcbiAgQ3Jvc3MsXG4gIENpcmNsZVxufSJdfQ==