import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serv1Component } from './serv1/serv1.component';
import { ServicesRoutingModule } from './services-routing.module';



@NgModule({
  declarations: [
    Serv1Component
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
