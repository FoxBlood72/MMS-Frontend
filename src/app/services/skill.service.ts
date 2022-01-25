import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface SkillResponse{
  skillId: number;
  skillName: string;
  skillDescription: string;
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  getMilitaries(): Promise<SkillResponse[]>{
    return fetch(`${environment.apiUrl}/SkillsControler/GetAllSkills`).then(response => response.json());
  
  }
}
