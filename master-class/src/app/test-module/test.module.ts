// import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
//
import {TestComponent} from './test.component';
import {Test2Component} from './test2.component';

@NgModule({
    declarations: [
        TestComponent,
        Test2Component
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TestComponent
    ],
    providers: []
})
export class TestModule {
}
