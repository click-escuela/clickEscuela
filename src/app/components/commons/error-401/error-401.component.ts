import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-error-401',
  templateUrl: './error-401.component.html',
  styleUrls: ['./error-401.component.scss']
})
export class Error401Component implements OnInit {

  constructor(private router: Router, private location: Location, private dialog: MatDialog) { }

  ngOnInit() {
  }

  redirectLogin() {
    localStorage.clear();
    this.router.navigate(['/login/']);
  }

  goBack() {
   window.history.go(-2);
  }

  confirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Esta acción cerrara la sesión actual: ¿Esta seguro que desea regresar a la pagina de login?',
      width: '360px',
      height: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {

        this.redirectLogin();
      }
    });
  }

}
