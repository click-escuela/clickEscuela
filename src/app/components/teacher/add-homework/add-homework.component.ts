import { MatDatepicker } from '@angular/material/datepicker';
import { Homework } from './../../../models/Homework';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-add-Homework',
  templateUrl: './add-Homework.component.html',
  styleUrls: ['./add-Homework.component.css']
})
export class AddHomeworkComponent implements OnInit
 {

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<any>;

  currentHomework: Homework;
  constructor(public dialogRef: MatDialogRef<AddHomeworkComponent>, @Inject(MAT_DIALOG_DATA) public data: any) 
  { 
    this.currentHomework=
    {
    code:"",
    name:"",
    description:"",
    deliveryDate: new Date,
    course:"",
    matter: ""
    }
  }



  

  ngOnInit() 
  {
    console.log(this.datepicker)
  }

}