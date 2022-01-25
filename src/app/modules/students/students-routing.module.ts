import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'students',
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'student/:id',
    component: StudentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
