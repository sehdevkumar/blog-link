import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const inputAmimation = [
  trigger('inputAnimation', [
    state(
      'inactive',
      style({
        transform: 'scale(1)',
      })
    ),
    state(
      'active',
      style({
        transform: 'scale(1.1)',
      })
    ),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out')),
  ]),
];
