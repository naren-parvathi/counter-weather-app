import { Component, OnInit } from '@angular/core';
import { CounterStateService } from 'src/app/shared/services/counter-state.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counters: any[] = [];

  constructor(
    private counterStateService: CounterStateService
  ) {
    this.counterStateService.counters$.subscribe(counters => {
      this.counters = counters;
    })
  }

  ngOnInit(): void {
  }

  reset() {
    this.counters = [];
    this.updateCount();
  }

  add() {
    this.counters.push({ count: 0 });
    this.updateCount();
  }

  updateCount() {
    this.counterStateService.updateCount(this.counters.length, this.counters)
  }

  increment(index: number) {
    this.counters[index].count++;
  }

  decrement(index: number) {
    this.counters[index].count--;
  }

  delete(index: number) {
    this.counters.splice(index, 1);
    this.updateCount();
  }


}
