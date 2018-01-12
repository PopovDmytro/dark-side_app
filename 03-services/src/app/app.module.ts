import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { CmpAComponent } from './cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-b/cmp-b.component';
import { DataService } from "./service/data.service";
import { LogService } from "./service/log.service";


@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    CmpAComponent,
    CmpBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
