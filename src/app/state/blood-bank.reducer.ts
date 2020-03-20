import {Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as BloodBankActions from './blood-bank.actions';


export interface State {
    bloodBankName: string;
}

export const initialState: State = {
    bloodBankName: 'empty',
  };

const getBloodBanksFeatureState = createFeatureSelector<State>('bloodBanks');

export const getBloodBankName = createSelector(
    getBloodBanksFeatureState,
    state => state.bloodBankName
);

 export const bloodBankReducer = createReducer(
    initialState,
    on(BloodBankActions.setBlodBankName, (state, {nameProp}) => ({ ...state, bloodBankName: nameProp})),
  );
