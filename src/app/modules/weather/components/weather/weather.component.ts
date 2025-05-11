import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addLocation, clearLocations, removeLocation } from 'src/app/store/location-create-action';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  location: string = '';
  locations$: Observable<string[]>;
  nextId: number = 1;

  constructor(
    private store: Store<{ locations: string[] }>
  ) {
    this.locations$ = this.store.select('locations');
  }

  ngOnInit(): void {
  }

  addLocation(): void {
    if (this.location.trim()) {
      const newLocation: string = this.location.trim();
      this.store.dispatch(addLocation({ newLocation }));
      this.location = '';
    }
  }

  removeLocation(index: number): void {
    this.store.dispatch(removeLocation({ index }));
  }

  clearLocations(): void {
    this.store.dispatch(clearLocations());
  }

}
