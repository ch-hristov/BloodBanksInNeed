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
  isRightPanelOpened$  = this.store.pipe(select(BloodBanksSelectors.getRightPanelOpened));
  isModalDialogOpened$ = this.store.pipe(select(BloodBanksSelectors.getModalDialogOpened));

  constructor(private store: Store<fromBloodBanks.BloodBankState>) {}

  loadAll() {
    this.store.dispatch(BloodBanksActions.loadBloodBanks());
  }

  selectBloodBank(id: string) {
    this.store.dispatch(BloodBanksActions.selectBloodBank({ id }));
  }

  closeRightPanel() {
    this.store.dispatch(BloodBanksActions.closeRightPanel());
  }

  openModalDialog() {
    this.store.dispatch(BloodBanksActions.openModalDialog());
  }

  closeModalDialog() {
    this.store.dispatch(BloodBanksActions.closeModalDialog());
  }
}
