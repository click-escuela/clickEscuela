import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pays-central',
  templateUrl: './pays-central.component.html',
  styleUrls: ['./pays-central.component.scss']
})
export class PaysCentralComponent implements OnInit {

  creditCard = {
    number: '1234  5678  1211  4444',
    expiration: '01/12',
    owner: 'Nombre Apellido'
  };

  cardImages = [
    {
    bank: 'santander.svg',
    entity: 'visa.svg',
    class: 'red'
  },
    {
    bank: 'bbva.svg',
    entity: 'master.svg',
    class: 'blued' }
  ];

  selectedImage = this.cardImages[0];
  changeCardLayout = false;

  constructor() { }

  ngOnInit() {
  }

  validCard() {
    if (this.creditCard.number === '1111111111111111') {
      this.selectedImage = this.cardImages[1];
      this.animateLayout();
    } else {
      this.selectedImage = this.cardImages[0];

    }
  }

  animateLayout(){
    this.changeCardLayout = true;
    setTimeout(() => {
      this.changeCardLayout = false;
    }, 500);
  }

}

