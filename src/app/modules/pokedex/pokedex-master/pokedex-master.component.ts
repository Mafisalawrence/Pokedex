import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/app/services/repository.service';
import { PokedexEndPoints } from 'src/app/enums/EndPoints.enum';
import { map, switchMap } from 'rxjs/operators';
import { PokemonStruc } from 'src/app/models/pokemonStruc.model';
import { forkJoin } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex-master',
  templateUrl: './pokedex-master.component.html',
  styleUrls: ['./pokedex-master.component.scss']
})
export class PokedexMasterComponent implements OnInit {

  pokemonList: Pokemon[];
  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.loadInitialPokemon();
  }
  loadInitialPokemon(): void{
    this.pokedexService.pokemonData.subscribe(res => this.pokemonList = res);
  }
}
