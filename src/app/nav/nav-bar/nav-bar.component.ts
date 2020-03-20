import { Component, OnInit, AfterViewInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Store, select } from '@ngrx/store';
import * as bloodBankActions from '../../state/blood-bank.actions';
import * as fromBloodBank from '../../state/blood-bank.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit {
  title: string;
  bloodBankName$: Observable<string>;

  constructor(private store: Store<{count:number}>) {
    this.title = environment.appName;
    store.dispatch(bloodBankActions.setBlodBankName({nameProp:'Wojewódzki Szpital Specjalistyczny im. J. Gromkowskiego'}))
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.bloodBankName$ = this.store.pipe(select(fromBloodBank.getBloodBankName))
  }

}
