import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,

    // Material imports
    MatListModule,
    MatIconModule
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
