import { StudentFullDetail } from '../../interfaces/student-full-detail';
import { MODEL } from './../../../enums/ng-models';
import { MaterialModule } from 'src/app/test-mocks/material.module';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { PaymentsDetailComponent } from './payments-detail.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogMock } from 'src/app/test-mocks/matDialogmock';
import { Bill } from '../../interfaces/bill';

describe('PaymentsDetailComponent', () => {
  let component: PaymentsDetailComponent;
  let fixture: ComponentFixture<PaymentsDetailComponent>;

  const data =  MODEL.CURRENT_STUDENT as StudentFullDetail;
  data.bills = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ PaymentsDetailComponent ],
      providers: [
        {provide: MatDialogRef, useClass: MatDialogMock},
        {provide: MAT_DIALOG_DATA, useValue: data},
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onclose Dialog ', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.onClose();
    expect(spy).toHaveBeenCalled();
  });

  it('getTotalDebt with data', () => {
    const bill: Bill = {
      amount: 1500,
      status: 'PENDING',
      file: 'url',
      id: 'test',
      period: new Date()
    };
    const bills = [bill, bill];

    const debt = component.getTotalDebt(bills);

    expect(debt).toEqual(3000);
  });
});
