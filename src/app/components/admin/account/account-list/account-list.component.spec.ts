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

  xit('getAccounts result path ', () => {
    spyOn(component, 'getPaymentDetail').and.callFake(() => {});
    const student = MODEL.CURRENT_STUDENT as StudentFullDetail;
    student.bills = [];
    const spy = spyOn(component.studentsService$, 'getStudentsBills').and.returnValue(of([student]));
    component.getAccounts();

});

  xit('getAccounts error path ', () => {
    spyOn(component, 'getPaymentDetail').and.callFake(() => {});
    const student = MODEL.CURRENT_STUDENT as StudentFullDetail;
    student.bills = [];
    const spy = spyOn(component.studentsService$, 'getStudentsBills').and.returnValue(throwError('error'));
    component.getAccounts();

  });
});
