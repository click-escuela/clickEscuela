import { RouterTestingModule } from '@angular/router/testing';
import { AddGradeComponent } from './add-grade/add-grade.component';
import { GradesListComponent } from './grades-list/grades-list.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GradesComponent } from './grades.component';

describe('GradesComponent', () => {
  let component: GradesComponent;
  let fixture: ComponentFixture<GradesComponent>;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule,RouterTestingModule],
      declarations: [ GradesComponent ],
      providers: [MatDialog]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dialog = component.dialog;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Add-Grade open dialog', () => {
    spyOn(component.dialog, 'open').and.callThrough();
    component.openDialog('Agregar nueva nota');
    expect(component.dialog.open).toHaveBeenCalledWith(AddGradeComponent,
      {
        data: 'Agregar nueva nota',
        width: '80%',
        height: '75%'
      }
    );
    });

  it ('Refresh childrens', () => {
    let refresh = component.refreshAllChildrens();
    expect(refresh).toEqual(true);
  });
});
