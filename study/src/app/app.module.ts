import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
//
import { AppComponent } from './app.component';
import { UserComponent } from "./user.component";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MaterialComponentsModule } from "./material-components-module/material-components.module";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //material ui
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
