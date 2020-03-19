import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { tileLayer, latLng, marker, icon } from 'leaflet';

import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HospitalsInNeed';
  items: Observable<any[]>;

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 17,
    center: latLng(51.14277, 17.0666)
  };

  layers = [
    marker([ 51.14277, 17.0666 ], {
    icon: icon({
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
    })
  ];

  constructor(firestore: AngularFirestore) {
    console.info('firestore', firestore);
    this.items = firestore.collection('hospitals').valueChanges();
  }

}
