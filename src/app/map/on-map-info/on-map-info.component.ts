import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'on-map-info',
  templateUrl: './on-map-info.component.html',
  styleUrls: ['./on-map-info.component.scss']
})
export class OnMapInfoComponent implements OnInit {
  @Input() data = {
    rhPlus: {
      A: 90,
      B: 80,
      AB: 10,
      0: 5
    },
    rhMinus: {
      A: 90,
      B: 80,
      AB: 10,
      0: 5
    },

  }
  mainCategories: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.parseDataToArray()
  }

  parseDataToArray() {
    for (let mainCategory of Object.keys(this.data)) {
      this.mainCategories.push( { mainCategory, name: mainCategory === 'rhPlus' ? 'RhD(+) plus' : 'RhD(-) minus' })
      let tempArray = []
      for (let secondaryCategory of Object.keys(this.data[mainCategory])) {
        tempArray.push({ name: secondaryCategory, value: this.data[mainCategory][secondaryCategory] })
      }
      this.data[mainCategory] = tempArray
    }
    // console.log(this.data);

  }

}
