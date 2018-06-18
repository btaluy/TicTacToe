"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_1 = require("application");
var ApplicationLifecycle = /** @class */ (function () {
    function ApplicationLifecycle() {
    }
    ApplicationLifecycle.prototype.initialise = function () {
        application_1.on(application_1.suspendEvent, function (args) {
            if (args.android) { }
        });
        application_1.on(application_1.resumeEvent, function (args) {
            if (args.android) { }
        });
    };
    ApplicationLifecycle = __decorate([
        core_1.Injectable()
    ], ApplicationLifecycle);
    return ApplicationLifecycle;
}());
exports.ApplicationLifecycle = ApplicationLifecycle;
