import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  credential: any;
  constructor(private route: Router) { }

  ngOnInit() {
    this.credential = JSON.parse(localStorage.getItem('token'));
  }

  closeSession() {
    localStorage.clear();
    this.route.navigate(['/login/']);
  }

}
