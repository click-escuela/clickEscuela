import { IconGeneratorService } from 'src/app/services/icon-generator.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [IconGeneratorService]
})
export class LoginComponent implements OnInit {

  welcomeMessage = 'Bienvenidos';
  load = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  setSession() {
    console.log(this.router);
    this.load = true;
    setTimeout(() => {
      this.load = false;
      this.router.navigate(['/admin/register/']); }
    ,
    5000);

  }

}
