import { Component } from '@angular/core';
import {animate, group, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './ng-animations.component.html',
  styleUrls: ['./ng-animations.component.scss'],
  animations: [
    trigger('panelState', [
      transition(':enter', [
        group([
          // style({
          //   transform: 'translateX(100%)',
          //   opacity: 0
          // }),
          // animate(300),
          query(':self', [
            style({
              opacity: 0
            }),
            animate('700ms')
          ]),
          query('.panel-heading', [
            style({
              transform: 'translateY(-300px)',
              opacity: 0
            }),
            animate('300ms')
          ]),
          query('.panel-body', [
            style({
              transform: 'translateX(-100%)',
              opacity: 0
            }),
            animate('300ms')
          ]),
          query('.panel-footer', [
            style({
              transform: 'translateY(300px)',
              opacity: 0
            }),
            animate('300ms')
          ])
        ])
      ]),
      transition(':leave', [
        animate(200, style({
          transform: 'translateX(-100%)',
          opacity: 0
        }))
      ]),
      transition('* => *', [
        query(':enter', [
          style({
            transform: 'scale(1)'
          }),
          animate(200, style({
            transform: 'scale(1.1)'
          })),
          animate(300)
        ], {optional: true}), //you might find element or not find
        query('div p, button', [
          animate(300, style({
            color: 'red'
          })),
          animate(200)
        ])
      ])
    ])
  ]
})
export class NgAnimationsComponent {
  showPanel = false;
  showParagraph = true;
}
