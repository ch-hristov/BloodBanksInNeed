import { Component, OnInit } from '@angular/core';
import { BloodBankFacade } from '../../state/blood-bank.facade';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {
  bloodBank$ = this.bloodBankFacade.selectedBloodBank$;

  progress = {
    color: "primary",
    mode: 'determinate',
    value: 80,
    bufferValue: 90,
    tooltip: 'Blood need'
  };
  progressBarModes = {
    30: {
      color : 'warn',
      tooltip: 'low'
    },
    60: {
      color : 'accent',
      tooltip: 'medium'
    },
    90: {
      color : 'primary',
      tooltip: 'Enough'
    }
  }

  constructor(private bloodBankFacade: BloodBankFacade) { }

  ngOnInit(): void {
     // TO DO count blood level in bloodbank
     let stateOfNeedsPrc = 40; //counted on information about blood level in bloodbank
     let mode = stateOfNeedsPrc < 30 ? 30 : (stateOfNeedsPrc < 60 ? 60 : 90)
     this.progress = {
       color: this.progressBarModes[mode].color,
       mode: 'determinate',
       value: stateOfNeedsPrc,
       bufferValue: 90,
       tooltip: 'Blood need ' + this.progressBarModes[mode].tooltip + ' level'
     }
  }

}
