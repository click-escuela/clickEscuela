import { RouteGuard } from './guards/route.guard';
import { OutReleaseComponent } from './components/commons/out-release/out-release.component';
import { ReleaseGuard } from './guards/release.guard';
import { MassAdditionsComponent } from './components/admin/mass-additions/mass-additions.component';
import { StudentGradeComponent } from './components/student/student-grade/student-grade.component';
import { LoginComponent } from './components/commons/login/login.component';
import { AsistanceParentComponent } from './components/parent/asistance/asistance.component';
import { PaymentComponent } from './components/parent/payment/payment.component';
import { GroupsComponent } from './components/student/groups/groups.component';
import { MessagesComponent } from './components/parent/messages/messages.component';
import { GradesComponent } from './components/teacher/grades/grades.component';
import { ConfigurationComponent } from './components/admin/configuration/configuration.component';
import { CalendarComponent } from './components/commons/calendar/calendar.component';
import { AddTeacherComponent } from './components/admin/teacher-component/add-teacher/add-teacher.component';
import { AddStudentComponent } from './components/admin/students-component/add-student/add-student.component';
import { HomeworkStudentComponent } from './components/student/homework/homework.component';
import { CoursesComponent } from './components/teacher/courses/courses.component';
import { HomeComponent } from './components/teacher/home/home.component';
import { Error404Component } from './components/commons/error-404/Error404.component';
import { AsistanceComponent } from './components/teacher/asistance/asistance.component';
import { StudentMenuComponent } from './components/student/student-menu/student-menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/admin/register/register.component';
import { MenuComponent } from './components/commons/menu/menu.component';
import { ParentMenuComponent } from './components/parent/parent-menu/parent-menu.component';
import { ReportCardComponent } from './components/parent/report-card/report-card.component';
import { AccountComponent } from './components/admin/account/account.component';
import { LibraryComponent } from './components/student/library/library.component';
import { GradesResumeComponent } from './components/parent/grades/grades.component';
import { HomeworkComponent } from './components/teacher/homework/homework.component';
import { Error401Component } from './components/commons/error-401/error-401.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'outRelease', component: OutReleaseComponent },
  { path: 'Unauthorized', component: Error401Component },

  {
    path: 'teacher/menu',
    component: MenuComponent, canActivate: [RouteGuard], data: {role: '[ROLE_TEACHER]'},
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'course', component: CoursesComponent },
      { path: 'homework', component: HomeworkComponent, canActivate: [ReleaseGuard] },
      { path: 'grade', component: GradesComponent },
      { path: 'reportCard', component: ReportCardComponent, canActivate: [ReleaseGuard] },
      { path: 'asistance', component: AsistanceComponent, canActivate: [ReleaseGuard] },
    ],
  },
  {
    path: 'admin/register',
    component: RegisterComponent, canActivate: [RouteGuard], data: {role: '[ROLE_ADMIN]'},

    children: [
      { path: '', redirectTo: 'accounts', pathMatch: 'full' },
      { path: 'accounts', component: AccountComponent },
      { path: 'students', component: AddStudentComponent },
      { path: 'teachers', component: AddTeacherComponent },
      { path: 'calendar', component: CalendarComponent , canActivate: [ReleaseGuard] },
      { path: 'configurations', component: ConfigurationComponent , canActivate: [ReleaseGuard] },
      { path: 'mass-upload', component: MassAdditionsComponent},

    ],
  },
  {
    path: 'student/menu',
    component: StudentMenuComponent, canActivate: [RouteGuard], data: {role: '[ROLE_STUDENT]'},
    children: [
      { path: '', redirectTo: 'grades', pathMatch: 'full' },
      { path: 'reportCard', component: ReportCardComponent , canActivate: [ReleaseGuard] },
      { path: 'grades', component: StudentGradeComponent },
      { path: 'homework', component: HomeworkStudentComponent , canActivate: [ReleaseGuard] },
      { path: 'message', component: MessagesComponent , canActivate: [ReleaseGuard] },
      { path: 'library', component: LibraryComponent , canActivate: [ReleaseGuard] },
      { path: 'groups', component: GroupsComponent , canActivate: [ReleaseGuard] },
    ],
  },
  {
    path: 'parent/menu',
    component: ParentMenuComponent, canActivate: [RouteGuard], data: {role: '[ROLE_PARENT]'},
    children: [

      { path: '', redirectTo: 'payment', pathMatch: 'full' },
      { path: 'parent-asistance', component: AsistanceParentComponent , canActivate: [ReleaseGuard] },
      { path: 'payment', component: PaymentComponent },
      { path: 'grade', component: GradesResumeComponent },
      { path: 'message', component: MessagesComponent , canActivate: [ReleaseGuard] },
      { path: 'reportCard', component: ReportCardComponent , canActivate: [ReleaseGuard] },
    ],
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
