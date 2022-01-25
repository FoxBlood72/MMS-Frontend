import { Component, OnInit } from '@angular/core';
import { CountriesService, CountryResponse } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countrytable',
  templateUrl: './countrytable.component.html',
  styleUrls: ['./countrytable.component.scss'],
  providers: [CountriesService]
})
export class CountrytableComponent implements OnInit {


  private countryService: CountriesService;
  countries: CountryResponse[] = [];

  constructor() {
    this.countryService = new CountriesService();
   }

  ngOnInit() {
    this.countryService.getCounties().then((response) => {
      this.countries = response
    });
  }

}
