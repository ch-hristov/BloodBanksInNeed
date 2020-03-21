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
        name: 'jeden Bank krwi kurde długi bardzo długi',
        city: "Lublin",
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
        name: 'trzeci bank',
        city: "Wrocław",
        blood_supply: {
          rhPlus: {
            A: 100,
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
      {
        name: 'czwarty bank',
        city: "Grudziądz",
        blood_supply: {
          rhPlus: {
            A: 100,
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
      {
        name: 'piąty bank',
        city: "Wrocław",
        blood_supply: {
          rhPlus: {
            A: 100,
            B: 80,
            AB: 60,
            0: 0
          },
          rhMinus: {
            A: 80,
            B: 30,
            AB: 80,
            0: 15
          }
        }
      }
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

  handleBloodBankClick(bloodBank) {
    console.log(bloodBank);
    
  }
}
