import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../../../services/data.service';
import { MilitarytableComponent } from '../militarytable/militarytable.component';
import { SkillstableComponent } from '../skillstable/skillstable.component';
import { CountrytableComponent } from '../countrytable/countrytable.component';
import { MilitaryskillsComponent } from '../militaryskills/militaryskills.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: [
    './main-component.component.scss'
  ]
})
export class MainComponentComponent implements OnInit {
  MilitarytableComponentclass = MilitarytableComponent;
  SkillstableComponentclass = SkillstableComponent;
  CountrytableComponentclass = CountrytableComponent;
  MilitaryskillsComponentclass = MilitaryskillsComponent
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) { }


  show_military: boolean;
  show_bases: boolean;
  show_skills: boolean;
  show_countries: boolean;
  show_garisons: boolean;
  show_militariSkills: boolean; 
  table_pg: string;

  ngOnInit() {
    this.route.params.subscribe(sub => {
      this.table_pg = sub['tb'];
    });

    console.log(this.table_pg);

    if(this.table_pg === "skill")
      this.show_skills = true;
    if(this.table_pg === "bases")
      this.show_bases = true;
    if(this.table_pg === "militaries")
      this.show_military = true;    
    if(this.table_pg === "countries")
      this.show_countries = true;
    if(this.table_pg === "garisons")
      this.show_garisons = true;
    if(this.table_pg === "militarieskill")
      this.show_militariSkills = true;
  }

}
