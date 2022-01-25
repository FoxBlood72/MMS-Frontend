import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface CountryResponse
{
  ID_STATE: number;
  name: string;
  population: number;
  surface: number;
  legislator: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  getCounties(): Promise<CountryResponse[]>{
    //console.log(`${environment.apiUrl}/State/GetAllStates`);
    return fetch(`${environment.apiUrl}/State/GetAllStates`).then(response => response.json());
  }

}
