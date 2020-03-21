import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RightPanelComponent } from './right-panel.component';
import { ActionPanelComponent } from './action-panel/action-panel.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OneActionComponent } from './action-panel/one-action/one-action.component';
import { SharedModule } from '../../shared/shared.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [RightPanelComponent, ActionPanelComponent, OneActionComponent, ContactComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    SharedModule,
    MatTooltipModule,
  ],
  exports: [
    RightPanelComponent
  ]
})
export class RightPanelModule { }
