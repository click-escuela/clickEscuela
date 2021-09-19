import { IconGeneratorService } from './../../../services/icon-generator.service';
import { PROFILE } from './../../../enums/profiles';
import { FORM } from 'src/app/enums/form-controls';
import { Session } from './../../../models/session';
import { COMMONS } from 'src/app/enums/commons';
import { SnackBarService } from './../../../services/snack-bar.service';
import { AuthService } from './../../../services/auth.service';
import { Token } from './../../../models/token';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [IconGeneratorService],
})
export class LoginComponent implements OnInit {
  welcomeMessage = 'Bienvenidos';
  load = false;
  validCredentials: boolean;
  // Variables para animar a clicky
  yesAnimate = false;
  help = false;
  checkLogin = false;
  countErrors = 0;
  // Fin de variables de animacion
  selectedProfile = '';

  currentSession: any;

  @ViewChild('tooltip') tooltip: MatTooltip;

  sessions: Session[];
  login: any;

  loginControl = FORM.LOGIN_CONTROL;
  viewPassword = false;

  clickyMessage: string;
  constructor(
    private router: Router,
    private authService: AuthService,
    private snackbar: SnackBarService,
    icon: IconGeneratorService
  ) {
    this.clickyMessage = 'Bienvenidos';
  }

  ngOnInit() {this.checkCredentials(); }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {


    setTimeout(() => {
      this.yesAnimate = true;
      this.tooltip.show();
    }, 1000);

    setTimeout(() => {
      this.yesAnimate = false;
      this.tooltip.hide();
      this.clickyMessage = '¿Necesitas ayuda?';
    }, 4000);
  }

  toggleHelp() {
    this.help = !this.help;
  }
  toggleViewPassword(){
    this.viewPassword = !this.viewPassword;
  }

  checkCredentials() {

    if (localStorage.getItem('token')) {
    const credential = JSON.parse(localStorage.getItem('token'));
    this.currentSession = credential;
    const authDate = moment(credential.creationDate);
    console.log(authDate);

    if (authDate.isBefore(new Date(), 'minutes')) {

      this.validCredentials = false;

      setTimeout(() => {
        this.snackbar.showSnackBar(
        'Las credenciales han expirado. Inicie sesion nuevamente',
        COMMONS.SNACK_BAR.ACTION.ACCEPT,
        COMMONS.SNACK_BAR.TYPE.ERROR
      );
      }, 500);

      localStorage.clear();

    } else {
      this.validCredentials = true;
      setTimeout(() => {
        this.snackbar.showSnackBar(
        'Bienvenido Nuevamente',
        COMMONS.SNACK_BAR.ACTION.ACCEPT,
        COMMONS.SNACK_BAR.TYPE.SUCCES
      );
      }, 500);

    }
    }
  }



  closeSession() {
    localStorage.clear();
    this.validCredentials = false;
  }

  setSessionToken() {
    let credential;

    if (localStorage.getItem('token')) {
      credential = JSON.parse(localStorage.getItem('token'));
    }

    if (credential) {
      this.load = true;
      this.checkLogin = true;

      setTimeout(() => {
      this.load = false;
      this.router.navigate([PROFILE[this.formatRole(credential.role)]]);
    }, 3000);
    }

  }

  setSession() {
    this.checkLogin = true;
    let token: Token = null;
    this.load = true;

    this.authService.getToken(this.loginControl.value as Credential).subscribe(
      (response) => {

        token = response;
        localStorage.setItem('token', JSON.stringify(token));

        setTimeout(() => {
          this.load = false;
          this.checkLogin = false;
          this.router.navigate([PROFILE[this.formatRole(response.role)]]);
        }, 3000);
      },
      (error) => {
        this.load = false;
        this.checkLogin = false;
        this.countErrors++;
        if (this.countErrors % 2 === 0) {
        this.tooltip.show();
      }
        this.snackbar.showSnackBar(
        'Revise el usario y la contraseña',
        COMMONS.SNACK_BAR.ACTION.CLOSE,
        COMMONS.SNACK_BAR.TYPE.ERROR
      );
      }
    );

  }

  formatRole(role: string): string {
    return role.replace('[', '').replace(']', '');
  }
}
