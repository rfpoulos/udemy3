import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret: boolean = false;
  clicks:any = [];

  secretToggle() {
    this.showSecret = !this.showSecret;
    this.clicks.push('Display ' + 
      this.showSecret + 
      ' ' + Date())
  }
}
