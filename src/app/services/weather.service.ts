import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Forecast } from '../models/forecast.model';


//DEVELOPMENT
// const FORECASTS = [
//   {
//     "date": new Date("2022-01-13T07:00:00+02:00"),
//     "id": "ld3Km",
//     "text": "Mostly cloudy",
//     "unit": "C",
//     "minTemp": 11.6,
//     "maxTemp": 19.4,
//     "dayIcon": 6,
//     "dayText": "Mostly cloudy",
//     "dayWind": 18.5,
//     "dayWindDirection": "SSW",
//     "nightIcon": 12,
//     "nightText": "Evening rain; otherwise, cloudy",
//     "nightWind": 16.7,
//     "nightWindDirection": "W",
//     "sunrise": new Date("2022-01-13T06:42:00+02:00"),
//     "sunset": new Date("2022-01-13T16:57:00+02:00"),
//     "moonrise": new Date("2022-01-13T13:22:00+02:00"),
//     "moonset": new Date("2022-01-14T03:46:00+02:00")
//   },
//   {
//     "date": new Date("2022-01-14T07:00:00+02:00"),
//     "id": "XHq9F",
//     "text": "Cooler; downpours in the p.m.",
//     "unit": "C",
//     "minTemp": 9.5,
//     "maxTemp": 15.2,
//     "dayIcon": 12,
//     "dayText": "Cloudy and cooler; showers, some heavy in the afternoon",
//     "dayWind": 20.4,
//     "dayWindDirection": "W",
//     "nightIcon": 40,
//     "nightText": "Partly to mostly cloudy with a little rain late",
//     "nightWind": 14.8,
//     "nightWindDirection": "WSW",
//     "sunrise": new Date("2022-01-14T06:42:00+02:00"),
//     "sunset": new Date("2022-01-14T16:58:00+02:00"),
//     "moonrise": new Date("2022-01-14T14:00:00+02:00"),
//     "moonset": new Date("2022-01-15T04:41:00+02:00")
//   },
//   {
//     "date": new Date("2022-01-15T07:00:00+02:00"),
//     "id": "KkFDK",
//     "text": "A passing shower or two",
//     "unit": "C",
//     "minTemp": 10.5,
//     "maxTemp": 14.3,
//     "dayIcon": 14,
//     "dayText": "Clouds and sun with a passing shower or two",
//     "dayWind": 14.8,
//     "dayWindDirection": "WSW",
//     "nightIcon": 18,
//     "nightText": "Periods of rain",
//     "nightWind": 16.7,
//     "nightWindDirection": "W",
//     "sunrise": new Date("2022-01-15T06:42:00+02:00"),
//     "sunset": new Date("2022-01-15T16:59:00+02:00"),
//     "moonrise": new Date("2022-01-15T14:43:00+02:00"),
//     "moonset": new Date("2022-01-16T05:35:00+02:00")
//   },
//   {
//     "date": new Date("2022-01-16T07:00:00+02:00"),
//     "id": "4CwGO",
//     "text": "Rain ending in the morning",
//     "unit": "C",
//     "minTemp": 6.5,
//     "maxTemp": 15.8,
//     "dayIcon": 13,
//     "dayText": "Rain ending in the morning, then times of sun and clouds in the afternoon",
//     "dayWind": 22.2,
//     "dayWindDirection": "NW",
//     "nightIcon": 33,
//     "nightText": "Clear",
//     "nightWind": 11.1,
//     "nightWindDirection": "ENE",
//     "sunrise": new Date("2022-01-16T06:42:00+02:00"),
//     "sunset": new Date("2022-01-16T17:00:00+02:00"),
//     "moonrise": new Date("2022-01-16T15:33:00+02:00"),
//     "moonset": new Date("2022-01-17T06:25:00+02:00")
//   },
//   {
//     "date": new Date("2022-01-17T07:00:00+02:00"),
//     "id": "asMSt",
//     "text": "Plenty of sunshine",
//     "unit": "C",
//     "minTemp": 6.9,
//     "maxTemp": 14.8,
//     "dayIcon": 1,
//     "dayText": "Plenty of sunshine",
//     "dayWind": 11.1,
//     "dayWindDirection": "NE",
//     "nightIcon": 33,
//     "nightText": "Clear",
//     "nightWind": 9.3,
//     "nightWindDirection": "E",
//     "sunrise": new Date("2022-01-17T06:42:00+02:00"),
//     "sunset": new Date("2022-01-17T17:01:00+02:00"),
//     "moonrise": new Date("2022-01-17T16:27:00+02:00"),
//     "moonset": new Date("2022-01-18T07:11:00+02:00")
//   }
// ]

const API_KEY = 'GISNjpM6xQfoYlouQnwY4LSBD4UaiwBg'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //DEVELOPMENT
  // private _forecastsDb: Forecast[] = FORECASTS;

  private _forecasts$ = new BehaviorSubject<Forecast[]>([])
  public forecasts$ = this._forecasts$.asObservable()

  constructor(private http: HttpClient) { }


  public loadForecasts(city: string) {
    this._forecasts$.next(null)
    this.http.get<any>(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`)
      .subscribe(res => {

        if (!res || !res.length) return
        this.http.get<any>(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${res[0].Key}?apikey=${API_KEY}&details=true&metric=true`)
          .pipe(
            map(res => res.DailyForecasts.map(forecast => {
              const dayForcast: Forecast = {
                date: new Date(forecast.Date),
                id: this._makeId(),
                text: forecast.Day.ShortPhrase,
                unit: 'C',
                minTemp: forecast.Temperature.Minimum.Value,
                maxTemp: forecast.Temperature.Maximum.Value,
                dayIcon: forecast.Day.Icon,
                dayText: forecast.Day.LongPhrase,
                dayWind: forecast.Day.Wind.Speed.Value,
                dayWindDirection: forecast.Day.Wind.Direction.English,
                nightIcon: forecast.Night.Icon,
                nightText: forecast.Night.LongPhrase,
                nightWind: forecast.Night.Wind.Speed.Value,
                nightWindDirection: forecast.Night.Wind.Direction.English,
                sunrise: new Date(forecast.Sun.Rise),
                sunset: new Date(forecast.Sun.Set),
                moonrise: new Date(forecast.Moon.Rise),
                moonset: new Date(forecast.Moon.Set)
              };
              return dayForcast

            }))
          ).subscribe(res => { console.log(res); this._forecasts$.next(res) })
      })

    //DEVELOPMENT
    // let forecasts = this._forecastsDb;
    // this._forecasts$.next(forecasts)

  }

  getFavorites() {
    return JSON.parse(localStorage.getItem('favorites'))
  }

  addToFavorites(city: string) {
    let favoritesDB = JSON.parse(localStorage.getItem('favorites'))
    let favorites = favoritesDB ? [...favoritesDB, city] : [city];
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }


  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }


}



