import { GradeI } from './../../../interfaces/grade';
import { MatDialog } from '@angular/material/dialog';
import { StudentGrade } from '../../../interfaces/student-grade';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GradesListComponent } from '../grades-list/grades-list.component';

@Component({
  selector: 'app-course-grade',
  templateUrl: './course-grade.component.html',
  styleUrls: ['./course-grade.component.scss']
})
export class CourseGradeComponent implements OnInit {

  @Input() studentGrades: StudentGrade[];

  displayedColumns: string[];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() courseList: StudentGrade[];

  loadScreen: boolean;
  messageInfoClass = 'black';
  messageInfo = 'Cargando lista de notas';
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.courseList);
    this.displayedColumns = ['name', 'surname', 'countGrades'];

    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.courseList;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  showGradesStudent(student:string, grades: GradeI) {
    this.dialog.open(GradesListComponent, {
      data: {student, grades},
      width: '100vw',
      height: '100vh'
    });
  }


}
