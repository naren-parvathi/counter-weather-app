import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from './store/location-reducer';
import { weatherReducer } from './store/weather/weather-reducer';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './store/weather/weather-effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule,

    HttpClientModule,

    StoreModule.forRoot(
      {
        locations: locationReducer,
        weather: weatherReducer
      }
    ),

    EffectsModule.forRoot([WeatherEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
