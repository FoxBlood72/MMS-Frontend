import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../../services/students.service';
import { Student } from '../../../interfaces/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public subscription: Subscription;
  public id;
  public student: Student = {
    name: 'default name',
    age: 0,
    id: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params.id;
      if (this.id) {
        this.getStudent();
      }
    });
  }

  public getStudent(): void {
    this.studentsService.getStudentById(this.id).subscribe(
      (result: Student) => {
        console.log(result);
        this.student = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
