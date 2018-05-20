import { Component, OnInit } from '@angular/core';
import { AnimationEvent } from "@angular/animations";
import {animateStateTrigger, listStateTrigger, showStateTrigger} from "./animations";

@Component({
  selector: 'app-ng-animations',
  templateUrl: './ng-animations.component.html',
  styleUrls: ['./ng-animations.component.scss'],
  animations: [
    showStateTrigger,
    animateStateTrigger,
    listStateTrigger
  ]
})
export class NgAnimationsComponent implements OnInit {

  isShown = false;
  width = 300;
  animate = false;
  testResults = [];
  isOver = false;
  position = {x: 10, y: 10};

  constructor() {

  }

  ngOnInit() {
  }

  onAddElement() {
    this.testResults.push(Math.random());
  }

  onAnimationStarted (event: AnimationEvent) {
    console.log(event);

  }

  onAnimationDone (event: AnimationEvent) {
    console.log(event);
  }


  onMouseOver(event) {
    // console.log(event);

    if(event.offsetX < 190 && event.offsetX > 10) {
      this.position.x = event.offsetX;
    } else if (event.offsetX > 190) {
      this.position.x = 190;
    } else if (event.offsetX < 10) {
      this.position.x = 10;
    }

    if (event.offsetY < 190 && event.offsetY > 10) {
      this.position.y = event.offsetY;
    } else if (event.offsetY > 190) {
      this.position.y = 190;
    } else if (event.offsetY < 10) {
      this.position.y = 10;
    }

    if(event.keyCode === 39) {
      if( this.position.x < 190) {
        this.position.x += 10;
      } else {
        this.position.x = 190
      }
    }

    if(event.keyCode === 37) {
      if( this.position.x > 10) {
        this.position.x -= 10;
      } else {
        this.position.x = 10
      }
    }

    if(event.keyCode === 38) {
      if( this.position.y > 10) {
        this.position.y -= 10;
      } else {
        this.position.y = 10
      }
    }

    if(event.keyCode === 40) {
      if( this.position.y < 190) {
        this.position.y += 10;
      } else {
        this.position.y = 190
      }
    }


    //
    // this.position = {
    //   x: event.offsetX,
    //   y: event.offsetY
    // };
    // console.log(this.position)
  }
}
