import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import * as camera from "nativescript-camera";
import { Image } from "ui/image";

import { User } from "./user";
import { Config } from "../config";

@Injectable()
export class UserService {
  constructor(private http: Http) {}
  public imageAsset:any;
  


  useCamera() {
      camera.requestPermissions();
      alert("Camera's Availability is :"+camera.isAvailable());
  }
  
      //alert("Inside takePicture");

    public takePicture() {
        var options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: false };
        camera.takePicture(options).then(picture => {
            this.imageAsset = picture;
        });
    }
  

  register(user: User) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
      Config.apiUrl + "Users",
      JSON.stringify({
        Username: user.email,
        Email: user.email,
        Password: user.password
      }),
      { headers: headers }
    )
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}