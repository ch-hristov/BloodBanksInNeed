import { Component, Input } from '@angular/core';
import { BloodBankService } from '../services/blood-bank.service';
import { BloodBankFacade } from '../state/blood-bank.facade';

@Component({
  selector: 'app-edit-box',
  templateUrl: './edit-box.component.html',
  styleUrls: ['./edit-box.component.scss']
})
export class EditBoxComponent {

  @Input() id: string;

  constructor(private service: BloodBankService, private bloodBankFacade: BloodBankFacade) { }

  onSave(description: string) {
    this.service.addDescription(this.id, description);
  }

  onModalDialogClose() {
    this.bloodBankFacade.closeModalDialog();
  }
}
