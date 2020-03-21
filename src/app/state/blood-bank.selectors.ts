import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BLOOD_BANK_FEATURE_KEY, BloodBankState} from './blood-bank.reducer';
import {bloodBankAdapter} from './blood-bank.reducer';

export const getBloodBanksState = createFeatureSelector<BloodBankState>(
  BLOOD_BANK_FEATURE_KEY
);

const {selectAll, selectEntities} = bloodBankAdapter.getSelectors();

/**
 * "loaded"
 */
export const getBloodBanksLoaded = createSelector(
  getBloodBanksState,
  (state: BloodBankState) => state.loaded
);

/**
 * "error"
 */
export const getBloodBanksError = createSelector(
  getBloodBanksState,
  (state: BloodBankState) => state.error
);

/**
 * "blood banks" -
 */
export const getAllBloodBanks = createSelector(
  getBloodBanksState,
  (state: BloodBankState) => selectAll(state)
);

export const getBloodBanksEntities = createSelector(
  getBloodBanksState,
  (state: BloodBankState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getBloodBanksState,
  (state: BloodBankState) => state.selectedId
);

/**
 * GET SELECTED
 */
export const getSelected = createSelector(
  getBloodBanksEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

/**
 * RIGHT PANEL
 */
export const getRightPanelOpened = createSelector(
  getBloodBanksState,
  (state: BloodBankState) => state.rightPanelOpened
);
