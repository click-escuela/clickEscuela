import { SnackBarServiceMock } from './../../../test-mocks/snack-bar-mock';
import { LoadScreenComponent } from './../load-screen/load-screen.component';
import { MaterialModule } from 'src/app/test-mocks/material.module';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { LoginComponent } from './login.component';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,

      RouterTestingModule.withRoutes([
              {
                  path: 'admin/register',
                  component: LoginComponent
              }
          ])
      ],
      declarations: [ LoginComponent , LoadScreenComponent],
      providers: [SnackBarService, SnackBarServiceMock],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checkCredentials after Date', () => {
    window.localStorage.setItem('token', JSON.stringify({token: 'test', creationDate: new Date('12/01/2020 ')}));
    component.checkCredentials();
    expect(component.validCredentials).toBeFalsy();
  });

  it('checkCredentials before Date', () => {
    window.localStorage.setItem('token', JSON.stringify({token: 'test', creationDate: new Date('12/01/3000 ')}));
    component.checkCredentials();
    expect(component.validCredentials).toBeTruthy();
  });

  it('closeSession', () => {
    component.closeSession();
    expect(component.validCredentials).toBeFalsy();
  });

  it('setSessionToken without credential ', () => {

    window.localStorage.clear();
    component.setSessionToken();
    expect(component.checkLogin).toBeFalsy();
  });

  it('setSessionToken with credential', fakeAsync(() => {
    window.localStorage.setItem('token', JSON.stringify({token: 'test', creationDate: new Date('12/01/2020 '), role: '[ROLE_ADMIN]'}));
    component.setSessionToken();
    tick(4001);
    expect(component.checkLogin).toBeTruthy();

  }));

});
