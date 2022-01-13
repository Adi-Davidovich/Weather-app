import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  favorites: Array<string>

  ngOnInit(): void {
    this.favorites = this.weatherService.getFavorites()
  }

}
