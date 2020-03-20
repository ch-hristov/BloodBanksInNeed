import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromBloodBank from './state/blood-bank.reducer';
import * as bloodBankActions from './state/blood-bank.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HospitalsInNeed';

  constructor() {
  }
}
