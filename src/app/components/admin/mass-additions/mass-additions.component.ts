import { AuthService } from 'src/app/services/auth.service';
import { HttpEvent, HttpEventType, HttpProgressEvent, HttpResponse } from '@angular/common/http';
import { studentService } from './../../../services/student.service';
import { LoadDetailsComponent } from './load-details/load-details.component';
import { COMMONS } from 'src/app/enums/commons';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IconGeneratorService } from 'src/app/services/icon-generator.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-mass-additions',
  templateUrl: './mass-additions.component.html',
  styleUrls: ['./mass-additions.component.scss']
})
export class MassAdditionsComponent implements OnInit {

  loadPercentage = 0;
  onLoad = false;
  fileName = '';


  @ViewChild(LoadDetailsComponent) details: LoadDetailsComponent;
  constructor(private iconService: IconGeneratorService, private snackBar: SnackBarService, private studentsService: studentService,
    private auth: AuthService) { }

  ngOnInit() {
  }

  startLoad($file: File) {
    this.onLoad = true;
    this.loadPercentage = 0;
    this.fileName = $file.name;


    this.studentsService.uploadBulkFile($file).subscribe(
        result => {
          console.log(result);
          if (result.type === HttpEventType.UploadProgress) {
            const percentDone = Math.round(100 * result.loaded / result.total);
            this.loadPercentage = percentDone;
            console.log(this.loadPercentage);

          } else if (result instanceof HttpResponse) {
            console.log('File is completely loaded!');
            this.details.insertRegistry(
              {
                type: 'Profesores',
                result: 'load',
                download: 'url'
              });
            this.snackBar.showSnackBar (
                'Se cargara el archivo: ' + $file.name
                + '. Verifique en la lista el estado de la carga',
                COMMONS.SNACK_BAR.ACTION.ACCEPT,
                COMMONS.SNACK_BAR.TYPE.NORMAL);

            this.onLoad = false;
          }

        }, error => {
           console.log(error)
           this.snackBar.showSnackBar (
                'Se produjo un error al intentar cargar el archivo',
                COMMONS.SNACK_BAR.ACTION.ACCEPT,
                COMMONS.SNACK_BAR.TYPE.ERROR);
           this.onLoad = false;
        }


      );

  }

}
