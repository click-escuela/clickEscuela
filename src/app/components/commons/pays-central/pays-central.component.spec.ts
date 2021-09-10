import { CommonsModule } from './../commons.module';
import { MaterialModule } from './../../../test-mocks/material.module';
import { TextMaskPipe } from './../../../pipes/text-mask.pipe';
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
      imports:[MaterialModule,CommonsModule],
      declarations: [ PaysCentralComponent ],
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
