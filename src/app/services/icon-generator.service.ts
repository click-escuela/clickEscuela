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
    iconRegister.addSvgIcon('user', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/user.svg'));
    iconRegister.addSvgIcon('cancel-error', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/error.svg'));
    iconRegister.addSvgIcon('plus', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/plus.svg'));
    iconRegister.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/search.svg'));
    iconRegister.addSvgIcon('add-student', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/add-student.svg'));
    iconRegister.addSvgIcon('add-teacher', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/add-teacher.svg'));
    iconRegister.addSvgIconLiteral('custom-date', sanitizer.bypassSecurityTrustHtml(SVG_CONST.LEFT_ARROW));
    iconRegister.addSvgIconLiteral('custom-date', sanitizer.bypassSecurityTrustHtml(SVG_CONST.RIGHT_ARROW));
    iconRegister.addSvgIcon('upload', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/upload.svg'));
    iconRegister.addSvgIcon('load-progress', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/load-progress.svg'));
    iconRegister.addSvgIcon('cancel', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/cancel.svg'));
    iconRegister.addSvgIcon('check', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/accept.svg'));
    iconRegister.addSvgIcon('eye', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/eye.svg'));
    iconRegister.addSvgIconLiteral('leftSvg', sanitizer.bypassSecurityTrustHtml(SVG_CONST.LEFT_ARROW));
    iconRegister.addSvgIconLiteral('rightSvg', sanitizer.bypassSecurityTrustHtml(SVG_CONST.RIGHT_ARROW));
    iconRegister.addSvgIcon('set-pay', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/set-pay.svg'));
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
