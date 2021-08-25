import { Component, OnInit } from '@angular/core';
import { IconGeneratorService } from 'src/app/services/icon-generator.service';

@Component({
  selector: 'app-mass-additions',
  templateUrl: './mass-additions.component.html',
  styleUrls: ['./mass-additions.component.scss']
})
export class MassAdditionsComponent implements OnInit {

  constructor(private iconService: IconGeneratorService) { }

  ngOnInit() {
  }

}
