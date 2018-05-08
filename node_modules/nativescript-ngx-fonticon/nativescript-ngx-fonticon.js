"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fonticon_pipe_1 = require("./pipes/fonticon.pipe");
var fonticon_service_1 = require("./services/fonticon.service");
// for manual imports
__export(require("./pipes/fonticon.pipe"));
__export(require("./services/fonticon.service"));
var TNSFontIconModule = /** @class */ (function () {
    function TNSFontIconModule(fonticon) {
    }
    TNSFontIconModule_1 = TNSFontIconModule;
    TNSFontIconModule.forRoot = function (providedConfig) {
        if (providedConfig === void 0) { providedConfig = {}; }
        return {
            ngModule: TNSFontIconModule_1,
            providers: [
                { provide: fonticon_service_1.USE_STORE, useValue: providedConfig },
                fonticon_service_1.TNSFontIconService
            ]
        };
    };
    TNSFontIconModule = TNSFontIconModule_1 = __decorate([
        core_1.NgModule({
            declarations: [
                fonticon_pipe_1.TNSFontIconPipe,
                fonticon_pipe_1.TNSFontIconPurePipe
            ],
            exports: [
                fonticon_pipe_1.TNSFontIconPipe,
                fonticon_pipe_1.TNSFontIconPurePipe
            ]
        }),
        __metadata("design:paramtypes", [fonticon_service_1.TNSFontIconService])
    ], TNSFontIconModule);
    return TNSFontIconModule;
    var TNSFontIconModule_1;
}());
exports.TNSFontIconModule = TNSFontIconModule;
