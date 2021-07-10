import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {Location} from '@angular/common';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.scss']
})
export class HeaderBannerComponent implements OnInit {
  @Input() header: string;
  @Input() showSvgBanner: boolean;
  @Input() pokemon: Pokemon;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  ngOnChange(changes: SimpleChanges){
    console.log(changes);
    if (changes.pokemon) {
      console.log(this.pokemon);
    }
   }

  back(): void{
    this.location.back();
  }
  getBackGroundColor(): void {
    //  'earth-background': checkPokemonType('grass'),
    // 'fire-background': checkPokemonType('fire'),
    // 'water-background': checkPokemonType('water'),
    // 'normal-background': checkPokemonType('normal'),
    // 'ground-background': checkPokemonType('bug'),
    // 'lighting-background': checkPokemonType('lighting')
    }
}
