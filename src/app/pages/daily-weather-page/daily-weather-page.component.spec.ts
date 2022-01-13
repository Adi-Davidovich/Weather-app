import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWeatherPageComponent } from './daily-weather-page.component';

describe('DailyWeatherPageComponent', () => {
  let component: DailyWeatherPageComponent;
  let fixture: ComponentFixture<DailyWeatherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyWeatherPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyWeatherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
