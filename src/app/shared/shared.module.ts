import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,

    // Material imports
    MatListModule,
    MatIconModule,
    MatTooltipModule,
  ],
  declarations: [
    // declare component here
    ListComponent
  ],
  exports: [
    // export component here
    ListComponent
  ]
})
export class SharedModule { }
