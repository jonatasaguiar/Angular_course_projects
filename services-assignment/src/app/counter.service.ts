import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  addActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log(
      `Active to Inactive action current counter: ${this.activeToInactiveCounter}`
    );
  }
  addInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log(
      `Active to Inactive action current counter: ${this.inactiveToActiveCounter}`
    );
  }
}
