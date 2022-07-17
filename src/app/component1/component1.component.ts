import { Component, OnInit } from '@angular/core';
import { ServiceExample1Service } from '../service-example1.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(private serv: ServiceExample1Service) { }

  public comp1Array:any = [];

  ngOnInit(): void {
    this.comp1Array = this.serv.getDistrict();
    console.log(this.comp1Array);
  }

   

}
