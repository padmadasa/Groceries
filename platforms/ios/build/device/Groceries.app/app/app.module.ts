  import { NgModule } from "@angular/core";
  import { NativeScriptFormsModule } from "nativescript-angular/forms";
  import { NativeScriptModule } from "nativescript-angular/platform";
  import {NativeScriptHttpModule} from "nativescript-angular";

  import { AppComponent } from "./app.component";

  @NgModule({
    imports: [
      NativeScriptModule,
      NativeScriptFormsModule,
      NativeScriptHttpModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
  })
  export class AppModule {}