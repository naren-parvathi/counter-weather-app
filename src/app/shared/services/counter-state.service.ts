import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterStateService {

  private countersCount = new BehaviorSubject<number>(0);

  private counters = new BehaviorSubject<any[]>([])

  countersCount$ = this.countersCount.asObservable();

  counters$ = this.counters.asObservable();

  constructor() { }

  updateCount(count: number, counters: any[]) {
    this.countersCount.next(count);
    this.counters.next(counters);
  }
}
