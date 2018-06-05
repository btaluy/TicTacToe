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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvcHVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsaUZBQWtFO0FBQ2xFLDBDQUE0QztBQUM1QyxvQ0FBc0M7QUFHdEM7SUEwQkU7UUF4QlEsV0FBTSxHQUFxQixJQUFJLENBQUM7UUFDaEMsbUJBQWMsR0FBVyxHQUFHLENBQUM7UUFFN0IsbUJBQWMsR0FBUTtZQUM1QixPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixVQUFVLEVBQUUsS0FBSztnQkFDakIsR0FBRyxFQUFFLEdBQUc7Z0JBQ1Isb0JBQW9CLEVBQUUsU0FBUztnQkFDL0IscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsYUFBYSxFQUFFLENBQUM7Z0JBQ2hCLGlCQUFpQixFQUFFLENBQUM7YUFDckI7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLEtBQUssRUFBRSxPQUFPO2dCQUNkLGVBQWUsRUFBRSxPQUFPO2FBQ3pCO1NBQ0YsQ0FBQztJQUVxQixDQUFDO0lBRWpCLDhCQUFPLEdBQWQsVUFBZSxJQUFpQixFQUFFLE9BQXFDO1FBQXZFLGlCQVlDO1FBWmMscUJBQUEsRUFBQSxTQUFpQjtRQUFFLHdCQUFBLEVBQUEsVUFBa0IsSUFBSSxDQUFDLGNBQWM7UUFDckUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztZQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVNLGtDQUFXLEdBQWxCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEIsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRU0sNEJBQUssR0FBWixVQUFhLEtBQWEsRUFBRSxJQUFZLEVBQUUsTUFBZTtRQUN2RCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNuQixLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sNEJBQUssR0FBWixVQUFhLElBQVksRUFBRSxNQUFlO1FBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNoQixPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7U0FDL0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDhCQUFPLEdBQWQsVUFDRSxLQUFhLEVBQ2IsSUFBWSxFQUNaLE1BQWUsRUFDZixVQUFtQixFQUNuQixpQkFBMEI7UUFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDckIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7WUFDOUIsZ0JBQWdCLEVBQUUsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSw2QkFBTSxHQUFiLFVBQWMsS0FBYSxFQUFFLElBQVksRUFBRSxNQUFlLEVBQUUsVUFBbUI7UUFDN0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDcEIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7WUFDOUIsZ0JBQWdCLEVBQUUsQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDO1lBQzFDLHlCQUF5QjtZQUN6QixtQkFBbUI7WUFDbkIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSTtTQUNsQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0ZBQWtGO0lBQ2xGLEVBQUU7SUFDSyw0QkFBSyxHQUFaLFVBQWEsSUFBWTtRQUN2QixLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFoR1UsWUFBWTtRQUR4QixpQkFBVSxFQUFFOztPQUNBLFlBQVksQ0FpR3hCO0lBQUQsbUJBQUM7Q0FBQSxBQWpHRCxJQWlHQztBQWpHWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tICduYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3InO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3B1cFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgbG9hZGVyOiBMb2FkaW5nSW5kaWNhdG9yID0gbnVsbDtcbiAgcHJpdmF0ZSBkZWZhdWx0VGltZW91dDogbnVtYmVyID0gMjAwO1xuICBwcml2YXRlIHdhaXRpbmdMb2FkZXI6IGFueTtcbiAgcHJpdmF0ZSBsb2FkaW5nT3B0aW9uczogYW55ID0ge1xuICAgIG1lc3NhZ2U6ICdUQkQnLFxuICAgIHByb2dyZXNzOiAwLjY1LFxuICAgIGFuZHJvaWQ6IHtcbiAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXG4gICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgIG1heDogMTAwLFxuICAgICAgcHJvZ3Jlc3NOdW1iZXJGb3JtYXQ6ICclMWQvJTJkJyxcbiAgICAgIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcbiAgICAgIHByb2dyZXNzU3R5bGU6IDEsXG4gICAgICBzZWNvbmRhcnlQcm9ncmVzczogMVxuICAgIH0sXG4gICAgaW9zOiB7XG4gICAgICBzcXVhcmU6IGZhbHNlLFxuICAgICAgbWFyZ2luOiAyMCxcbiAgICAgIGRpbUJhY2tncm91bmQ6IHRydWUsXG4gICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJ1xuICAgIH1cbiAgfTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgbG9hZGluZyh0ZXh0OiBzdHJpbmcgPSAnJywgdGltZW91dDogbnVtYmVyID0gdGhpcy5kZWZhdWx0VGltZW91dCkge1xuICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICBpZiAodGhpcy5sb2FkZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUud2FybignTG9hZGVyIGlzIG5vdCB5ZXQgaGlkZGVuISEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvYWRpbmdPcHRpb25zLm1lc3NhZ2UgPSB0ZXh0O1xuICAgIHRoaXMubG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcbiAgICB0aGlzLndhaXRpbmdMb2FkZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkZXIuc2hvdyh0aGlzLmxvYWRpbmdPcHRpb25zKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlTG9hZGluZygpIHtcbiAgICBpZiAodGhpcy5sb2FkZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLndhaXRpbmdMb2FkZXIpO1xuICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xuICAgICAgdGhpcy5sb2FkZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhbGVydCh0aXRsZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIHRleHRPSz86IHN0cmluZykge1xuICAgIHJldHVybiBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIG1lc3NhZ2U6IHRleHQsXG4gICAgICBva0J1dHRvblRleHQ6ICh0ZXh0T0sgfHwgJ29rJylcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBlcnJvcih0ZXh0OiBzdHJpbmcsIHRleHRPSz86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgIHRpdGxlOiAoJ2Vycm9yJyksXG4gICAgICBtZXNzYWdlOiB0ZXh0LFxuICAgICAgb2tCdXR0b25UZXh0OiAodGV4dE9LIHx8ICdvaycpXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY29uZmlybShcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICB0ZXh0T0s/OiBzdHJpbmcsXG4gICAgdGV4dENhbmNlbD86IHN0cmluZyxcbiAgICBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBkaWFsb2dzLmNvbmZpcm0oe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgbWVzc2FnZTogdGV4dCxcbiAgICAgIG9rQnV0dG9uVGV4dDogKHRleHRPSyB8fCAnb2snKSxcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICh0ZXh0Q2FuY2VsIHx8ICdjYW5jZWwnKVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHByb21wdCh0aXRsZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIHRleHRPSz86IHN0cmluZywgdGV4dENhbmNlbD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIG1lc3NhZ2U6IHRleHQsXG4gICAgICBva0J1dHRvblRleHQ6ICh0ZXh0T0sgfHwgJ29rJyksXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiAodGV4dENhbmNlbCB8fCAnY2FuY2VsJyksXG4gICAgICAvLyBuZXV0cmFsQnV0dG9uVGV4dDogXCJcIixcbiAgICAgIC8vIGRlZmF1bHRUZXh0OiBcIlwiLFxuICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XG4gICAgfSk7XG4gIH1cblxuICAvLyBUb2FzdCBkaXNwbGF5cyBhIHNtYWxsIG1lc3NhZ2UgZm9yIGFib3V0IDIgc2Vjb25kcy4gSXQgYXV0b21hdGljYWxseSBkaXNhcHBlYXJzXG4gIC8vXG4gIHB1YmxpYyB0b2FzdCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBUb2FzdC5tYWtlVGV4dCh0ZXh0KS5zaG93KCk7XG4gIH1cbn0iXX0=