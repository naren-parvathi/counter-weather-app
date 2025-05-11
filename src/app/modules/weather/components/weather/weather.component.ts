import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherState } from 'src/app/models/weather.model';
import { clearLocations, loadWeather, removeLocation } from 'src/app/store/weather/weather-create-actions';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  location: string = '';
  locationsList$: Observable<string[]>;
  currentWeather$: Observable<any>;
  forecastWeather$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(
    private store: Store<{ weather: WeatherState }>
  ) {
    this.currentWeather$ = this.store.select(state => state.weather.currentWeather);
    this.forecastWeather$ = this.store.select(state => state.weather.forecastWeather);
    this.locationsList$ = this.store.select(state => state.weather.locations);
    this.loading$ = this.store.select(state => state.weather.loading);
    this.error$ = this.store.select(state => state.weather.error)
  }

  ngOnInit(): void {
  }

  addLocation(): void {
    if (this.location.trim()) {
      const newLocation: string = this.location.trim();
      // this.store.dispatch(addLocation({ newLocation }));
      this.fetchWeather(newLocation)
      this.location = '';
    }
  }

  removeLocation(index: number): void {
    this.store.dispatch(removeLocation({ index }));
  }

  clearLocations(): void {
    this.store.dispatch(clearLocations());
  }

  fetchWeather(city: string) {
    this.store.dispatch(loadWeather({ city }));
  }

  iconMapping(iconCode: string): string {
    const map: Record<string, string> = {
      '01d': 'day.svg',
      '01n': 'night.svg',
      '02d': 'cloudy-day-1.svg',
      '02n': 'cloudy-night-1.svg',
      '03d': 'cloudy.svg',
      '03n': 'cloudy.svg',
      '04d': 'cloudy.svg',
      '04n': 'cloudy.svg',
      '09d': 'rainy-4.svg',
      '09n': 'rainy-4.svg',
      '10d': 'rainy-1.svg',
      '10n': 'rainy-2.svg',
      '11d': 'thunder.svg',
      '11n': 'thunder.svg',
      '13d': 'snowy-1.svg',
      '13n': 'snowy-2.svg',
      '50d': 'weather.svg',
      '50n': 'weather.svg',
    };
    return map[iconCode] || 'cloudy.svg';
  }

}
