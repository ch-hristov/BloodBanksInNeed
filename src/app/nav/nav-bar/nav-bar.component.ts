import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { environment } from '../../../environments/environment';

import { BloodBankFacade } from '../../state/blood-bank.facade';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @ViewChild('countryFlagDiv') countryFlagDiv: ElementRef;

  title: string;
  bloodBank$ = this.bloodBankFacade.selectedBloodBank$;
  countryFlag = 'PL';
  countryList = [{code: 'PL', flagPosition: '-220px -225px'}, {code: 'EN', flagPosition: '-360px -300px'}];

  constructor(private bloodBankFacade: BloodBankFacade) {
    this.title = environment.appName;
  }

  ngOnInit(): void {
  }

  changeFlag(countryObject) {
    this.countryFlag = countryObject.code;
    this.countryFlagDiv.nativeElement.style.backgroundPosition = countryObject.flagPosition;
  }
}
