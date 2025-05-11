export interface WeatherState {
  locations: string[] | []
  currentWeather: any | null;
  forecastWeather: any | null;
  loading: boolean;
  error: string | null;
}
