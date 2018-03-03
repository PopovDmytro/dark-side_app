import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
//

@NgModule({
  imports: [
    CommonModule,
    //material components
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: []
})
export class MaterialComponentsModule { }
