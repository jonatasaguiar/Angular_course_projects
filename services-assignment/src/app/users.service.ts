import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private counterService: CounterService) {}

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.addInactiveToActive();
    console.log(`Inactive users ${this.inactiveUsers}`);
  }

  onSetActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.addActiveToInactive();
    console.log(`Active users ${this.activeUsers}`);
  }
}
