import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';


@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent implements OnInit {

  @Input() pokemonList: Pokemon[];
  selectedFilterValue: string;
  constructor() { }

  ngOnInit(): void {}
  setFilterListValue(selectedValue: string): void{
    this.selectedFilterValue = selectedValue;
  }
}
