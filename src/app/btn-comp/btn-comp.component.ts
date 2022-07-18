import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-comp',
  templateUrl: './btn-comp.component.html',
  styleUrls: ['./btn-comp.component.css']
})
export class BtnCompComponent implements OnInit {

  @Input () params:any
                               
  constructor() { }

  bgColor = "";
  txtAlign = "right";
  btnTitle = "Submit";

  ngOnInit(): void {
    console.log(this.params)
    if(this.params != null) {
      this.btnTitle = this.params;
    }
  }

}
