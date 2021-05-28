import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex-master',
  templateUrl: './pokedex-master.component.html',
  styleUrls: ['./pokedex-master.component.scss']
})
export class PokedexMasterComponent implements OnInit {

  pokemonList: Observable<Pokemon[]>;
  count:number;
  subscription: Subscription;
  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.loadInitialPokemon();
  }
  loadInitialPokemon(): void{
     this.pokemonList = this.pokedexService.currentPokemonStruc
    .pipe(
       map(res =>{
         this.count = res.count
        return res.results.map(r => this.pokedexService.getPokemonData(r.url))
       } ),
      switchMap(x => forkJoin(x))
    )
  }
  getNext(isNext:boolean){
  //   this.pokedexService.getNextPokemonData(isNext).pipe(
  //     map(res => res.results.map(r => this.pokedexService.getPokemonData(r.url))),
  //    switchMap(x => forkJoin(x))
  //  ).subscribe(res => this.pokemonList= res)
  }
  ngOnDestroy(){
   this.subscription.unsubscribe();
  }
}
