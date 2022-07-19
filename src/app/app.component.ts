import { Component } from '@angular/core';
import { ApiCallService } from './api-call.service';
import { FormArray, FormBuilder, FormControl, FormGroup,FormGroupName, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, observable } from 'rxjs';

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

  // constructor(private getApi:ApiCallService){}
  // postArray:any = [];
  // ngOnInit() {
  //   this.getApi.getPost().subscribe((response) => {
  //     this.postArray = response;
  //     console.log(this.postArray);
  //   })
  // }

  // formData = {
  //   inputName:"",
  //   inputEmail:"",
  //   inputPassword:""
  // }
  // onSubmit(): void {
  //   alert(JSON.stringify(this.formData));
  // }

  // FormControl means one html input element
  // FormGroup means group of FormControl

  // constructor(private fb:FormBuilder) {}

  //using FormGroup
  // jobForm = new FormGroup({
  //   inputName: new FormControl(""),
  //   inputEmail: new FormControl(""),
  //   inputPassword: new FormControl("")
  // });

  //using FormBuilder
//   jobForm = this.fb.group({
//       inputName:["",[Validators.required]],
//       inputEmail:[""],
//       inputPassword:[""],
//       moreDetails: this.fb.group({
//         inputPhone:[""],
//         inputDOB:[""]
//       }),
//       skills:this.fb.array([])
//   })

//   get inputName(){
//     return this.jobForm.get("inputName");
//   }

//   get skillForm(){
//     return this.jobForm.get("skills") as FormArray;
//   }

//   preview:string = "";

//   save(){
//     this.preview = JSON.stringify(this.jobForm.value);
//   }

//   addSkill(){
//     this.skillForm.push(
//       this.fb.group({
//         inputProgramLanguage: [""],
//         inputExperienece: [0]
//       })
//     )
//   }

//   removeSkill(index:number){
//     this.skillForm.removeAt(index);
//   }

//   sampleSetValue(){
//     this.jobForm.setValue({
//       inputName:"Naveen",
//       inputEmail:"naveen@g.in",
//       inputPassword:"7878nvs",
//       moreDetails:{
//         inputPhone:"8989898989",
//         inputDOB:"2007-12-09"
//       },
//       skills:[]
//     })
//   }

//   samplePatchValue(){
//     this.jobForm.patchValue({
//       inputName:"Sachin",
//       inputEmail:"sachi@g.in",
//       moreDetails:{
//         inputPhone:"6767673232"
//       },
//       skills:[]
//   })
// }

activeStatus:any = "now";
sta:string = " min ago";
data:any

ngOnInit() {
  this.data = new Observable((observer) => {

    // setTimeout(() => {
    //   observer.next('1 min ago')
    // }, 2000);
    // setTimeout(() => {
    //   observer.next('2 min ago')
    // }, 4000)
    // setTimeout(() => {
    //   observer.next('3 min ago')
    // }, 6000)
    // setTimeout(() => {
    //   observer.next('4 min ago')
    // }, 8000)

    for(let i = 1;i<3;i++){

      setTimeout(() => {
        observer.next(String(i)+this.sta)
      }, (i*2000));

    }

    setTimeout(() => {
      observer.next('3 min ago'),
      observer.complete();
    }, 6000);

  // }).subscribe((res)=>{
  //   this.activeStatus = res;
  // })

  // or
  
  }) 
    this.data.subscribe((res:any)=>{
    this.activeStatus = res;
  })
}

}
