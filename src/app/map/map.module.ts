import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { OnMapInfoComponent } from './on-map-blood-info/on-map-info.component';
import { MapSupplyInfoComponent } from './map-supply-info/map-supply-info.component';
import { SharedModule } from '../shared/shared.module';
import { MainViewComponent } from './main-view/main-view.component';

@NgModule({
  declarations: [
    MainViewComponent,
    OnMapInfoComponent,
    MapSupplyInfoComponent,
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    SharedModule,
    LeafletModule.forRoot(),
  ],
  exports: [
    MainViewComponent
  ]
})
export class MapModule { }
