import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokedex-card',
  templateUrl: './pokedex-card.component.html',
  styleUrls: ['./pokedex-card.component.scss']
})
export class PokedexCardComponent implements OnInit {

  @Input() pokemon: Pokemon;
  constructor(private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
  }
  navigateToPokemonDetails(pokemonName: string): void{
   this.router.navigate(['detail'], {relativeTo: this.activatedRoute, queryParams: { name: pokemonName}});
  }
  checkPokemonType = (type: string) => this.pokemon.types.map(x => x.type.name).includes(type);
}
