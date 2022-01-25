import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface MilitarySkillResponse{
  cnp: string;
  firstname: string;
  lastname: string;
  skillId: number;
  militaryGrade: number;
  skillName: string; 
}


@Injectable({
  providedIn: 'root'
})
export class MilitaryskillsService {

  constructor() { }

  getMilitaries(): Promise<MilitarySkillResponse[]>{
    return fetch(`${environment.apiUrl}/PersonalMilitary/Get-Military-Grades`).then(response => response.json());
  
  }

}
