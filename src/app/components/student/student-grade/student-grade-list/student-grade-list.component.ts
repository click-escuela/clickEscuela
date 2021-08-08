import { GradesService } from './../../../../services/grades.service';
import { studentService } from './../../../../services/student.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-grade-list',
  templateUrl: './student-grade-list.component.html',
  styleUrls: ['./student-grade-list.component.scss']
})
export class StudentGradeListComponent implements OnInit {

  displayedColumns: string[];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private gradeService: GradesService) {
    this.displayedColumns = ['description', 'matter', 'grade'];
   }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getGrades();
  }


  getGrades() {
    this.gradeService.getGradeByStudent('12345', '4af08bb0-2c5c-4e5a-bd55-8f0a7189ede2').subscribe(
    result => {console.log(result); this.dataSource.data = result; });

  }


}
