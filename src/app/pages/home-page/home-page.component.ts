import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, take } from 'rxjs';
import { Forecast } from 'src/app/models/forecast.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  constructor(private weatherService: WeatherService) { }

  city:string 
  forecasts$: Observable<Forecast[]>

  ngOnInit(): void {
  }

  onSearchLocation() {
    this.weatherService.loadForecasts(this.city)
    this.forecasts$ = this.weatherService.forecasts$
  }

  onAddToFavorites(){
    this.weatherService.addToFavorites(this.city)
    alert('Location was added successfully to Favorites!')
  }
  ngOnDestroy(): void {
  }
}
