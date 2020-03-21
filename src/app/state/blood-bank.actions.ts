import { createAction, props } from '@ngrx/store';
import { BloodBank } from '../models/blood-bank';

/**
 * LOAD
 */
export const loadBloodBanks = createAction('[BloodBank] Load Blood Banks');

export const loadBloodBankSuccess = createAction(
  '[BloodBank] Load Blood Banks Success',
  props<{ bloodBanks: BloodBank[] }>()
);

export const loadBloodBanksFailure = createAction(
  '[BloodBank] Load Blood Banks Failure',
  props<{ error: any }>()
);

/**
 * SELECT
 */
export const selectBloodBank = createAction(
  '[BloodBank] Select Blood Bank',
  props<{ id: string }>()
);

/**
 *  RUGHT PANEL
 */
export const closeRightPanel = createAction('[BloodBank] Close right panel');
