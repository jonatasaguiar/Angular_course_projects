import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];
  activeUsers: string[];
  inactiveUsers: string[];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    // console.log(`Active users ${this.activeUsers}`);
    this.inactiveUsers = this.userService.inactiveUsers;
    // console.log(`Active inactive users ${this.inactiveUsers}`);
  }
  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
}
