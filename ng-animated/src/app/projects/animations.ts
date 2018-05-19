import {animate, state, style, transition, trigger} from "@angular/animations";

export const markedTrigger = trigger('selectedProject', [
  state('default', style({
    border: '1px solid #ddd',
    backgroundColor: 'transparent',
    // transform: 'scale(1)',
    // left: 0,
    padding: '10px',
  })),
  state('selected', style({
    border: '5px solid blue',
    backgroundColor: '#ddd',
    // transform: 'scale(1.05)',
    // left: '10px',
    padding: '6px'
  })),
  transition('default => selected', [
    style({
      border: '5px solid #ddd',
      padding: '6px'
    }),
    animate('200ms ease-out', style({
      transform: 'scale(1.05)'
    })),
    animate(200, style({
      transform: 'scale(1)'
    }))
  ]),
  transition('selected => default', [
    style({
      border: '1px solid #ddd',
      padding: '10px'
    }),
    animate('300ms ease-out')
  ])
]);
