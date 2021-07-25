import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mass-additions',
  templateUrl: './mass-additions.component.html',
  styleUrls: ['./mass-additions.component.scss']
})
export class MassAdditionsComponent implements OnInit {

  selectedOption = '0';
  constructor() { }

  ngOnInit() {
  }

  selectMenu(menuoption: string) {
    this.selectedOption = '' + menuoption;
  }

}
