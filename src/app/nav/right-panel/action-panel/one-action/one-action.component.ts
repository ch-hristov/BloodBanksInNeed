import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-action',
  templateUrl: './one-action.component.html',
  styleUrls: ['./one-action.component.scss']
})
export class OneActionComponent implements OnInit {
  @Input() isActive: boolean; // TODO this should be in feature store
  @Input() icon: string;
  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
