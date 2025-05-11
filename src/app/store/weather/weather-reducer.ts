import { createReducer, on } from "@ngrx/store";
import { WeatherState } from "src/app/models/weather.model";
import { loadWeather, loadWeatherFailure, loadWeatherSuccess } from "./weather-create-actions";

export const initialState: WeatherState = {
  currentWeather: null,
  forecastWeather: null,
  loading: false,
  error: null
};

export const weatherReducer = createReducer(
  initialState,

  on(loadWeather, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  // Weather loaded successfully
  on(loadWeatherSuccess, (state, { current, forecast}) => ({
    ...state,
    currentWeather: current,
    forecastWeather: forecast,
    loading: false,
    error: null
  })),

  // Weather load failed
  on(loadWeatherFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
)
