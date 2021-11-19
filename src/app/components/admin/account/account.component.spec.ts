import { RangeSelectorComponent } from './../../commons/range-selector/range-selector.component';
import { of, throwError } from 'rxjs';
import { jsPDFMock } from './../../../test-mocks/jsPDFMock';
import { jsPDF } from 'jspdf';
import { SnackBarServiceMock } from './../../../test-mocks/snack-bar-mock';
import { WEEK, MONTH, CUSTOM_PERIOD } from './../type-constants';
import { MatDialogMock } from './../../../test-mocks/matDialogmock';
import { MaterialModule } from './../../../test-mocks/material.module';
import { DecimalPipe } from '@angular/common';
import { AccountService } from './../../../services/account.service';
import { studentService } from './../../../services/student.service';
import { IconGeneratorService } from 'src/app/services/icon-generator.service';
import { ExpensesService } from './../../../services/expenses.service';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AccountComponent } from './account.component';
import { DAY } from '../type-constants';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { MODEL } from 'src/app/enums/models';
import { PaysCentralComponent } from '../../commons/pays-central/pays-central.component';


describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  
  const account = [MODEL.CURRENT_STUDENT];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [AccountComponent],
      providers: [ExpensesService, IconGeneratorService, studentService, AccountService, DecimalPipe,
      {provide: MatDialog, useClass: MatDialogMock},
      {provide: SnackBarService, useClass: SnackBarServiceMock},
      {provide: jsPDF, useClass: jsPDFMock}]
      ,
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    component.accounts = account;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('generateDebtorsReport', () => {
    const spy = spyOn(component, 'openModalFrame').and.callThrough();
    component.generateDebtorsReport(1);
    expect(spy).toHaveBeenCalled();
  });

  it('generateDebtorsReport catchError', () => {
    const spy = spyOn(component.snackBar, 'showSnackBar').and.callThrough();
    component.accounts = undefined;
    component.generateDebtorsReport(1);
    expect(spy).toHaveBeenCalled();
  });


  it('generateDebtorsReport', () => {
    const spy = spyOn(component, 'arrayObjToCsv').and.callThrough();
    component.generateDebtorsReport(2);
    expect(spy).toHaveBeenCalled();
  });

  it('generateDebtorsReport', () => {
    component.generateDebtorsReport(3);
  });

  it('generatExpensesReport DAY', () => {
    component.getExpensesReport(DAY, 1);
  });

  it('generatExpensesReport WEEK', () => {
    component.getExpensesReport(WEEK, 1);
  });

  it('generatExpensesReport MONTH', () => {
    component.getExpensesReport(MONTH, 4);
  });

  it('generatExpensesReport CUSTOM_PERIOD', () => {
    const spy = spyOn(component, 'openModalFrame').and.callFake(() => {});

    component.selectedRange = {
      range:
      {
        start: new Date('04/04/2021'),
        end: new Date('04/15/2021')
      }
    };
    component.getExpensesReport(CUSTOM_PERIOD, 1);
    expect(spy).toHaveBeenCalled();

  });

  it('generatExpensesReport CUSTOM_PERIOD method 2', () => {
    const spy = spyOn(component, 'arrayObjToCsv').and.callFake(() => {});
    component.selectedRange = {
      range:
      {
        start: new Date('04/04/2021'),
        end: new Date('04/15/2021')
      }
    };
    component.getExpensesReport(CUSTOM_PERIOD, 2);
    expect(spy).toHaveBeenCalled();
  });

  it('openDateRangeSelector', () => {
    const spy = spyOn(component.dialog, 'open').and.returnValue({afterClosed: () => of( {range:
      {
        start: new Date('04/04/2021'),
        end: new Date('04/15/2021')
      }})} as MatDialogRef<RangeSelectorComponent>);
    component.openDateRangeSelector();
    expect(spy).toHaveBeenCalled();

  });

  it('openDateRangeSelector', () => {
    const spy = spyOn(component.dialog, 'open').and.callThrough();
    component.showPayCentral();
    expect(spy).toHaveBeenCalled();

  });

 
});
