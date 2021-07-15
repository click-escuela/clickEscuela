import { IconGeneratorService } from 'src/app/services/icon-generator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[IconGeneratorService]
})
export class LoginComponent implements OnInit {

  welcomeMessage="Bienvenidos";
  
  constructor() { }

  ngOnInit() {
  }

}
