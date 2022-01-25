import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface MilitariesResponse{
  ID_PERS: number;
  DivizionID: number;
  salary: number;
  firstname: string;
  lastname: string;
  cnp: string;
  sex: string;
  hire_date: string;
}

@Injectable({
  providedIn: 'root'
})
export class MilitariesService {

  constructor() { }

  getMilitaries(): Promise<MilitariesResponse[]>{
    return fetch(`${environment.apiUrl}/PersonalMilitary/GetAllPersonalMilitarys`).then(response => response.json());
  
  }
}
