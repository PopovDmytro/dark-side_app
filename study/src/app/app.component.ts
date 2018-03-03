import { Component } from '@angular/core';
//
import { random } from 'lodash';
// declare var _:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootName = 'Root default name';
  number = 0;

  onNameChanged(newName) {
    this.rootName = newName;
  }

  onIncrease() {
    // this.number = this.number * 2;

    this.number = random(1, 10);
    console.log(this.number);
  }
}

