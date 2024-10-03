import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  message: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve the state from the router
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.message = navigation.extras.state['message'] ?? null;
      console.log('Message from state:', this.message);
    } else {
      console.log('No state data found');
    }
  }
}
