import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSub: Subscription;

  constructor() {
  }

  ngOnInit() {
    // this.firstSub = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const custObs = new Observable(observer => {
      let count = 1;
      setInterval(() => {
        observer.next(count);
        if (count === 10) {
          observer.complete();
        }
        if (count % 20 === 0) {
          observer.error(new Error('count is factor of 3'));
        }
        count++;
      }, 1000);
    });

    this.firstSub = custObs.pipe(filter(data => {
      return +data % 2 === 0;
    }), map(data => {
      return 'Round: ' + data;
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed');
    });
  }

  ngOnDestroy() {
    this.firstSub.unsubscribe();
  }

}
