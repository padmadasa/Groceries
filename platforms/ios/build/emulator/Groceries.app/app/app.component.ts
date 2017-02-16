import { Component,ViewChild, ElementRef } from "@angular/core";
import {User} from "./shared/user/user";
import {UserService} from "./shared/user/user.service"
import { StackLayout } from "ui/layouts/stack-layout";
import { Image } from "ui/image";

@Component({
selector:"my-app",
providers:[UserService],
templateUrl: "pages/login/login.html",
})
export class AppComponent {
  @ViewChild("st") stack: ElementRef;
  
  user:User;
  isLoggingIn=true;
  constructor(private userService: UserService) {
    this.user = new User();
  }
 submit() {
    if(this.isLoggingIn) {
      this.login();
    }else{
      this.signUp();
    }
  }
  login(){
    this.userService.useCamera();
    this.userService.takePicture();    
  }
  signUp() {
    this.userService.register(this.user).subscribe(
      ()=> {
        alert("your account was successfully created");
        this.toggleDisplay();
      },
      () => alert("Your account was not created successfully")
    );
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}