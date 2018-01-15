import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home-component/home-component.component';
import { UserDetailsComponent } from './home-component/user-details.component';
import { routing } from "./app.routing";
import { UserEditComponent } from './user/user-edit.component';
import {UserDetailGuard} from "./user/user-detail.guard";
import {UserEditGuard} from "./user/user-edit.guard";
// import { APP_ROUTES_PROVIDER } from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    UserDetailsComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    routing
    // APP_ROUTES_PROVIDER[0]
  ],
  providers: [UserDetailGuard, UserEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
