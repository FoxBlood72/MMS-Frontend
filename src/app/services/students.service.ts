import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  public url = 'https://localhost:44370/api/students';

  constructor(
    public http: HttpClient,
  ) { }

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.url}`);
  }

  public getStudentById(id): Observable<Student> {
    return this.http.get<Student>(`${this.url}/byId/${id}`);
  }

  public addStudent(student: Student): Observable<Student[]> {
    return this.http.post<Student[]>(`${this.url}/fromBody`, student);
  }

  public editStudent(student: Student): Observable<Student[]> {
    return this.http.put<Student[]>(`${this.url}`, student);
  }

  public deleteStudent(student: Student): Observable<any> {
    const options = {
      headers: new HttpHeaders(),
      body: student
    };
    return this.http.delete(`${this.url}`, options);
  }
}
