import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalAlertPage } from './HospitalAlert.page';

describe('HospitalAlertPage', () => {
  let component: HospitalAlertPage;
  let fixture: ComponentFixture<HospitalAlertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalAlertPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
