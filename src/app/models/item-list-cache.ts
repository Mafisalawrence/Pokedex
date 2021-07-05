import { Observable } from "rxjs";

export interface ItemListCache<T> {
  index: number,
  observableList : Observable<T[]>
}
