import { SCREEN } from './../../../../enums/info-messages';
import { MESSAGES } from './../../../../enums/messages-constants';
import { COMMONS } from './../../../../enums/commons';
import { SnackBarService } from './../../../../services/snack-bar.service';
import { StudentFullDetail } from '../../../interfaces/student-full-detail';
import { IconGeneratorService } from './../../../../services/icon-generator.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from './../../../../services/account.service';
import { Student } from './../../../../models/student';
import { studentService } from './../../../../services/student.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentsDetailComponent } from 'src/app/components/commons/payments-detail/payments-detail.component';
import { PaysCentralComponent } from 'src/app/components/commons/pays-central/pays-central.component';
import { Bill } from 'src/app/components/interfaces/bill';
import { STATUS } from './account-status';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {

  accounts: any[];
  studentsList: Student[];

  displayedColumns: string[];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  checked: boolean;

  // Valores para el loadScreen
  messageInfo = SCREEN.ACCOUNTS.INFO;
  loadAccounts = false;
  messageError = SCREEN.ACCOUNTS.ERROR;
  loadError = false;


  constructor(
    private studentsService: studentService,

    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private icon: IconGeneratorService,
    private snackbar: SnackBarService
  ) {
    this.studentsList = [];
    this.accounts = [];
    this.checked = false;


  }


  ngOnInit() {
    this.displayedColumns = [
      'name',
      'surname',
      'course',
      'titular',
      'state',
      'actions',
    ];



    // Assign the data to the data source for the table to render

    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.accounts;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.getAccounts();

  }

  getAccounts() {
    this.loadAccounts = false;
    this.loadError = false;
    this.studentsService.getStudents(true, '12345').subscribe(
      result => {
        this.accounts = result;
        this.dataSource.data = result;
        console.log(result);
        setTimeout(() => {this.loadAccounts = true;
        }, 600);

      },
      error => {
        setTimeout(() => {this.loadError = true;
          this.snackbar.showSnackBar(SCREEN.ACCOUNTS.ERROR, COMMONS.SNACK_BAR.ACTION.ACCEPT, COMMONS.SNACK_BAR.TYPE.ERROR);

        }, 600);
      }
    );
  }

  showDebtors() {
    if (this.checked) {
      const accountsDebtor = this.dataSource.data.filter((a) => this.verifyDebtor(a.bills));
      if (accountsDebtor.length > 0) {
        this.dataSource.data = accountsDebtor;
        this.showSnackBar(
          'Se encontraron las siguientes cuentas a regularizar'
        );
      } else {
        this.dataSource.data = this.accounts;
        this.showSnackBar('No se encontraron cuentas a regularizar');
      }
    } else {
      this.dataSource.data = this.accounts;
    }
  }

  verifyDebtor(bills: Bill[]) {
    for (const bill of bills) {
      if (bill.status === STATUS.PENDING) {
        return true;
      }
    }
    return false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getPaymentDetail(student) {

    const dialogRef = this.dialog.open(PaymentsDetailComponent, {
      data:   student ,
      width: '100vw',
      height: '95vh',
      maxWidth: '95vw',
    });
  }

  showPayCentral(billId: string,studentId:string) {
    const dialogRef = this.dialog.open(PaysCentralComponent,
      {
        data: {bill: billId , student: studentId},
        width: '100vw',
        height: '100vh',
        panelClass: 'pays-central'
      }
    );

  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Aceptar', { duration: 5500 });
  }

  getAccountState(student: StudentFullDetail) {
    if (student.bills.length === 0 ) {
      return true;
    } else {
      for (const bill of student.bills) {
         if (bill.status === 'PENDING') {
          return false;
         }
      }
      return true;

    }
  }
  get studentsService$() {
    return this.studentsService;
  }

}
