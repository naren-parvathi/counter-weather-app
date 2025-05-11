import { createReducer, on } from '@ngrx/store';
import { addLocation, removeLocation, clearLocations } from './location-create-action';

export const initialState: string[] = [];

export const locationReducer = createReducer(
  initialState,
  on(addLocation, (state, { newLocation }) => {
      const locations = [newLocation, ...state];
      return locations.length > 8 ? locations.slice(0, 8) : locations;
  }),
  on(removeLocation, (state, { index }) => state.filter((_, i) => i !== index)),
  on(clearLocations, () => [])
);
