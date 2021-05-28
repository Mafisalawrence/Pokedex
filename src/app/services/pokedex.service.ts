import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';
import { PokemonStruc } from '../models/pokemonStruc.model';
import { Pokemon } from '../models/pokemon.model';
import { forkJoin, Observable } from 'rxjs';
import { PokedexEndPoints } from '../enums/EndPoints.enum';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  //pokemonData: Observable<PokemonStruc>;
  currentPokemonStruc: Observable<PokemonStruc>;

  constructor(private repositoryService: RepositoryService) {
    this.getPokemonStruc(PokedexEndPoints.DefaultPokemon);
  }
  getPokemonStruc(url:string): void {
    this.currentPokemonStruc = this.repositoryService.getData<PokemonStruc>(
      `${url}`
    );
  }
  getPokemonData(url:string){
    return this.repositoryService.getData<Pokemon>(url);
  }
  getNextPokemonData(isnext:boolean){
   return this.currentPokemonStruc.pipe(
      map(r => {return isnext ? r.next: r.previous}),
      switchMap(x => {
        this.currentPokemonStruc = this.repositoryService.getData<PokemonStruc>(x)
        return this.currentPokemonStruc
      })
   )
  }
}
