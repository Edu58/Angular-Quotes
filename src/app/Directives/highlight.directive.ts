import { Quote } from '@angular/compiler';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor ( private elem: ElementRef ) {}

  @Input() set appHighlight ( items: number ) {

    if ( items == 0 ) {
      this.elem.nativeElement.style.border = '1px solid yellow'
      this.elem.nativeElement.style.padding = '1rem'
    } else {
      return
    }
  }
}
