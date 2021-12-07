import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';

  // message: string;
  serverName: string = 'TestServer';
  serverCreated: boolean = false;
  servers = ['testserver 1', 'testserver 2'];
  // testName = '';

  constructor() {
    setTimeout(() => {
      console.log('Before', this.allowNewServer);
      this.allowNewServer = false;
      console.log('After', this.allowNewServer);
    }, 1000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    // if (this.serverCreationStatus) {
    //   this.message = `No server was created with name  ${this.serverName}`;
    //   this.serverCreationStatus = false;
    // } else {
    //   this.message = 'No server created!';
    //   this.serverCreationStatus = true;
    // }
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server created with name ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
    // this.testName = (<HTMLInputElement>event.target).type;

    console.log(this.serverName);
    // console.log(this.testName);
  }
}
