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
  countryFlag = 'PL';
  countryList = [{code: 'PL', flagPosition: '-220px -225px'}, {code: 'EN', flagPosition: '-360px -300px'}];
  updatedDate: string;

  constructor() {
    this.title = environment.appName;
    const date = new Date();
    this.updatedDate = date.toLocaleString('en-US', { hour12: true });
  }

  ngOnInit(): void {
  }

  changeFlag(countryObject) {
    this.countryFlag = countryObject.code;
    this.countryFlagDiv.nativeElement.style.backgroundPosition = countryObject.flagPosition;
  }
}
