"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var domain_1 = require("../domain");
var StateImagePipe = /** @class */ (function () {
    function StateImagePipe() {
    }
    StateImagePipe.prototype.transform = function (value) {
        switch (value) {
            case domain_1.State.Circle:
                return '~/assets/img/circle.png';
            case domain_1.State.Cross:
                return '~/assets/img/cross.png';
        }
    };
    StateImagePipe = __decorate([
        core_1.Pipe({ name: 'stateImage' })
    ], StateImagePipe);
    return StateImagePipe;
}());
exports.StateImagePipe = StateImagePipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtaW1hZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXRlLWltYWdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFDcEQsb0NBQWtDO0FBR2xDO0lBQUE7SUFTQSxDQUFDO0lBUkMsa0NBQVMsR0FBVCxVQUFVLEtBQVk7UUFDcEIsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssY0FBSyxDQUFDLE1BQU07Z0JBQ2YsTUFBTSxDQUFDLHlCQUF5QixDQUFDO1lBQ25DLEtBQUssY0FBSyxDQUFDLEtBQUs7Z0JBQ2QsTUFBTSxDQUFDLHdCQUF3QixDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBUlUsY0FBYztRQUQxQixXQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUM7T0FDaEIsY0FBYyxDQVMxQjtJQUFELHFCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vZG9tYWluJztcclxuIFxyXG5AUGlwZSh7IG5hbWU6ICdzdGF0ZUltYWdlJyB9KVxyXG5leHBvcnQgY2xhc3MgU3RhdGVJbWFnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IFN0YXRlKTogc3RyaW5nICB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgU3RhdGUuQ2lyY2xlOlxyXG4gICAgICAgIHJldHVybiAnfi9hc3NldHMvaW1nL2NpcmNsZS5wbmcnO1xyXG4gICAgICBjYXNlIFN0YXRlLkNyb3NzOlxyXG4gICAgICAgIHJldHVybiAnfi9hc3NldHMvaW1nL2Nyb3NzLnBuZyc7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19