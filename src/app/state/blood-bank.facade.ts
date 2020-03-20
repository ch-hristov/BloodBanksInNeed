import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromBloodBanks from './blood-bank.reducer';
import * as BloodBanksSelectors from './blood-bank.selectors';
import * as BloodBanksActions from './blood-bank.actions';

@Injectable({
  providedIn: 'root'
})
export class BloodBankFacade {
  loaded$ = this.store.pipe(select(BloodBanksSelectors.getBloodBanksLoaded));
  allBloodBanks$ = this.store.pipe(select(BloodBanksSelectors.getAllBloodBanks));
  selectedBloodBank$ = this.store.pipe(select(BloodBanksSelectors.getSelected));

  constructor(private store: Store<fromBloodBanks.BloodBankState>) {}

  loadAll() {
    this.store.dispatch(BloodBanksActions.loadBloodBanks());
  }

  selectBloodBank(id: string) {
    this.store.dispatch(BloodBanksActions.selectBloodBank({ id }));
  }
}
