import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstWork';
  public heading = 'IT MASTER';
  data = {
    tech1: "Angular",
    tech2: "React",
    tech3: "Vue"
  }
  colorFuntion(){
    return "yellow";
  }
  alignFunction(){
    return "center";
  }
  heightFunction(){
    return "25px";
  }
  colorFunction(){
    return "red";
  }
  public msg="";
  addMorningMsg(){
    console.log("Good Morning")
    this.msg = "Good Morning";
  }
  addNightMsg(){
    console.log("Good Night")
    this.msg = "Good Night";
  }
  public count = 0;
  addOne(){
    this.count++;
    if((this.count%2)==0){
      this.status="Even"
    }
    else{
      this.status="Odd"
    }
  }
  subtractOne(){
    this.count--;
    if((this.count%2)==0){
      this.status="Even"
    }
    else{
      this.status="Odd"
    }
  }
  public status="Even";
}
