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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvcHVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsaUZBQWtFO0FBQ2xFLDBDQUE0QztBQUM1QyxvQ0FBc0M7QUFHdEM7SUEwQkU7UUF4QlEsV0FBTSxHQUFxQixJQUFJLENBQUM7UUFDaEMsbUJBQWMsR0FBVyxHQUFHLENBQUM7UUFFN0IsbUJBQWMsR0FBUTtZQUM1QixPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixVQUFVLEVBQUUsS0FBSztnQkFDakIsR0FBRyxFQUFFLEdBQUc7Z0JBQ1Isb0JBQW9CLEVBQUUsU0FBUztnQkFDL0IscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsYUFBYSxFQUFFLENBQUM7Z0JBQ2hCLGlCQUFpQixFQUFFLENBQUM7YUFDckI7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLEtBQUssRUFBRSxPQUFPO2dCQUNkLGVBQWUsRUFBRSxPQUFPO2FBQ3pCO1NBQ0YsQ0FBQztJQUVxQixDQUFDO0lBRWpCLDhCQUFPLEdBQWQsVUFBZSxJQUFpQixFQUFFLE9BQXFDO1FBQXZFLGlCQVdDO1FBWGMscUJBQUEsRUFBQSxTQUFpQjtRQUFFLHdCQUFBLEVBQUEsVUFBa0IsSUFBSSxDQUFDLGNBQWM7UUFDckUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRU0sa0NBQVcsR0FBbEI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoQixZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUM7SUFFTSw0QkFBSyxHQUFaLFVBQWEsS0FBYSxFQUFFLElBQVksRUFBRSxNQUFlO1FBQ3ZELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ25CLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLElBQUk7WUFDYixZQUFZLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSw0QkFBSyxHQUFaLFVBQWEsSUFBWSxFQUFFLE1BQWU7UUFDeEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDbkIsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sOEJBQU8sR0FBZCxVQUNFLEtBQWEsRUFDYixJQUFZLEVBQ1osTUFBZSxFQUNmLFVBQW1CLEVBQ25CLGlCQUEwQjtRQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNyQixLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztZQUM5QixnQkFBZ0IsRUFBRSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUM7U0FDM0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDZCQUFNLEdBQWIsVUFBYyxLQUFhLEVBQUUsSUFBWSxFQUFFLE1BQWUsRUFBRSxVQUFtQjtRQUM3RSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNwQixLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztZQUM5QixnQkFBZ0IsRUFBRSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUM7WUFDMUMseUJBQXlCO1lBQ3pCLG1CQUFtQjtZQUNuQixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1NBQ2xDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrRkFBa0Y7SUFDbEYsRUFBRTtJQUNLLDRCQUFLLEdBQVosVUFBYSxJQUFZO1FBQ3ZCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQS9GVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7O09BQ0EsWUFBWSxDQWdHeEI7SUFBRCxtQkFBQztDQUFBLEFBaEdELElBZ0dDO0FBaEdZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvcic7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd1aS9kaWFsb2dzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvcHVwU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBsb2FkZXI6IExvYWRpbmdJbmRpY2F0b3IgPSBudWxsO1xuICBwcml2YXRlIGRlZmF1bHRUaW1lb3V0OiBudW1iZXIgPSAyMDA7XG4gIHByaXZhdGUgd2FpdGluZ0xvYWRlcjogYW55O1xuICBwcml2YXRlIGxvYWRpbmdPcHRpb25zOiBhbnkgPSB7XG4gICAgbWVzc2FnZTogJ1RCRCcsXG4gICAgcHJvZ3Jlc3M6IDAuNjUsXG4gICAgYW5kcm9pZDoge1xuICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgbWF4OiAxMDAsXG4gICAgICBwcm9ncmVzc051bWJlckZvcm1hdDogJyUxZC8lMmQnLFxuICAgICAgcHJvZ3Jlc3NQZXJjZW50Rm9ybWF0OiAwLjUzLFxuICAgICAgcHJvZ3Jlc3NTdHlsZTogMSxcbiAgICAgIHNlY29uZGFyeVByb2dyZXNzOiAxXG4gICAgfSxcbiAgICBpb3M6IHtcbiAgICAgIHNxdWFyZTogZmFsc2UsXG4gICAgICBtYXJnaW46IDIwLFxuICAgICAgZGltQmFja2dyb3VuZDogdHJ1ZSxcbiAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXG4gICAgfVxuICB9O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyBsb2FkaW5nKHRleHQ6IHN0cmluZyA9ICcnLCB0aW1lb3V0OiBudW1iZXIgPSB0aGlzLmRlZmF1bHRUaW1lb3V0KSB7XG4gICAgaWYgKHRoaXMubG9hZGVyICE9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0xvYWRlciBpcyBub3QgeWV0IGhpZGRlbiEhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2FkaW5nT3B0aW9ucy5tZXNzYWdlID0gdGV4dDtcbiAgICB0aGlzLmxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XG4gICAgdGhpcy53YWl0aW5nTG9hZGVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGVyLnNob3codGhpcy5sb2FkaW5nT3B0aW9ucyk7XG4gICAgfSwgdGltZW91dCk7XG4gIH1cblxuICBwdWJsaWMgaGlkZUxvYWRpbmcoKSB7XG4gICAgaWYgKHRoaXMubG9hZGVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy53YWl0aW5nTG9hZGVyKTtcbiAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcbiAgICAgIHRoaXMubG9hZGVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYWxlcnQodGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nLCB0ZXh0T0s/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZGlhbG9ncy5hbGVydCh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBtZXNzYWdlOiB0ZXh0LFxuICAgICAgb2tCdXR0b25UZXh0OiAodGV4dE9LIHx8ICdvaycpXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZXJyb3IodGV4dDogc3RyaW5nLCB0ZXh0T0s/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gZGlhbG9ncy5hbGVydCh7XG4gICAgICB0aXRsZTogKCdlcnJvcicpLFxuICAgICAgbWVzc2FnZTogdGV4dCxcbiAgICAgIG9rQnV0dG9uVGV4dDogKHRleHRPSyB8fCAnb2snKVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNvbmZpcm0oXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgdGV4dE9LPzogc3RyaW5nLFxuICAgIHRleHRDYW5jZWw/OiBzdHJpbmcsXG4gICAgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gZGlhbG9ncy5jb25maXJtKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIG1lc3NhZ2U6IHRleHQsXG4gICAgICBva0J1dHRvblRleHQ6ICh0ZXh0T0sgfHwgJ29rJyksXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiAodGV4dENhbmNlbCB8fCAnY2FuY2VsJylcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBwcm9tcHQodGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nLCB0ZXh0T0s/OiBzdHJpbmcsIHRleHRDYW5jZWw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBkaWFsb2dzLnByb21wdCh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBtZXNzYWdlOiB0ZXh0LFxuICAgICAgb2tCdXR0b25UZXh0OiAodGV4dE9LIHx8ICdvaycpLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogKHRleHRDYW5jZWwgfHwgJ2NhbmNlbCcpLFxuICAgICAgLy8gbmV1dHJhbEJ1dHRvblRleHQ6IFwiXCIsXG4gICAgICAvLyBkZWZhdWx0VGV4dDogXCJcIixcbiAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxuICAgIH0pO1xuICB9XG5cbiAgLy8gVG9hc3QgZGlzcGxheXMgYSBzbWFsbCBtZXNzYWdlIGZvciBhYm91dCAyIHNlY29uZHMuIEl0IGF1dG9tYXRpY2FsbHkgZGlzYXBwZWFyc1xuICAvL1xuICBwdWJsaWMgdG9hc3QodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgVG9hc3QubWFrZVRleHQodGV4dCkuc2hvdygpO1xuICB9XG59Il19