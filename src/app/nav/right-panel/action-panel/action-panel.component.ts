import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

type panelType = 'Contact' | 'Needs' | 'Offers';  // TODO this should be in feature store

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.scss'],
  animations: [
    trigger('enterTrigger', [
      state('fadeIn', style({
        opacity: '1',
      })),
      transition('void => *', [style({opacity: '0'}), animate('250ms')])
    ])
  ]
})
export class ActionPanelComponent implements OnInit {

  selectedPanel: panelType = 'Contact'; // TODO this should be in feature store

  constructor() {
  }

  ngOnInit(): void {
  }

}
