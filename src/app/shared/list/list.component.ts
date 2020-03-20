import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from '../../models/list-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() title = '';
  @Input() items: ListItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
