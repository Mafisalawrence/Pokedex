import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';
import { PokemonStruc } from '../models/pokemonStruc.model';
import { Pokemon } from '../models/pokemon.model';
import { forkJoin, Observable } from 'rxjs';
import { PokedexEndPoints } from '../enums/EndPoints.enum';
import { map, switchMap } from 'rxjs/operators';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  currentPokemonStruc: Observable<PokemonStruc>;
  constructor(
    private repositoryService: RepositoryService,
    private cacheService: CacheService<Pokemon>
  ) {
    this.getPokemonStruc(PokedexEndPoints.DefaultPokemon);
  }
  getPokemonStruc(url: string): void {
    this.currentPokemonStruc = this.repositoryService.getData<PokemonStruc>(
      `${url}`
    );
  }
  getPokemonData(index: number, isnext: boolean): Observable<Pokemon[]> {
    var cachedData = this.cacheService.getItemsByIndex(index);
    if (cachedData) {
      return cachedData;
    }

    if (index != 0) {
      this.currentPokemonStruc = this.getNextPokemonDataStructure(isnext);
    }
    var pokemonData = this.currentPokemonStruc.pipe(
      map((res) =>
        res.results.map((x) => this.repositoryService.getData<Pokemon>(x.url))
      ),
      switchMap((x) => forkJoin(x))
    );
    this.cacheService.addItemsToCache(index, pokemonData);
    return pokemonData;
  }

  getNextPokemonDataStructure(isnext: boolean) {
    return this.currentPokemonStruc.pipe(
      map((r) => {
        return isnext ? r.next : r.previous;
      }),
      switchMap((x) => {
        this.currentPokemonStruc =
          this.repositoryService.getData<PokemonStruc>(x);
        return this.currentPokemonStruc;
      })
    );
  }
  getPokemonCount(): Observable<number> {
    return this.currentPokemonStruc.pipe(map((r) => r.count));
  }
}
