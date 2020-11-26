import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showSecret = false;
  userName = '';
  logs = [];
  title = 'angular-app';
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.logs.push(this.logs.length + 1);
  }
}
