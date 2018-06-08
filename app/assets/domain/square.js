"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.fromObject = function (object) {
        var square = new Square();
        square.state = object.state ? object.state : State.Blank;
        square.xPosition = object.xPosition;
        square.yPosition = object.yPosition;
        square.classString = object.classString;
        square.lastPlayed = object.lastPlayed;
        return square;
    };
    Square.createSquare = function (x, y, classString) {
        var square = new Square();
        square.state = State.Blank;
        square.xPosition = x;
        square.yPosition = y;
        square.classString = classString;
        return square;
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3F1YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQWlDQSxDQUFDO0lBMUJlLGlCQUFVLEdBQXhCLFVBQXlCLE1BQVc7UUFDbEMsSUFBTSxNQUFNLEdBQVcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUVwQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekQsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDeEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBRXRDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVhLG1CQUFZLEdBQTFCLFVBQTJCLENBQVMsRUFBRSxDQUFTLEVBQUUsV0FBbUI7UUFDbEUsSUFBTSxNQUFNLEdBQVcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUVwQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDckIsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDckIsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFakMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsc0JBQVcsa0NBQWM7YUFBekI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBQ0gsYUFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksd0JBQU07QUFtQ25CLElBQVksS0FJWDtBQUpELFdBQVksS0FBSztJQUNmLG1DQUFLLENBQUE7SUFDTCxtQ0FBSyxDQUFBO0lBQ0wscUNBQU0sQ0FBQTtBQUNSLENBQUMsRUFKVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFJaEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3F1YXJlIHtcclxuICBwdWJsaWMgc3RhdGU6IFN0YXRlO1xyXG4gIHB1YmxpYyB4UG9zaXRpb246IG51bWJlcjtcclxuICBwdWJsaWMgeVBvc2l0aW9uOiBudW1iZXI7XHJcbiAgcHVibGljIGNsYXNzU3RyaW5nOiBzdHJpbmc7XHJcbiAgcHVibGljIGxhc3RQbGF5ZWQ6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZnJvbU9iamVjdChvYmplY3Q6IGFueSk6IFNxdWFyZSB7XHJcbiAgICBjb25zdCBzcXVhcmU6IFNxdWFyZSA9IG5ldyBTcXVhcmUoKTtcclxuICAgIFxyXG4gICAgc3F1YXJlLnN0YXRlID0gb2JqZWN0LnN0YXRlID8gb2JqZWN0LnN0YXRlIDogU3RhdGUuQmxhbms7XHJcbiAgICBzcXVhcmUueFBvc2l0aW9uID0gb2JqZWN0LnhQb3NpdGlvbjtcclxuICAgIHNxdWFyZS55UG9zaXRpb24gPSBvYmplY3QueVBvc2l0aW9uO1xyXG4gICAgc3F1YXJlLmNsYXNzU3RyaW5nID0gb2JqZWN0LmNsYXNzU3RyaW5nO1xyXG4gICAgc3F1YXJlLmxhc3RQbGF5ZWQgPSBvYmplY3QubGFzdFBsYXllZDtcclxuXHJcbiAgICByZXR1cm4gc3F1YXJlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVTcXVhcmUoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNsYXNzU3RyaW5nOiBzdHJpbmcpOiBTcXVhcmUge1xyXG4gICAgY29uc3Qgc3F1YXJlOiBTcXVhcmUgPSBuZXcgU3F1YXJlKCk7XHJcbiAgICBcclxuICAgIHNxdWFyZS5zdGF0ZSA9IFN0YXRlLkJsYW5rO1xyXG4gICAgc3F1YXJlLnhQb3NpdGlvbiA9IHg7XHJcbiAgICBzcXVhcmUueVBvc2l0aW9uID0geTtcclxuICAgIHNxdWFyZS5jbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nO1xyXG5cclxuICAgIHJldHVybiBzcXVhcmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGNhbkNoYW5nZVN0YXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT0gU3RhdGUuQmxhbms7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTdGF0ZSB7XHJcbiAgQmxhbmssXHJcbiAgQ3Jvc3MsXHJcbiAgQ2lyY2xlXHJcbn0iXX0=