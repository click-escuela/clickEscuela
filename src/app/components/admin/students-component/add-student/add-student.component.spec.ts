import { LoadScreenComponent } from './../../../commons/load-screen/load-screen.component';
import { MaterialModule } from './../../../../test-mocks/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { studentService } from 'src/app/services/student.service';
import { GeoRefService } from 'src/app/services/geo-ref.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AddStudentComponent } from './add-student.component';
import { DecimalPipe } from '@angular/common';

describe('AddStudentComponent', () => {
  let component: AddStudentComponent;
  let fixture: ComponentFixture<AddStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ AddStudentComponent, LoadScreenComponent]
      , providers: [GeoRefService, studentService, DecimalPipe],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
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
