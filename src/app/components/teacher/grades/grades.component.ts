import { CourseGrade } from './../../interfaces/course-grade';
import { GradesService } from 'src/app/services/grades.service';
import { AddGradeMassiveComponent } from './add-grade-massive/add-grade-massive.component';
import { GradesListComponent } from './grades-list/grades-list.component';

import { QueryList, ViewChildren } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGradeComponent } from './add-grade/add-grade.component';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { COMMONS } from 'src/app/enums/commons';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
})
export class GradesComponent implements OnInit {
  currentOption = 'Notas';
  @ViewChildren(GradesListComponent) listGrades: QueryList<GradesListComponent>;
  courseList: CourseGrade[];

  constructor(
    public dialog: MatDialog,
    private grades: GradesService,
    public snackBar: SnackBarService
  ) {}

  ngOnInit() {
    this.getCourseGrades();
  }

  openDialog(input) {
    const dialogRef = this.dialog.open(AddGradeComponent, {
      data: input,
      width: '80%',
      height: '75%',
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.getCourseGrades();
    });
  }

  getCourseGrades() {
    this.grades
      .getGradesByCourse('1234', '8d9c4552-260f-4c27-946f-dcd98d86dfd6')
      .subscribe(
        (result) => {
          this.courseList = result;
        },
        (error) => {
          this.snackBar.showSnackBar(
            'No se pudo obtener la lista de Calificaciones',
            COMMONS.SNACK_BAR.ACTION.ACCEPT,
            COMMONS.SNACK_BAR.TYPE.ERROR
          );
        }
      );
  }

  openAddGradeMassive() {
    const dialogRef = this.dialog.open(AddGradeMassiveComponent, {
      width: '100vw',
      height: '90vh',
      panelClass: 'add-massive',
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.getCourseGrades();
    });
  }
}
