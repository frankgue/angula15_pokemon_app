import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private initialHeight: number = 180;
  private defaultColor: string = '#009688';

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.initialHeight);
   }

   @Input('pkmnBorderCard') borderColor: string;

   @HostListener('mouseenter')  onMouseEnter() {
    this.setBorder(this.borderColor||this.defaultColor);
   }

   @HostListener('mouseleave') onMouseLeave() {
     this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }

  setBorder(color: string) {
    let border = 'solid 4px ' + color;
  this.el.nativeElement.style.border = border;
  }
}
