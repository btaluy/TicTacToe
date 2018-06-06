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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tbGlmZWN5Y2xlLmFuZHJvaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi1saWZlY3ljbGUuYW5kcm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywyQ0FLcUI7QUFHckI7SUFBQTtJQVdBLENBQUM7SUFUUSx5Q0FBVSxHQUFqQjtRQUNFLGdCQUFhLENBQUMsMEJBQVksRUFBRSxVQUFDLElBQTBCO1lBQ3JELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUVILGdCQUFhLENBQUMseUJBQVcsRUFBRSxVQUFDLElBQTBCO1lBQ2xELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFWVSxvQkFBb0I7UUFEaEMsaUJBQVUsRUFBRTtPQUNBLG9CQUFvQixDQVdoQztJQUFELDJCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgb24gYXMgYXBwbGljYXRpb25PbixcbiAgc3VzcGVuZEV2ZW50LFxuICByZXN1bWVFdmVudCxcbiAgQXBwbGljYXRpb25FdmVudERhdGFcbn0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbkxpZmVjeWNsZSB7XG5cbiAgcHVibGljIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgYXBwbGljYXRpb25PbihzdXNwZW5kRXZlbnQsIChhcmdzOiBBcHBsaWNhdGlvbkV2ZW50RGF0YSkgPT4ge1xuICAgICAgaWYgKGFyZ3MuYW5kcm9pZCkgeyB9XG4gICAgfSk7XG4gICAgXG4gICAgYXBwbGljYXRpb25PbihyZXN1bWVFdmVudCwgKGFyZ3M6IEFwcGxpY2F0aW9uRXZlbnREYXRhKSA9PiB7XG4gICAgICAgIGlmIChhcmdzLmFuZHJvaWQpIHsgfVxuICAgIH0pO1xuICB9XG59Il19