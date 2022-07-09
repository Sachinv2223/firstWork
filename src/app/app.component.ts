import { Component } from '@angular/core';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="FirstWork"
  public heading = 'IT MASTER';
  // data = {
  //   tech1: "Angular",
  //   tech2: "React",
  //   tech3: "Vue"
  // }
  // colorFuntion(){
  //   return "yellow";
  // }
  // alignFunction(){
  //   return "center";
  // }
  // heightFunction(){
  //   return "25px";
  // }
  // colorFunction(){
  //   return "red";
  // }
  // public msg="";
  // addMorningMsg(){
  //   console.log("Good Morning")
  //   this.msg = "Good Morning";
  // }
  // addNightMsg(){
  //   console.log("Good Night")
  //   this.msg = "Good Night";
  // }
  // public count:number = 0;
  // public status="Even";
  // addOne(){
  //   this.count++;
  //   if((this.count%2)==0){
  //     this.status="Even"
  //   }
  //   else{
  //     this.status="Odd"
  //   }
  // }
  // subtractOne(){
  //   this.count--;
  //   if((this.count%2)==0){
  //     this.status="Even";
  //   }
  //   else{
  //     this.status="Odd";
  //   }
  // }
  // public myName:string = "";
  // public state:string = "";
  // check(){
  //   this.isHidden=false;
  //   if((this.count%2)==0){
  //     this.state="Even";
  //   }
  //   else{
  //     this.state="Odd";
  //   }
  // }
  // public isHidden:boolean=true;
  // clear(){
  //   this.isHidden=true;
  //   this.count = 0;
  // }

  // public fruits = [
  //   {"name":"orange","price":200},
  //   {"name":"apple","price":160},
  //   {"name":"grape","price":120},
  //   {"name":"banana","price":80},
  //   {"name":"coconut","price":60},
  //   {"name":"mango","price":180},
  // ]

  constructor(private getApi:ApiCallService){}
  postArray:any = [];
  ngOnInit() {
    this.getApi.getPost().subscribe((response) => {
      this.postArray = response;
      console.log(this.postArray);
    })
  }
}
