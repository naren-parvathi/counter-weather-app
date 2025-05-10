import { Component, OnInit } from '@angular/core';
import { CounterStateService } from '../services/counter-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  countersCount: number = 0;

  constructor(private counterStateService: CounterStateService) {
    this.counterStateService.countersCount$.subscribe(count => {
      this.countersCount = count;
    })
  }

  ngOnInit(): void {
  }

}
