import { MatTableDataSource } from '@angular/material/table';
import { SnackBarServiceMock } from './../../../../test-mocks/snack-bar-mock';
import { MaterialModule } from 'src/app/test-mocks/material.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountListComponent } from './account-list.component';

import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MODEL } from 'src/app/enums/ng-models';
import { StudentFullDetail } from 'src/app/components/interfaces/student-full-detail';
import { of, throwError } from 'rxjs';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { MatDialogMock } from 'src/app/test-mocks/matDialogmock';
import { Bill } from 'src/app/components/interfaces/bill';


describe('AccountListComponent', () => {
  let component: AccountListComponent;
  let fixture: ComponentFixture<AccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ AccountListComponent ],
      providers: [DecimalPipe,
      {provide: SnackBarService, useClass: SnackBarServiceMock},
      {provide: MatDialog, useClass: MatDialogMock}
    ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getAccounts result path ', () => {
    spyOn(component, 'getPaymentDetail').and.callFake(() => {});
    const student = MODEL.CURRENT_STUDENT as StudentFullDetail;
    const spy = spyOn(component.studentsService$, 'getStudents').and.returnValue(of([student]));
    component.getAccounts();
    expect(spy).toHaveBeenCalled();

});

  it('getAccounts error path ', () => {
    spyOn(component, 'getPaymentDetail').and.callFake(() => {});
    const student = MODEL.CURRENT_STUDENT as StudentFullDetail;
    const spy = spyOn(component.studentsService$, 'getStudents').and.returnValue(throwError('error'));
    component.getAccounts();
    expect(spy).toHaveBeenCalled();
  });

  it('openDateRangeSelector', () => {
    const spy = spyOn(component.dialog, 'open').and.callThrough();
    component.showPayCentral();
    expect(spy).toHaveBeenCalled();

  });
  it('getPaymentDetail', () => {
    const spy = spyOn(component.dialog, 'open').and.callThrough();
    component.getPaymentDetail(MODEL.CURRENT_STUDENT);
    expect(spy).toHaveBeenCalled();

  });

  it('showDebtors', () => {
    component.checked = true;
    const student = MODEL.CURRENT_STUDENT as StudentFullDetail;
    const bill: Bill = {
      amount: 1500,
      file: '',
      id: '',
      year: 12,
      month: 12,
      status: 'PENDING'
    };
    student.bills = [bill];
    component.dataSource = new MatTableDataSource;
    component.dataSource.data = [student];
    component.showDebtors();

  });

  it('showDebtors else', () => {
    component.checked = false;
    const student = MODEL.CURRENT_STUDENT as StudentFullDetail;
    const bill: Bill = {
      amount: 1500,
      file: '',
      id: '',
      year: 12,
      month: 12,
      status: 'PENDING'
    };
    student.bills = [bill];
    component.dataSource = new MatTableDataSource;
    component.dataSource.data = [student];
    component.showDebtors();

  });

  it('showDebtors else', () => {
    component.checked = true;
    const student = MODEL.CURRENT_STUDENT as StudentFullDetail;
    const bill: Bill = {
      amount: 1500,
      file: '',
      id: '',
      year: 12,
      month: 12,
      status: 'COMPLETE'
    };
    student.bills = [bill];
    component.dataSource = new MatTableDataSource;
    component.dataSource.data = [student];
    component.showDebtors();

  });
});
