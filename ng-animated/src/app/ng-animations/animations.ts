import {animate, state, style, transition, trigger} from "@angular/animations";

export const showStateTrigger = trigger('showState', [
  // transition('void => *',[
  //   style({
  //     left: '100%',
  //     opacity: 0
  //   }),
  //   animate(300)
  // ]),
  // transition('shown => void',animate(300, style({
  //   left: '100%',
  //   opacity: 0
  // })))
  transition(':enter',[
    style({
      left: '100%',
      opacity: 0
    }),
    animate(300)
  ]),
  transition(':leave',animate(300, style({
    left: '100%',
    opacity: 0
  })))
]);
