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
