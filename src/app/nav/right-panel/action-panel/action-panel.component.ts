import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {BloodBank} from '../../../models/blood-bank';
import {ListItem} from '../../../models/list-item';

type panelType = 'Contact' | 'Needs' | 'Offers';  // TODO this should be in feature store

const getRandom = () => Math.round(Math.random() * 100);
const TMP_SUPPLIES: ListItem[] = [
  {name: 'Gloves', quantity: getRandom()},
  {name: 'Masks', quantity: getRandom()},
  {name: 'Wipes', quantity: getRandom()},
  {name: 'Disinfectant', quantity: getRandom()},
  {name: 'Soap pack', quantity: getRandom()},
  {name: 'Gloves', quantity: getRandom()},
  {name: 'Masks', quantity: getRandom()},
  {name: 'Wipes', quantity: getRandom()},
  {name: 'Disinfectant', quantity: getRandom()},
  {name: 'Soap pack', quantity: getRandom()},
  {name: 'Gloves', quantity: getRandom()},
  {name: 'Masks', quantity: getRandom()},
  {name: 'Wipes', quantity: getRandom()},
  {name: 'Disinfectant', quantity: getRandom()},
  {name: 'Soap pack', quantity: getRandom()},
  {name: 'Gloves', quantity: getRandom()},
  {name: 'Masks', quantity: getRandom()},
  {name: 'Wipes', quantity: getRandom()},
  {name: 'Disinfectant', quantity: getRandom()},
  {name: 'Soap pack', quantity: getRandom()},
  {name: 'Gloves', quantity: getRandom()},
  {name: 'Masks', quantity: getRandom()},
  {name: 'Wipes', quantity: getRandom()},
  {name: 'Disinfectant', quantity: getRandom()},
  {name: 'Soap pack', quantity: getRandom()},
];

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
  @Input() bloodBank: BloodBank;
  selectedPanel: panelType = 'Contact'; // TODO this should be in feature store

  constructor() {
  }

  ngOnInit(): void {
  }

  getNeeds() {
    // normally will be return this.bloodBank.needs
    return TMP_SUPPLIES.sort(() => Math.random() - 0.5);
  }

  getOffers() {
    // normally will be return this.bloodBank.needs
    return TMP_SUPPLIES.sort(() => Math.random() - 0.5);
  }

}
