import { Component, OnInit } from '@angular/core';
import { BloodBankFacade } from '../../state/blood-bank.facade';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {
  bloodBank$ = this.bloodBankFacade.selectedBloodBank$;
  bloodBankLevel = Math.floor(Math.random() * 100) + 1;
  supplyMode = 'Blood' // 'Supplies in '

  constructor(private bloodBankFacade: BloodBankFacade) { }

  ngOnInit(): void {
    // tmp - delete when the value will be added to Blood Bank structure
    this.bloodBank$.subscribe(() => this.bloodBankLevel = Math.floor(Math.random() * 100) + 1);
  }

  onIconClicked() {
    this.bloodBankFacade.closeRightPanel();
  }
}
