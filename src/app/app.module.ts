import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { MaterialModule } from './material/material.module';
import { LeftPanelComponent } from './nav/left-panel/left-panel.component';
import { MainViewComponent } from './map/main-view/main-view.component';
import {MatBadgeModule} from '@angular/material/badge';
import { OnMapInfoModule } from './map/on-map-info/on-map-info.module';

import { StoreModule } from '@ngrx/store';
import { bloodBankReducer } from './state/blood-bank.reducer';
import { RightPanelComponent } from './nav/right-panel/right-panel.component';
import { MainContainerComponent } from './main-container/main-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LeftPanelComponent,
    MainViewComponent,
    RightPanelComponent,
    MainContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatBadgeModule,
    StoreModule.forRoot({'bloodBanks': bloodBankReducer }),
    OnMapInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
