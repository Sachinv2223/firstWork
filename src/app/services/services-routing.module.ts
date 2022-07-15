import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Serv1Component } from './serv1/serv1.component';

const routes: Routes = [
  { path: '', component: Serv1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
