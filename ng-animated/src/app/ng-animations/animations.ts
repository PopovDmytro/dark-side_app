import {animate, group, keyframes, state, style, transition, trigger} from "@angular/animations";

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
  transition(':leave',
    animate(300, style({
    left: '100%',
    opacity: 0
  })))
]);

export const animateStateTrigger = trigger('animateState', [
  transition('* => *', [
    animate('3000ms cubic-bezier(.17,.67,.87,1.21)', style({
      width: 0
    })),
    animate(400, style({
      width: '*'
    }))
  ])
]);

export const listStateTrigger = trigger('listState', [
  transition(':enter',[
    style({
      left: '100%',
      opacity: 0,
      backgroundColor: 'white'
    }),
    group([
      animate(1000, style({
        opacity: 0.7
      })),
      animate('2000ms ease-out', keyframes([
        style({
          backgroundColor: 'white',
          offset: 0
        }),
        style({
          backgroundColor: 'red',
          offset: 0.8
        }),
        style({
          backgroundColor: 'green',
          offset: 1
        })
      ]))
    ]),
    animate(300, style({
      backgroundColor: 'lightblue'
    }))
  ]),
  transition(':leave',animate(300, style({
    left: '100%',
    opacity: 0
  })))
]);
