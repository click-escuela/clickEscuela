import { dataStudents } from './../../../teacher/students/students';
import { ShowLoadDetailsComponent } from './../show-load-details/show-load-details.component';
import { MatDialog } from '@angular/material/dialog';
import { IconGeneratorService } from 'src/app/services/icon-generator.service';
import { MassAddition } from './../../../interfaces/mass-addition';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ProcessorService } from 'src/app/services/processor.service';

@Component({
  selector: 'app-load-details',
  templateUrl: './load-details.component.html',
  styleUrls: ['./load-details.component.scss']
})
export class LoadDetailsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[];
  dataSource: any;

  data: MassAddition[];


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    private icon: IconGeneratorService,
    private dialog: MatDialog,
    private processorService: ProcessorService) {
    this.data = [];
  }

  ngAfterViewInit() {
    this.getUploads();
    console.log(this.data);
  }

  ngOnInit() {
    this.displayedColumns = ['name', 'download', 'result'];

    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.data;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  generateBlobResult(id) {

    const list = this.dataSource.data;
    const data = list.find(a => a.id === id);

    console.log(data)

    const myfile = atob(data.file);
    const blob = new Blob([myfile], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    const objectUrl = URL.createObjectURL(blob);
    window.open(objectUrl);
  }

  insertRegistry(addition: MassAddition) {
    this.data.push(addition);
    this.dataSource.data = this.data;
    this.table.renderRows();
  }

  getUploads() {
    this.processorService.getDataProcessor().subscribe(
      result => {
        this.dataSource.data = result;
      }
    );
  }

  openShowDetail() {
    const dialogRef = this.dialog.open(ShowLoadDetailsComponent,
      {
        width: '40vw',
        height: '250px'
      });
  }

}


