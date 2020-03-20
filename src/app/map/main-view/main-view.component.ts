import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

import { tileLayer, latLng, marker, icon } from 'leaflet';

import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  items: Observable<any[]>;

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    zoomControl: false,
    center: latLng(51.110790, 17.031870)
  };

  layers = [];

  constructor(private zone: NgZone, firestore: AngularFirestore) {
    firestore.collection('hospitals')
      .valueChanges().subscribe(hospitals => this.prepareMarkers(hospitals));
  }

  prepareMarkers(positions) {


    this.layers = positions
      // .filter(position => 'Wrocław' === position.name)
      .map(position => this.createMarker(position));
  }

  createMarker(position) {
    return marker([ position.location.latitude, position.location.longitude ], <any>{
      name: position.name,
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
    // .on('add', this.onMarkerDisplay)
    .on('mouseover', this.onMarkerActive)
    .on('click', this.onMarkerClicked);
  }

  onMarkerClicked = (event) => {
    // TODO: show right side panel via store dispatch
    console.info('marker clicked', event.target.options);
    // use ng-zonde if you like to trigger angular change detection
    // this.zone.run(() => {}
  }

  onMarkerDisplay = (event) => {
    console.log('on marker display', event);
  }

  onMarkerActive = (event) => {
    let info = document.querySelector('#mapInfo1') || {};

    info.style.left = `${event.layerPoint.x - 143 }px`;
    info.style.top = `${event.layerPoint.y +  40 }px`;
    info.style.display = 'block';
  }

  ngOnInit(): void {}

}
