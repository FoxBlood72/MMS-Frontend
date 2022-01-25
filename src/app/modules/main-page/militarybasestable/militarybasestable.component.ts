import { Component, OnInit } from '@angular/core';
import { BaseResponse, BasesService } from 'src/app/services/bases.service';

@Component({
  selector: 'app-militarybasestable',
  templateUrl: './militarybasestable.component.html',
  styleUrls: ['./militarybasestable.component.scss']
})
export class MilitarybasestableComponent implements OnInit {
  private baseService: BasesService;
  bases: BaseResponse[] = [];

  constructor() { 
    this.baseService = new BasesService();

  }

  ngOnInit() {
    this.baseService.getBases().then(response => this.bases = response);
  }

}
