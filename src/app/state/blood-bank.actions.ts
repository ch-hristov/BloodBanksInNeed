import {createAction, props} from '@ngrx/store';

export const setBlodBankName = createAction(
    '[BloodBank] Add Name',
    props<{nameProp: string}>()
)