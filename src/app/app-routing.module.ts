import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationRoutes } from './enums/Navigation.enum';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: NavigationRoutes.Pokedex, loadChildren: () => import('./modules/pokedex/pokedex.module').then(m => m.PokedexModule) },
  {path: NavigationRoutes.Berries, loadChildren: () => import('./modules/berries/berries.module').then(m => m.BerriesModule) },
  {path: NavigationRoutes.Abilities, loadChildren: () => import('./modules/abilities/abilities.module').then(m => m.AbilitiesModule) },
  {path: NavigationRoutes.Locations, loadChildren: () => import('./modules/locations/locations.module').then(m => m.LocationsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
