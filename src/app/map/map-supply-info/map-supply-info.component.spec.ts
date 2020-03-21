import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSupplyInfoComponent } from './map-supply-info.component';

describe('MapSupplyInfoComponent', () => {
  let component: MapSupplyInfoComponent;
  let fixture: ComponentFixture<MapSupplyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSupplyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSupplyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
