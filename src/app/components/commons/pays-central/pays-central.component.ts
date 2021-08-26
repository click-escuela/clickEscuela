import { Component, OnInit, ViewChild } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-pays-central',
  templateUrl: './pays-central.component.html',
  styleUrls: ['./pays-central.component.scss']
})
export class PaysCentralComponent implements OnInit {

  @ViewChild(MatRadioButton) cash : MatRadioButton;

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

  constructor() {
    this.years =[]
    for (let i = 2021; i < 2036; i++) {
      this.years.push(i);
    }
   }

  ngOnInit() {
    console.log(this.cash)
  }

  validCard() {
    if (this.creditCard.number === '1111111111111111') {
      this.selectedImage = this.cardImages[1];
      this.animateLayout();
    } else if (this.creditCard.number ==='2222222222222222') {
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

}

