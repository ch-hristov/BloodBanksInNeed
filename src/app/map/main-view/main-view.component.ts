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
    .on('add', (event) => {
      setTimeout(() => this.onMarkerDisplay(event), 6000); // don't ask why :)
    })
    .on('mouseover', this.onMarkerActive)
    .on('click', this.onMarkerClicked);
  }

  onMarkerClicked = (event) => {
    // TODO: show right side panel via store dispatch
    console.log('marker clicked', event.target.options);
    // use ng-zone if you like to trigger angular change detection
    this.zone.run(() => this.bloodBankFacade.selectBloodBank(event.target.options.id));
  }

  onMarkerDisplay = (event) => {
    let info = <any> document.querySelector(`#mapInfo_${event.target.options.id}`);

    if (info) {

      const pixelPoint = event.target._map.project(event.target._latlng, event.target._map.getZoom());
      const pixelOrigin = event.target._map.getPixelOrigin();
      const pixelCoord = pixelPoint.subtract(pixelOrigin);
      const layerPoint = event.target._map.latLngToLayerPoint(event.target._latlng);

      info.style.left = `${layerPoint.x + 70 }px`;
      info.style.top = `${layerPoint.y + 100 }px`;
      info.style.display = 'block';
    }
  }


  onMarkerActive = (event) => {
    let info = <any> document.querySelector(`#mapInfo_${event.target.options.id}`);

    if (info) {
      info.style.left = `${event.layerPoint.x + 70 }px`;
      info.style.top = `${event.layerPoint.y + 100 }px`;
      info.style.display = 'block';
    }

  }

}
