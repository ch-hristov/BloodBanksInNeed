import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnMapInfoComponent } from './on-map-info.component';

describe('OnMapInfoComponent', () => {
  let component: OnMapInfoComponent;
  let fixture: ComponentFixture<OnMapInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnMapInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnMapInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
