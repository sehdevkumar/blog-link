import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideAnimation = trigger('slideAnimation', [
  state(
    'open',
    style({
      transform: 'translateX(0%)',
      opacity: 1,
    })
  ),
  state(
    'close',
    style({
      transform: 'translateX(-100%)',
      opacity: 0.8,
    })
  ),
  transition('open <=> close', [
    animate('400ms 20ms cubic-bezier(.17,.67,.88,.1)'),
  ]),
]);
