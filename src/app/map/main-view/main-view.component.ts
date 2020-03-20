import { Component, OnInit, NgZone } from '@angular/core';

import { tileLayer, latLng, marker, icon } from 'leaflet';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

import { BloodBankFacade } from '../../state/blood-bank.facade';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    zoomControl: false,
    center: latLng(51.110790, 17.031870)
  };

  layers = [];

  constructor(private zone: NgZone, firestore: AngularFirestore, private bloodBankFacade: BloodBankFacade) {
  }

  ngOnInit(): void {
    this.bloodBankFacade.selectedBloodBank$.subscribe(res => console.log(res))
    this.bloodBankFacade.loadAll(); // this should be in resolver
    this.bloodBankFacade.allBloodBanks$
      .subscribe(hospitals => this.prepareMarkers(hospitals));
    // TODO unsubscribe
  }

  prepareMarkers(positions) {
    this.layers = positions.map(position => this.createMarker(position));
  }

  createMarker(position) {
    return marker([ position.location.latitude, position.location.longitude ], <any>{
      name: position.name,
      id: position.id,
      icon: icon({
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    })
    .bindTooltip(position.name, {
      permanent: false,
      opacity: 0.9,
      direction: 'top'
    })
    .on('click', this.onMarkerClicked);
  }

  onMarkerClicked = (event) => {
    // TODO: show right side panel via store dispatch
    console.log('marker clicked', event.target.options);
    // use ng-zone if you like to trigger angular change detection
    this.zone.run(() => this.bloodBankFacade.selectBloodBank(event.target.options.id));
  }

}
