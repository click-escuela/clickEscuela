import { id } from '@swimlane/ngx-charts';
import { CourseService } from './../../../../services/course.service';
import { Course } from './../../../../models/course';
import { map } from 'rxjs/operators';
import { StudentI } from './../../../interfaces/student';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { COMMONS } from './../../../../enums/commons';
import { MESSAGES } from './../../../../enums/messages-constants';
import { SnackBarService } from './../../../../services/snack-bar.service';
import { GradeI } from './../../../interfaces/grade';
import { studentService } from '../../../../services/student.service';
import { GradesService } from '../../../../services/grades.service';
import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Grade } from 'src/app/models/grade';
import { Student } from 'src/app/models/student';
import { MatSelect } from '@angular/material/select';
import { FORM } from 'src/app/enums/form-controls';
import { CourseGrade } from 'src/app/components/interfaces/course-grade';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.scss'],
})
export class AddGradeComponent implements AfterViewInit {
  currentGrade: GradeI;
  studentsList: Student[];
  existData: boolean;
  localData: any;
  @ViewChild('course') course: MatSelect;

  gradeControl: FormGroup;

  courses: CourseGrade[];
  matters = [
    'Historia',
    'Geografia',
    'Matemáticas',
    'Ciencias Sociales',
    'Ingles',
    'Lengua',
    'Quimica',
  ];
  types = [
    {
      code: 'HOMEWORK',
      name: 'Tarea',
    },
  ];

  selectedCourse = '';

  constructor(
    public dialogRef: MatDialogRef<AddGradeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private gradesService: GradesService,
    private courseService: CourseService,
    private studentsService: studentService,
    private snackBar: SnackBarService
  ) {
    if (data.grade === undefined) {
      this.currentGrade = {
        studentId: '03d0b885-5ffe-4e7a-aa9d-7630a6756e94',
        name: '',
        schoolId: '12345',
        courseId: '27d2217c-d0f4-11eb-aa1f-0237763a7d5e',
        subject: 'Filosofía',
        type: '',
        number: 9,
      };
      this.localData = {
        grade: {
          name: '',
          subject: '',
          type: '',
          number: 0,
        },
        index: 0,
      };

      this.existData = !!data.grade;
    } else {
      this.currentGrade = data.grade;
      this.localData = data;
    }

    this.existData = !!data.grade;

    this.studentsList = [];
    this.gradeControl = FORM.GRADES_CONTROL;
    this.gradeControl.reset();
  }

  ngAfterViewInit() {
    this.getCourseGrades();
  }

  getCourseGrades() {
    this.courseService
      .getCoursesByTeacher('1234', '8d9c4552-260f-4c27-946f-dcd98d86dfd6')
      .subscribe(
        (result) => {
          this.courses = result.courses;
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

  loadStudents() {
    console.log(this.gradeControl.value);
    this.studentsList = this.gradeControl.value.course.students;
  }

  addGrade() {
    const currentGrade = {} as GradeI;

    currentGrade.schoolId = '1234';
    currentGrade.courseId = this.gradeControl.value.course.id;
    currentGrade.studentId = this.gradeControl.value.student;
    currentGrade.subject = this.gradeControl.value.subject;
    currentGrade.type = this.gradeControl.value.type;
    currentGrade.number = this.gradeControl.value.number;
    currentGrade.name = this.gradeControl.value.description;

    this.gradesService.addGrade(currentGrade).subscribe(
      (data) => {
        this.snackBar.showSnackBar(
          MESSAGES.GRADES.POST.SUCCES,
          COMMONS.SNACK_BAR.ACTION.ACCEPT,
          COMMONS.SNACK_BAR.TYPE.SUCCES
        );
        this.dialogRef.close();
      },
      (error) => {
        this.snackBar.showSnackBar(
          MESSAGES.GRADES.POST.ERROR[400],
          COMMONS.SNACK_BAR.ACTION.ACCEPT,
          COMMONS.SNACK_BAR.TYPE.ERROR
        );
      }
    );
  }

  modifyGrade() {
    if (this.currentGrade.name === '') {
      // tslint:disable-next-line: no-unused-expression
      this.currentGrade.name === this.data.name;
    }
    this.gradesService.modifyGrade(this.data.index, this.data.grade);
    this.dialogRef.close();
  }
  onClose() {
    this.dialogRef.close(false);
  }
}
