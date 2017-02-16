"use strict";
var core_1 = require("@angular/core");
var user_1 = require("./shared/user/user");
var user_service_1 = require("./shared/user/user.service");
var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new user_1.User();
    }
    AppComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    AppComponent.prototype.login = function () {
        this.userService.useCamera();
        this.userService.takePicture();
    };
    AppComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user).subscribe(function () {
            alert("your account was successfully created");
            _this.toggleDisplay();
        }, function () { return alert("Your account was not created successfully"); });
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild("st"),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "stack", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/login/login.html",
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFnRTtBQUNoRSwyQ0FBd0M7QUFDeEMsMkRBQXNEO0FBU3RELElBQWEsWUFBWTtJQUt2QixzQkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFENUMsZ0JBQVcsR0FBQyxJQUFJLENBQUM7UUFFZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNGLDZCQUFNLEdBQU47UUFDRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFDRCw0QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDRCw2QkFBTSxHQUFOO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUM1QztZQUNFLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1lBQy9DLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQ0QsY0FBTSxPQUFBLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxFQUFsRCxDQUFrRCxDQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUNELG9DQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBOUJrQjtJQUFoQixnQkFBUyxDQUFDLElBQUksQ0FBQzs4QkFBUSxpQkFBVTsyQ0FBQztBQUR4QixZQUFZO0lBTHhCLGdCQUFTLENBQUM7UUFDWCxRQUFRLEVBQUMsUUFBUTtRQUNqQixTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO1FBQ3ZCLFdBQVcsRUFBRSx3QkFBd0I7S0FDcEMsQ0FBQztxQ0FNaUMsMEJBQVc7R0FMakMsWUFBWSxDQStCeEI7QUEvQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ1aS9pbWFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbnNlbGVjdG9yOlwibXktYXBwXCIsXG5wcm92aWRlcnM6W1VzZXJTZXJ2aWNlXSxcbnRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZChcInN0XCIpIHN0YWNrOiBFbGVtZW50UmVmO1xuICBcbiAgdXNlcjpVc2VyO1xuICBpc0xvZ2dpbmdJbj10cnVlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gIH1cbiBzdWJtaXQoKSB7XG4gICAgaWYodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICB9XG4gIH1cbiAgbG9naW4oKXtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnVzZUNhbWVyYSgpO1xuICAgIHRoaXMudXNlclNlcnZpY2UudGFrZVBpY3R1cmUoKTsgICAgXG4gIH1cbiAgc2lnblVwKCkge1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKS5zdWJzY3JpYmUoXG4gICAgICAoKT0+IHtcbiAgICAgICAgYWxlcnQoXCJ5b3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkXCIpO1xuICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgIH0sXG4gICAgICAoKSA9PiBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgbm90IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIpXG4gICAgKTtcbiAgfVxuICB0b2dnbGVEaXNwbGF5KCkge1xuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgfVxufSJdfQ==