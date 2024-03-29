import { createReducer, on } from '@ngrx/store';
import { BloodBank } from '../models/blood-bank';
import * as BloodBankActions from './blood-bank.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const BLOOD_BANK_FEATURE_KEY = 'bloodBanks';

export interface BloodBankState extends EntityState<BloodBank> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
  rightPanelOpened: boolean;
  modalDialogOpened: boolean;
}

export const bloodBankAdapter: EntityAdapter<BloodBank> = createEntityAdapter<BloodBank>();

export const initialState: BloodBankState = bloodBankAdapter.getInitialState({
  selectedId: null,
  loaded: false,
  rightPanelOpened: false,
  modalDialogOpened: false,
});


export const bloodBankReducer = createReducer(
  initialState,
  on(BloodBankActions.loadBloodBanks, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(BloodBankActions.loadBloodBankSuccess, (state, { bloodBanks }) =>
    bloodBankAdapter.addAll(bloodBanks, { ...state, loaded: true })
  ),
  on(BloodBankActions.loadBloodBanksFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true
  })),
  on(BloodBankActions.selectBloodBank, (state, { id }) => ({
    ...state,
    selectedId: id,
    rightPanelOpened: true
  })),
  on(BloodBankActions.closeRightPanel, (state) => ({
    ...state,
    rightPanelOpened: false
  })),
  on(BloodBankActions.openModalDialog, (state) => ({
    ...state,
    modalDialogOpened: true
  })),
  on(BloodBankActions.closeModalDialog, (state) => ({
    ...state,
    modalDialogOpened: false
  })),
);
