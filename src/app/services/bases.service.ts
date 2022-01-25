import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface BaseResponse{
  idbase: number;
  locationId: number;
  baseName: string;
  foundDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class BasesService {

  constructor() { }

  getBases(): Promise<BaseResponse[]>{
    //console.log(`${environment.apiUrl}/State/GetAllStates`);
    return fetch(`${environment.apiUrl}/MilitaryBase/GetAllMilitaryBase`).then(response => response.json());
  }
}
