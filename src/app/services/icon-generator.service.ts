import { MatIconRegistry } from '@angular/material/icon';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SVG_CONST } from '../components/admin/svg-constants';

@Injectable({
  providedIn: 'root'
})
export class IconGeneratorService {


constructor(
  public sanitizer: DomSanitizer , iconRegister: MatIconRegistry) {
    iconRegister.addSvgIconLiteral('principal-logo', sanitizer.bypassSecurityTrustHtml(SVG_CONST.PRINCIPAL_LOGO));
    iconRegister.addSvgIconLiteral('out-expenses', sanitizer.bypassSecurityTrustHtml(SVG_CONST.EXPENSES));
    iconRegister.addSvgIconLiteral('debtors', sanitizer.bypassSecurityTrustHtml(SVG_CONST.DEBTORS));
    iconRegister.addSvgIconLiteral('csv-icon', sanitizer.bypassSecurityTrustHtml(SVG_CONST.CSV_ICON));
    iconRegister.addSvgIconLiteral('pdf-icon', sanitizer.bypassSecurityTrustHtml(SVG_CONST.PDF_ICON));
    iconRegister.addSvgIconLiteral('daily', sanitizer.bypassSecurityTrustHtml(SVG_CONST.DAILY));
    iconRegister.addSvgIconLiteral('weekly', sanitizer.bypassSecurityTrustHtml(SVG_CONST.WEEKLY));
    iconRegister.addSvgIconLiteral('monthly', sanitizer.bypassSecurityTrustHtml(SVG_CONST.MONTHLY));
    iconRegister.addSvgIconLiteral('custom-date', sanitizer.bypassSecurityTrustHtml(SVG_CONST.CUSTOM_DATE));
    iconRegister.addSvgIcon('user', sanitizer.bypassSecurityTrustResourceUrl('user.svg'));
    iconRegister.addSvgIcon('cancel-error', sanitizer.bypassSecurityTrustResourceUrl('error.svg'));
    iconRegister.addSvgIcon('plus', sanitizer.bypassSecurityTrustResourceUrl('plus.svg'));
    iconRegister.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('search.svg'));
    iconRegister.addSvgIcon('add-student', sanitizer.bypassSecurityTrustResourceUrl('add-student.svg'));
    iconRegister.addSvgIcon('add-teacher', sanitizer.bypassSecurityTrustResourceUrl('add-teacher.svg'));
    iconRegister.addSvgIconLiteral('custom-date', sanitizer.bypassSecurityTrustHtml(SVG_CONST.LEFT_ARROW));
    iconRegister.addSvgIconLiteral('custom-date', sanitizer.bypassSecurityTrustHtml(SVG_CONST.RIGHT_ARROW));
    iconRegister.addSvgIcon('upload', sanitizer.bypassSecurityTrustResourceUrl('upload.svg'));
    iconRegister.addSvgIcon('load-progress', sanitizer.bypassSecurityTrustResourceUrl('load-progress.svg'));
    iconRegister.addSvgIcon('cancel', sanitizer.bypassSecurityTrustResourceUrl('cancel.svg'));
    iconRegister.addSvgIcon('check', sanitizer.bypassSecurityTrustResourceUrl('accept.svg'));
    iconRegister.addSvgIcon('eye', sanitizer.bypassSecurityTrustResourceUrl('eye.svg'));
    iconRegister.addSvgIconLiteral('leftSvg', sanitizer.bypassSecurityTrustHtml(SVG_CONST.LEFT_ARROW));
    iconRegister.addSvgIconLiteral('rightSvg', sanitizer.bypassSecurityTrustHtml(SVG_CONST.RIGHT_ARROW));
    iconRegister.addSvgIcon('set-pay', sanitizer.bypassSecurityTrustResourceUrl('set-pay.svg'));
    iconRegister.addSvgIcon('password-saver', sanitizer.bypassSecurityTrustResourceUrl('password-saver.svg'));

    iconRegister.addSvgIconLiteral(
      'thumbs-up',
      sanitizer.bypassSecurityTrustHtml(SVG_CONST.THUMBUP_ICON)
    );
    iconRegister.addSvgIconLiteral(
      'in-time',
      sanitizer.bypassSecurityTrustHtml(SVG_CONST.IN_TIME)
    );
    iconRegister.addSvgIconLiteral(
      'over-time',
      sanitizer.bypassSecurityTrustHtml(SVG_CONST.OVER_TIME)
    );

    iconRegister.addSvgIconLiteral(
      'to-do',
      sanitizer.bypassSecurityTrustHtml(SVG_CONST.TO_DO)
    );
    iconRegister.addSvgIconLiteral(
      'realized',
      sanitizer.bypassSecurityTrustHtml(SVG_CONST.REALIZED)
    );


  }



}
