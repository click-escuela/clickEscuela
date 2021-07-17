import { DecimalPipe } from '@angular/common';
import { ReportCardService } from 'src/app/services/reportCard.service';
import { studentService } from 'src/app/services/student.service';
import { MatDialogModule } from '@angular/material/dialog';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportCardListComponent } from './report-card-list.component';

describe('ReportCardListComponent', () => {
  let component: ReportCardListComponent;
  let fixture: ComponentFixture<ReportCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ ReportCardListComponent ]
      , providers: [ studentService, ReportCardService, DecimalPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
