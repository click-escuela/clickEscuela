import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpensesService } from './../../../services/expenses.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Student } from 'src/app/models/student';
import { AccountService } from 'src/app/services/account.service';
import { studentService } from 'src/app/services/student.service';
import { ModalFrameComponent } from '../../student/modal-frame/modal-frame.component';
import moment from 'moment';
import { RangeSelectorComponent } from '../../commons/range-selector/range-selector.component';
import { SVG_CONST } from '../svg-constants';
import { DAY, TYPE, MONTH, WEEK, CUSTOM_PERIOD } from '../type-constants';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {




  @ViewChild('tabGroup', { static: false }) tab: ElementRef;

  accounts: any[];
  studentsList: Student[]
  currentDate = new Date()
  selectedRange: any

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private accountsService: AccountService,
    private studentsService: studentService,
    private sanitazer: DomSanitizer,
    private dialog: MatDialog,
    private expensesService: ExpensesService,
    private snackBar: MatSnackBar) {
    iconRegistry.addSvgIconLiteral('out-expenses', sanitizer.bypassSecurityTrustHtml(SVG_CONST.EXPENSES));
    iconRegistry.addSvgIconLiteral('debtors', sanitizer.bypassSecurityTrustHtml(SVG_CONST.DEBTORS));
    iconRegistry.addSvgIconLiteral('csv-icon', sanitizer.bypassSecurityTrustHtml(SVG_CONST.CSV_ICON));
    iconRegistry.addSvgIconLiteral('pdf-icon', sanitizer.bypassSecurityTrustHtml(SVG_CONST.PDF_ICON));
    iconRegistry.addSvgIconLiteral('daily', sanitizer.bypassSecurityTrustHtml(SVG_CONST.DAILY));
    iconRegistry.addSvgIconLiteral('weekly', sanitizer.bypassSecurityTrustHtml(SVG_CONST.WEEKLY));
    iconRegistry.addSvgIconLiteral('monthly', sanitizer.bypassSecurityTrustHtml(SVG_CONST.MONTHLY));
    iconRegistry.addSvgIconLiteral('custom-date', sanitizer.bypassSecurityTrustHtml(SVG_CONST.CUSTOM_DATE));

    this.accounts = []

    this.studentsList = this.studentsService.studentsList

    for (let student of this.studentsList) {
      let account =
      {
        name: student.name,
        surname: student.surname,
        course: student.course,
        titular: student.parent1.name + ' ' + student.parent1.surname,
        state: this.getAccountState(student.id),
        titularID: student.id,
        idAccount: student.parent1.id
      }

      this.selectedRange = {
        range:
        {
          start: Date,
          end: Date
        },
        option: -1
      }

      this.accounts.push(account)
    }

  }

  getAccountState(id: string) {
    return this.accountsService.accountsList.filter(a => a.$titularId == id)[0].$state
  }

  generateDebtorsReport(method: number) {
    //alert("Se esta generando el repore")

    let doc = new jsPDF('a4')
    let columns = ["Nombre", "Apellido", "Curso", "Titular"]
    let debtors = this.accounts.filter(a => a.state == false)

    let tableData = this.generateTableData(debtors)


    if (method == 1) {
      doc.autoTable(columns, tableData,
        {
          margin: { top: 60 },
          styles:
          {
            lineWidth: 0.1,
            lineColor: [60, 60, 60]
          },

          headStyles: { fillColor: [45, 92, 132] }
        }

      );

      var string = doc.output('datauristring');

      let url = this.sanitazer.bypassSecurityTrustResourceUrl(string)


      this.openModalFrame(url)
    }

    else if (method == 2) {

      tableData.splice(0, 0, columns)
      this.arrayObjToCsv(tableData);



    }





  }

  ngOnInit() {
  }

  arrayObjToCsv(ar) {

    if (window.Blob && (window.URL || window.webkitURL)) {
      var contenido = "",
        d = new Date(),
        blob,
        reader,
        save,
        clicEvent;

      for (var i = 0; i < ar.length; i++) {

        if (i == 0)
          contenido += Object.keys(ar).join(";") + "\n";
        contenido += Object.keys(ar[i]).map(function (key) {
          return ar[i][key];
        }).join(";") + "\n";
      }

      blob = new Blob(["\ufeff", contenido], { type: 'text/csv' });

      var reader1 = new FileReader();
      reader1.onload = function (event) {

        save = document.createElement('a');
        save.href = event.target.result;
        save.target = '_blank';

        save.download = "log_" + d.getDate() + "_" + (d.getMonth() + 1) + "_" + d.getFullYear() + ".csv";
        try {

          clicEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
          });
        } catch (e) {
          clicEvent = document.createEvent("MouseEvent");
          clicEvent.initEvent('click', true, true);
        }

        save.dispatchEvent(clicEvent);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
      }
      reader1.readAsDataURL(blob);

    } else {
      alert("Su navegador no permite esta acción");
    }
  };

  getExpensesReport(period, method) {


    let doc = new jsPDF('a4')
    let columns = ["Importe", "Descripcion", "Fecha"]
    let expenses = []

    let weekDays = this.getweekstart(new Date())



    if (period == DAY) {
      expenses =
        (
          this.expensesService.expenseList.filter(

            a =>
              a.$date.getDate() === this.currentDate.getDate() &&
              a.$date.getMonth() === this.currentDate.getMonth() &&
              a.$date.getFullYear() === this.currentDate.getFullYear())
        )
      if (expenses.length === 0) {
        this.showSnackBar("No encontaron registros para el dia de la fecha: " + moment(this.currentDate).format('DD/MM/YYYY'))
      }
    }
    if (period == WEEK) {

      console.log(weekDays)



      expenses =
        (this.expensesService.expenseList.filter(a =>
          moment(a.$date, "DD-MM-YYYY").isSameOrAfter(moment(weekDays[0], "DD-MM-YYYY"), 'day') &&
          moment(a.$date, "DD-MM-YYYY").isSameOrBefore(moment(weekDays[weekDays.length - 1], "DD-MM-YYYY"), 'day')
        ))

      if (expenses.length === 0) {
        this.showSnackBar("No se encontaron ingresos para el periodo: " +
          moment(weekDays[0]).format('DD/MM/YYYY') +
          " => " +
          moment(weekDays[weekDays.length - 1]).format('DD/MM/YYYY'))
      }


    }
    if (period == MONTH) {
      expenses = (this.expensesService.expenseList.filter(a => a.$date.getMonth() === this.currentDate.getMonth() && a.$date.getFullYear() == this.currentDate.getFullYear()))
    }
    if (period == CUSTOM_PERIOD) {
      console.log(this.selectedRange)



      expenses =

        (this.expensesService.expenseList.filter(a =>
          moment(a.$date, "DD-MM-YYYY").isSameOrAfter(moment(this.selectedRange.range.start, "DD-MM-YYYY"), 'day') &&
          moment(a.$date, "DD-MM-YYYY").isSameOrBefore(moment(this.selectedRange.range.end, "DD-MM-YYYY"), 'day')
        ))

      if (expenses.length === 0) {
        this.showSnackBar("No se encontaron ingresos para el periodo: " +
          moment(this.selectedRange.range.start).format('DD/MM/YYYY') +
          " => " +
          moment(this.selectedRange.range.end).format('DD/MM/YYYY'))
      }
    }

    if (expenses.length > 0) {
      let tableData = this.generateTableData(expenses)

      if (method == 1) {
        let text1 = "Reporte de gastos " + TYPE[period]
        let text2 = "Generado el dia " + moment(this.currentDate).format("DD/MM/YYYY")


        doc.setFontSize(15)
        doc.text(text1, this.centerText(0, 210, doc.getTextWidth(text1)), 25)
        doc.setFontSize(12)
        doc.text(text2, this.centerText(0, 210, doc.getTextWidth(text2)), 35)

        if (period == "CUSTOM_PERIOD") {
          let text3 = moment(this.selectedRange.range.start).format("DD-MM-YYYY") + " a s" + moment(this.selectedRange.range.end).format("DD-MM-YYYY")
          doc.text(text3, this.centerText(0, 210, doc.getTextWidth(text3)), 45)

        }

        doc.autoTable(columns, tableData,
          {
            margin: { top: 60 },
            styles:
            {
              lineWidth: 0.1,
              lineColor: [60, 60, 60]
            },

            headStyles: { fillColor: [45, 92, 132] }
          }

        );

        var string = doc.output('datauristring');

        let url = this.sanitazer.bypassSecurityTrustResourceUrl(string)

        this.openModalFrame(url)



      }

      else if (method == 2) {
        tableData.splice(0, 0, columns)
        this.arrayObjToCsv(tableData);
      }

    }
    else {
      //this.showSnackBar("No existen entradas para el reporte: "+period)
    }






  }


  openModalFrame(url) {
    const dialogRef = this.dialog.open(ModalFrameComponent,
      {
        data: url,
        width: '90vw',
        height: '100vh'
      }
    )

    dialogRef.afterClosed().subscribe(result => { });
  }

  centerText(initialPoint: number, containerWidth: number, stringWidht: number) {
    console.log(initialPoint + stringWidht / 2)
    return initialPoint + (containerWidth - stringWidht) / 2;
  }

  generateTableData(data) {
    let tableData = []

    for (let obj of data) {


      let row = (Array.from(Object.values(obj)))

      tableData.push(row)



    }

    console.log(tableData)

    return tableData
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, "Aceptar", { duration: 5500 })
  }

  getweekstart(current) {
    const week = [];
    const weekFormat = [];

    if (current.getDay() == 0) {//En los casos en que es domingo, restar como si fuera septimo dia y no cero
      current.setDate(((current.getDate() - 7) + 1));
    } else {
      current.setDate(((current.getDate() - current.getDay()) + 1));
    }

    for (let i = 0; i < 7; i++) {
      week.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    week.forEach((w) => {
      weekFormat.push(w);
    });
    return weekFormat;


  }

  openDateRangeSelector() {
    const dialogRef = this.dialog.open(RangeSelectorComponent,
      {

        width: '400px',
        height: '250px'
      }
    )

    dialogRef.afterClosed().subscribe(result => {


      this.selectedRange = result



      this.getExpensesReport("CUSTOM_PERIOD", result.option)

    });
  }

}
