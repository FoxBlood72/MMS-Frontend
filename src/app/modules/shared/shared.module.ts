import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HoverBtnDirective } from '../../hover-btn.directive';



@NgModule({
  declarations: [AddEditStudentComponent, HoverBtnDirective],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    AddEditStudentComponent
  ],
  exports: [
    HoverBtnDirective,
  ]
})
export class SharedModule { }
