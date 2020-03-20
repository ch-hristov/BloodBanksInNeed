import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneActionComponent } from './one-action.component';

describe('OneActionComponent', () => {
  let component: OneActionComponent;
  let fixture: ComponentFixture<OneActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
