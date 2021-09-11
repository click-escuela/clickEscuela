import { FORM } from './../../../../enums/form-controls';
import { COURSES, GENDER } from './../../../../enums/courses';
import { Adress } from './../../../interfaces/adress';
import { environment } from 'src/environments/environment';
import { IconGeneratorService } from './../../../../services/icon-generator.service';
import { FUNCTION } from './../../../../enums/functions';
import { MESSAGES } from './../../../../enums/messages-constants';
import { SnackBarService } from '../../../../services/snack-bar.service';
import { StudentI } from './../../../interfaces/student';
import { GeoRefService } from '../../../../services/geo-ref.service';
import { studentService } from '../../../../services/student.service';
import { StudentBaseModelComponent } from '../student-base-model/student-base-model.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Province } from 'src/app/models/province';
import { MODEL } from 'src/app/enums/models';
import { COMMONS } from 'src/app/enums/commons';
import moment from 'moment';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
  providers: [GeoRefService, IconGeneratorService],
})
export class AddStudentComponent implements OnInit {
  serviceRequest: any = null;

  secondParent: boolean;
  currentStudent: StudentI;
  schoolId = environment.schoolId;

  addingStudent: boolean;

  typeIDs = MODEL.TYPE_ID;
  controlStudent = FORM.STUDENT_CONTROL;
  provinces: Province[];
  districts: Province[];
  selectedProvince: string;
  studentNormalizedDirections: Adress;
  parentNormalizedDirections: Adress;


  messageInfo = 'Espere creando estudiante...';
  messageInfoClass = 'white';

  selectedAdress: any;
  courses = COURSES.GRADE;
  divisions = COURSES.DIVISION;
  levels = COURSES.LEVEL;
  genders = GENDER;

  constructor(
    private snackBarService: SnackBarService,
    private matDialogRef: MatDialog,
    private studentsService: studentService,
    private geoRefService: GeoRefService,
    private icon: IconGeneratorService
  ) {
    this.secondParent = false;
    this.resetStudentModel();
    this.provinces = [];
    this.selectedProvince = '06';
    this.addingStudent = false;
  }

  resetStudentModel() {
    this.currentStudent = MODEL.CURRENT_STUDENT;
    this.currentStudent.schoolId = this.schoolId;
  }

  ngOnInit() {
    this.getAllProvinces();
    this.getAllDistricts(this.selectedProvince);
    console.log(this.divisions);

  }

  showErrors(id: string) {
    console.log(this.controlStudent.get(id).errors);
    console.log(this.controlStudent.valid);
  }

  getAllProvinces() {
    this.geoRefService.getProvinces().subscribe((data) => {
      this.provinces = data.provincias.sort(FUNCTION.SORT.BY_NAME);
    });
  }

  get geoRefService$() {
    return this.geoRefService;
  }

  getStudentNormalizedDirections(direction: string) {
    if (direction.length > 3) {
      this.geoRefService.normalizeDirection(direction).subscribe((data) => {
        this.studentNormalizedDirections = data.direccionesNormalizadas;
      });
    }
    console.log(this.controlStudent.value);
  }

  getparentNormalizedDirections(direction: string) {
    if (direction.length > 3) {
      this.geoRefService.normalizeDirection(direction).subscribe((data) => {
        this.parentNormalizedDirections = data.direccionesNormalizadas;
      });
    }
    console.log(this.controlStudent.value);
  }

  getAdressDirection(adress) {
    return adress.direccion;
  }

  getAdress($event) {
    console.log($event);
    console.log(this.controlStudent.value);
  }

  getAllDistricts(id: string) {
    console.log(id);
    this.geoRefService.getDistricts(id).subscribe((data) => {
      if (id === '02') {
        data.municipios.push({ id: '222', nombre: 'CABA' });
      }
      if (id === '06') {
        data.municipios.push({ id: '444', nombre: 'Malvinas Argentinas' });
      }
      this.districts = data.municipios.sort(FUNCTION.SORT.BY_NAME);
    });
  }

  addParent() {
    this.secondParent = !this.secondParent;
    this.secondParent
      ? this.snackBarService.showSnackBar(
          MESSAGES.PARENT.SUCCES,
          COMMONS.SNACK_BAR.ACTION.ACCEPT,
          COMMONS.SNACK_BAR.TYPE.SUCCES
        )
      : this.snackBarService.showSnackBar(
          MESSAGES.PARENT.NORMAL,
          COMMONS.SNACK_BAR.ACTION.ACCEPT,
          COMMONS.SNACK_BAR.TYPE.NORMAL
        );
  }

  formatDataAdress(data: any): Adress {
    return {
      street: data.nombre_calle,
      number: data.altura,
      locality: data.nombre_localidad,
    };
  }

  addStudent() {

    this.currentStudent = this.controlStudent.value as StudentI;
    const formatedAdress = this.formatDataAdress(
      this.controlStudent.value.adress
    );
    const parentAdress = this.formatDataAdress(
      this.controlStudent.value.parent.adress
    );
    this.currentStudent.adress = formatedAdress;
    this.currentStudent.parent.adress = parentAdress;
    this.currentStudent.schoolId = environment.schoolId;

    this.currentStudent.birthday = moment(this.currentStudent.birthday).format('YYYY-DD-MM');
    this.currentStudent.parent.birthday = moment(this.currentStudent.parent.birthday).format('YYYY-DD-MM');
    

    console.log(this.currentStudent);
    this.serviceRequest = this.studentsService.addStudentPost(this.currentStudent, this.schoolId).subscribe(
      data => {
        setTimeout(() => {
          this.addingStudent = false;
          this.snackBarService.showSnackBar(
            MESSAGES.STUDENT.POST.SUCCES,
            COMMONS.SNACK_BAR.ACTION.ACCEPT,
            COMMONS.SNACK_BAR.TYPE.SUCCES); },
          500);
      },
      error => {
        setTimeout(() => {
          this.addingStudent = false;
          this.snackBarService.showSnackBar(
            MESSAGES.STUDENT.POST.ERROR[error.status],
            COMMONS.SNACK_BAR.ACTION.ACCEPT,
            COMMONS.SNACK_BAR.TYPE.ERROR); },
          500);
    }
    );
    this.resetStudentModel();
  }

  cancelRequest() {
    this.serviceRequest.unsubscribe();
  }

  cancelAdd() {
    this.resetStudentModel();
    this.snackBarService.showSnackBar(
      MESSAGES.CLEAR_FORMS,
      COMMONS.SNACK_BAR.ACTION.ACCEPT,
      COMMONS.SNACK_BAR.TYPE.NORMAL
    );
  }

  openStudentModelBase() {
    this.matDialogRef.open(StudentBaseModelComponent, {
      data: this.schoolId,
      height: '90vh',
      width: '100vw',
    });
  }
}
