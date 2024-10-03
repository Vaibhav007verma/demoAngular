// src/app/app-routing.module.ts

import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from '../c/one/one.component';
import { TwoComponent } from '../c/two/two.component';
import { DemoComponent } from '../c/demo/demo.component';
import { NotfoundComponent } from '../c/notfound/notfound.component';

export const routes: Routes = [
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'demo', component: DemoComponent },
  { path: '', redirectTo: 'demo', pathMatch: 'full' }, 
  { path: '**', component: NotfoundComponent } 
  
];


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { OneComponent } from '../c/one/one.component';
// import { TwoComponent } from '../c/two/two.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'one', component: OneComponent },
//   { path: 'two', component: TwoComponent },
//   { path: '**', redirectTo: 'one', pathMatch: 'full' } // Wildcard route for 404
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
