import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
    return fadeInUp();
}

function fadeInUp() {
    return trigger('routerTransition', [
        state('void', style({}) ),
        state('*', style({}) ),
        transition(':enter', [  // before 2.1: transition('void => *', [
            style({transform: 'translateY(1rem)', opacity: '0'}),
            animate('.35s ease-out', style({transform: 'translateY(0)', opacity: '1'}))
        ])
    ]);
}