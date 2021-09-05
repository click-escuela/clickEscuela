import { ShowLoadDetailsComponent } from './../show-load-details/show-load-details.component';
import { MatDialog } from '@angular/material/dialog';
import { IconGeneratorService } from 'src/app/services/icon-generator.service';
import { MassAddition } from './../../../interfaces/mass-addition';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-load-details',
  templateUrl: './load-details.component.html',
  styleUrls: ['./load-details.component.scss']
})
export class LoadDetailsComponent implements OnInit {

  displayedColumns: string[];
  dataSource: any;

  data: MassAddition[];


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private icon: IconGeneratorService, private dialog: MatDialog) {
    this.data = [];
    const addition: MassAddition = {
      type: 'Profesores',
      result: 'success',
      download: 'url'
    };
    const addition2: MassAddition = {
      type: 'Profesores',
      result: 'error',
      download: 'url'
    };
    const addition3: MassAddition = {
      type: 'Profesores',
      result: 'load',
      download: 'url'
    };

    this.data.push(addition);
    this.data.push(addition2);
    this.data.push(addition3);
  }

  ngOnInit() {
    this.displayedColumns = ['type', 'download', 'result'];


    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.data;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  insertRegistry(addition: MassAddition) {
    this.data.push(addition);
    this.dataSource.data = this.data;
    this.table.renderRows();
  }

  openShowDetail() {
    const dialogRef = this.dialog.open(ShowLoadDetailsComponent,
      {
        width: '40vw',
        height: '250px'
      });
  }

}
