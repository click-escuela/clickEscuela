import { HttpClientTestingModule } from '@angular/common/http/testing';
import { studentService } from 'src/app/services/student.service';
import { GeoRefService } from 'src/app/services/geo-ref.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddStudentComponent } from './add-student.component';
import { DecimalPipe } from '@angular/common';

describe('AddStudentComponent', () => {
  let component: AddStudentComponent;
  let fixture: ComponentFixture<AddStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, MatDialogModule, HttpClientTestingModule],
      declarations: [ AddStudentComponent ]
      , providers: [GeoRefService, studentService, DecimalPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
