import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DailyWeatherPageComponent } from './pages/daily-weather-page/daily-weather-page.component';
import { ForecastListComponent } from './cmps/forecast-list/forecast-list.component';
import { ForecastPreviewComponent } from './cmps/forecast-preview/forecast-preview.component';
import { FormsModule } from '@angular/forms';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomePageComponent,
    DailyWeatherPageComponent,
    ForecastListComponent,
    ForecastPreviewComponent,
    FavoritesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
