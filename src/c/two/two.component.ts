// src/app/two/two.component.ts

import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  message: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve state from the Router
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.message = navigation.extras.state['message'];
    }
  }
}
