import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  };

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'green';

  private backgroundColor = this.defaultColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

}
