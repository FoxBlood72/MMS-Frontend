import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students/students.component';
import { MaterialModule } from '../material/material.module';
import { ChildComponent } from './child/child.component';
import { StudentComponent } from './student/student.component';
import { MarksPipe } from '../../marks.pipe';


@NgModule({
  declarations: [StudentsComponent, ChildComponent, StudentComponent, MarksPipe],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
  ],
  exports: [
    MarksPipe,
  ]
})
export class StudentsModule { }
