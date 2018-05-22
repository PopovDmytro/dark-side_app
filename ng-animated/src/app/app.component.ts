import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeNewState', [
      // transition('rootPage => usersPAge', ) does not work in ng 4.2
      transition('* => *', [
        group([
          query(':enter',[
            animateChild(),
            style({
              transform: 'translateY(-400px)',
              opacity: 0
            }),
            animate('300ms')
          ], {optional: true}),
          query(':leave',[
            animate('300ms', style({
              transform: 'translateY(600px)',
              opacity: 0
            }),)
          ], {optional: true})
        ])
      ])
    ])
  ]
})
export class AppComponent {

  getAnimationsData(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData['animation'];
    if(!routeData) {
      return 'rootPage';
    }
    return routeData['page'];
  }

}
