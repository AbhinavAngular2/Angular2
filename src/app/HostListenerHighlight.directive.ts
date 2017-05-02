import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({ selector: '[myHostListenerHighlight]' })
export class HostListenerHighlightDirective {
  constructor(private el: ElementRef) { }

 @Input('myHostListenerHighlight') highlightColors: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColors || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
   // this.highlight(null);
    this.highlight(this.highlightColors || 'green');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
