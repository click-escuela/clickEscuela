import { UserInfoComponent } from './user-info/user-info.component';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  username: string;
  userAvatar: string;
  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.getUserName();
    this.userAvatar = 'closed';
  }

  openBottomSheet(): void {
   const open =  this.bottomSheet.open(UserInfoComponent);
   open.afterOpened().subscribe(
     open => {this.userAvatar = 'opened';}
   );
   open.afterDismissed().subscribe(
    open => {this.userAvatar = 'closed';}
  );
  }

  getUserName() {
    this.username = JSON.parse(localStorage.getItem('token')).name;

  }

}