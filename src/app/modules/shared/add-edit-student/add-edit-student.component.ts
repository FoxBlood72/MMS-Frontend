import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../../../services/students.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.scss']
})
export class AddEditStudentComponent implements OnInit {

  public studentForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    age: new FormControl(0),
  });
  public title;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private studentsService: StudentsService,
    public dialogRef: MatDialogRef<AddEditStudentComponent>,
  ) {
    console.log(this.data);
    if (data.student) {
      this.title = 'Edit Student';
      this.studentForm.patchValue(this.data.student);
    } else {
      this.title = 'Add Student';
    }
  }

  // getters
  get id(): AbstractControl {
    return this.studentForm.get('id');
  }
  get name(): AbstractControl {
    return this.studentForm.get('name');
  }
  get age(): AbstractControl {
    return this.studentForm.get('age');
  }

  ngOnInit() {
  }

  public addStudent(): void {
    this.studentsService.addStudent(this.studentForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public editStudent(): void {
    this.studentsService.editStudent(this.studentForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
