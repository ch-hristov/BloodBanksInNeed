import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,

    // Material imports
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  declarations: [
    // declare component here
    ListComponent,
    PanelHeaderComponent
  ],
  exports: [
    // export component here
    ListComponent,
    PanelHeaderComponent
  ]
})
export class SharedModule { }
