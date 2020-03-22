import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {BloodBank} from '../../../models/blood-bank';
import {ListItem} from '../../../models/list-item';
import {BloodBankFacade} from "../../../state/blood-bank.facade";

type panelType = 'Contact' | 'Needs' | 'Offers' | 'AddOffer';  // TODO this should be in feature store

const getRandom = () => Math.round(Math.random() * 100);
const TMP_SUPPLIES: ListItem[] = [
  {name: 'Rule #1', quantity: getRandom()},
  {name: 'Rule #2', quantity: getRandom()},
  {name: 'Rule #3', quantity: getRandom()},
  {name: 'Rule #4', quantity: getRandom()},
  {name: 'Guideline #2', quantity: getRandom()},
  {name: 'Guideline #2', quantity: getRandom()},
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

  constructor(private bloodBankFacade: BloodBankFacade) {
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

  onOpenModalDialog() {
    this.bloodBankFacade.openModalDialog();
  }

}
