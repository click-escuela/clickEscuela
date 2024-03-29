import { StudentGrade } from './../../../interfaces/student-grade';
import { COMMONS } from './../../../../enums/commons';
import { MESSAGES } from './../../../../enums/messages-constants';
import { SnackBarService } from './../../../../services/snack-bar.service';
import { environment } from './../../../../../environments/environment.prod';
import { GradeI } from './../../../interfaces/grade';
import { ConfirmDialogComponent } from '../../../commons/confirm-dialog/confirm-dialog.component';
import { GradesService } from '../../../../services/grades.service';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  Input,
  Inject,
  AfterViewInit,
} from '@angular/core';
import { Grade } from 'src/app/models/grade';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddGradeComponent } from '../add-grade/add-grade.component';
import { SCHOOL } from 'src/environments/school-data';

@Component({
  selector: 'app-grades-list',
  templateUrl: './grades-list.component.html',
  styleUrls: ['./grades-list.component.scss'],
})
export class GradesListComponent implements AfterViewInit {
  displayedColumns: string[];
  dataSource: any;
  idSchool = SCHOOL.ID;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('student') student: ElementRef;

  @ViewChildren(GradesListComponent) listGrades: QueryList<GradesListComponent>;

  gradesList: GradeI[];

  loadScreen: boolean;
  messageInfoClass = 'black';
  messageInfo = 'Cargando lista de notas';

  constructor(
    private gradeService: GradesService,
    public dialog: MatDialog,
    private snackbar: SnackBarService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngAfterViewInit() {
    console.log(this.data);
    this.displayedColumns = ['description', 'matter', 'grade', 'actions'];
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.data.grades;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteGrade(index) {
    this.gradeService.deleteGrade(index);
    this.refreshTable();
  }

  modifyGrade(index, grade) {
    this.gradeService.modifyGrade(index, grade);
  }

  confirmDelete(index) {
    this.confirmDialog('¿Desea eliminar la nota?', index);
  }

  confirmDialog(input, index) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: input,
      width: '60%',
      height: '150px',
      panelClass: 'confirm-dialog',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteGrade(index);
      }
    });
  }

  openModify(grade) {
    const dialogRef = this.dialog.open(AddGradeComponent, {
      data: grade,
      width: '80%',
      height: '75%',
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.refreshAllChildrens();
    });
  }

  refreshAllChildrens() {
    for (const comp of this.listGrades) {
      comp.refreshTable();
    }
  }

  refreshTable() {
    this.loadScreen = true;
    // this.getAllGrades();
  }
}
