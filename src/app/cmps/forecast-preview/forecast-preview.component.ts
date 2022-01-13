import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models/forecast.model';

@Component({
  selector: 'forecast-preview',
  templateUrl: './forecast-preview.component.html',
  styleUrls: ['./forecast-preview.component.scss']
})
export class ForecastPreviewComponent implements OnInit {

  @Input() forecast: Forecast


  constructor() { }

  ngOnInit(): void {
  }


  onClickDetails(id:string) {
    console.log(id)
  } 
}
