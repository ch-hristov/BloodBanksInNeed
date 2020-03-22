import { Component, OnInit } from '@angular/core';
import { BloodBankFacade } from '../../state/blood-bank.facade';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  isLeftNavOpened: boolean = true;
  bloodBanksInNeed: {} = {};
  bloodBanksCities: string[];

  constructor(private bloodBankFacade: BloodBankFacade) { }

  ngOnInit(): void {
    this.bloodBankFacade.loadAll(); // this should be in resolver
    this.bloodBankFacade.allBloodBanks$
      .subscribe(bloodBanks => this.prepareBloodBanksInNeedList(bloodBanks));
  }

  prepareBloodBanksInNeedList(bloodBanks) {
    bloodBanks = [
      {
        name: 'drugi bank',
        city: "Wrocław",
        blood_supply: {
          rhPlus: {
            A: 100,
            B: 80,
            AB: 40,
            0: 0
          },
          rhMinus: {
            A: 80,
            B: 40,
            AB: 20,
            0: 15
          }
        }
      },
      {
        name: '',
        city: "Warsaw",
        blood_supply: {
          rhPlus: {
            A: 20,
            B: 80,
            AB: 10,
            0: 0
          },
          rhMinus: {
            A: 80,
            B: 30,
            AB: 20,
            0: 15
          }
        }
      },
    ]

    this.bloodBanksInNeed = {}
    for (let bloodBank of bloodBanks) {
      let bloodBankBloodSupplyArray = this.prepareBloodSupplyArray(bloodBank)
      if (bloodBankBloodSupplyArray.length > 0) {
        let bloodBankObject = { ...bloodBank, neededSupply: bloodBankBloodSupplyArray }
        if (bloodBank.city && this.bloodBanksInNeed[bloodBank.city]) {
          this.bloodBanksInNeed[bloodBank.city].push( bloodBankObject )
        } else {
          this.bloodBanksInNeed[bloodBank.city] = [ bloodBankObject ]
        }
      }      
    }
    this.bloodBanksCities = this.sortAlphabetically(Object.keys(this.bloodBanksInNeed))
    
  }

  sortAlphabetically(array) {
    array.sort((a: any, b: any) => {
      a = this.replaceDiacritics(a)
      b = this.replaceDiacritics(b)      
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

  prepareBloodSupplyArray(bloodBank) {
    let bloodSupplyArray = []
    if (!bloodBank.blood_supply) {
      return []
    }
    for (let bloodTypes of Object.values(bloodBank.blood_supply)) {
      for (let bloodType of Object.keys(bloodTypes)) {
        if (bloodTypes[bloodType] <= 30 && !bloodSupplyArray.includes(bloodType)) {
          bloodSupplyArray.push(bloodType)
        }
      }
    }
    return bloodSupplyArray
  }

  replaceDiacritics(value) {
    var r: string = value.toLowerCase()
      r = r.replace(new RegExp("\\s", "g"), "")
      r = r.replace(new RegExp("[àáâãäåą]", "g"), "a")
      r = r.replace(new RegExp("æ", "g"), "ae")
      r = r.replace(new RegExp("[çć]", "g"), "c")
      r = r.replace(new RegExp("[èéêëę]", "g"), "e")
      r = r.replace(new RegExp("[ìíîï]", "g"), "i")
      r = r.replace(new RegExp("[ñń]", "g"), "n")
      r = r.replace(new RegExp("[òóôõö]", "g"), "o")
      r = r.replace(new RegExp("œ", "g"), "oe")
      r = r.replace(new RegExp("[ùúûü]", "g"), "u")
      r = r.replace(new RegExp("[ýÿ]", "g"), "y")
      r = r.replace(new RegExp("ł", "g"), "l")
      r = r.replace(new RegExp("ś", "g"), "s")
      r = r.replace(new RegExp("[źż]", "g"), "z")
    return r
  }

  handleBloodBankClick(bloodBank) {
    console.log(bloodBank);
    
  }
}
