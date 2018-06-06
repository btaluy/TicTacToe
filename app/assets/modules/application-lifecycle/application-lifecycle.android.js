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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tbGlmZWN5Y2xlLmFuZHJvaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi1saWZlY3ljbGUuYW5kcm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywyQ0FLcUI7QUFHckI7SUFBQTtJQVdBLENBQUM7SUFUUSx5Q0FBVSxHQUFqQjtRQUNFLGdCQUFhLENBQUMsMEJBQVksRUFBRSxVQUFDLElBQTBCO1lBQ3JELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUVILGdCQUFhLENBQUMseUJBQVcsRUFBRSxVQUFDLElBQTBCO1lBQ2xELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFWVSxvQkFBb0I7UUFEaEMsaUJBQVUsRUFBRTtPQUNBLG9CQUFvQixDQVdoQztJQUFELDJCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIG9uIGFzIGFwcGxpY2F0aW9uT24sXHJcbiAgc3VzcGVuZEV2ZW50LFxyXG4gIHJlc3VtZUV2ZW50LFxyXG4gIEFwcGxpY2F0aW9uRXZlbnREYXRhXHJcbn0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbkxpZmVjeWNsZSB7XHJcblxyXG4gIHB1YmxpYyBpbml0aWFsaXNlKCk6IHZvaWQge1xyXG4gICAgYXBwbGljYXRpb25PbihzdXNwZW5kRXZlbnQsIChhcmdzOiBBcHBsaWNhdGlvbkV2ZW50RGF0YSkgPT4ge1xyXG4gICAgICBpZiAoYXJncy5hbmRyb2lkKSB7IH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBhcHBsaWNhdGlvbk9uKHJlc3VtZUV2ZW50LCAoYXJnczogQXBwbGljYXRpb25FdmVudERhdGEpID0+IHtcclxuICAgICAgICBpZiAoYXJncy5hbmRyb2lkKSB7IH1cclxuICAgIH0pO1xyXG4gIH1cclxufSJdfQ==