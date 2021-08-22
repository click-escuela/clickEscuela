import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-load-details',
  templateUrl: './show-load-details.component.html',
  styleUrls: ['./show-load-details.component.css']
})
export class ShowLoadDetailsComponent implements OnInit {

  loadPercentage = 0;
  constructor() {
   }

  ngOnInit() {
   this.loadPercentage = Math.floor(Math.random() * (100 - 15)) + 15;
  }

}
