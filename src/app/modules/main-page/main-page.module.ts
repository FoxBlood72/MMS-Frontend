import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainComponentComponent } from './main-component/main-component.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { CountrytableComponent } from './countrytable/countrytable.component';
import { MaininterfaceComponent } from './maininterface/maininterface.component';
import { SkillstableComponent } from './skillstable/skillstable.component';
import { MilitarytableComponent } from './militarytable/militarytable.component';
import { MilitarybasestableComponent } from './militarybasestable/militarybasestable.component';
import { GarisontableComponent } from './garisontable/garisontable.component';
import { MilitaryskillsComponent } from './militaryskills/militaryskills.component';


@NgModule({
  declarations: [
    MainComponentComponent,
    LeftbarComponent,
    CountrytableComponent,
    MaininterfaceComponent,
    SkillstableComponent,
    MilitarytableComponent,
    MilitarybasestableComponent,
    GarisontableComponent,
    MilitaryskillsComponent
  ],
  entryComponents: [
    MainComponentComponent,
    LeftbarComponent,
    CountrytableComponent,
    MaininterfaceComponent,
    SkillstableComponent,
    MilitarytableComponent,
    MilitarybasestableComponent,
    GarisontableComponent,
    MilitaryskillsComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class MainPageModule { }
