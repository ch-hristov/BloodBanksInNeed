import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

import { BloodBankFacade } from '../../state/blood-bank.facade';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  title: string;
  bloodBank$ = this.bloodBankFacade.selectedBloodBank$;

  constructor(private bloodBankFacade: BloodBankFacade) {
    this.title = environment.appName;
  }

  ngOnInit(): void {
  }
}
