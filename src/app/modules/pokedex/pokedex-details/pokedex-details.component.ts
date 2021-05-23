import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Pokemon } from 'src/app/models/pokemon.model';
@Component({
  selector: 'app-pokedex-details',
  templateUrl: './pokedex-details.component.html',
  styleUrls: ['./pokedex-details.component.scss']
})
export class PokedexDetailsComponent implements OnInit {
  selectedPokemonName: string;
  pokemon: Pokemon[];

  constructor(private ativatedRoute: ActivatedRoute, private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.ativatedRoute.queryParams.pipe(
      switchMap(queryResult => {
        return this.pokedexService.pokemonData.pipe(
          map(res => ({name: queryResult.name, pokemon: res}))
        );
      }
    ))
    .subscribe(res => {
      this.selectedPokemonName = res.name;
      this.pokemon = res.pokemon;
    });
  }

}
