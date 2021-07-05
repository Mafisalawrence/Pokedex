import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ItemListPaging } from 'src/app/models/item-list-paging';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex-master',
  templateUrl: './pokedex-master.component.html',
  styleUrls: ['./pokedex-master.component.scss']
})
export class PokedexMasterComponent implements OnInit {

  pokemonListObservable: Observable<Pokemon[]>;
  count:number;
  subscription: Subscription;
  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    const intialListPaging :ItemListPaging = {index : 0 , isnext : false }
    this.getPokemonList(intialListPaging);
    this.getPokemonCount();
  }
  getPokemonList(paging:ItemListPaging): void{
     this.pokemonListObservable = this.pokedexService.getPokemonData(paging.index,paging.isnext);
  }
  getPokemonCount():void{
     this.pokedexService.getPokemonCount().subscribe(r => this.count = r)
  }
}
