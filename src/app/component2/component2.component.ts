import { Component, OnInit } from '@angular/core';
import { ServiceExample1Service } from '../service-example1.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private serv2: ServiceExample1Service) { }

  public comp2Array:any = [];

  ngOnInit(): void {
    this.comp2Array = this.serv2.getDistrict();
    console.log(this.comp2Array);
  }

}
