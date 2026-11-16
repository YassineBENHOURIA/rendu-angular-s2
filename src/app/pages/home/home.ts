import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = 'Home 4DAS 10';
  state = false;

  change(): void {
    this.title = 'Home 4DAS 9';
    this.state = true;
  }
}
