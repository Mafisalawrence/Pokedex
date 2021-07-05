import { Component, OnInit, Input, ɵConsole, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import {PageEvent} from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { ItemListPaging } from 'src/app/models/item-list-paging';


@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent implements OnInit {

  @Input() pokemonListObservable: Observable<Pokemon[]>;
  @Input() pageCount: number;
  @Output() pokemonListEmitter = new EventEmitter<ItemListPaging>();
  selectedFilterValue: string;
  length : number;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentIndex = 0;
  constructor() { }

  ngOnChanges(changes: SimpleChanges)
  {
    if(changes.pageCount.currentValue){
      this.length = changes.pageCount.currentValue
    }
  }

  ngOnInit(): void {
  }
  setFilterListValue(selectedValue: string): void{
    this.selectedFilterValue = selectedValue;
  }
  pageChangeEvent(event:PageEvent){
    const paging : ItemListPaging = {index : event.pageIndex , isnext : event.pageIndex > this.currentIndex}
    this.pokemonListEmitter.emit(paging)
    this.currentIndex = event.pageIndex
  }
  trackByFn(item) {
    return item.id;
 }
}
