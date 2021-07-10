import { AfterViewInit, Directive, ElementRef, Input,Renderer2  } from '@angular/core';

@Directive({ selector: '[backgroundcolor]' })
export class BackgroundColorDirective  {
  // @Input() type: string;
  constructor(elRef: ElementRef) {
    console.log(elRef)
    elRef.nativeElement.style.color = '#00cc66';
    elRef.nativeElement.style.backgroundColor = '#ccccff';
    elRef.nativeElement.style.fontSize = '20px';
 }
}
