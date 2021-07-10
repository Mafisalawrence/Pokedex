import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexMasterComponent } from './pokedex-master/pokedex-master.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokedexDetailsComponent } from './pokedex-details/pokedex-details.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { MaterialDesignModule } from '../material-design/material;-design.module';
import { PokedexCardComponent } from './pokedex-card/pokedex-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ListFilterPipe } from 'src/app/functions/list-filter.pipe';
import { BackgroundColorDirective } from 'src/app/directive/background-color.directive';

@NgModule({
  declarations: [
    PokedexMasterComponent,
    PokedexListComponent,
    PokedexDetailsComponent,
    PokedexCardComponent,
    ListFilterPipe,
    BackgroundColorDirective
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    PokedexRoutingModule,
    SharedComponentsModule,
    FlexLayoutModule
  ]
})
export class PokedexModule { }
