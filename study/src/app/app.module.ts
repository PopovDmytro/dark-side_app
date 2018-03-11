import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from "@angular/forms";
// import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
//
import { StarWarsService } from "./star-wars.service";
import { LogService } from "./log.service";
//
import { AppRoutingModule } from "./app-routing.module";
// import { CreateCharacterModule } from "./create-character/create-character.module";
import { MaterialComponentsModule } from "./material-components-module/material-components.module";
//
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';

// import { CreateCharacterComponent } from './create-character/create-character.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    // CreateCharacterComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpClientModule,
    // RouterModule.forRoot(routes),
    //material ui
    AppRoutingModule,
    MaterialComponentsModule
  ],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
