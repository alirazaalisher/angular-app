import { Component, OnInit } from '@angular/core';

@Component({
  // Common selector
  //selector: 'app-servers',

  // Attribute selector
  //selector: '[app-servers]',

  //  Class selector
  selector: '.app-servers',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Server was not Created';
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server Was Created';
  }
}
