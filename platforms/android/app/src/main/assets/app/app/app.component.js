"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.operation = '';
        this.result = '';
    }
    AppComponent.prototype.append = function (element) {
        this.operation += element;
    };
    AppComponent.prototype.undo = function () {
        if (this.operation != '') {
            this.operation = this.operation.slice(0, -1);
        }
    };
    AppComponent.prototype.clear = function () {
        this.result = '';
        this.operation = '';
    };
    AppComponent.prototype.evaluate = function () {
        try {
            this.result = eval(this.operation.replace("X", "*"));
            console.log(this.result);
        }
        catch (e) {
            console.error("Cannot evaluate expression!");
            dialogs.alert({ title: 'Error', message: 'Cannot evaluate expression!', okButtonText: 'OK' });
        }
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "calculator",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsb0NBQXVDO0FBT3ZDO0lBQ0k7UUFDQSxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFdBQU0sR0FBVSxFQUFFLENBQUM7SUFGSCxDQUFDO0lBSWpCLDZCQUFNLEdBQU4sVUFBTyxPQUFlO1FBQ2xCLElBQUksQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFBQztZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQy9DO0lBQ0wsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLElBQUc7WUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QjtRQUFBLE9BQU0sQ0FBQyxFQUFDO1lBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztTQUMvRjtJQUNMLENBQUM7SUFFRCwrQkFBUSxHQUFSO0lBQ0EsQ0FBQztJQS9CUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDOztPQUNXLFlBQVksQ0FnQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgZGlhbG9ncyA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJjYWxjdWxhdG9yXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIG9wZXJhdGlvbjogc3RyaW5nID0gJyc7XG4gICAgcmVzdWx0OiBzdHJpbmc9ICcnO1xuXG4gICAgYXBwZW5kKGVsZW1lbnQ6IHN0cmluZyl7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uICs9IGVsZW1lbnQ7XG4gICAgfVxuICAgIFxuICAgIHVuZG8oKXtcbiAgICAgICAgaWYgKHRoaXMub3BlcmF0aW9uICE9ICcnKXtcbiAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uID0gdGhpcy5vcGVyYXRpb24uc2xpY2UoMCwgLTEpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY2xlYXIoKXtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSAnJztcbiAgICAgICAgdGhpcy5vcGVyYXRpb24gPSAnJztcbiAgICB9XG4gICAgXG4gICAgZXZhbHVhdGUoKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBldmFsKHRoaXMub3BlcmF0aW9uLnJlcGxhY2UoXCJYXCIsXCIqXCIpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzdWx0KTtcbiAgICAgICAgfWNhdGNoKGUpe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbm5vdCBldmFsdWF0ZSBleHByZXNzaW9uIVwiKTtcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe3RpdGxlOiAnRXJyb3InLCBtZXNzYWdlOiAnQ2Fubm90IGV2YWx1YXRlIGV4cHJlc3Npb24hJywgb2tCdXR0b25UZXh0OiAnT0snfSk7XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cbn1cbiJdfQ==