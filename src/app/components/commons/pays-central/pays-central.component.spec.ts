/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaysCentralComponent } from './pays-central.component';

describe('PaysCentralComponent', () => {
  let component: PaysCentralComponent;
  let fixture: ComponentFixture<PaysCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
