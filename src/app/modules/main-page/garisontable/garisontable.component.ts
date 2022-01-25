import { Component, OnInit } from '@angular/core';
import { GarisonsService, GarisonResult } from 'src/app/services/garisons.service';

@Component({
  selector: 'app-garisontable',
  templateUrl: './garisontable.component.html',
  styleUrls: ['./garisontable.component.scss']
})
export class GarisontableComponent implements OnInit {

  private garisonService: GarisonsService;
  garisons: GarisonResult[] = [];

  constructor() {
    this.garisonService = new GarisonsService();
   }

  ngOnInit() {
    this.garisonService.getMilitaries().then(result => this.garisons = result);
  }

}
