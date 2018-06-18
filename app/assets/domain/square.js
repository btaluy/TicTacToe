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
