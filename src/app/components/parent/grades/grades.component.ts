import { GradeI } from './../../interfaces/grade';
import { Component, OnInit } from '@angular/core';
import { GradesService } from 'src/app/services/grades.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { COMMONS } from 'src/app/enums/commons';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesResumeComponent implements OnInit {

  sonParent: string[];

  gradesList: GradeI[];

  constructor(private gradeService: GradesService, private snackbar: SnackBarService) {
  
  }

  showSon(son: string) {
  }

  ngOnInit(): void {
    this.getGrades();
  }

  getGrades() {
    this.gradeService.getGradesByParent('f495e863-beb6-4dc6-a32b-7fa84148a36c' ).subscribe(
      result => {
        console.log(result);
        this.gradesList = result;
        this.snackbar.showSnackBar('Se obtuvieron las siguientes listas de notas',
                 COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.SUCCES);
       },
      error => { this.snackbar.showSnackBar('No se pudieron obtener las notas de los correspondientes estudiantes',
       COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.ERROR); }
    );
  }



}
