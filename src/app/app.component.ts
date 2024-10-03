// src/app/app.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, MatButtonModule] // Import RouterOutlet here
})
export class AppComponent {
  title = 'my-angular-project';
  titleOne="Hello";
  titleTwo="World";

  constructor(private router: Router) {}

  
  goToOne(): void {
    this.router.navigate(['/one'], { state: { message: 'Hello World' } })
      .then(() => console.log("Response is sent to OneComponent"))
      .catch((err) => console.log("Error in sending... ", err));
  }
  
  goToTwo(): void {
    this.router.navigate(['/two'], { state: { message: this.titleTwo } })
      .then(() => console.log("Response sent to TwoComponent"))
      .catch((err) => console.log("Error in sending to TwoComponent", err));
  }
  
  
}
