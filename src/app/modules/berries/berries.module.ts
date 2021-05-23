import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BerriesDetailsComponent } from './berries-details/berries-details.component';
import { BerriesMasterComponent } from './berries-master/berries-master.component';
import { BerriesListComponent } from './berries-list/berries-list.component';



@NgModule({
  declarations: [BerriesDetailsComponent, BerriesMasterComponent, BerriesListComponent],
  imports: [
    CommonModule
  ]
})
export class BerriesModule { }
