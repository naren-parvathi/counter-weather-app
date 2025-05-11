import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private appId = 'd4594364698122bfd1c4b3eb5f2ff19f';

  private WEATHER_URL = `https://api.openweathermap.org/data/2.5`

  private CURRENT_WEATHER_API = `${this.WEATHER_URL}/weather`;

  private FIVE_DAY_FORECAST_API = `${this.WEATHER_URL}/forecast`

  constructor(
    private httpClient: HttpClient
  ) { }

  getCurrentWeather(city: string) {
    const params = {
      q: city,
      appid: this.appId
    }
    return this.httpClient.get(this.CURRENT_WEATHER_API, { params });
  }

  getFiveDayForecast(city: string) {
    const params = {
      q: city,
      appid: this.appId
    }
    return this.httpClient.get(this.FIVE_DAY_FORECAST_API, { params });
  }
}
