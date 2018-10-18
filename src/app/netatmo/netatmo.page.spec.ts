import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetatmoPage } from './netatmo.page';

describe('NetatmoPage', () => {
  let component: NetatmoPage;
  let fixture: ComponentFixture<NetatmoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetatmoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetatmoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
