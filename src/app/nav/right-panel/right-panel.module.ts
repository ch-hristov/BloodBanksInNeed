import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RightPanelComponent } from './right-panel.component';
import { ActionPanelComponent } from './action-panel/action-panel.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OneActionComponent } from './action-panel/one-action/one-action.component';

@NgModule({
  declarations: [RightPanelComponent, ActionPanelComponent, OneActionComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule
  ],
  exports: [
    RightPanelComponent
  ]
})
export class RightPanelModule { }
