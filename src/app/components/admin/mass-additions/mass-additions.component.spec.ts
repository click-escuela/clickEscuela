/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MassAdditionsComponent } from './mass-additions.component';

describe('MassAdditionsComponent', () => {
  let component: MassAdditionsComponent;
  let fixture: ComponentFixture<MassAdditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassAdditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassAdditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
