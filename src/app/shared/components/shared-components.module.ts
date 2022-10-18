import { NgModule } from '@angular/core';

import { PokedexCardComponent } from './pokedex-card/pokedex-card.component';
import { SearchComponent } from './search/search.component';
import { MaterialDesignModule } from '../../modules/material-design/material;-design.module';
import { CommonModule } from '@angular/common';
import { HeaderBannerComponent } from './header-banner/header-banner.component';

@NgModule({
    imports: [CommonModule, MaterialDesignModule],
    declarations: [ PokedexCardComponent, SearchComponent, HeaderBannerComponent ],
    exports: [SearchComponent, HeaderBannerComponent]
})
export class SharedComponentsModule { }
