"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var domain_1 = require("../domain");
var StatePipe = /** @class */ (function () {
    function StatePipe() {
    }
    StatePipe.prototype.transform = function (value) {
        switch (value) {
            case domain_1.State.Circle:
                return 'fa-circle-thin';
            case domain_1.State.Cross:
                return 'fa-times';
        }
    };
    StatePipe = __decorate([
        core_1.Pipe({ name: 'statePipe' })
    ], StatePipe);
    return StatePipe;
}());
exports.StatePipe = StatePipe;
