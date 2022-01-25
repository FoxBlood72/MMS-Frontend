import { Component, OnInit } from '@angular/core';
import { SkillResponse, SkillService} from 'src/app/services/skill.service';

@Component({
  selector: 'app-skillstable',
  templateUrl: './skillstable.component.html',
  styleUrls: ['./skillstable.component.scss']
})
export class SkillstableComponent implements OnInit {

  private skillService: SkillService;
  skills: SkillResponse[] = [];

  constructor() {
    this.skillService = new SkillService();

   }

  ngOnInit() {
    this.skillService.getMilitaries().then((response) => {
      this.skills = response;
    });
  }

}
