import {Component} from '@angular/core';
import {UsersService} from './users.service';
import {CounterService} from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent {
  activeUsers = this.usersService.activeUsers;
  inactiveUsers = this.usersService.inactiveUsers;

  constructor(private usersService: UsersService, private counterService: CounterService) {
  }

  getCount(): void {
    alert('<p> ' + this.counterService.markedActiveCount + ' times changed to active.</p><br><p> ' + this.counterService.markedInactiveCount + ' times changed to inactive.</p>');
  }
}
