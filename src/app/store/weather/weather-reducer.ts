import { createReducer, on } from "@ngrx/store";
import { WeatherState } from "src/app/models/weather.model";
import { clearLocations, loadWeather, loadWeatherFailure, loadWeatherSuccess, removeLocation } from "./weather-create-actions";

export const initialState: WeatherState = {
  currentWeather: null,
  forecastWeather: null,
  locations: [],
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
  on(loadWeatherSuccess, (state, { current, forecast }) => {

    const newLocation = `${current.name} - ${Math.round(current.main.temp)}C ${current.weather[0].main}`;
    const updatedLocations = [newLocation, ...state.locations.filter(loc => loc !== newLocation)];
    const limitedLocations = updatedLocations.length > 8 ? updatedLocations.slice(0, 8) : updatedLocations;
    return {

      ...state,
      currentWeather: current,
      forecastWeather: forecast,
      locations: limitedLocations,
      loading: false,
      error: null
    }
  }),

  // Weather load failed
  on(loadWeatherFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    currentWeather: null,
    forecastWeather: null
  })),

  on(removeLocation, (state, { index }) => ({
    ...state,
    locations: state.locations.filter((_, i) => i !== index)
  })),

  on(clearLocations, (state) => ({
    ...state,
    locations: []
  }))
)
