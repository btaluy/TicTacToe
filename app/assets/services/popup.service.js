"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var Toast = require("nativescript-toast");
var dialogs = require("ui/dialogs");
var PopupService = /** @class */ (function () {
    function PopupService() {
        this.loader = null;
        this.defaultTimeout = 200;
        this.loadingOptions = {
            message: 'TBD',
            progress: 0.65,
            android: {
                indeterminate: true,
                cancelable: false,
                max: 100,
                progressNumberFormat: '%1d/%2d',
                progressPercentFormat: 0.53,
                progressStyle: 1,
                secondaryProgress: 1
            },
            ios: {
                square: false,
                margin: 20,
                dimBackground: true,
                color: 'black',
                backgroundColor: 'white'
            }
        };
    }
    PopupService.prototype.loading = function (text, timeout) {
        var _this = this;
        if (text === void 0) { text = ''; }
        if (timeout === void 0) { timeout = this.defaultTimeout; }
        this.hideLoading();
        if (this.loader !== null) {
            console.warn('Loader is not yet hidden!!');
            return;
        }
        this.loadingOptions.message = text;
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
        this.waitingLoader = setTimeout(function () {
            _this.loader.show(_this.loadingOptions);
        }, timeout);
    };
    PopupService.prototype.hideLoading = function () {
        if (this.loader) {
            clearTimeout(this.waitingLoader);
            this.loader.hide();
            this.loader = null;
        }
    };
    PopupService.prototype.alert = function (title, text, textOK) {
        return dialogs.alert({
            title: title,
            message: text,
            okButtonText: (textOK || 'ok')
        });
    };
    PopupService.prototype.error = function (text, textOK) {
        return dialogs.alert({
            title: ('error'),
            message: text,
            okButtonText: (textOK || 'ok')
        });
    };
    PopupService.prototype.confirm = function (title, text, textOK, textCancel, interpolateParams) {
        return dialogs.confirm({
            title: title,
            message: text,
            okButtonText: (textOK || 'ok'),
            cancelButtonText: (textCancel || 'cancel')
        });
    };
    PopupService.prototype.prompt = function (title, text, textOK, textCancel) {
        return dialogs.prompt({
            title: title,
            message: text,
            okButtonText: (textOK || 'ok'),
            cancelButtonText: (textCancel || 'cancel'),
            // neutralButtonText: "",
            // defaultText: "",
            inputType: dialogs.inputType.text
        });
    };
    // Toast displays a small message for about 2 seconds. It automatically disappears
    //
    PopupService.prototype.toast = function (text) {
        Toast.makeText(text).show();
    };
    PopupService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PopupService);
    return PopupService;
}());
exports.PopupService = PopupService;
