import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTabPage } from './LoginTab.page';

describe('Tab1Page', () => {
  let component: LoginTabPage;
  let fixture: ComponentFixture<LoginTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginTabPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
