import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexMasterComponent } from './pokedex-master/pokedex-master.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokedexDetailsComponent } from './pokedex-details/pokedex-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component : PokedexMasterComponent, pathMatch: 'full'},
  {path: 'detail', component : PokedexDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PokedexRoutingModule { }
