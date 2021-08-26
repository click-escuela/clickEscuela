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

  @ViewChild(LoadDetailsComponent) details: LoadDetailsComponent;
  constructor(private iconService: IconGeneratorService, private snackBar: SnackBarService) { }

  ngOnInit() {
  }

  startLoad($event: File) {
    console.log($event);
    this.snackBar.showSnackBar (
      'Se cargara el archivo: ' + $event.name,
      COMMONS.SNACK_BAR.ACTION.ACCEPT,
      COMMONS.SNACK_BAR.TYPE.NORMAL);

    this.details.insertRegistry(
      {
        type: 'Profesores',
        result: 'load',
        download: 'url'
      });

  }

}
