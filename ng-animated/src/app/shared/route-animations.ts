import {animate, style, transition, trigger} from "@angular/animations";

export const routeStateTrigger = trigger('routeState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('300ms')
  ]),
  transition(':leave', [
    animate('300ms', style({
      opacity: 0
    }))
  ])
]);

export const routeSlideTrigger = trigger('routeSlideState', [
  transition(':enter',[
    style({
      transform: 'translateY(-100%)',
      opacity: 0
    }),
    animate(300)
  ]),
  transition(':leave', animate(300, style({
    transform: 'translateY(100%)',
    opacity: 0
  })))
]);
