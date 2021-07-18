import { StudentI } from './../../../interfaces/student';
import { Student } from './../../../../models/student';
import { DecimalPipe } from '@angular/common';
import { MaterialModule } from './../../../../test-mocks/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { EditStudentComponent } from './edit-student.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('EditStudentComponent', () => {
  let component: EditStudentComponent;
  let fixture: ComponentFixture<EditStudentComponent>;
  const student = {

        id: '03d0b885-5ffe-4e7a-aa9d-7630a6756e94',
        name: 'Nicolas',
        surname: 'Lencinas',
        document: '37984171',
        gender: 'MALE',
        grade: '3',
        division: 'D',
        level: 'PREESCOLAR',
        birthday: '2010-02-02',
        adress: {
            street: 'etert',
            number: 333,
            locality: 'tertre'
        },
        cellPhone: '2324234234',
        email: 'perueb@gmail.com',
        parent: {
            name: 'terter',
            surname: 'sfsdf',
            document: '63543543',
            gender: 'MALE',
            birthday: '1982-10-25',
            adress: {
                street: 'Calle falsa',
                number: 343,
                locality: 'SAN MIGUEL'
            },
            cellPhone: '22423423423',
            email: 'perueb2@gmail.com'
        }

  };
  const data = {student};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ EditStudentComponent ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: data},
        DecimalPipe
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
