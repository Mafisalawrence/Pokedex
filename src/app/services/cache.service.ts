import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';
import { ItemListCache } from '../models/item-list-cache';

@Injectable({ providedIn: 'root' })
export class CacheService<T> {
  itemList: ItemListCache<T>[] = [];
  constructor() {}

  getItemsByIndex(index : number):Observable<T[]>{
    const cachedItem = this.itemList.find(x => x.index === index)
    if(cachedItem){
      return cachedItem.observableList
    }
  }
  addItemsToCache(index:number , items: Observable<T[]>):void{
    items.pipe(
      publishReplay(1),
      refCount()
    )
    this.itemList.push({index: index, observableList: items})
  }
}
