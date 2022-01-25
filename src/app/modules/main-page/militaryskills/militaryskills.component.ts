import { Component, OnInit } from '@angular/core';
import { MilitaryskillsService, MilitarySkillResponse } from 'src/app/services/militaryskills.service';

@Component({
  selector: 'app-militaryskills',
  templateUrl: './militaryskills.component.html',
  styleUrls: ['./militaryskills.component.scss']
})
export class MilitaryskillsComponent implements OnInit {
  
  private militaryskillService: MilitaryskillsService; 
  militarySkill: MilitarySkillResponse[] = [];


  constructor() { 

    this.militaryskillService = new MilitaryskillsService();
  }

  ngOnInit() {
    this.militaryskillService.getMilitaries().then(response => this.militarySkill = response);
  }

}
