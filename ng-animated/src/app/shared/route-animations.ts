import {animate, animation, style, transition, trigger, useAnimation} from "@angular/animations";

const fadeAnimation = animation([
  style({
    opacity: '{{ startOpacity }}'
  }),
  animate('{{ duration }}')
], {params: {startOpacity: 0, duration: '100ms'}});

export const routeStateTrigger = (params) => trigger('routeState', [
  transition(':enter', [
    useAnimation(fadeAnimation, {params: params})
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

