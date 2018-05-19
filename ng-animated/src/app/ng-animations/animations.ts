import {animate, state, style, transition, trigger} from "@angular/animations";

export const showStateTrigger = trigger('showState', [
  state('notShown', style({

  })),
  state('shown', style({

  })),
  transition('void => shown',[
    style({
      left: '100%',
      opacity: 0
    }),
    animate(300)
  ]),
  transition('shown => void',animate(300, style({
    left: '100%',
    opacity: 0
  })))
]);
