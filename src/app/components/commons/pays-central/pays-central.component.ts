import { ConfirmDialogComponent } from 'src/app/components/commons/confirm-dialog/confirm-dialog.component';
import { PaymentService } from './../../../services/payment.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { COMMONS } from 'src/app/enums/commons';

@Component({
  selector: 'app-pays-central',
  templateUrl: './pays-central.component.html',
  styleUrls: ['./pays-central.component.scss']
})
export class PaysCentralComponent implements OnInit {

  @ViewChild(MatRadioButton) cash: MatRadioButton;


  creditCard = {
    number: '1234567812114444',
    expiration: {
      month: '01',
      year: '24'
    },
    owner: 'Nombre Apellido'
  };

  cardImages = [
    {
      bank: 'bank.svg',
      entity: 'logo.svg',
      class: 'default',
      color: 'black' },
    {
    bank: 'santander.svg',
    entity: 'visa.svg',
    class: 'red',
    color: 'white'
  },
    {
    bank: 'bbva.svg',
    entity: 'master.svg',
    class: 'blued',
    color: 'white' },

  ];

  months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12'
  ];
  years: number[];

  selectedImage = this.cardImages[0];
  changeCardLayout = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public paymentService: PaymentService,
              public snackBar: SnackBarService,
              public dialog: MatDialog) {
    this.years = [];
    for (let i = 2021; i < 2036; i++) {
      this.years.push(i);
    }
   }

  ngOnInit() {
    console.log(this.data);
  }

  validCard() {
    if (this.creditCard.number === '1111111111111111') {
      this.selectedImage = this.cardImages[1];
      this.animateLayout();
    } else if (this.creditCard.number === '2222222222222222') {
      this.animateLayout();
      this.selectedImage = this.cardImages[2];
    } else {
      this.selectedImage = this.cardImages[0];
    }
  }

  animateLayout() {
    this.changeCardLayout = true;
    setTimeout(() => {
      this.changeCardLayout = false;
    }, 500);
  }

  payBill() {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Esta seguro que desea pagar la factura del periodo ' + this.data.bill.month + '/' + this.data.bill.year,
      width: '360px',
      height: '250px',
      panelClass:'confirm-dialog'
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.paymentService.pay(this.data.bill.id).subscribe(
            result => {
              this.snackBar.showSnackBar('La factura se pago con exito',
              COMMONS.SNACK_BAR.ACTION.ACCEPT,
              COMMONS.SNACK_BAR.TYPE.SUCCES);
            },
            error => {
              this.snackBar.showSnackBar('Existio un error con el servicio de pagos',
              COMMONS.SNACK_BAR.ACTION.ACCEPT,
              COMMONS.SNACK_BAR.TYPE.ERROR);
            }
            );
        }
      }
    );
  }

}

