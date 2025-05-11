import { createAction, props } from '@ngrx/store';

export const addLocation = createAction(
  '[Locations List] Add Location',
  props<{ newLocation: string }>()
);

export const removeLocation = createAction(
  '[Locations List] Remove Location',
  props<{ index: number }>()
);

export const clearLocations = createAction('[Locations List] Clear Locations');
