import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
//
import {AppComponent} from './app.component';
//
import {CoursesComponent} from "./courses.component";
import {TestModule} from "./test-module/test.module";
import {TestService} from "./test.service";

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        TestModule
    ],
    providers: [
        TestService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
