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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFDcEQsb0NBQWtDO0FBR2xDO0lBQUE7SUFTQSxDQUFDO0lBUkMsNkJBQVMsR0FBVCxVQUFVLEtBQVk7UUFDcEIsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssY0FBSyxDQUFDLE1BQU07Z0JBQ2YsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1lBQzFCLEtBQUssY0FBSyxDQUFDLEtBQUs7Z0JBQ2QsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUN0QixDQUFDO0lBQ0gsQ0FBQztJQVJVLFNBQVM7UUFEckIsV0FBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDO09BQ2YsU0FBUyxDQVNyQjtJQUFELGdCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL2RvbWFpbic7XG4gXG5AUGlwZSh7IG5hbWU6ICdzdGF0ZVBpcGUnIH0pXG5leHBvcnQgY2xhc3MgU3RhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogU3RhdGUpOiBzdHJpbmcgIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlIFN0YXRlLkNpcmNsZTpcbiAgICAgICAgcmV0dXJuICdmYS1jaXJjbGUtdGhpbic7XG4gICAgICBjYXNlIFN0YXRlLkNyb3NzOlxuICAgICAgICByZXR1cm4gJ2ZhLXRpbWVzJztcbiAgICB9XG4gIH1cbn0iXX0=