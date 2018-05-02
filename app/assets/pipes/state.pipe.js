"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var domain_1 = require("../domain");
var StatePipe = /** @class */ (function () {
    function StatePipe() {
    }
    StatePipe.prototype.transform = function (value) {
        switch (value) {
            case domain_1.State.Circle:
                return 'fa-circle-thin';
            case domain_1.State.Cross:
                return 'fa-times';
        }
    };
    StatePipe = __decorate([
        core_1.Pipe({ name: 'statePipe' })
    ], StatePipe);
    return StatePipe;
}());
exports.StatePipe = StatePipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFDcEQsb0NBQWtDO0FBR2xDO0lBQUE7SUFTQSxDQUFDO0lBUkMsNkJBQVMsR0FBVCxVQUFVLEtBQVk7UUFDcEIsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssY0FBSyxDQUFDLE1BQU07Z0JBQ2YsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1lBQzFCLEtBQUssY0FBSyxDQUFDLEtBQUs7Z0JBQ2QsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUN0QixDQUFDO0lBQ0gsQ0FBQztJQVJVLFNBQVM7UUFEckIsV0FBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDO09BQ2YsU0FBUyxDQVNyQjtJQUFELGdCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vZG9tYWluJztcclxuIFxyXG5AUGlwZSh7IG5hbWU6ICdzdGF0ZVBpcGUnIH0pXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IFN0YXRlKTogc3RyaW5nICB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgU3RhdGUuQ2lyY2xlOlxyXG4gICAgICAgIHJldHVybiAnZmEtY2lyY2xlLXRoaW4nO1xyXG4gICAgICBjYXNlIFN0YXRlLkNyb3NzOlxyXG4gICAgICAgIHJldHVybiAnZmEtdGltZXMnO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==