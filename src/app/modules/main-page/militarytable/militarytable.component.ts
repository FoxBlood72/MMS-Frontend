import { Component, OnInit } from '@angular/core';
import { MilitariesService, MilitariesResponse } from 'src/app/services/militaries.service';

@Component({
  selector: 'app-militarytable',
  templateUrl: './militarytable.component.html',
  styleUrls: ['./militarytable.component.scss']
})
export class MilitarytableComponent implements OnInit {

  private militaryservice: MilitariesService;
  militaries: MilitariesResponse[] = [];

  constructor() {
    this.militaryservice = new MilitariesService();
   }

  ngOnInit() {
    this.militaryservice.getMilitaries().then((response) => {
      this.militaries = response
    });
  }

}
