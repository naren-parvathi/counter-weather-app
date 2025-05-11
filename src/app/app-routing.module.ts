import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'counter', pathMatch: 'full'
  },
  {
    path: 'counter',
    loadChildren: () => import('./modules/counter/counter.module').then(m => m.CounterModule)
  },
  {
    path: 'vatavaran',
    loadChildren: () => import('./modules/weather/weather.module').then(m => m.WeatherModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
