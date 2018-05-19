import { Component, OnInit } from '@angular/core';
import {showStateTrigger} from "./animations";

@Component({
  selector: 'app-ng-animations',
  templateUrl: './ng-animations.component.html',
  styleUrls: ['./ng-animations.component.scss'],
  animations: [
    showStateTrigger
  ]
})
export class NgAnimationsComponent implements OnInit {

  isShown = false;

  constructor() { }

  ngOnInit() {
  }

}
