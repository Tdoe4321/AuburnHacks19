import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAlertPage } from './ActiveAlert.page';

describe('ActiveAlertPage', () => {
  let component: ActiveAlertPage;
  let fixture: ComponentFixture<ActiveAlertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveAlertPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
