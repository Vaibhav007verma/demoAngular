// src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';

// Bootstrapping the standalone AppComponent
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Provide the router configuration
  ]
})
.catch(err => console.error(err));
