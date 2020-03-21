import { Component, Input } from '@angular/core';
import { BloodBankService } from '../services/blood-bank.service';

@Component({
  selector: 'app-edit-box',
  templateUrl: './edit-box.component.html',
  styleUrls: ['./edit-box.component.scss']
})
export class EditBoxComponent {

  @Input() id: string;

  constructor(private service: BloodBankService) { }

  onSave(description: string) {
    this.service.addDescription(this.id, description);
  }
}
