import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-supply-info',
  templateUrl: './map-supply-info.component.html',
  styleUrls: ['./map-supply-info.component.scss']
})
export class MapSupplyInfoComponent implements OnInit {
  capacity: number ;
  capacityColorClass: string;
  status: string;
  supplyLevel: number;

  statuses = ['Fine', 'In danger', 'Overload'];
  supplyMode = 'Supplies in';

  constructor() { }

  ngOnInit(): void {
    this.capacity = Math.floor(Math.random() * 10) + 1;
    this.supplyLevel = Math.floor(Math.random() * 100) + 1;
    this.capacityColorClass = this.capacity < 3 ? 'capacity-sec-overload' : (this.capacity < 7 ? 'capacity-sec-danger' : 'capacity-sec-fine');
    this.status = this.capacity < 3 ? this.statuses[2] : (this.capacity < 7 ? this.statuses[1] : this.statuses[0]);
  }

}
