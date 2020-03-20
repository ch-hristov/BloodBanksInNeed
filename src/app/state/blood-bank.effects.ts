import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { BloodBankService } from '../services/blood-bank.service';
import * as BloodBankActions from './blood-bank.actions';


@Injectable({
  providedIn: 'root'
})
export class BloodBankEffects {

  loadBloodBanks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BloodBankActions.loadBloodBanks),
      mergeMap(() => this.service.getAll()
        .pipe(
          map(bloodBanks => BloodBankActions.loadBloodBankSuccess({ bloodBanks })),
          catchError(() => BloodBankActions.loadBloodBanksFailure)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private service: BloodBankService
  ) {}
}
