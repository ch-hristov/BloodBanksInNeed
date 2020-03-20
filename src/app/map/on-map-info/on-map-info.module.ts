import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnMapInfoComponent } from './on-map-info.component';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
  declarations: [OnMapInfoComponent],
  imports: [
    CommonModule,
    MatBadgeModule

  ],
  exports: [
    OnMapInfoComponent
  ]
})
export class OnMapInfoModule { }
