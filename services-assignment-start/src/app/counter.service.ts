import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {

  markedActiveCount = 0;
  markedInactiveCount = 0;

  markedActive(): void {
    this.markedActiveCount++;
  }

  markedInactive(): void {
    this.markedInactiveCount++;
  }
}
