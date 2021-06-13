import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighligt]'
})
export class HighligtDirective {

  constructor(
    private el: ElementRef
  ) { 
    this.el.nativeElement.style.color = 'red';
  }

}
