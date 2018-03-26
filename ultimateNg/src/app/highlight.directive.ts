import {Directive, Input, Renderer, ElementRef} from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'blue');
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}