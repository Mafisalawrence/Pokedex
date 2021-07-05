import { Component, OnInit, Input, SimpleChanges , OnChanges, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { IfStmt } from '@angular/compiler';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {
  @Input() list: any[];
  @Output() selectedValue: EventEmitter<string> = new EventEmitter();
  filteredList: Observable<string[]>;
  searchForm: FormGroup;
  currentSelectedValue: string;
  constructor() { }

  ngOnInit(): void {
    this.searchForm =  new FormGroup({
      search : new FormControl()
    });
  }
  ngOnChanges(changes: SimpleChanges): void{
    // if (changes.list && this.list){
    //   this.filteredList = this.searchForm.controls.search.valueChanges.pipe(
    //     startWith(''),
    //     map(value => this.applyFilter(value))
    //   );
    // }
  }
  applyFilter(value: string): string[]{
    const filterValue = value.toLocaleLowerCase();
    const pokemonNames = this.list.map(x => x.name.toLocaleLowerCase());
    this.checkCurrentSelectedValue(filterValue);
    return  filterValue === '' ? pokemonNames : pokemonNames.filter(option => option.includes(filterValue));
  }
  checkCurrentSelectedValue(value: string): void{
    if (value ===  '' && this.currentSelectedValue){
      this.emitValue(value);
    }
  }
  filterList(selectedValue: MatAutocompleteSelectedEvent): void{
    this.emitValue(selectedValue.option.value);
  }
  emitValue(value: string): void{
    this.currentSelectedValue = value;
    this.selectedValue.emit(this.currentSelectedValue);
  }

}
