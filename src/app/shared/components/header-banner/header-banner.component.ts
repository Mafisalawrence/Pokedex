import { Component, OnInit, Input } from '@angular/core';
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
  back(): void{
    this.location.back();
  }
  checkPokemonType = (type: string) => {
    if (this.pokemon && this.pokemon.types) {
        console.log(this.pokemon);
        return this.pokemon.types.map(x => x.type.name).includes(type);
      }
     }
}
