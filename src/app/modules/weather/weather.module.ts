import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './components/weather/weather.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: '', component: WeatherComponent }])
  ]
})
export class WeatherModule { }
