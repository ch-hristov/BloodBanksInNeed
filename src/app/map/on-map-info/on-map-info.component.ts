import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'on-map-info',
  templateUrl: './on-map-info.component.html',
  styleUrls: ['./on-map-info.component.scss']
})
export class OnMapInfoComponent implements OnInit {
  @Input() data = {
    'RhD(+) plus': {
      A: 90,
      B: 80,
      AB: 10,
      0: 5
    },
    'RhD(-) minus': {
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
      this.mainCategories.push(mainCategory)
      let tempArray = []
      for (let secondaryCategory of Object.keys(this.data[mainCategory])) {
        tempArray.push({ name: secondaryCategory, value: this.data[mainCategory][secondaryCategory] })
      }
      this.data[mainCategory] = tempArray
    }
    console.log(this.data);
    
  }

}
