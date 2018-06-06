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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvcHVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsaUZBQWtFO0FBQ2xFLDBDQUE0QztBQUM1QyxvQ0FBc0M7QUFHdEM7SUEwQkU7UUF4QlEsV0FBTSxHQUFxQixJQUFJLENBQUM7UUFDaEMsbUJBQWMsR0FBVyxHQUFHLENBQUM7UUFFN0IsbUJBQWMsR0FBUTtZQUM1QixPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixVQUFVLEVBQUUsS0FBSztnQkFDakIsR0FBRyxFQUFFLEdBQUc7Z0JBQ1Isb0JBQW9CLEVBQUUsU0FBUztnQkFDL0IscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsYUFBYSxFQUFFLENBQUM7Z0JBQ2hCLGlCQUFpQixFQUFFLENBQUM7YUFDckI7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLEtBQUssRUFBRSxPQUFPO2dCQUNkLGVBQWUsRUFBRSxPQUFPO2FBQ3pCO1NBQ0YsQ0FBQztJQUVxQixDQUFDO0lBRWpCLDhCQUFPLEdBQWQsVUFBZSxJQUFpQixFQUFFLE9BQXFDO1FBQXZFLGlCQVlDO1FBWmMscUJBQUEsRUFBQSxTQUFpQjtRQUFFLHdCQUFBLEVBQUEsVUFBa0IsSUFBSSxDQUFDLGNBQWM7UUFDckUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztZQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVNLGtDQUFXLEdBQWxCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEIsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRU0sNEJBQUssR0FBWixVQUFhLEtBQWEsRUFBRSxJQUFZLEVBQUUsTUFBZTtRQUN2RCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNuQixLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sNEJBQUssR0FBWixVQUFhLElBQVksRUFBRSxNQUFlO1FBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNoQixPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDhCQUFPLEdBQWQsVUFDRSxLQUFhLEVBQ2IsSUFBWSxFQUNaLE1BQWUsRUFDZixVQUFtQixFQUNuQixpQkFBMEI7UUFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDckIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7WUFDOUIsZ0JBQWdCLEVBQUUsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSw2QkFBTSxHQUFiLFVBQWMsS0FBYSxFQUFFLElBQVksRUFBRSxNQUFlLEVBQUUsVUFBbUI7UUFDN0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDcEIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7WUFDOUIsZ0JBQWdCLEVBQUUsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDO1lBQzFDLHlCQUF5QjtZQUN6QixtQkFBbUI7WUFDbkIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtTQUNsQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0ZBQWtGO0lBQ2xGLEVBQUU7SUFDSyw0QkFBSyxHQUFaLFVBQWEsSUFBWTtRQUN2QixLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFoR1UsWUFBWTtRQUR4QixpQkFBVSxFQUFFOztPQUNBLFlBQVksQ0FpR3hCO0lBQUQsbUJBQUM7Q0FBQSxBQWpHRCxJQWlHQztBQWpHWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvcic7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIGxvYWRlcjogTG9hZGluZ0luZGljYXRvciA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZWZhdWx0VGltZW91dDogbnVtYmVyID0gMjAwO1xyXG4gIHByaXZhdGUgd2FpdGluZ0xvYWRlcjogYW55O1xyXG4gIHByaXZhdGUgbG9hZGluZ09wdGlvbnM6IGFueSA9IHtcclxuICAgIG1lc3NhZ2U6ICdUQkQnLFxyXG4gICAgcHJvZ3Jlc3M6IDAuNjUsXHJcbiAgICBhbmRyb2lkOiB7XHJcbiAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICBtYXg6IDEwMCxcclxuICAgICAgcHJvZ3Jlc3NOdW1iZXJGb3JtYXQ6ICclMWQvJTJkJyxcclxuICAgICAgcHJvZ3Jlc3NQZXJjZW50Rm9ybWF0OiAwLjUzLFxyXG4gICAgICBwcm9ncmVzc1N0eWxlOiAxLFxyXG4gICAgICBzZWNvbmRhcnlQcm9ncmVzczogMVxyXG4gICAgfSxcclxuICAgIGlvczoge1xyXG4gICAgICBzcXVhcmU6IGZhbHNlLFxyXG4gICAgICBtYXJnaW46IDIwLFxyXG4gICAgICBkaW1CYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHB1YmxpYyBsb2FkaW5nKHRleHQ6IHN0cmluZyA9ICcnLCB0aW1lb3V0OiBudW1iZXIgPSB0aGlzLmRlZmF1bHRUaW1lb3V0KSB7XHJcbiAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XHJcbiAgICBpZiAodGhpcy5sb2FkZXIgIT09IG51bGwpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdMb2FkZXIgaXMgbm90IHlldCBoaWRkZW4hIScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2FkaW5nT3B0aW9ucy5tZXNzYWdlID0gdGV4dDtcclxuICAgIHRoaXMubG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcclxuICAgIHRoaXMud2FpdGluZ0xvYWRlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGVyLnNob3codGhpcy5sb2FkaW5nT3B0aW9ucyk7XHJcbiAgICB9LCB0aW1lb3V0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlTG9hZGluZygpIHtcclxuICAgIGlmICh0aGlzLmxvYWRlcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy53YWl0aW5nTG9hZGVyKTtcclxuICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICB0aGlzLmxvYWRlciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWxlcnQodGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nLCB0ZXh0T0s/OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBtZXNzYWdlOiB0ZXh0LFxyXG4gICAgICBva0J1dHRvblRleHQ6ICh0ZXh0T0sgfHwgJ29rJylcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVycm9yKHRleHQ6IHN0cmluZywgdGV4dE9LPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgIHRpdGxlOiAoJ2Vycm9yJyksXHJcbiAgICAgIG1lc3NhZ2U6IHRleHQsXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogKHRleHRPSyB8fCAnb2snKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29uZmlybShcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICB0ZXh0T0s/OiBzdHJpbmcsXHJcbiAgICB0ZXh0Q2FuY2VsPzogc3RyaW5nLFxyXG4gICAgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIG1lc3NhZ2U6IHRleHQsXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogKHRleHRPSyB8fCAnb2snKSxcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogKHRleHRDYW5jZWwgfHwgJ2NhbmNlbCcpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcm9tcHQodGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nLCB0ZXh0T0s/OiBzdHJpbmcsIHRleHRDYW5jZWw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBtZXNzYWdlOiB0ZXh0LFxyXG4gICAgICBva0J1dHRvblRleHQ6ICh0ZXh0T0sgfHwgJ29rJyksXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICh0ZXh0Q2FuY2VsIHx8ICdjYW5jZWwnKSxcclxuICAgICAgLy8gbmV1dHJhbEJ1dHRvblRleHQ6IFwiXCIsXHJcbiAgICAgIC8vIGRlZmF1bHRUZXh0OiBcIlwiLFxyXG4gICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gVG9hc3QgZGlzcGxheXMgYSBzbWFsbCBtZXNzYWdlIGZvciBhYm91dCAyIHNlY29uZHMuIEl0IGF1dG9tYXRpY2FsbHkgZGlzYXBwZWFyc1xyXG4gIC8vXHJcbiAgcHVibGljIHRvYXN0KHRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgVG9hc3QubWFrZVRleHQodGV4dCkuc2hvdygpO1xyXG4gIH1cclxufSJdfQ==