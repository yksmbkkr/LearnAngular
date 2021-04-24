import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server wants to be created';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    } , 2000);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onCreateServer() {
    this.serverCreationStatus = 'Server was created, new server is - ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  // tslint:disable-next-line:typedef
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  }
}
