import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Pipe({
    name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

    transform(value: Pokemon[], arg?: any): any {
            return arg && arg !== '' ? value.filter(x => x.name === arg) : value;
    }
}
