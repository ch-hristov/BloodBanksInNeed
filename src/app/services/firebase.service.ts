import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  getCollectionData(collection: 'hospitals' | 'blood_banks' | 'items'): Observable<any> {    
      return this.firestore.collection(collection).valueChanges()
  }
}
