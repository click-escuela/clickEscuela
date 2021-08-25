import { MaterialModule } from './../../../../test-mocks/material.module';
import { DecimalPipe } from '@angular/common';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddGradeMassiveComponent } from './add-grade-massive.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogMock } from 'src/app/test-mocks/matDialogmock';

describe('AddGradeMassiveComponent', () => {
  let component: AddGradeMassiveComponent;
  let fixture: ComponentFixture<AddGradeMassiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ AddGradeMassiveComponent ],
      providers: [DecimalPipe,
        {provide: MatDialogRef, useClass: MatDialogMock},
        {provide: MAT_DIALOG_DATA, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGradeMassiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
