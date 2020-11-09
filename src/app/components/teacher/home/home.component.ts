import { Component, OnInit } from '@angular/core';
import { Dashboardproperties } from 'src/app/models/dashboard-properties';
import { trabajoPractico } from '../../commons/data';
import { examen } from '../../commons/data2';
import { tareas } from '../../commons/data3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dashBoardsProperties: Dashboardproperties[] = new Array(0);
  constructor() { }

  ngOnInit() {
    this.dashBoardsProperties.push(new Dashboardproperties('Trabajo Practico', '80%', 'icon-card-homework', null, trabajoPractico));
    this.dashBoardsProperties.push(new Dashboardproperties('Tareas', '13/20', 'icon-card', null ,tareas));
    this.dashBoardsProperties.push(new Dashboardproperties('Asistencia de alumnos', '20/20', 'icon-card-attendance', null, null));
    this.dashBoardsProperties.push(new Dashboardproperties('Cantidad de aprobados', '15/20', 'icon-card-approved', null, examen));

  }

}
