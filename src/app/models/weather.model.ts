export interface WeatherState {
  currentWeather: any | null;
  forecastWeather: any | null;
  loading: boolean;
  error: string | null;
}
