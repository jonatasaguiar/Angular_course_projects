import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    // interval(period: 1000).subscribe(next: count =>
    //   {
    //     console.log(count );
    // });
    // interval(1000).subscribe({
    //   next(count) {
    //     console.log(count);
    //   },
    // });
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe(
        (dataToFetch) => {
          console.log(dataToFetch);
        },
        (errorNow) => {
          console.log(errorNow);
          alert(errorNow.message);
        },
        () => {
          console.log('Completed! Time for a clean up?');
        }
      );

    // customIntervalObservable.pipe(
    //   map((data) => {
    //     return 'Round: ' + data;
    //   })
    // );
    // this.firstObsSubscription = customIntervalObservable.subscribe(
    //   (dataToFetch) => {
    //     console.log(dataToFetch);
    //   },
    //   (errorNow) => {
    //     console.log(errorNow);
    //     alert(errorNow.message);
    //   },
    //   () => {
    //     console.log('Completed! Time for a clean up?');
    //   }
    // );
  }
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
