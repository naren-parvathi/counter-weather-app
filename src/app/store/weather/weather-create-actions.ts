import { createAction, props } from "@ngrx/store";

export const loadWeather = createAction(
  '[Weather] Load Weather',
  props<{ city: string }>()
);

export const loadWeatherSuccess = createAction(
  '[Weather] Load Weather Success',
  props<{ current: any, forecast: any }>()
);

export const loadWeatherFailure = createAction(
  '[Weather] Load Weather Failure',
  props<{ error: any }>()
);

export const removeLocation = createAction(
  '[Locations List] Remove Location',
  props<{ index: number }>()
);

export const clearLocations = createAction('[Locations List] Clear Locations');
