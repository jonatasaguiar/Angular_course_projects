import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  activated = false;
  private activatedSub: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(
      (valueGotten) => {
        console.log(this.activated);
        this.activated = valueGotten;
        console.log(this.activated);
      }
    );
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
