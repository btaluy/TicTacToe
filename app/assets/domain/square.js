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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3F1YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQWlDQSxDQUFDO0lBMUJlLGlCQUFVLEdBQXhCLFVBQXlCLE1BQVc7UUFDbEMsSUFBTSxNQUFNLEdBQVcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUVwQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDekQsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDeEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBRXRDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVhLG1CQUFZLEdBQTFCLFVBQTJCLENBQVMsRUFBRSxDQUFTLEVBQUUsV0FBbUI7UUFDbEUsSUFBTSxNQUFNLEdBQVcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUVwQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDckIsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDckIsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFakMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsc0JBQVcsa0NBQWM7YUFBekI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBQ0gsYUFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksd0JBQU07QUFtQ25CLElBQVksS0FJWDtBQUpELFdBQVksS0FBSztJQUNmLG1DQUFLLENBQUE7SUFDTCxtQ0FBSyxDQUFBO0lBQ0wscUNBQU0sQ0FBQTtBQUNSLENBQUMsRUFKVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFJaEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3F1YXJlIHtcbiAgcHVibGljIHN0YXRlOiBTdGF0ZTtcbiAgcHVibGljIHhQb3NpdGlvbjogbnVtYmVyO1xuICBwdWJsaWMgeVBvc2l0aW9uOiBudW1iZXI7XG4gIHB1YmxpYyBjbGFzc1N0cmluZzogc3RyaW5nO1xuICBwdWJsaWMgbGFzdFBsYXllZDogYm9vbGVhbjtcblxuICBwdWJsaWMgc3RhdGljIGZyb21PYmplY3Qob2JqZWN0OiBhbnkpOiBTcXVhcmUge1xuICAgIGNvbnN0IHNxdWFyZTogU3F1YXJlID0gbmV3IFNxdWFyZSgpO1xuICAgIFxuICAgIHNxdWFyZS5zdGF0ZSA9IG9iamVjdC5zdGF0ZSA/IG9iamVjdC5zdGF0ZSA6IFN0YXRlLkJsYW5rO1xuICAgIHNxdWFyZS54UG9zaXRpb24gPSBvYmplY3QueFBvc2l0aW9uO1xuICAgIHNxdWFyZS55UG9zaXRpb24gPSBvYmplY3QueVBvc2l0aW9uO1xuICAgIHNxdWFyZS5jbGFzc1N0cmluZyA9IG9iamVjdC5jbGFzc1N0cmluZztcbiAgICBzcXVhcmUubGFzdFBsYXllZCA9IG9iamVjdC5sYXN0UGxheWVkO1xuXG4gICAgcmV0dXJuIHNxdWFyZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlU3F1YXJlKHg6IG51bWJlciwgeTogbnVtYmVyLCBjbGFzc1N0cmluZzogc3RyaW5nKTogU3F1YXJlIHtcbiAgICBjb25zdCBzcXVhcmU6IFNxdWFyZSA9IG5ldyBTcXVhcmUoKTtcbiAgICBcbiAgICBzcXVhcmUuc3RhdGUgPSBTdGF0ZS5CbGFuaztcbiAgICBzcXVhcmUueFBvc2l0aW9uID0geDtcbiAgICBzcXVhcmUueVBvc2l0aW9uID0geTtcbiAgICBzcXVhcmUuY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZztcblxuICAgIHJldHVybiBzcXVhcmU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhbkNoYW5nZVN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09IFN0YXRlLkJsYW5rO1xuICB9XG59XG5cbmV4cG9ydCBlbnVtIFN0YXRlIHtcbiAgQmxhbmssXG4gIENyb3NzLFxuICBDaXJjbGVcbn0iXX0=