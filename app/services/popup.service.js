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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvcHVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsaUZBQWtFO0FBQ2xFLDBDQUE0QztBQUM1QyxvQ0FBc0M7QUFHdEM7SUEwQkU7UUF4QlEsV0FBTSxHQUFxQixJQUFJLENBQUM7UUFDaEMsbUJBQWMsR0FBVyxHQUFHLENBQUM7UUFFN0IsbUJBQWMsR0FBUTtZQUM1QixPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixVQUFVLEVBQUUsS0FBSztnQkFDakIsR0FBRyxFQUFFLEdBQUc7Z0JBQ1Isb0JBQW9CLEVBQUUsU0FBUztnQkFDL0IscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsYUFBYSxFQUFFLENBQUM7Z0JBQ2hCLGlCQUFpQixFQUFFLENBQUM7YUFDckI7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLEtBQUssRUFBRSxPQUFPO2dCQUNkLGVBQWUsRUFBRSxPQUFPO2FBQ3pCO1NBQ0YsQ0FBQztJQUVxQixDQUFDO0lBRWpCLDhCQUFPLEdBQWQsVUFBZSxJQUFpQixFQUFFLE9BQXFDO1FBQXZFLGlCQVdDO1FBWGMscUJBQUEsRUFBQSxTQUFpQjtRQUFFLHdCQUFBLEVBQUEsVUFBa0IsSUFBSSxDQUFDLGNBQWM7UUFDckUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRU0sa0NBQVcsR0FBbEI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoQixZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUM7SUFFTSw0QkFBSyxHQUFaLFVBQWEsS0FBYSxFQUFFLElBQVksRUFBRSxNQUFlO1FBQ3ZELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ25CLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLElBQUk7WUFDYixZQUFZLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSw0QkFBSyxHQUFaLFVBQWEsSUFBWSxFQUFFLE1BQWU7UUFDeEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDbkIsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sOEJBQU8sR0FBZCxVQUNFLEtBQWEsRUFDYixJQUFZLEVBQ1osTUFBZSxFQUNmLFVBQW1CLEVBQ25CLGlCQUEwQjtRQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNyQixLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztZQUM5QixnQkFBZ0IsRUFBRSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUM7U0FDM0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDZCQUFNLEdBQWIsVUFBYyxLQUFhLEVBQUUsSUFBWSxFQUFFLE1BQWUsRUFBRSxVQUFtQjtRQUM3RSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNwQixLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztZQUM5QixnQkFBZ0IsRUFBRSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUM7WUFDMUMseUJBQXlCO1lBQ3pCLG1CQUFtQjtZQUNuQixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1NBQ2xDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrRkFBa0Y7SUFDbEYsRUFBRTtJQUNLLDRCQUFLLEdBQVosVUFBYSxJQUFZO1FBQ3ZCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQS9GVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7O09BQ0EsWUFBWSxDQWdHeEI7SUFBRCxtQkFBQztDQUFBLEFBaEdELElBZ0dDO0FBaEdZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yJztcclxuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd1aS9kaWFsb2dzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvcHVwU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgbG9hZGVyOiBMb2FkaW5nSW5kaWNhdG9yID0gbnVsbDtcclxuICBwcml2YXRlIGRlZmF1bHRUaW1lb3V0OiBudW1iZXIgPSAyMDA7XHJcbiAgcHJpdmF0ZSB3YWl0aW5nTG9hZGVyOiBhbnk7XHJcbiAgcHJpdmF0ZSBsb2FkaW5nT3B0aW9uczogYW55ID0ge1xyXG4gICAgbWVzc2FnZTogJ1RCRCcsXHJcbiAgICBwcm9ncmVzczogMC42NSxcclxuICAgIGFuZHJvaWQ6IHtcclxuICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcclxuICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXHJcbiAgICAgIG1heDogMTAwLFxyXG4gICAgICBwcm9ncmVzc051bWJlckZvcm1hdDogJyUxZC8lMmQnLFxyXG4gICAgICBwcm9ncmVzc1BlcmNlbnRGb3JtYXQ6IDAuNTMsXHJcbiAgICAgIHByb2dyZXNzU3R5bGU6IDEsXHJcbiAgICAgIHNlY29uZGFyeVByb2dyZXNzOiAxXHJcbiAgICB9LFxyXG4gICAgaW9zOiB7XHJcbiAgICAgIHNxdWFyZTogZmFsc2UsXHJcbiAgICAgIG1hcmdpbjogMjAsXHJcbiAgICAgIGRpbUJhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHVibGljIGxvYWRpbmcodGV4dDogc3RyaW5nID0gJycsIHRpbWVvdXQ6IG51bWJlciA9IHRoaXMuZGVmYXVsdFRpbWVvdXQpIHtcclxuICAgIGlmICh0aGlzLmxvYWRlciAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0xvYWRlciBpcyBub3QgeWV0IGhpZGRlbiEhJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxvYWRpbmdPcHRpb25zLm1lc3NhZ2UgPSB0ZXh0O1xyXG4gICAgdGhpcy5sb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG4gICAgdGhpcy53YWl0aW5nTG9hZGVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkZXIuc2hvdyh0aGlzLmxvYWRpbmdPcHRpb25zKTtcclxuICAgIH0sIHRpbWVvdXQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGVMb2FkaW5nKCkge1xyXG4gICAgaWYgKHRoaXMubG9hZGVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLndhaXRpbmdMb2FkZXIpO1xyXG4gICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgIHRoaXMubG9hZGVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhbGVydCh0aXRsZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIHRleHRPSz86IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIG1lc3NhZ2U6IHRleHQsXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogKHRleHRPSyB8fCAnb2snKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXJyb3IodGV4dDogc3RyaW5nLCB0ZXh0T0s/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgdGl0bGU6ICgnZXJyb3InKSxcclxuICAgICAgbWVzc2FnZTogdGV4dCxcclxuICAgICAgb2tCdXR0b25UZXh0OiAodGV4dE9LIHx8ICdvaycpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25maXJtKFxyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIHRleHQ6IHN0cmluZyxcclxuICAgIHRleHRPSz86IHN0cmluZyxcclxuICAgIHRleHRDYW5jZWw/OiBzdHJpbmcsXHJcbiAgICBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgbWVzc2FnZTogdGV4dCxcclxuICAgICAgb2tCdXR0b25UZXh0OiAodGV4dE9LIHx8ICdvaycpLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiAodGV4dENhbmNlbCB8fCAnY2FuY2VsJylcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHByb21wdCh0aXRsZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIHRleHRPSz86IHN0cmluZywgdGV4dENhbmNlbD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gZGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIG1lc3NhZ2U6IHRleHQsXHJcbiAgICAgIG9rQnV0dG9uVGV4dDogKHRleHRPSyB8fCAnb2snKSxcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogKHRleHRDYW5jZWwgfHwgJ2NhbmNlbCcpLFxyXG4gICAgICAvLyBuZXV0cmFsQnV0dG9uVGV4dDogXCJcIixcclxuICAgICAgLy8gZGVmYXVsdFRleHQ6IFwiXCIsXHJcbiAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBUb2FzdCBkaXNwbGF5cyBhIHNtYWxsIG1lc3NhZ2UgZm9yIGFib3V0IDIgc2Vjb25kcy4gSXQgYXV0b21hdGljYWxseSBkaXNhcHBlYXJzXHJcbiAgLy9cclxuICBwdWJsaWMgdG9hc3QodGV4dDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBUb2FzdC5tYWtlVGV4dCh0ZXh0KS5zaG93KCk7XHJcbiAgfVxyXG59Il19