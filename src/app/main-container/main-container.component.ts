import { Component, OnInit } from '@angular/core';
import { BloodBankFacade } from '../state/blood-bank.facade';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  isRightNavOpened$ = this.bloodBankFacade.isRightPanelOpened$;

  constructor(private bloodBankFacade: BloodBankFacade) { }

  ngOnInit(): void {
  }

}
