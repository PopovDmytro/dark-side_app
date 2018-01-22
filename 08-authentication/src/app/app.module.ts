import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ProtectedComponent } from './protected/protected.component';
import { SigninComponent } from './unprotected/signin.component';
import { SignupComponent } from './unprotected/signup.component';
import { HeaderComponent } from './shared/header.component';
import { routing } from "./app.routes";
import { AuthService } from "./shared/auth.service";
import { AuthGuard } from "./shared/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
