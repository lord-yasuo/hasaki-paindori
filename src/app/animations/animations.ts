import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    // the "in" style determines the "resting" state of the element when it is visible.
    state('in', style({ opacity: 1 })),
    // fade in when created. this could also be written as transition('void => *')
    transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
    ]),
    // fade out when destroyed. this could also be written as transition('void => *')
    transition(':leave',
        animate(600, style({ opacity: 0 })))
]);

export const fadeInEpisodes = trigger('fadeInEpisodes', [
    state('void', style({
        opacity: 0
    })),
    transition('void <=> *', animate(300)),
]);

export const itemsAnimation = trigger('items', [
    transition(':enter', [
        style({ transform: 'scale(0.6)', opacity: 0 }),
        animate('0.4s ease-in-out',
            style({ transform: 'scale(1)', opacity: 1 }))
    ])
]);
