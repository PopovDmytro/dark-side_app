import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home-component/home-component.component';
import { UserDetailsComponent } from './home-component/user-details.component';
import { routing } from "./app.routing";
// import { APP_ROUTES_PROVIDER } from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    routing
    // APP_ROUTES_PROVIDER[0]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
