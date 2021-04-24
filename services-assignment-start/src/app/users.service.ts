import {Injectable} from '@angular/core';
import {CounterService} from './counter.service';

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {
  }

  makeActive(id: number, name: string) {
    this.inactiveUsers.splice(id, 1);
    this.activeUsers.push(name);
    this.counterService.markedActive();
  }

  makeInactive(id: number, name: string) {
    this.activeUsers.splice(id, 1);
    this.inactiveUsers.push(name);
    this.counterService.markedInactive();
  }

}
