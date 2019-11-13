import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurePage } from './secure.page';

describe('SecurePage', () => {
  let component: SecurePage;
  let fixture: ComponentFixture<SecurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
