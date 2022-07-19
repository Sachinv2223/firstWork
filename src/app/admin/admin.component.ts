import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onRouteChange(params:any){
    // this means we get /admin/create or /admin/view
    this.router.navigate([params],{relativeTo:this.route})
    //this.router.navigate('admin/create')
  }

  isDirty:boolean = true;

}
