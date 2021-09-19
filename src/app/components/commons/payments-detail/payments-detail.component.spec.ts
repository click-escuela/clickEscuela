import { MatSnackBar } from '@angular/material/snack-bar';
import { studentService } from 'src/app/services/student.service';
import { StudentI } from './../../interfaces/student';
import { DecimalPipe } from '@angular/common';
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
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { PaymentsDetailComponent } from './payments-detail.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bill } from '../../interfaces/bill';
import { of, throwError } from 'rxjs';


describe('PaymentsDetailComponent', () => {
  let component: PaymentsDetailComponent;
  let fixture: ComponentFixture<PaymentsDetailComponent>;

  const data =  MODEL.CURRENT_STUDENT as StudentI;

  const bills = [
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
        {provide: MatDialog, useClass: MatDialogMock},
        {provide: SnackBarService, useClass: SnackBarServiceMock},
        {provide: jsPDF, useClass: jsPDFMock},
        DecimalPipe
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsDetailComponent);
    component = fixture.componentInstance;
    component.bills = bills;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getBills succes', () => {
    spyOn(component.studentsService$, 'getStudentsBills').and.returnValue(of(bills));
    component.ngOnInit();
    expect(component.bills[0].file).toEqual(bills[0].file);
  });

  it('getBills error', fakeAsync(() => {
    spyOn(component.studentsService$, 'getStudentsBills').and.returnValue(throwError('error'));
    component.ngOnInit();
    tick(501);
    expect(component.errorBills).toEqual(true);
  }));

  it('FilterByMonth if length > 0 ', () => {
   component.bills = bills;
   component.selectedMonth = 6;
   const spy  = spyOn(component.snackBar, 'showSnackBar').and.callFake(() => {});
   component.filterByMonth();
   expect (spy).toHaveBeenCalled();
  });

  it('FilterByMonth else length > 0 ', () => {
    component.bills = bills;
    component.selectedMonth = 7;
    const spy  = spyOn(component.snackBar, 'showSnackBar').and.callFake(() => {});
    component.filterByMonth();
    expect (spy).toHaveBeenCalled();
   });

  it('FilterByMonth error ', () => {
    component.bills = bills;
    component.selectedMonth = -1;
    const spy  = spyOn(component.snackBar, 'showSnackBar').and.callFake(() => {});
    component.filterByMonth();
    expect (spy).toHaveBeenCalled();
   });

  it('FilterByYear if length > 0 ', () => {
    component.bills = bills;
    component.selectedYear = 2021;
    const spy  = spyOn(component.snackBar, 'showSnackBar').and.callFake(() => {});
    component.filterByYear();
    expect (spy).toHaveBeenCalled();
   });

  it('FilterByYear else length > 0 ', () => {
     component.bills = bills;
     component.selectedYear = 7;
     const spy  = spyOn(component.snackBar, 'showSnackBar').and.callFake(() => {});
     component.filterByYear();
     expect (spy).toHaveBeenCalled();
    });

  it('FilterByYear error ', () => {
     component.bills = bills;
     component.selectedYear = -1;
     const spy  = spyOn(component.snackBar, 'showSnackBar').and.callFake(() => {});
     component.filterByYear();
     expect (spy).toHaveBeenCalled();
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


  it('downloadPDf ', () => {
    spyOn(component.snackBar, 'showSnackBar').and.callFake(() => {});
    spyOn(window, 'open');

    const spy = spyOn(component.dialog$, 'open').and.returnValue({afterClosed: () => of(false)} as MatDialogRef<typeof component>);
    component.downloadPdf(component.bills[0], 0);
    component.downloadPdf(component.bills[0], 1);
    component.downloadPdf(component.bills[0], 2);
    component.downloadPdf(component.bills[0], 3);
    expect (spy).toHaveBeenCalled();

  });

  it('downloadPDf school undefined ', () => {
    component.currentSchool = undefined;
    spyOn(component.snackBar, 'showSnackBar').and.callFake(() => {});
    spyOn(window, 'open');

    const spy = spyOn(component.dialog$, 'open').and.returnValue({afterClosed: () => of(false)} as MatDialogRef<typeof component>);
    component.downloadPdf(component.bills[0], 0);
    component.downloadPdf(component.bills[0], 1);
    component.downloadPdf(component.bills[0], 2);
    expect (spy).toHaveBeenCalled();

  });

  
});
