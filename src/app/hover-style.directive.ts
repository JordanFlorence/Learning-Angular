import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

  constructor(private el: ElementRef) {
  }
  @Input('appHoverStyle') styleChoice: string;

  @HostListener('mouseenter') onMouseEnter(): void {
      // this.el.nativeElement.style.textDecoration = 'underline';
      this.el.nativeElement.style.textDecoration = this.styleChoice;
      this.el.nativeElement.style.fontWeight = this.styleChoice;
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.el.nativeElement.style.textDecoration = 'none';
    this.el.nativeElement.style.fontWeight = 'normal';
  }
}
