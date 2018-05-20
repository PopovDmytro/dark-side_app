import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

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
//---
export const projectAnimationsTrigger = trigger( 'projectInOut', [
  transition(':enter', [
    // style({
      // left: '100%',
      // opacity: 0,
      // transform: 'translateX(-100%)'
    // }),
    animate('0.5s cubic-bezier(.46,.34,.32,1.26)', keyframes([
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
        offset: 0
      }),
      style({
        opacity: 1,
        transform: 'translateX(15%)',
        offset: 0.4
      }),
      style({
        opacity: 1,
        transform: 'translateX(0)',
        offset: 1
      })
    ]))
  ]),
  transition(':leave',[
    animate('0.3s cubic-bezier(.46,.34,.32,1.26)', keyframes([
      style({
        opacity: 1,
        transform: 'translateX(0)'
      }),
      style({
        transform: 'translateX(-15%)'
      }),
      style({
        opacity: 0,
        transform: 'translateX(100%)',
      }),
    ])),
    animate('0.2s cubic-bezier(.46,.34,.32,1.26)', style({
      height: '0',
    }))
  ]),
  transition('slidUp => slidDown', [
    style({
      transform: 'translateY(-100%)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(0)'
    }))
  ]),
  transition('slidDown => slidUp', [
    style({
      transform: 'translateY(0)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(-100%)'
    }))
  ])
]);
//---
export const projectCreateNewTrigger = trigger('projectsCreateNew', [
  transition(':enter', [
    style({
      maxHeight: '0'
    }),
    animate('0.5s cubic-bezier(.46,.34,.32,1.26)', style({
      maxHeight: '1000px'
    }))
  ]),
  transition(':leave',[
    animate('0.5s cubic-bezier(.46,.34,.32,1.26)', style({
        maxHeight: '0',
        height: '0',
        overflow: 'hidden',
    }))
  ])
]);

