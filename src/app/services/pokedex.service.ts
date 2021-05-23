import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';
import { PokemonStruc } from '../models/pokemonStruc.model';
import { Pokemon } from '../models/pokemon.model';
import { switchMap, map, shareReplay } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { PokedexEndPoints } from '../enums/EndPoints.enum';

@Injectable({
    providedIn: 'root'
})
export class PokedexService {
    pokemonData: Observable<Pokemon[]>;
    constructor(private repositoryService: RepositoryService) {
        this.getPokemon();
     }

    getPokemon(): void{
    this.pokemonData = this.repositoryService.getData<PokemonStruc>(`${PokedexEndPoints.Pokemon}?limit=${20}`)
        .pipe(
            map(res => res.results.map(r => this.repositoryService.getData<Pokemon>(r.url))),
            switchMap(x => forkJoin(x))
        ).pipe(shareReplay(1));
}
}
