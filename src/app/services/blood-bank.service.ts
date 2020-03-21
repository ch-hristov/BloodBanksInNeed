import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'firebase/firestore';

import { BloodBank } from '../models/blood-bank';

const BLOOD_BANKS_PATH = 'hospitals';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {
  private bloodBanksCol: AngularFirestoreCollection<BloodBank>;

  constructor(private afs: AngularFirestore) {
    this.bloodBanksCol = this.afs.collection<BloodBank>(BLOOD_BANKS_PATH);
  }

  getAll(): Observable<BloodBank[]> {
    return this.bloodBanksCol.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const id = a.payload.doc.id;
          const data = a.payload.doc.data() as BloodBank;
          return {id, ...data};
        })
      )
    );
  }

  getById(id: string): Observable<BloodBank> {
    return this.bloodBanksCol.doc<BloodBank>(id).valueChanges();
  }

  addDescription(id: string, description: string) {
    return this.bloodBanksCol.doc(id).set({description}, { merge: true });
  }
}
