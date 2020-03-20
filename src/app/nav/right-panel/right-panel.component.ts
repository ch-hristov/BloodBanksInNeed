import { Component, OnInit } from '@angular/core';
import { BloodBankFacade } from '../../state/blood-bank.facade';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {
  isRightNavOpened = true;
  bloodBank$ = this.bloodBankFacade.selectedBloodBank$;

  constructor(private bloodBankFacade: BloodBankFacade) { }

  ngOnInit(): void {
  }

}
