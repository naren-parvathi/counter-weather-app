import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { WeatherService } from "src/app/modules/weather/services/weather.service";
import { loadWeather, loadWeatherFailure, loadWeatherSuccess } from "./weather-create-actions";
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable, forkJoin, of } from "rxjs";


@Injectable()

export class WeatherEffects {

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) { }

  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadWeather),
      switchMap(({ city }) =>
        forkJoin({
          current: this.weatherService.getCurrentWeather(city),
          forecast: this.weatherService.getFiveDayForecast(city) as Observable<any>
        }).pipe(
          // map(({ current, forecast}) => loadWeatherSuccess({current, forecast})),
          map(({ current, forecast }) => {
            const filteredList = forecast.list.filter((item: any) =>
              item.dt_txt.includes('12:00:00')
            );
            const filteredForecast = { ...forecast, list: filteredList };

            return loadWeatherSuccess({
              current,
              forecast: filteredForecast
            });
          }),
          catchError(error => {
            let errorMsg = 'An unknown error occurred';

            if (error.status === 404) {
              errorMsg = `${city} not found`
            }

            return of(loadWeatherFailure({ error:errorMsg }));
          })
        )
      )
    )
  );

}

