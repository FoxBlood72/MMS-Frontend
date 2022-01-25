import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Subscription } from 'rxjs';
import { StudentsService } from '../../../services/students.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddEditStudentComponent } from '../../shared/add-edit-student/add-edit-student.component';
import { Student } from '../../../interfaces/student';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public loggedUser: User;
  public parentMessage = 'message from parent';
  public students: Student[] = [];
  public displayedColumns = ['id', 'name', 'age', 'profile', 'edit', 'delete'];

  constructor(
    private router: Router,
    private dataService: DataService,
    private studentsService: StudentsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.subscription = this.dataService.currentUser.subscribe((user: User) => this.loggedUser = user);
    this.studentsService.getStudents().subscribe(
      (result: Student[]) => {
        console.log(result);
        this.students = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public logout(): void {
    localStorage.setItem('Role', 'Anonim');
    this.router.navigate(['/login']);
  }

  public receiveMessage(event): void {
    console.log(event);
  }

  public deleteStudent(student): void {
    this.studentsService.deleteStudent(student).subscribe(
      (result) => {
        console.log(result);
        this.students = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public openModal(student?): void {
    const data = {
      student
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(AddEditStudentComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.students = result;
      }
    });
  }

  public addNewStudent(): void {
    this.openModal();
  }

  public editStudent(student): void {
    this.openModal(student);
  }

  public goToStudentProfile(id): void {
    this.router.navigate(['/student', id]);
  }

}
