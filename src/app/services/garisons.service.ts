import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface GarisonResult{
  id_garrison: number;
  military_base_id: number;
  available_rooms: number;
  start_date: string;
  name: string;
}


@Injectable({
  providedIn: 'root'
})
export class GarisonsService {

  constructor() { }

  getMilitaries(): Promise<GarisonResult[]>{
    fetch(`${environment.apiUrl}/Garrison/GetAllGarrisons`).then(response => console.log(response.json()));
    return fetch(`${environment.apiUrl}/Garrison/GetAllGarrisons`).then(response => response.json());
  
  }
}
