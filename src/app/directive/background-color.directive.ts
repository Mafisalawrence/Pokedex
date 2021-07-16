import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Types } from '../models/pokemon.model';

@Directive({ selector: '[backgroundcolor]' })
export class BackgroundColorDirective implements OnInit {
  @Input() types: Types[];
  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    var primaryType = this.types[0].type.name;
    this.elRef.nativeElement.style.backgroundColor =
      this.getBackGroundColor(primaryType);
  }
  getBackGroundColor(type: string) {
    switch (type) {
      case 'grass':
        return '#52c0a8';
      case 'fire':
        return '#f57b66';
      case 'water':
        return '#5dacff';
      case 'normal':
        return '#7c4d8f';
      case 'bug':
        return '#b2716a';
      case 'lightning':
        return '#ffcb4c';
      default:
        return '#fff';
    }
  }
}
