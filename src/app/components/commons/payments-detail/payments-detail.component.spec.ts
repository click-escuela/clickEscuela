import { MatDialogMock } from './../../../test-mocks/matDialogmock';
import { jsPDFMock } from './../../../test-mocks/jsPDFMock';
import { jsPDF } from 'jspdf';
import { SnackBarServiceMock } from './../../../test-mocks/snack-bar-mock';
import { SnackBarService } from './../../../services/snack-bar.service';
import { dataStudents } from './../../teacher/students/students';
import { StudentFullDetail } from '../../interfaces/student-full-detail';
import { MODEL } from './../../../enums/ng-models';
import { MaterialModule } from 'src/app/test-mocks/material.module';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { PaymentsDetailComponent } from './payments-detail.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bill } from '../../interfaces/bill';
import { of } from 'rxjs';


describe('PaymentsDetailComponent', () => {
  let component: PaymentsDetailComponent;
  let fixture: ComponentFixture<PaymentsDetailComponent>;

  const data =  MODEL.CURRENT_STUDENT as StudentFullDetail;
  data.bills = [
    {
      amount: 1500,
      status: 'PENDING',
      file: 'url',
      id: 'test',
      year: 2021,
      month: 6
    }
  ];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ PaymentsDetailComponent ],
      providers: [
        {provide: MatDialogRef, useClass: MatDialogMock},
        {provide: MAT_DIALOG_DATA, useValue: data},
        {provide: MatDialog,useClass: MatDialogMock},
        {provide: SnackBarService, useClass: SnackBarServiceMock},
        {provide: jsPDF, useClass: jsPDFMock}
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

  it('getTotalDebt with data PENDING', () => {

    const bill: Bill = {
      amount: 1500,
      status: 'PENDING',
      file: 'url',
      id: 'test',
      year: 2021,
      month: 6
    };
    const bills = [bill, bill];

    const debt = component.getTotalDebt(bills);

    expect(debt).toEqual(3000);
  });

  it('getTotalDebt with data COMPLETED', () => {
    const bill: Bill = {
      amount: 1500,
      status: 'COMPLETED',
      file: 'url',
      id: 'test',
      year: 2021,
      month: 6
    };
    const bills = [bill, bill];

    const debt = component.getTotalDebt(bills);

    expect(debt).toEqual(0);
  });

  it('filterByMonth happy path', () => {
    spyOn(component, 'showSnackBar').and.callFake(() => {});
    component.selectedMonth = 12;
    component.filterByMonth();
    expect (component.dataSource[0].amount).toEqual(data.bills[0].amount);
  });

  it('filterByMonth happy else path', () => {
    spyOn(component, 'showSnackBar').and.callFake(() => {});
    component.selectedMonth = -1;
    component.filterByMonth();
    expect (component.dataSource[0].amount).toEqual(data.bills[0].amount);
  });

  it('filterByMonth wrong path', () => {
    spyOn(component, 'showSnackBar').and.callFake(() => {});
    component.selectedMonth = 2;
    component.filterByMonth();
    expect (component.dataSource.length).toEqual(1);
  });

  it('filterByYear happy path', () => {
    spyOn(component, 'showSnackBar').and.callFake(() => {});
    component.selectedYear = 12;
    component.filterByYear();
    expect (component.dataSource[0].amount).toEqual(data.bills[0].amount);
  });

  it('filterByYear happy else path', () => {
    spyOn(component, 'showSnackBar').and.callFake(() => {});
    component.selectedYear = -1;
    component.filterByYear();
    expect (component.dataSource[0].amount).toEqual(data.bills[0].amount);
  });

  it('filterByYear wrong path', () => {
    spyOn(component, 'showSnackBar').and.callFake(() => {});
    component.selectedYear = 2;
    component.filterByYear();
    expect (component.dataSource.length).toEqual(1);
  });

  it('downloadPDf ', () => {
    spyOn(component, 'showSnackBar').and.callFake(() => {});
    spyOn(window, 'open');

    const spy = spyOn(component.dialog$, 'open').and.returnValue({afterClosed: () => of(false)} as MatDialogRef<typeof component>);
    component.downloadPdf(data.bills[0], 0);
    component.downloadPdf(data.bills[0], 1);
    component.downloadPdf(data.bills[0], 2);
    expect (spy).toHaveBeenCalled();

  });
});
