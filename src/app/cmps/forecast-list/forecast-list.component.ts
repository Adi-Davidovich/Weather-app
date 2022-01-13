import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models/forecast.model';

@Component({
  selector: 'forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss']
})
export class ForecastListComponent implements OnInit {

  @Input() forecasts: Forecast[]

  constructor() { }


  ngOnInit(): void {
  }

}
