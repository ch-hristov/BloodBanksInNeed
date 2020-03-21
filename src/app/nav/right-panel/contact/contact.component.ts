import { Component, OnInit, Input } from '@angular/core';
import { BloodBank } from '../../../models/blood-bank';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() bloodBank: BloodBank;

  constructor() { }

  ngOnInit(): void {
  }

}
