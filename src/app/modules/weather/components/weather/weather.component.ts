import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherState } from 'src/app/models/weather.model';
import { addLocation, clearLocations, removeLocation } from 'src/app/store/location-create-action';
import { loadWeather } from 'src/app/store/weather/weather-create-actions';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  location: string = '';
  locations$: Observable<string[]>;

  currentWeather$: Observable<any>;
  forecastWeather$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(
    private store: Store<{ locations: string[]; weather: WeatherState }>
  ) {
    this.locations$ = this.store.select('locations');
    this.currentWeather$ = this.store.select(state => state.weather.currentWeather);
    this.forecastWeather$ = this.store.select(state => state.weather.forecastWeather);
    this.loading$ = this.store.select(state => state.weather.loading);
    this.error$ = this.store.select(state => state.weather.error)
  }

  ngOnInit(): void {
  }

  addLocation(): void {
    if (this.location.trim()) {
      const newLocation: string = this.location.trim();
      this.store.dispatch(addLocation({ newLocation }));
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

}
